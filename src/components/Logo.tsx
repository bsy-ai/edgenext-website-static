import React from 'react';

interface LogoProps {
  darkMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ darkMode = false }) => {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/logo.png"
        alt="EdgeNext"
        className={`h-8 w-auto ${darkMode ? 'brightness-0 invert' : ''}`}
      />
    </a>
  );
};