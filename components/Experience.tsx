'use client';

import { motion } from 'framer-motion';
import {
  FiServer,
  FiCheckCircle,
  FiTool
} from 'react-icons/fi';

const experience = [
  {
    role: 'Backend Developer',
    details:
      'Backend development for educational web platforms (Node.js + Angular + Firebase).',
    icon: FiServer
  },
  {
    role: 'QA Engineer',
    details:
      'QA Automation for booking platforms (Ruby on Rails, Selenium, Firebase Test Lab, E2E Testing, PyTorch, Cypress, Postman, Bash Scripting).',
    icon: FiCheckCircle
  },
  {
    role: 'Project Manager',
    details:
      'Managed IT innovation projects (Main Data Center, ERP Odoo improvement, core banking integration).',
    icon: FiTool
  }
];

export function Experience() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-semibold mb-10 text-left w-full max-w-5xl">
        Professional Experience
      </h2>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {experience.map(({ role, details, icon: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
            className="
              group p-6 rounded-xl border border-border bg-secondary text-secondary-foreground
              shadow-sm hover:-translate-y-2
              transition-all duration-200 ease-in-out flex flex-col items-start

              hover:shadow-lg
              dark:hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)]
            "
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="
                text-3xl mb-4 text-primary transition-colors duration-300
                group-hover:text-black dark:group-hover:text-white
              "
            >
              <Icon />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{role}</h3>
            <p className="text-sm text-muted-foreground">{details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
