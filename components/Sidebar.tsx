import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { ANIMATION_CONFIG } from '../utils/cn';

const skills = [
  { name: 'React / Next.js', value: 95 },
  { name: 'TypeScript', value: 90 },
  { name: 'Tailwind CSS', value: 98 },
  { name: 'Three.js / WebGL', value: 80 },
  { name: 'Backend (Node/Rust)', value: 75 },
];

const extras = [
  "System Architecture",
  "UI/UX Design",
  "Performance Opt.",
  "SEO & Analytics"
];

interface SidebarProps {
  profileImage?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ profileImage = "/profile.png" }) => {
  return (
    <aside className="h-full w-full bg-charcoal border-r border-white/5 flex flex-col overflow-y-auto scrollbar-hide relative z-20">
      {/* Profile Header */}
      <div className="p-8 text-center bg-white/5">
        <div className="relative w-32 h-32 mx-auto mb-6">
           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue animate-spin-slow blur-md opacity-50" />
           <img 
            src={profileImage}
            alt="Pranaw Prakash"
            className="relative w-full h-full object-cover object-center rounded-full border-2 border-white/10 saturate-110 contrast-110"
           />
           <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-charcoal animate-pulse" />
        </div>
        <h1 className="text-xl font-bold text-white mb-2">Pranaw Prakash</h1>
        <p className="text-xs font-mono text-neon-purple tracking-widest uppercase">Engineering Undergraduate</p>
      </div>

      <div className="p-8 space-y-8 flex-grow">
        {/* Personal Info */}
        <div className="space-y-3 pb-8 border-b border-white/5">
            <div className="flex justify-between text-sm">
                <span className="text-white/50">Residence:</span>
                <span className="text-white">India</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-white/50">City:</span>
                <span className="text-white">Bangalore</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-white/50">Age:</span>
                <span className="text-white">24</span>
            </div>
        </div>

        {/* Languages */}
        <div className="flex justify-around pb-8 border-b border-white/5">
            <div className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-neon-purple/30 flex items-center justify-center mb-2 relative">
                    <span className="text-xs font-bold text-white">100%</span>
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="26" cy="26" r="26" fill="transparent" stroke="#D946EF" strokeWidth="2" strokeDasharray="163" strokeDashoffset="0" />
                    </svg>
                </div>
                <span className="text-xs text-white/70">English</span>
            </div>
            <div className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-neon-purple/30 flex items-center justify-center mb-2 relative">
                    <span className="text-xs font-bold text-white">100%</span>
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="26" cy="26" r="26" fill="transparent" stroke="#D946EF" strokeWidth="2" strokeDasharray="163" strokeDashoffset="0" />
                    </svg>
                </div>
                <span className="text-xs text-white/70">Hindi</span>
            </div>
        </div>

        {/* Skills */}
        <div className="space-y-4 pb-8 border-b border-white/5">
            {skills.map(skill => (
                <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-white/40">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-neon-purple shadow-[0_0_10px_#D946EF]"
                        />
                    </div>
                </div>
            ))}
        </div>

        {/* Extras */}
        <div className="space-y-2 pb-8 border-b border-white/5">
            {extras.map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="text-neon-purple">✓</span>
                    {item}
                </div>
            ))}
        </div>
        
        {/* CV Button */}
        <a 
            href="#"
            className="flex items-center justify-center gap-2 w-full py-4 text-xs font-bold tracking-widest uppercase text-obsidian bg-white hover:bg-neon-purple transition-colors duration-300"
        >
            Download CV <Download size={14} />
        </a>
      </div>

      {/* Social Footer */}
      <div className="p-6 bg-white/5 flex justify-center gap-6 text-white/40">
        <a href="https://linkedin.com/in/pranaw-prakash-383737354" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={18} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
            <Github size={18} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
            <Twitter size={18} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
            <Mail size={18} />
        </a>
      </div>
    </aside>
  );
};