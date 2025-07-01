'use client';

import { motion } from 'framer-motion';
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

const skills: { name: string; icon: IconType }[] = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'ShadCN UI', icon: SiShadcnui },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Solidity', icon: SiSolidity },
  { name: 'Ethereum', icon: SiEthereum },
  { name: 'Web3.js', icon: SiWeb3Dotjs },
  { name: 'Ethers.js', icon: SiEthers },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS EC2', icon: SiAmazon },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'QA Automation (Selenium, Cypress)', icon: SiCypress },
  { name: 'CI/CD (GitHub Actions)', icon: SiGithub },
  { name: 'Microservices Architecture', icon: SiKubernetes }
];

export function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
        {skills.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 flex items-center justify-center rounded-full border border-border bg-secondary text-secondary-foreground shadow-sm transition-colors duration-200"
            title={name}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
