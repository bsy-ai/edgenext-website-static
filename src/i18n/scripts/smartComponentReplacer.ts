#!/usr/bin/env node

import fs from 'fs-extra';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { TextScanner } from './textScanner';
import { parse } from '@babel/parser';
import traverseImport from '@babel/traverse';
import generateImport from '@babel/generator';
import * as t from '@babel/types';

interface SmartReplaceConfig {
  srcDir: string;
  localesDir: string;
  sourceLanguage: string;
  targetLanguages: string[];
  fileExtensions: string[];
  ignorePatterns: string[];
  ignoreDirs: string[];
}

interface ComponentReplaceConfig {
  srcDir: string;
  fileExtensions: string[];
  ignorePatterns: string[];
  translations: Record<string, string>;
}

class SmartComponentReplacer {
  constructor(private config: SmartReplaceConfig) {}

  async smartReplace(): Promise<void> {
    console.log('🤖 Starting smart component text replacement...');

    // 1. 扫描组件中的文本
    const scanner = new TextScanner({
      srcDir: this.config.srcDir,
      outputDir: this.config.localesDir,
      fileExtensions: this.config.fileExtensions,
      ignorePatterns: this.config.ignorePatterns,
      ignoreDirs: this.config.ignoreDirs
    });

    const extractedTexts = await scanner.scan();
    console.log(`📝 Found ${extractedTexts.length} text strings in components`);

    if (extractedTexts.length === 0) {
      console.log('✅ No texts found to replace');
      return;
    }

    // 2. 读取现有翻译文件
    const translations = await this.loadTranslations();

    // 3. 生成替换配置
    const replaceConfig = this.generateReplaceConfig(extractedTexts, translations);

    // 4. 执行替换
    await this.replaceComponentTexts(replaceConfig);

    console.log('✅ Smart component replacement completed!');
  }

  private async loadTranslations(): Promise<Record<string, string>> {
    const translations: Record<string, string> = {};

    // 优先加载源语言（通常是 en.json），便于用英文原文复用已有 key
    const sourceFilePath = path.join(this.config.localesDir, `${this.config.sourceLanguage}.json`);
    if (await fs.pathExists(sourceFilePath)) {
      const sourceTranslations = JSON.parse(await fs.readFile(sourceFilePath, 'utf-8'));
      this.flattenTranslations(sourceTranslations, '', translations);
    }

    // 再加载目标语言，允许通过译文反查 key（少见场景）
    for (const lang of this.config.targetLanguages) {
      const filePath = path.join(this.config.localesDir, `${lang}.json`);

      if (await fs.pathExists(filePath)) {
        const langTranslations = JSON.parse(await fs.readFile(filePath, 'utf-8'));
        this.flattenTranslations(langTranslations, '', translations);
      }
    }

    return translations;
  }

  private flattenTranslations(obj: Record<string, unknown>, prefix: string, result: Record<string, string>): void {
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
        result[value] = fullKey;
      } else if (typeof value === 'object' && value !== null) {
        this.flattenTranslations(value as Record<string, unknown>, fullKey, result);
      }
    }
  }

  private generateReplaceConfig(extractedTexts: any[], translations: Record<string, string>): ComponentReplaceConfig {
    const replaceTranslations: Record<string, string> = {};

    // 为每个提取的文本生成替换映射
    extractedTexts.forEach(({ text, key }) => {
      // 如果翻译文件中已经有这个文本的翻译，使用现有的key
      if (translations[text]) {
        replaceTranslations[text] = translations[text];
      } else {
        // 否则使用生成的key
        replaceTranslations[text] = key;
      }
    });

    return {
      srcDir: this.config.srcDir,
      fileExtensions: this.config.fileExtensions,
      ignorePatterns: this.config.ignorePatterns,
      translations: replaceTranslations
    };
  }

  async generateReplaceConfigFile(): Promise<void> {
    console.log('🔍 Generating component replacement configuration...');

    // 扫描文本
    const scanner = new TextScanner({
      srcDir: this.config.srcDir,
      outputDir: this.config.localesDir,
      fileExtensions: this.config.fileExtensions,
      ignorePatterns: this.config.ignorePatterns,
      ignoreDirs: this.config.ignoreDirs
    });

    const extractedTexts = await scanner.scan();
    const translations = await this.loadTranslations();

    // 生成配置
    const replaceConfig = this.generateReplaceConfig(extractedTexts, translations);

    // 保存配置文件
    const configPath = path.join(process.cwd(), 'componentReplacements.json');
    await fs.writeFile(configPath, JSON.stringify(replaceConfig, null, 2));

    console.log(`📄 Generated component replacement config: ${configPath}`);
    console.log(`Found ${Object.keys(replaceConfig.translations).length} text replacements`);
  }

  private async replaceComponentTexts(config: ComponentReplaceConfig): Promise<void> {
    console.log('🔄 Starting component text replacement...');

    // 获取所有需要处理的文件
    const files = await this.getFiles(config);
    console.log(`📁 Found ${files.length} files to process`);

    let processedFiles = 0;
    let totalReplacements = 0;

    for (const file of files) {
      const replacements = await this.replaceFileTexts(file, config.translations);
      if (replacements > 0) {
        processedFiles++;
        totalReplacements += replacements;
        console.log(`✅ ${path.relative(process.cwd(), file)}: ${replacements} replacements`);
      }
    }

    console.log(`🎉 Component replacement completed!`);
    console.log(`📊 Processed ${processedFiles} files with ${totalReplacements} total replacements`);
  }

  private async getFiles(config: ComponentReplaceConfig): Promise<string[]> {
    const patterns = config.fileExtensions.map((ext) =>
    `${config.srcDir}/**/*${ext}`
    );

    const allFiles: string[] = [];
    for (const pattern of patterns) {
      const files = await glob(pattern, {
        ignore: config.ignorePatterns
      });
      allFiles.push(...files);
    }

    return [...new Set(allFiles)]; // 去重
  }

  private async replaceFileTexts(filePath: string, translations: Record<string, string>): Promise<number> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      let replacements = 0;

      let ast;
      try {
        ast = parse(content, {
          sourceType: 'module',
          plugins: ['typescript', 'jsx']
        });
      } catch (parseError) {
        console.error(`❌ Failed to parse ${filePath}:`, parseError);
        return 0;
      }

      const getTranslateCall = (key: string) =>
      t.callExpression(
        t.memberExpression(t.identifier('window'), t.identifier('t')),
        [t.stringLiteral(key)]
      );

      const traverseFn: any = (traverseImport as any)?.default ?? traverseImport as any;
      traverseFn(ast, {
        JSXText: (path: any) => {
          const raw = path.node.value;
          const trimmed = raw.trim();
          if (!trimmed) return;
          const key = translations[trimmed];
          if (key) {
            path.replaceWith(t.jsxExpressionContainer(getTranslateCall(key)));
            replacements++;
          }
        },
        StringLiteral: (path: any) => {
          const parent = path.parent;

          // Skip if this literal is used as an object key
          if ((t.isObjectProperty(parent) || t.isObjectMethod(parent)) && (parent as t.ObjectProperty | t.ObjectMethod).key === path.node && !(parent as t.ObjectProperty | t.ObjectMethod).computed) {
            return;
          }

          // Skip import/export related literals
          if (
          t.isImportDeclaration(parent) ||
          t.isExportDeclaration(parent) ||
          t.isImportSpecifier(parent) ||
          t.isExportSpecifier(parent) ||
          t.isImportDefaultSpecifier(parent) ||
          t.isImportNamespaceSpecifier(parent))
          {
            return;
          }

          // JSX attribute value
          if (t.isJSXAttribute(parent) && parent.value === path.node) {
            const key = translations[path.node.value];
            if (key) {
              parent.value = t.jsxExpressionContainer(getTranslateCall(key));
              path.skip();
              replacements++;
            }
            return;
          }

          const key = translations[path.node.value];
          if (key) {
            path.replaceWith(getTranslateCall(key));
            replacements++;
          }
        },
        TemplateLiteral: (path: any) => {
          if (path.node.expressions.length === 0 && path.node.quasis.length === 1) {
            const text = path.node.quasis[0].value.cooked || '';
            const key = translations[text];
            if (key) {
              path.replaceWith(getTranslateCall(key));
              replacements++;
            }
          }
        }
      });

      const generateFn: any = (generateImport as any)?.default ?? generateImport as any;
      const output = generateFn(ast as any, { retainLines: true }, content);
      let newContent = output.code;

      // Cleanup legacy hooks/imports
      newContent = this.cleanupIncorrectHooks(newContent);
      newContent = this.removeUseTranslationImports(newContent);

      if (newContent !== content) {
        await fs.writeFile(filePath, newContent, 'utf-8');
      }

      return replacements;
    } catch (error) {
      console.error(`❌ Error processing file ${filePath}:`, error);
      return 0;
    }
  }

  private cleanupIncorrectHooks(content: string): string {
    // 清理所有 useTranslation hooks（不再需要）
    const lines = content.split('\n');
    const cleanedLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // 移除所有 useTranslation hook 行
      if (trimmedLine === 'const { t } = useTranslation();') {
        console.log(`🧹 Removing useTranslation hook at line ${i + 1} (using global window.t instead)`);
        // 跳过该行
      } else {
        cleanedLines.push(line);
      }
    }

    return cleanedLines.join('\n');
  }

  private removeUseTranslationImports(content: string): string {
    // 移除 useTranslation 导入
    const importRegex = /import\s*\{\s*useTranslation\s*\}\s*from\s*['"]react-i18next['"];?\s*\n?/g;
    content = content.replace(importRegex, '');

    // 如果有混合导入，只移除 useTranslation 部分
    const mixedImportRegex = /import\s*\{\s*([^}]*),?\s*useTranslation\s*,?\s*([^}]*)\s*\}\s*from\s*['"]react-i18next['"];?/g;
    content = content.replace(mixedImportRegex, (_, before, after) => {
      const parts = [before, after].filter((part) => part && part.trim());
      if (parts.length > 0) {
        return `import { ${parts.join(', ')} } from 'react-i18next';`;
      }
      return '';
    });

    return content;
  }

}

// 命令行运行
async function main() {
  console.log('🚀 Starting smart component replacer...');
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Smart Component Text Replacer Tool

Usage: node smartComponentReplacer.js [options]

Options:
  --config <file>    Path to smart-replace config file
  --generate         Generate replacement config file only
  --help, -h         Show this help message

Environment Variables:
  I18N_SOURCE_LANGUAGE    Source language code (default: en)
  I18N_TARGET_LANGUAGES   Target language codes, comma separated (default: zh)

Example smart-replace config file (smartReplace.config.json):
{
  "srcDir": "src",
  "localesDir": "src/i18n/locales",
  "sourceLanguage": "en",
  "targetLanguages": ["zh"],
  "fileExtensions": [".tsx", ".ts", ".jsx", ".js"],
  "ignorePatterns": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/*.test.*",
    "**/*.spec.*"
  ],
  "ignoreDirs": [
    "node_modules",
    "dist",
    "build",
    ".git",
    "src/i18n/scripts",
    "src/i18n/services"
  ]
}

This tool will automatically:
1. Scan components for text strings
2. Generate translation keys
3. Replace text with t() function calls
4. Add useTranslation import and hook
    `);
    return;
  }

  const configPath = getArgValue(args, '--config') || 'smartReplace.config.json';
  const generateOnly = args.includes('--generate');

  try {
    let config: SmartReplaceConfig;

    console.log('📋 Loading configuration...');

    if (await fs.pathExists(configPath)) {
      console.log(`📄 Found config file: ${configPath}`);
      config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
    } else {
      console.log('📄 Using default configuration');
      // 使用默认配置
      config = {
        srcDir: 'src',
        localesDir: 'src/i18n/locales',
        sourceLanguage: process.env.I18N_SOURCE_LANGUAGE || 'en',
        targetLanguages: (process.env.I18N_TARGET_LANGUAGES || 'zh').split(',').map((lang) => lang.trim()),
        fileExtensions: ['.tsx', '.ts', '.jsx', '.js'],
        ignorePatterns: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.test.*',
        '**/*.spec.*'],

        ignoreDirs: [
        'node_modules',
        'dist',
        'build',
        '.git',
        'src/i18n/scripts',
        'src/i18n/services']

      };
    }

    const smartReplacer = new SmartComponentReplacer(config);

    console.log('🔧 Configuration loaded successfully');
    console.log(`📁 Source directory: ${config.srcDir}`);
    console.log(`🌍 Target languages: ${config.targetLanguages.join(', ')}`);

    if (generateOnly) {
      console.log('📄 Generating replacement config file...');
      await smartReplacer.generateReplaceConfigFile();
    } else {
      console.log('🔄 Starting smart replacement...');
      await smartReplacer.smartReplace();
    }
  } catch (error) {
    console.error('❌ Smart component replacement failed:', error);
    process.exit(1);
  }
}

function getArgValue(args: string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  return index !== -1 && index + 1 < args.length ? args[index + 1] : undefined;
}

// 仅当作为脚本直接运行时执行 main（兼容 Windows 路径）
try {
  const thisFile = path.resolve(fileURLToPath(import.meta.url));
  const entryFile = path.resolve(process.argv[1] || '');
  if (thisFile === entryFile) {
    main().catch(console.error);
  }
} catch {
  // 无法判断时，尝试执行一次
  main().catch(console.error);
}

export { SmartComponentReplacer };
export type { SmartReplaceConfig };