import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '简体中文' }
  ];

  const handleLanguageChange = async (langCode: string) => {
    if (langCode === i18n.language) {
      setIsOpen(false);
      return;
    }
    
    setIsChanging(true);
    setIsOpen(false);
    
    try {
      await i18n.changeLanguage(langCode);
    } finally {
      // 延迟重置状态，确保动画完成
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ESC键关闭下拉框
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button 
        onClick={toggleDropdown}
        className="utility-link flex items-center space-x-2 px-3 py-2 rounded-md focus:outline-none relative overflow-hidden"
        aria-expanded={isOpen}
        aria-haspopup="true"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isChanging}
      >
        {/* 点击波纹效果 */}
        <motion.div
          className="absolute inset-0 bg-[#0EB623]/10 rounded-md"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* 加载状态指示器 */}
        {isChanging && (
          <motion.div
            className="absolute inset-0 bg-white/50 rounded-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-4 h-4 border-2 border-[#0EB623] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
        
        <Globe className={`w-4 h-4 ${isChanging ? 'opacity-50' : ''}`} />
        <span className={`text-sm ${isChanging ? 'opacity-50' : ''}`}>
          {languages.find(lang => lang.code === i18n.language)?.name || 'EN'}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className={`w-3 h-3 ${isChanging ? 'opacity-50' : ''}`} />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-[9999]"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                  i18n.language === language.code ? 'bg-gray-50 text-[#0EB623] font-medium' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                {language.name}
                {i18n.language === language.code && (
                  <motion.span 
                    className="float-right text-[#0EB623]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    ✓
                  </motion.span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
