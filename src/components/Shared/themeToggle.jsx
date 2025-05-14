'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <button onClick={toggleTheme} className="px-3 py-2 border rounded fixed bottom-6 right-4 z-99 dark:text-white dark:border-white-20">
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
