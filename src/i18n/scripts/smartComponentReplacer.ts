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

  // 统一文本：折叠所有空白为单个空格并去除首尾空白，解决 CR/LF 与缩进差异
  private normalizeText(text: string): string {
    return (text ?? '').replace(/\s+/g, ' ').trim();
  }

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
        // 保存原文映射
        result[value] = fullKey;
        // 保存归一化后的映射，以匹配跨行/不同换行/缩进差异
        const normalized = this.normalizeText(value);
        if (!(normalized in result)) {
          result[normalized] = fullKey;
        }
        // 保存换行差异映射（CRLF/LF 互转）
        const lfVariant = value.replace(/\r\n/g, '\n');
        if (!(lfVariant in result)) {
          result[lfVariant] = fullKey;
        }
        const crlfVariant = value.replace(/\n/g, '\r\n');
        if (!(crlfVariant in result)) {
          result[crlfVariant] = fullKey;
        }
      } else if (typeof value === 'object' && value !== null) {
        this.flattenTranslations(value as Record<string, unknown>, fullKey, result);
      }
    }
  }

  private generateReplaceConfig(extractedTexts: any[], translations: Record<string, string>): ComponentReplaceConfig {
    const replaceTranslations: Record<string, string> = {};

    // 0) 先用已存在的翻译表（来自语言文件）建立全量映射：原文 -> key
    for (const [original, fullKey] of Object.entries(translations)) {
      const normalized = this.normalizeText(original);
      const lfVariant = original.replace(/\r\n/g, '\n');
      const crlfVariant = original.replace(/\n/g, '\r\n');

      replaceTranslations[original] = fullKey;
      if (!(normalized in replaceTranslations)) replaceTranslations[normalized] = fullKey;
      if (!(lfVariant in replaceTranslations)) replaceTranslations[lfVariant] = fullKey;
      if (!(crlfVariant in replaceTranslations)) replaceTranslations[crlfVariant] = fullKey;
    }

    // 1) 然后为扫描到但翻译表中尚不存在的文本生成键（使用提取时生成的 key）
    extractedTexts.forEach(({ text, key }) => {
      const normalized = this.normalizeText(text);
      const lfVariant = text.replace(/\r\n/g, '\n');
      const crlfVariant = text.replace(/\n/g, '\r\n');

      const existingKey =
      replaceTranslations[text] ||
      replaceTranslations[normalized] ||
      replaceTranslations[lfVariant] ||
      replaceTranslations[crlfVariant];

      const finalKey = existingKey || key;

      // 写入/补全映射
      if (!(text in replaceTranslations)) replaceTranslations[text] = finalKey;
      if (!(normalized in replaceTranslations)) replaceTranslations[normalized] = finalKey;
      if (!(lfVariant in replaceTranslations)) replaceTranslations[lfVariant] = finalKey;
      if (!(crlfVariant in replaceTranslations)) replaceTranslations[crlfVariant] = finalKey;
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
        JSXElement: (path: any) => {
          const node = path.node;
          const children = node.children || [];
          if (!children.length) return;

          // 仅处理纯文本子节点的元素（允许空表达式容器；不允许嵌套标签或有内容的表达式）
          const allText = children.every((ch: any) => {
            if (t.isJSXText(ch)) return true;
            if (t.isJSXExpressionContainer(ch)) {
              const expr: any = (ch as any).expression;
              return t.isJSXEmptyExpression(expr);
            }
            return false;
          });
          if (!allText) return;

          // 保留原始换行序列，随后尝试多种归一化；先按拼接再进行多版本匹配
          const combinedRaw = (children as any[]).
          map((ch: any) => t.isJSXText(ch) ? ch.value : '').
          join('');
          const combinedTrimmed = combinedRaw.trim();
          if (!combinedTrimmed) return;

          const normalized = this.normalizeText(combinedTrimmed);
          const lfVariant = combinedTrimmed.replace(/\r\n/g, '\n');
          const crlfVariant = combinedTrimmed.replace(/\n/g, '\r\n');
          const key =
          translations[combinedTrimmed] ||
          translations[normalized] ||
          translations[lfVariant] ||
          translations[crlfVariant];
          if (key) {
            // 用单个表达式替换整个文本子节点集合
            (node as any).children = [t.jsxExpressionContainer(getTranslateCall(key))];
            replacements++;
            path.skip();
          }
        },
        JSXText: (path: any) => {
          const raw = path.node.value;
          const trimmed = raw.trim();
          if (!trimmed) return;
          const normalized = this.normalizeText(trimmed);
          // 跳过包含 easing 关键词的文本，避免误替换
          const ban = /\b(linear|ease|easeIn|easeOut|easeInOut|spring|tween|线性)\b/i;
          if (ban.test(trimmed)) return;
          const key = translations[trimmed] || translations[normalized];
          if (key) {
            path.replaceWith(t.jsxExpressionContainer(getTranslateCall(key)));
            replacements++;
          }
        },
        StringLiteral: (path: any) => {
          const parent = path.parent;
          // 判断是否在 JSX 上下文
          const isInJsx = typeof (path as any).findParent === 'function' && (path as any).findParent((p: any) => t.isJSXElement(p.node) || (t as any).isJSXFragment?.(p.node));

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

          // 仅允许在 JSX 属性值中替换（白名单属性）
          if (isInJsx && t.isJSXAttribute(parent) && parent.value === path.node) {
            // 仅白名单属性允许替换
            const attrName = (parent.name as any)?.name as string;
            const allowedAttrNames = new Set(['alt', 'title', 'aria-label', 'placeholder', 'description', 'buttonText', 'subtitle', 'label', 'heading', 'text', 'content']);
            if (!allowedAttrNames.has(attrName)) {
              return;
            }
            const normalized = this.normalizeText(path.node.value);
            // 跳过 easing 相关文本
            const ban = /\b(linear|ease|easeIn|easeOut|easeInOut|spring|tween|线性)\b/i;
            if (ban.test(path.node.value)) return;
            const key = translations[path.node.value] || translations[normalized];
            if (key) {
              parent.value = t.jsxExpressionContainer(getTranslateCall(key));
              path.skip();
              replacements++;
            }
            return;
          }
          
          // 非 JSX 情况：对白名单对象属性进行替换（例如 title/description/buttonText 等配置文案）
          if (!isInJsx && t.isObjectProperty(parent) && (parent as t.ObjectProperty).value === path.node) {
            const keyNode: any = (parent as t.ObjectProperty).key;
            const keyName = (t.isIdentifier(keyNode) && keyNode.name) || (t.isStringLiteral(keyNode) && keyNode.value) || undefined;
            const allowedPropNames = new Set(['title','description','buttonText','subtitle','label','heading','text','content']);
            if (!keyName || !allowedPropNames.has(keyName)) {
              return;
            }
            const rawVal = path.node.value as string;
            // 过滤 URL/路径/图片/样式/easing 等
            const isUrlLike = /^(https?:\/\/|\/)\S+/i.test(rawVal) || /\.(png|jpe?g|webp|svg)$/i.test(rawVal);
            const hasPathChars = /[\/\\]/.test(rawVal);
            const ban = /\b(linear|ease|easeIn|easeOut|easeInOut|spring|tween|className|style|src)\b/i;
            if (isUrlLike || hasPathChars || ban.test(rawVal)) {
              return;
            }
            const normalized = this.normalizeText(rawVal);
            const key = translations[rawVal] || translations[normalized];
            if (key) {
              path.replaceWith(getTranslateCall(key));
              replacements++;
            }
            return;
          }
          
          // 其他上下文不替换
          return;
        },
        TemplateLiteral: (path: any) => {
          // 仅允许在 JSX 属性白名单中替换模板字面量（极少见）
          const parent = path.parent;
          if (!(t.isJSXAttribute(parent))) return;
          const attrName = (parent.name as any)?.name as string;
          const allowedAttrNames = new Set(['alt', 'title', 'aria-label', 'placeholder', 'description', 'buttonText', 'subtitle', 'label', 'heading', 'text', 'content']);
          if (!allowedAttrNames.has(attrName)) return;
          if (path.node.expressions.length === 0 && path.node.quasis.length === 1) {
            const text = path.node.quasis[0].value.cooked || '';
            const normalized = this.normalizeText(text);
            const key = translations[text] || translations[normalized];
            if (key) {
              parent.value = t.jsxExpressionContainer(getTranslateCall(key));
              path.skip();
              replacements++;
            }
          }
        },
        // 处理对象字面量中的数组字段，例如 features: ["..."]
        ObjectProperty: (path: any) => {
          // 仅处理白名单键
          const keyNode: any = path.node.key;
          const keyName = (t.isIdentifier(keyNode) && keyNode.name) || (t.isStringLiteral(keyNode) && keyNode.value) || undefined;
          const allowedArrayPropNames = new Set(['features', 'bullets', 'points', 'items', 'benefits']);
          if (!keyName || !allowedArrayPropNames.has(keyName)) return;

          // 值必须是数组
          if (!t.isArrayExpression(path.node.value)) return;
          const arr = path.node.value as any;
          let changed = false;
          arr.elements = (arr.elements || []).map((el: any) => {
            if (t.isStringLiteral(el)) {
              const raw = el.value as string;
              // 过滤 URL/路径/图片/样式/easing
              const isUrlLike = /^(https?:\/\/|\/)\S+/i.test(raw) || /\.(png|jpe?g|webp|svg)$/i.test(raw);
              const hasPathChars = /[\/\\]/.test(raw);
              const ban = /\b(linear|ease|easeIn|easeOut|easeInOut|spring|tween|className|style|src)\b/i;
              if (isUrlLike || hasPathChars || ban.test(raw)) return el;
              const normalized = (raw || '').replace(/\s+/g, ' ').trim();
              const key = translations[raw] || translations[normalized];
              if (key) {
                changed = true;
                return t.callExpression(
                  t.memberExpression(t.identifier('window'), t.identifier('t')),
                  [t.stringLiteral(key)]
                );
              }
            }
            return el;
          });
          if (changed) {
            replacements++;
          }
        }
      });

      const generateFn: any = (generateImport as any)?.default ?? generateImport as any;
      const output = generateFn(ast as any, { retainLines: true }, content);
      let newContent = output.code;

      // Cleanup legacy hooks/imports
      newContent = this.cleanupIncorrectHooks(newContent);
      newContent = this.removeUseTranslationImports(newContent);
      newContent = this.cleanupMotionEasing(newContent);

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
        return `import { ${parts.join(", ")} } from 'react-i18next';`;
      }
      return '';
    });

    return content;
  }

  // 清理被误替换的 framer-motion easing 设置
  private cleanupMotionEasing(content: string): string {
    // 将 ease: window.t("...") 或 ease: "线性" 统一还原为合法的 'linear'
    const easeWindowT = /ease\s*:\s*window\.t\([^)]*\)/g;
    const easeChinese = /ease\s*:\s*["'](?:线性)["']/g;
    content = content.replace(easeWindowT, 'ease: "linear"');
    content = content.replace(easeChinese, 'ease: "linear"');
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
        targetLanguages: (process.env.I18N_TARGET_LANGUAGES || 'zh').split(",").map((lang) => lang.trim()),
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
    console.log(`🌍 Target languages: ${config.targetLanguages.join(", ")}`);

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