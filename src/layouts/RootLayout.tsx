import { useEffect } from 'react';
import { useLocation, Outlet, useNavigationType } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SeoHead } from '../components/SeoHead';
import { useLanguageListener } from '../hooks/useLanguageListener';

export default function RootLayout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const { i18n } = useTranslation();
  useLanguageListener();

  const localeKey = i18n.resolvedLanguage ?? i18n.language;
  const pageTransitionKey = `${location.pathname}-${localeKey}`;

  useEffect(() => {
    if (navigationType === 'POP') return;
    window.scrollTo(0, 0);
  }, [location.pathname, navigationType]);

  return (
    <HelmetProvider>
      <SeoHead pathname={location.pathname} />
      <AnimatePresence mode="wait">
        <motion.div
          key={pageTransitionKey}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}>
          <div className="contents">
            <Outlet />
          </div>
        </motion.div>
      </AnimatePresence>
    </HelmetProvider>);

}