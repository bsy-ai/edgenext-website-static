import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入语言包
import en from './locales/en.json';
import zh from './locales/zh.json';

// 配置资源
const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
};

i18n.
use(LanguageDetector).
use(initReactI18next).
init({
  resources,
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false // React已经处理了XSS
  },

  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
    lookupLocalStorage: 'i18nextLng'
  },

  react: {
    useSuspense: false
  }
});
try {
  const key = 'i18nextLng';
  const current = (typeof window !== 'undefined') ? localStorage.getItem(key) : null;
  if (!current) {
    // 设置并与 i18n 同步
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, 'en');
    }
    // 无需 await，若当前已是 en 则不会触发变更
    i18n.changeLanguage('en');
  }
} catch {
  // 可能处于无 localStorage 环境，忽略
}

// 挂载全局翻译函数到 window
declare global {
  interface Window {
    t: (key: string, options?: any) => string;
  }
}

window.t = (key: string, options?: any) => {
  return i18n.t(key, options) as string;
};

// 语言变更事件桥接：派发自定义事件，便于无需 useTranslation 的组件感知变化
i18n.on('languageChanged', (lng: string) => {
  try {
    const event = new CustomEvent('languageChanged', { detail: { language: lng } });
    window.dispatchEvent(event);
  } catch (_) {
    // no-op: 某些环境下 CustomEvent 不可用时忽略
  }
});

export default i18n;