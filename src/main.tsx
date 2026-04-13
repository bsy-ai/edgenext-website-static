import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import './i18n';
import App from './App.tsx';
import './index.css';

// 根包装：监听语言变化并以语言为 key 强制重挂载
const RootWithLanguageRerender: React.FC = () => {
  const [language, setLanguage] = useState<string>(() => localStorage.getItem('i18nextLng') || 'en');

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.language) {
        setLanguage(detail.language);
      }
    };
    window.addEventListener('languageChanged', handler as EventListener);
    return () => window.removeEventListener('languageChanged', handler as EventListener);
  }, []);

  const appKey = useMemo(() => `app-${language}`, [language]);

  return (
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          {/* key 变更会强制整棵树重挂载，确保 window.t() 场景也更新 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={appKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1], // 自定义缓动函数
              }}
            >
              <App />
            </motion.div>
          </AnimatePresence>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(
  <RootWithLanguageRerender />
);