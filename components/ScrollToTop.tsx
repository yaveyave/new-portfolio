// components/ScrollToTop.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-border bg-background/70 dark:bg-background/50 backdrop-blur-md hover:scale-110 transition-transform shadow-md flex items-center justify-center"
        aria-label="Scroll to top"
        >
        <span className="block w-3 h-3 border-t-2 border-l-2 border-foreground dark:border-foreground rotate-45" />
    </motion.button>

  );
}
