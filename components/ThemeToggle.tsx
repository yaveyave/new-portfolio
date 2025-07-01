'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiMoon, FiSun } from 'react-icons/fi'; 

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
return (
   <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="rounded-full"
    >
      {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </Button>
  );
}
