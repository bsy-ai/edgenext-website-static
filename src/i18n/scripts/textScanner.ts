import fs from 'fs-extra';
import * as path from 'path';
import { glob } from 'glob';
import CryptoJS from 'crypto-js';

export interface ScanConfig {
  srcDir: string;
  outputDir: string;
  fileExtensions: string[];
  ignorePatterns: string[];
  ignoreDirs: string[];
}

export interface ExtractedText {
  key: string;
  text: string;
  file: string;
  line: number;
  componentPrefix: string;
  hashKey: string;
}

export class TextScanner {
  private extractedTexts: Map<string, ExtractedText> = new Map();
  
  constructor(private config: ScanConfig) {}

  async scan(): Promise<ExtractedText[]> {
    const files = await this.getFiles();
    console.log(`📁 Found ${files.length} files to scan...`);
    
    // 按文件夹分组显示
    const filesByDir = this.groupFilesByDirectory(files);
    
    for (const [dir, dirFiles] of filesByDir) {
      console.log(`📂 Scanning directory: ${dir}`);
      for (const file of dirFiles) {
        console.log(`  📄 ${path.relative(process.cwd(), file)}`);
        await this.scanFile(file);
      }
    }
    
    return Array.from(this.extractedTexts.values());
  }

  private async getFiles(): Promise<string[]> {
    const patterns = this.config.fileExtensions.map(ext => 
      `${this.config.srcDir}/**/*${ext}`
    );
    
    const allFiles: string[] = [];
    for (const pattern of patterns) {
      const files = await glob(pattern, {
        ignore: [
          ...this.config.ignorePatterns,
          ...this.config.ignoreDirs.map(dir => `${dir}/**`)
        ]
      });
      allFiles.push(...files);
    }
    
    return [...new Set(allFiles)]; // 去重
  }

  private groupFilesByDirectory(files: string[]): Map<string, string[]> {
    const filesByDir = new Map<string, string[]>();
    
    for (const file of files) {
      const dir = path.dirname(file);
      if (!filesByDir.has(dir)) {
        filesByDir.set(dir, []);
      }
      filesByDir.get(dir)!.push(file);
    }
    
    // 按目录名排序
    return new Map([...filesByDir.entries()].sort());
  }

  private async scanFile(filePath: string): Promise<void> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const lines = content.split('\n');
      
      const beforeCount = this.extractedTexts.size;
      
      lines.forEach((line, index) => {
        this.extractTextsFromLine(line, filePath, index + 1);
      });

      // 额外一遍扫描：捕获跨行的 JSX 文本节点（> ... <）
      this.extractTextsFromContent(content, filePath);
      
      const afterCount = this.extractedTexts.size;
      const extractedCount = afterCount - beforeCount;
      
      if (extractedCount > 0) {
        console.log(`    ✅ Extracted ${extractedCount} text(s)`);
      } else {
        console.log(`    ⚪ No texts to translate`);
      }
    } catch (error) {
      console.error(`❌ Error scanning file ${filePath}:`, error);
    }
  }

  private extractTextsFromLine(line: string, filePath: string, lineNumber: number): void {
    // 匹配字符串字面量
    const stringPatterns = [
      // 双引号字符串
      /"([^"\\]|\\.)*"/g,
      // 单引号字符串
      /'([^'\\]|\\.)*'/g,
      // 模板字符串
      /`([^`\\]|\\.)*`/g,
      // JSX文本内容
      />([^<]+)</g
    ];

    stringPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        let text = match[1] || match[0];
        
        // 清理文本
        text = this.cleanText(text);
        
        // 过滤掉不需要翻译的文本
        if (this.shouldTranslate(text)) {
          const keyInfo = this.generateKey(text, filePath);
          this.extractedTexts.set(keyInfo.key, {
            key: keyInfo.key,
            text,
            file: filePath,
            line: lineNumber,
            componentPrefix: keyInfo.componentPrefix,
            hashKey: keyInfo.hashKey
          });
        }
      }
    });
  }

  // 新增：从整段内容中提取可跨行的 JSX 文本（例如标签与文本不在同一行）
  private extractTextsFromContent(content: string, filePath: string): void {
    // 仅匹配成对 JSX 标签包裹的纯文本：<Tag ...> TEXT </Tag>
    // 避免跨越其它尖括号或嵌套元素
    const pairedJsxRegex = /<([A-Za-z][\w.:-]*)[^>]*>\s*([^<{][\s\S]*?)\s*<\/\1>/g;
    let match: RegExpExecArray | null;

    while ((match = pairedJsxRegex.exec(content)) !== null) {
      let text = match[2] || '';
      // 跳过包含子标签或表达式的文本块
      if (text.includes('<') || text.includes('>') || text.includes('{')) {
        continue;
      }

      text = this.cleanText(text);
      if (!this.shouldTranslate(text)) {
        continue;
      }

      const startIndex = match.index;
      const lineNumber = content.substring(0, startIndex).split('\n').length;

      const keyInfo = this.generateKey(text, filePath);
      this.extractedTexts.set(keyInfo.key, {
        key: keyInfo.key,
        text,
        file: filePath,
        line: lineNumber,
        componentPrefix: keyInfo.componentPrefix,
        hashKey: keyInfo.hashKey
      });
    }
  }

  private cleanText(text: string): string {
    // 移除引号
    text = text.replace(/^["'`]|["'`]$/g, '');
    // 移除JSX标签
    text = text.replace(/^>|<$/g, '');
    // 清理多余空白
    text = text.trim();
    
    return text;
  }

  private shouldTranslate(text: string): boolean {
    // 过滤条件
    const filters = [
      text.length < 2, // 太短
      text.length > 2000, // 太长（放宽，覆盖长段落）
      /^[0-9\s\-_.,!@#$%^&*()+=[\]{}|;:'"<>?/~`]*$/.test(text), // 只包含数字和符号
      /^[a-zA-Z\s\-_.,!@#$%^&*()+=[\]{}|;:'"<>?/~`]*$/.test(text) && text.length < 4, // 纯英文且很短
      /^(className|style|id|key|type|placeholder|alt|title|href|src|onClick|onChange|onSubmit)$/.test(text), // 属性名
      /^[A-Z_][A-Z0-9_]*$/.test(text), // 常量名
      /^[a-z][a-zA-Z0-9]*$/.test(text) && text.length < 6, // 可能是变量名
      /^(div|span|p|h1|h2|h3|h4|h5|h6|a|img|input|button|form|table|tr|td|th|ul|ol|li|nav|header|footer|main|section|article)$/.test(text), // HTML标签
      /^\w+\.\w+/.test(text), // 包含点的字符串（可能是类名或方法名）
      /^\/.*/.test(text), // 路径
      /^https?:\/\//.test(text), // URL
      /^[0-9-+]+$/.test(text), // 纯数字
      /^\$\{.*\}$/.test(text), // 模板变量
      // 避免误把 TypeScript 泛型/联合类型当作 JSX 文本（例如 "> string | null <"）
      /\|/.test(text) && /^[\w\s|<>,:?]+$/.test(text),
      /\b(string|number|boolean|null|undefined|never|unknown|any|void|HTMLElement|Element|Node)\b/.test(text)
    ];

    return !filters.some(filter => filter);
  }

  private generateKey(text: string, filePath: string): { key: string; componentPrefix: string; hashKey: string } {
    // 1. 生成组件前缀：文件路径前缀
    const componentPrefix = this.generateComponentPrefix(filePath);
    
    // 2. 生成内容哈希短键
    const hashKey = this.generateHashKey(text);
    
    // 3. 组合完整键名
    const key = `${componentPrefix}.${hashKey}`;
    
    return { key, componentPrefix, hashKey };
  }

  private generateComponentPrefix(filePath: string): string {
    // 去除项目根目录前缀
    const relativePath = path.relative(process.cwd(), filePath);
    
    // 去掉文件扩展名
    const pathWithoutExt = path.parse(relativePath);
    const dirPath = pathWithoutExt.dir;
    const fileName = pathWithoutExt.name;
    
    // 组合路径和文件名
    const fullPath = dirPath ? path.join(dirPath, fileName) : fileName;
    
    // 将路径分隔符替换为双下划线
    return fullPath.replace(/[\/\\]/g, '__');
  }

  private generateHashKey(text: string): string {
    // 计算MD5哈希值并取前8位作为短键
    const hash = CryptoJS.MD5(text).toString();
    return hash.substring(0, 8);
  }

  async generateLanguageFile(texts: ExtractedText[], outputPath: string): Promise<void> {
    const translations: Record<string, unknown> = {};
    
    texts.forEach(({ text, componentPrefix, hashKey }) => {
      // 使用新的键名格式：componentPrefix.hashKey
      if (!translations[componentPrefix]) {
        translations[componentPrefix] = {};
      }
      (translations[componentPrefix] as Record<string, unknown>)[hashKey] = text;
    });

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, JSON.stringify(translations, null, 2));
  }
}

// 默认配置
export const defaultScanConfig: ScanConfig = {
  srcDir: 'src',
  outputDir: 'src/i18n/locales',
  fileExtensions: ['.tsx', '.ts', '.jsx', '.js'],
  ignorePatterns: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/*.test.*',
    '**/*.spec.*',
    '**/test/**',
    '**/tests/**'
  ],
  ignoreDirs: [
    'node_modules',
    'dist',
    'build',
    '.git',
    '.vscode',
    'public',
    'src/i18n/scripts',
    'src/i18n/services'
  ]
};
