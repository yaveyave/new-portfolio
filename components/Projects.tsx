'use client';

import { motion } from 'framer-motion';
import {
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiGlobe,
  FiGitBranch,
} from 'react-icons/fi';
import { SiSolidity } from 'react-icons/si';

const projects = [
  {
    title: 'Elena DApp',
    description: 'Smart Contract Management – ​​Distributed System with Web3, Solidity, MongoDB, and Microservices',
    link: 'https://elena-client.vercel.app/',
    icon: SiSolidity
  },
  {
    title: 'Booking Web App',
    description: 'Replication',
    icon: FiSmartphone,
  },
  {
    title: 'To-Do App',
    description: 'Replication',
    link: 'https://github.com/',
    icon: FiCode,
  },
  {
    title: 'Votation Test DApp',
    description: 'Web3 Application – Beta',
    link: 'https://buycontract.netlify.app/',
    icon: SiSolidity,
  },
  {
    title: 'Radio Shared',
    description: 'Web Application – Beta',
    icon: FiGlobe,
  },
  {
    title: 'Educational platforms',
    description: 'Node.js + Angular + Firebase – Peer Companion / Teaching Assistant',
    icon: FiDatabase,
  },
];

export function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-semibold mb-8 text-left w-full max-w-5xl">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map(({ title, description, link, icon: Icon }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
            className="
              group p-6 rounded-xl border border-border bg-secondary text-secondary-foreground
              shadow-sm transition-all duration-200 ease-in-out
              hover:-translate-y-1 hover:shadow-md hover:border-primary/40 hover:bg-secondary/90
              dark:hover:bg-muted/20
              flex flex-col items-start space-y-2
            "
          >
            <div className="text-2xl text-primary group-hover:text-primary/80 transition">
              <Icon />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
