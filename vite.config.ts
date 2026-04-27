import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 构建时读取英文翻译表，用于 SSR 编译期将 window.t("key") 内联为真实原始文字
const enJson: Record<string, Record<string, string>> = JSON.parse(
  readFileSync(resolve(__dirname, 'src/i18n/locales/en.json'), 'utf-8')
);

function lookupEnglish(key: string): string {
  const dot = key.lastIndexOf('.');
  if (dot === -1) return key;
  const ns = key.slice(0, dot);
  const hash = key.slice(dot + 1);
  return enJson[ns]?.[hash] ?? key;
}

/**
 * SSR 安全插件：
 * 1. window.t("key") → 查 en.json 内联为真实英文（爬虫能读到有意义的文字）
 * 2. window.t = ...  → 加 typeof window 守卫（防止 Node.js 环境报错）
 * 只在 SSR 构建时生效，不影响客户端 bundle
 */
function ssrWindowSafePlugin(): Plugin {
  return {
    name: 'ssr-window-safe',
    enforce: 'post',
    transform(code, id, options) {
      if (!options?.ssr) return;
      if (!/\.[jt]sx?$/.test(id)) return; // 只处理 JS/TS 文件
      if (!code.includes('window.t')) return;

      let result = code;

      // window.t("key") 双引号形式 → 内联英文原始值
      result = result.replace(
        /(?<![.\w])window\.t\("([^"]+)"\)/g,
        (_m, key) => JSON.stringify(lookupEnglish(key))
      );

      // window.t('key') 单引号形式 → 内联英文原始值
      result = result.replace(
        /(?<![.\w])window\.t\('([^']+)'\)/g,
        (_m, key) => JSON.stringify(lookupEnglish(key))
      );

      // window.t = ... 赋值加守卫（i18n/index.ts 中的全局挂载）
      result = result.replace(
        /(?<![.\w])window\.t\s*=/g,
        'if (typeof window !== "undefined") window.t ='
      );

      return { code: result, map: null };
    },
  };
}

export default defineConfig({
  plugins: [react(), ssrWindowSafePlugin()],
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
  },
});
