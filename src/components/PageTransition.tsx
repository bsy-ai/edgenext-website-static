import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigationType } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP') return;
    window.scrollTo(0, 0);
  }, [location.pathname, navigationType]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.4, 0.0, 0.2, 1] // Custom easing for smoother transitions
      }}
    >
      {children}
    </motion.div>
  );
};