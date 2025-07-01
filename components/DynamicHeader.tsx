'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function DynamicHeader() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setShowHeader(window.scrollY > heroHeight - 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-2 backdrop-blur-sm bg-background/70 border-b border-border text-sm text-foreground shadow-sm"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="font-semibold tracking-wide text-center">Oscar D. Yanez Vega</span>
      </div>
    </motion.header>
  );
}
