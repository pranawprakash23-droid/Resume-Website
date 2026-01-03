import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Completed Projects', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Honors & Awards', value: '12' },
];

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-12">
      {stats.map((stat, idx) => (
        <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4"
        >
            <span className="text-3xl md:text-4xl font-bold text-neon-purple drop-shadow-[0_0_10px_rgba(217,70,239,0.4)]">
                {stat.value}
            </span>
            <span className="text-xs md:text-sm text-white/60 font-medium leading-tight max-w-[80px]">
                {stat.label}
            </span>
        </motion.div>
      ))}
    </div>
  );
};