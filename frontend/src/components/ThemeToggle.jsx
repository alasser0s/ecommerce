import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 w-14 h-7 rounded-full bg-secondary-charcoal/10 dark:bg-accent-dark 
                transition-colors duration-300 flex items-center"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute w-6 h-6 rounded-full bg-white dark:bg-secondary-charcoal 
                   shadow-sm transition-transform duration-300 flex items-center justify-center
                   ${isDark ? 'translate-x-7' : 'translate-x-0'}`}
      >
        {isDark ? (
          <MoonIcon className="w-4 h-4 text-primary-cream" />
        ) : (
          <SunIcon className="w-4 h-4 text-secondary-charcoal" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle; 