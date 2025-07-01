'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiMessageCircle, FiDownloadCloud } from 'react-icons/fi';
import { SiMastodon } from 'react-icons/si';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-border mt-24 py-8 px-4 text-right text-xs text-muted-foreground"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-4">
        <p className="leading-relaxed">
          &copy; {new Date().getFullYear()} Oscar Daniel Yanez Vega
          <br />
          <span className="text-muted-foreground/70">
            Full CV available upon request.
          </span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/OscarCV-ENGmin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            title="View summarized CV (PDF)"
          >
            <FiDownloadCloud size={18} />
          </a>

          <a
            href="https://github.com/yaveyave"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            title="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://discordapp.com/users/1215061796222664716"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            title="Discord"
          >
            <FiMessageCircle size={18} />
          </a>
          <a
            href="https://mastodon.social/@yave"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            title="Mastodon"
          >
            <SiMastodon size={18} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
