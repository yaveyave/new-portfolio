'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
  id="hero"
  className="h-screen w-full overflow-x-hidden px-4 pb-24 flex flex-col justify-end items-end text-right sm:pr-10"
>
  <div className="flex flex-col items-end text-right gap-4 mb-16">
    <motion.h1
      className="text-4xl md:text-6xl font-bold max-w-3xl"
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
  </div>
</section>


  );
}
