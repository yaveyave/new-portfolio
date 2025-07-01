'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiFastapi,
  SiSolidity,
  SiEthereum,
  SiWeb3Dotjs,
  SiEthers,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiMongodb,
  SiCypress,
  SiSelenium,
  SiGithub,
  SiKubernetes
} from 'react-icons/si';

const skills: { name: string; icon: IconType; description: string }[] = [
  { name: 'Next.js', icon: SiNextdotjs, description: 'Modern framework for building full stack interfaces with speed and scalability.' },
  { name: 'TypeScript', icon: SiTypescript, description: 'Typed superset of JavaScript for more robust and maintainable code.' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Utility-first CSS framework for building clean, responsive UIs fast.' },
  { name: 'ShadCN UI', icon: SiShadcnui, description: 'Accessible, customizable UI components for elegant and consistent interfaces.' },
  { name: 'Node.js', icon: SiNodedotjs, description: 'Efficient runtime for building scalable APIs and backend services in JavaScript.' },
  { name: 'FastAPI', icon: SiFastapi, description: 'High-performance Python framework for creating APIs with built-in validation.' },
  { name: 'Solidity', icon: SiSolidity, description: 'Smart contract language for Ethereum, the core of Web3 development.' },
  { name: 'Ethereum', icon: SiEthereum, description: 'Decentralized blockchain for executing smart contracts and DApps.' },
  { name: 'Web3.js', icon: SiWeb3Dotjs, description: 'JavaScript library for interacting with Ethereum nodes and contracts.' },
  { name: 'Ethers.js', icon: SiEthers, description: 'Lightweight library for working with smart contracts and wallets on Ethereum.' },
  { name: 'Docker', icon: SiDocker, description: 'Application containerization for consistent environments and portable deployments.' },
  { name: 'AWS EC2', icon: SiAmazon, description: 'Scalable cloud instances for hosting backend services and applications.' },
  { name: 'PostgreSQL', icon: SiPostgresql, description: 'Powerful relational database with advanced support for structured data.' },
  { name: 'MongoDB', icon: SiMongodb, description: 'Flexible NoSQL database designed for storing and scaling JSON-like documents.' },
  { name: 'QA Automation (Selenium, Cypress)', icon: SiCypress, description: 'Tools for automated UI testing and user flow validation.' },
  { name: 'CI/CD (GitHub Actions)', icon: SiGithub, description: 'Automated pipelines for testing and deploying code on every push.' },
  { name: 'Microservices Architecture', icon: SiKubernetes, description: 'Distributed system design for scalability, isolation, and maintainability.' }
];

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; description: string } | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
        {skills.map(({ name, icon: Icon, description }, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSkill({ name, description })}
            className="w-16 h-16 flex items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground shadow-sm transition-colors duration-200"
            title={name}
          >
            <Icon size={24} />
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelectedSkill(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-72 p-6 rounded-2xl shadow-lg bg-background text-foreground border border-border text-center"
              initial={{ scale: 0.9, opacity: 0, y: '-50%', x: '-50%' }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2">{selectedSkill.name}</h3>
              <p className="text-sm opacity-70">
                {selectedSkill.description}
              </p>
              <p className="text-xs mt-2 text-muted-foreground">
                One of my key tools in development and architecture.
              </p>
              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-4 text-sm underline text-muted-foreground hover:text-primary"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
