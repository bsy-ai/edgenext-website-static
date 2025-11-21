import { useEffect, useState } from 'react';

/**
 * 自定义Hook，用于监听语言变化并触发组件重渲染
 * 解决使用 window.t() 的组件在语言切换时不更新的问题
 */
export const useLanguageListener = () => {
  const [language, setLanguage] = useState(() => {
    // 获取当前语言
    return localStorage.getItem('i18nextLng') || 'en';
  });

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail?.language;
      if (newLanguage) {
        setLanguage(newLanguage);
      }
    };

    // 监听语言变化事件
    window.addEventListener('languageChanged', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  return language;
};
