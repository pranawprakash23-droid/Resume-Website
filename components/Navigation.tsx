import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Work', href: '#work' },
  { name: 'Stack', href: '#stack' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="relative flex items-center gap-1 p-2 rounded-full border border-white/10 bg-charcoal/80 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-6 py-3 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            {/* Spotlight Background */}
            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 rounded-full bg-white/10 border border-white/5"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${hoveredIndex === index ? 'text-neon-purple drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]' : ''}`}>
                {item.name}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};