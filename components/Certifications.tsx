'use client';

import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';
import {
  SiLinux,
  SiAib,
  SiPostman,
  SiMysql,
  SiSolidity,
  SiDocker,
  SiArchlinux,
  SiTerraform
} from 'react-icons/si';

const certifications = [
  { name: 'Linux - LPI', icon: SiLinux },
  { name: 'Cybersecurity Compliance', icon: FiShield },
  { name: 'Backend Development & APIs', icon: SiPostman },
  { name: 'Relational Databases', icon: SiMysql },
  { name: 'Solidity & Smart Contracts', icon: SiSolidity },
  { name: 'Microservices Architecture', icon: SiDocker },
  { name: 'Sofware Architecture', icon: SiTerraform }
];

export function Certifications() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-semibold mb-10 text-left w-full max-w-5xl">
        Certifications and Knowledge
      </h2>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {certifications.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border border-border bg-secondary text-secondary-foreground flex flex-col items-center text-center shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-200 ease-in-out dark:hover:shadow-[0_4px_16px_rgba(255,255,255,0.08)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Icon size={36} className="mb-4 text-primary group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
            <h3 className="text-md font-medium">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
