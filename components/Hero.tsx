'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-end items-end text-right pr-10 pb-24"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Oscar D. Yanez Vega
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-3xl text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Backend & Full Stack Web3 Developer • Microservices Architect • QA Automation • Smart Contracts • Cloud
      </motion.p>
    </section>
  );
}
