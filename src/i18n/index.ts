import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zh from './locales/zh.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    react: { useSuspense: false }
  });

try {
  const key = 'i18nextLng';
  const current = (typeof window !== 'undefined') ? localStorage.getItem(key) : null;
  if (!current) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, 'en');
    }
    i18n.changeLanguage('en');
  }
} catch {
  // 无 localStorage 环境忽略
}

declare global {
  interface Window {
    t: (key: string, options?: any) => string;
  }
}

// 客户端才挂载全局 window.t（SSR 环境下由 vite.config.ts 插件在编译期内联翻译值）
if (typeof window !== 'undefined') {
  window.t = (key: string, options?: any) => i18n.t(key, options) as string;
}

i18n.on('languageChanged', (lng: string) => {
  try {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('languageChanged', { detail: { language: lng } });
      window.dispatchEvent(event);
    }
  } catch (_) {
    // no-op
  }
});

export default i18n;
