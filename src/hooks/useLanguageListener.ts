import { useEffect, useState } from 'react';
import i18n from '../i18n';

/**
 * 监听 i18next 语言变化并触发重渲染（直接订阅 i18n，比 window 自定义事件更可靠）
 * 解决使用 window.t() 的组件在语言切换时不更新的问题
 */
export const useLanguageListener = () => {
  const [language, setLanguage] = useState(
    () => i18n.resolvedLanguage ?? i18n.language ?? 'en'
  );

  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      setLanguage(lng);
    };
    i18n.on('languageChanged', onLanguageChanged);
    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, []);

  return language;
};