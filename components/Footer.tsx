import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { ANIMATION_CONFIG } from '../utils/cn';

export const Footer: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-[60vh] flex flex-col items-center justify-center border-t border-white/5 bg-obsidian">
      <div className="text-center space-y-12">
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={ANIMATION_CONFIG}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white/90"
        >
          Ready to engineer<br />the inevitable
        </motion.h2>

        <motion.a
          href="https://www.linkedin.com/in/pranaw-prakash-383737354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/50 rounded-full transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 text-white/70 group-hover:text-[#0077b5] transition-colors" />
          <span className="font-mono text-sm tracking-widest text-white/70 group-hover:text-white transition-colors">
            PRANAW PRAKASH
          </span>
        </motion.a>
      </div>
    </section>
  );
};