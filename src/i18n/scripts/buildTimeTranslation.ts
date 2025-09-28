#!/usr/bin/env node

import fs from 'fs-extra';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { AutoTranslator, AutoTranslateConfig } from './autoTranslate';

/**
 * 构建时翻译脚本
 * 在构建过程中自动扫描和翻译文本
 */
class BuildTimeTranslation {
  private configPath: string;
  
  constructor() {
    this.configPath = path.join(process.cwd(), 'i18n.config.json');
  }

  async run(): Promise<void> {
    console.log('🚀 Starting build-time translation...');
    
    // 1. 加载配置
    const config = await this.loadConfig();
    
    // 2. 检查配置
    if (!this.validateConfig(config)) {
      console.error('❌ Invalid configuration. Skipping translation.');
      return;
    }
    
    // 3. 运行翻译
    const translator = new AutoTranslator(config);
    await translator.run();
    
    console.log('✅ Build-time translation completed!');
  }

  private async loadConfig(): Promise<AutoTranslateConfig | null> {
    try {
      if (await fs.pathExists(this.configPath)) {
        console.log(`📋 Loading config from ${this.configPath}`);
        return JSON.parse(await fs.readFile(this.configPath, 'utf-8'));
      } else {
        console.log('📋 Using environment variables for configuration');
        return this.getConfigFromEnv();
      }
    } catch (error) {
      console.error('❌ Failed to load configuration:', error);
      return null;
    }
  }

  private getConfigFromEnv(): AutoTranslateConfig {
    return {
      baiduAppId: process.env.BAIDU_TRANSLATE_APP_ID || '',
      baiduAppKey: process.env.BAIDU_TRANSLATE_APP_KEY || '',
      sourceLanguage: process.env.I18N_SOURCE_LANGUAGE || 'en',
      targetLanguages: (process.env.I18N_TARGET_LANGUAGES || 'zh').split(',').map(lang => lang.trim()),
    };
  }

  private validateConfig(config: AutoTranslateConfig | null): config is AutoTranslateConfig {
    if (!config) {
      return false;
    }

    if (!config.baiduAppId || !config.baiduAppKey) {
      console.warn('⚠️  Baidu Translate credentials not configured. Translation will be skipped.');
      return false;
    }

    return true;
  }

  async generateConfigTemplate(): Promise<void> {
    const template: AutoTranslateConfig = {
      baiduAppId: "YOUR_BAIDU_APP_ID",
      baiduAppKey: "YOUR_BAIDU_APP_KEY",
      sourceLanguage: "en",
      targetLanguages: ["zh", "ja", "ko"],
      scanConfig: {
        srcDir: "src",
        outputDir: "src/i18n/locales",
        fileExtensions: [".tsx", ".ts", ".jsx", ".js"],
        ignorePatterns: [
          "**/node_modules/**",
          "**/dist/**",
          "**/build/**",
          "**/*.test.*",
          "**/*.spec.*"
        ],
        ignoreDirs: [
          "node_modules",
          "dist",
          "build",
          ".git",
          "public",
          "src/i18n/scripts",
          "src/i18n/services"
        ]
      }
    };

    await fs.writeFile(this.configPath, JSON.stringify(template, null, 2));
    console.log(`📄 Generated config template at ${this.configPath}`);
  }
}

// 命令行运行
async function main() {
  const args = process.argv.slice(2);
  const buildTimeTranslation = new BuildTimeTranslation();
  
  if (args.includes('--init')) {
    await buildTimeTranslation.generateConfigTemplate();
    return;
  }
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Build-time Translation Tool

Usage: node buildTimeTranslation.js [options]

Options:
  --init             Generate i18n.config.json template
  --help, -h         Show this help message

Configuration:
  Create i18n.config.json in project root or use environment variables:
  - BAIDU_TRANSLATE_APP_ID
  - BAIDU_TRANSLATE_APP_KEY
  - I18N_SOURCE_LANGUAGE (default: en)
  - I18N_TARGET_LANGUAGES (default: zh)

Example package.json scripts:
  "scripts": {
    "translate": "node src/i18n/scripts/buildTimeTranslation.js",
    "translate:init": "node src/i18n/scripts/buildTimeTranslation.js --init",
    "prebuild": "npm run translate",
    "build": "vite build"
  }
    `);
    return;
  }

  try {
    await buildTimeTranslation.run();
  } catch (error) {
    console.error('❌ Build-time translation failed:', error);
    process.exit(1);
  }
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

export { BuildTimeTranslation };
