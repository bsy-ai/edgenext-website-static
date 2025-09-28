#!/usr/bin/env node

import fs from 'fs-extra';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { TextScanner, defaultScanConfig, ExtractedText } from './textScanner';
import { BaiduTranslateService, createBaiduTranslateService } from '../services/baiduTranslate';

interface AutoTranslateConfig {
  baiduAppId: string;
  baiduAppKey: string;
  sourceLanguage: string;
  targetLanguages: string[];
  scanConfig?: Partial<typeof defaultScanConfig>;
}

class AutoTranslator {
  private scanner: TextScanner;
  private translateService: BaiduTranslateService;
  private outputDir: string;
  
  constructor(private config: AutoTranslateConfig) {
    const scanConfig = { ...defaultScanConfig, ...config.scanConfig };
    this.scanner = new TextScanner(scanConfig);
    this.outputDir = scanConfig.outputDir;
    
    this.translateService = createBaiduTranslateService({
      appId: config.baiduAppId,
      appKey: config.baiduAppKey,
      from: config.sourceLanguage,
      to: config.targetLanguages[0] // 默认目标语言
    });
  }

  async run(): Promise<void> {
    console.log('🔍 Starting text scanning...');
    
    // 1. 扫描文本
    const extractedTexts = await this.scanner.scan();
    console.log(`📝 Found ${extractedTexts.length} text strings to translate`);
    
    if (extractedTexts.length === 0) {
      console.log('✅ No texts found to translate');
      return;
    }

    // 2. 生成源语言文件
    await this.generateSourceLanguageFile(extractedTexts);
    
    // 3. 翻译到目标语言
    for (const targetLang of this.config.targetLanguages) {
      console.log(`🌍 Translating to ${targetLang}...`);
      await this.translateToLanguage(extractedTexts, targetLang);
    }
    
    console.log('✅ Translation completed!');
  }

  private async generateSourceLanguageFile(texts: ExtractedText[]): Promise<void> {
    const outputPath = path.join(this.outputDir, `${this.config.sourceLanguage}.json`);
    await this.scanner.generateLanguageFile(texts, outputPath);
    console.log(`📄 Generated source language file: ${outputPath}`);
  }

  private async translateToLanguage(texts: ExtractedText[], targetLang: string): Promise<void> {
    const outputPath = path.join(this.outputDir, `${targetLang}.json`);
    
    // 检查是否已存在翻译文件
    let existingTranslations: Record<string, unknown> = {};
    if (await fs.pathExists(outputPath)) {
      existingTranslations = JSON.parse(await fs.readFile(outputPath, 'utf-8'));
      console.log(`📖 Found existing translations for ${targetLang}`);
    }

    // 找出需要翻译的文本
    const textsToTranslate = texts.filter(text => 
      !this.hasTranslation(existingTranslations, text.key)
    );

    if (textsToTranslate.length === 0) {
      console.log(`✅ All texts already translated for ${targetLang}`);
      return;
    }

    console.log(`🔄 Translating ${textsToTranslate.length} new texts for ${targetLang}...`);

    // 批量翻译
    console.log(`🔄 Starting translation of ${textsToTranslate.length} texts...`);
    const translationResults = await this.translateService.translateBatch(
      textsToTranslate.map(t => t.text),
      targetLang,
      this.config.sourceLanguage
    );
    console.log(`✅ Translation completed for ${translationResults.length} texts`);

    // 合并翻译结果
    const newTranslations = { ...existingTranslations };
    
    textsToTranslate.forEach((text, index) => {
      const translatedText = translationResults[index]?.translatedText || text.text;
      this.setTranslation(newTranslations, text.key, translatedText);
    });

    // 保存翻译文件
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, JSON.stringify(newTranslations, null, 2));
    
    console.log(`💾 Saved translations to ${outputPath}`);
  }

  private hasTranslation(translations: Record<string, unknown>, key: string): boolean {
    const [componentPrefix, hashKey] = key.split('.');
    
    if (!componentPrefix || !hashKey) {
      return false;
    }
    
    const component = translations[componentPrefix];
    if (!component || typeof component !== 'object') {
      return false;
    }
    
    const translation = (component as Record<string, unknown>)[hashKey];
    return typeof translation === 'string' && translation.length > 0;
  }

  private setTranslation(translations: Record<string, unknown>, key: string, value: string): void {
    const [componentPrefix, hashKey] = key.split('.');
    
    if (!componentPrefix || !hashKey) {
      return;
    }
    
    if (!translations[componentPrefix] || typeof translations[componentPrefix] !== 'object') {
      translations[componentPrefix] = {};
    }
    
    (translations[componentPrefix] as Record<string, unknown>)[hashKey] = value;
  }
}

// 命令行运行
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: node autoTranslate.js [options]

Options:
  --appid <id>       Baidu Translate App ID (required)
  --appkey <key>     Baidu Translate App Key (required)
  --source <lang>    Source language code (default: en)
  --target <langs>   Target language codes, comma separated (default: zh)
  --help, -h         Show this help message

Environment Variables:
  BAIDU_TRANSLATE_APP_ID    Baidu Translate App ID
  BAIDU_TRANSLATE_APP_KEY   Baidu Translate App Key

Example:
  node autoTranslate.js --appid your_app_id --appkey your_app_key --source en --target zh,ja,ko
    `);
    return;
  }

  const config: AutoTranslateConfig = {
    baiduAppId: getArgValue(args, '--appid') || process.env.BAIDU_TRANSLATE_APP_ID || '',
    baiduAppKey: getArgValue(args, '--appkey') || process.env.BAIDU_TRANSLATE_APP_KEY || '',
    sourceLanguage: getArgValue(args, '--source') || 'en',
    targetLanguages: (getArgValue(args, '--target') || 'zh').split(',').map(lang => lang.trim()),
  };

  if (!config.baiduAppId || !config.baiduAppKey) {
    console.error('❌ Error: Baidu Translate App ID and App Key are required');
    console.log('Use --appid and --appkey options or set environment variables');
    process.exit(1);
  }

  const translator = new AutoTranslator(config);
  
  try {
    await translator.run();
  } catch (error) {
    console.error('❌ Translation failed:', error);
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

export { AutoTranslator };
export type { AutoTranslateConfig };
