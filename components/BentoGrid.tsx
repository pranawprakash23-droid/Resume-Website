import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { Code2, BrainCircuit, Cpu, Globe, Zap, Gamepad2, Plane, Languages, TrendingUp, Network } from 'lucide-react';
import { ANIMATION_CONFIG } from '../utils/cn';

export const BentoGrid: React.FC = () => {
  return (
    <section className="relative z-30 max-w-7xl mx-auto px-6 pb-24 pt-12" id="work">
        
        {/* Blended Divider / Section Entry */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col items-center justify-center relative"
        >
             {/* Connection Line - Shortened to avoid Hero interference */}
             <div className="absolute -top-16 w-px h-16 bg-gradient-to-b from-transparent via-neon-purple/40 to-neon-purple/20 opacity-40" />
             
             {/* Central Node */}
             <div className="relative z-10 w-8 h-8 rounded-full border border-neon-purple/30 bg-obsidian flex items-center justify-center shadow-[0_0_15px_-5px_#D946EF]">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]" />
             </div>

             {/* Heading with Horizon Lines */}
             <div className="flex items-center gap-8 mt-8 w-full max-w-4xl relative">
                 <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
                 
                 <h2 className="text-xl md:text-2xl font-mono tracking-[0.3em] text-white/90 uppercase text-center relative z-10 px-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Core Competencies
                    </span>
                 </h2>
                 
                 <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
                 
                 {/* Background Glow for Text - Subtle */}
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-neon-purple/5 blur-[30px] -z-10" />
             </div>
        </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={ANIMATION_CONFIG}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]"
      >
        {/* Card 1: Computational Innovation (Neon Purple Accent) */}
        <div className="md:col-span-2 row-span-1">
          <SpotlightCard className="h-full p-8 flex flex-col justify-between group bg-charcoal/80 border-white/10 hover:border-neon-purple/50 transition-colors duration-500 relative overflow-hidden">
             
             {/* Tech Background Grid */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
             />

             {/* Dynamic Glow */}
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-[60px] group-hover:bg-neon-purple/20 transition-colors duration-700 pointer-events-none" />

            <div className="flex justify-between items-start relative z-10">
              <div className="bg-white/5 p-3 rounded-lg ring-1 ring-white/10 group-hover:ring-neon-purple/50 transition-all shadow-[0_0_0_0_rgba(217,70,239,0)] group-hover:shadow-[0_0_20px_-5px_rgba(217,70,239,0.5)]">
                <Code2 className="w-6 h-6 text-white group-hover:text-neon-purple transition-colors" />
              </div>
              <span className="font-mono text-xs text-white/30 group-hover:text-neon-purple/80 transition-colors tracking-[0.2em] uppercase">01_DEV_CORE</span>
            </div>
            
            {/* Visual: Abstract Logic Flow (Replaces Code Snippet) */}
            <div className="relative mt-6 h-32 w-full rounded-xl bg-gradient-to-br from-obsidian via-charcoal to-obsidian border border-white/5 overflow-hidden flex flex-col items-center justify-center group-hover:border-neon-purple/20 transition-all duration-500 shadow-inner">
                 
                 {/* Background Grid - faint */}
                 <div className="absolute inset-0 bg-grid-white/[0.02]" />
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                 {/* Central Animated Element */}
                 <div className="relative flex items-center gap-4 z-10 scale-90 md:scale-100">
                     {/* Left Node */}
                     <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                     
                     {/* Connecting Trace */}
                     <div className="w-16 h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div 
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent w-1/2"
                           animate={{ x: ['-100%', '200%'] }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                     </div>

                     {/* The Chip/Core */}
                     <div className="relative w-14 h-14 flex items-center justify-center border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm group-hover:border-neon-purple/50 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.15)] transition-all duration-500">
                         {/* Internal Crosshair */}
                         <div className="absolute w-full h-[1px] bg-white/5 top-1/2 -translate-y-1/2" />
                         <div className="absolute h-full w-[1px] bg-white/5 left-1/2 -translate-x-1/2" />
                         
                         {/* Core CPU Icon */}
                         <Cpu className="w-6 h-6 text-white/50 group-hover:text-white transition-colors relative z-10" />
                         
                         {/* Corner Accents */}
                         <div className="absolute top-1 left-1 w-1 h-1 bg-white/30" />
                         <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/30" />
                     </div>

                     {/* Connecting Trace */}
                     <div className="w-16 h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div 
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent w-1/2"
                           animate={{ x: ['-100%', '200%'] }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
                        />
                     </div>

                     {/* Right Node */}
                     <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse delay-75" />
                 </div>

                 {/* Text Label - Subtle */}
                 <div className="mt-4 flex items-center gap-2">
                     <span className="w-1 h-1 rounded-full bg-neon-purple animate-pulse" />
                     <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase group-hover:text-neon-purple/70 transition-colors">
                        System Logic Active
                     </span>
                 </div>
            </div>

            <div className="relative z-10 mt-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors duration-300 drop-shadow-md">Computational Innovation</h3>
              <p className="text-gray-400 text-sm mt-2 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                Passionate about developing new things in the IT field. Deeply enthusiastic about computer languages, programming, and understanding how things work in the computer world.
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Card 2: AI (Glowing Core) */}
        <div className="md:col-span-1 md:row-span-2">
          <SpotlightCard className="h-full p-8 flex flex-col justify-between group bg-gradient-to-b from-charcoal to-black relative overflow-hidden border-white/10 hover:border-white/20">
             
             {/* Sharp beam background */}
             <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

             <div className="flex justify-between items-start relative z-10">
              <div className="bg-white/5 p-3 rounded-lg ring-1 ring-white/10 group-hover:ring-neon-purple/60 transition-all shadow-[0_0_15px_rgba(217,70,239,0.1)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                <BrainCircuit className="w-6 h-6 text-white group-hover:text-neon-purple transition-colors" />
              </div>
              <span className="font-mono text-xs text-white/30 group-hover:text-neon-purple transition-colors">02_AI_NATIVE</span>
            </div>

            <div className="flex-grow flex items-center justify-center my-8 relative z-10">
               {/* Updated Sharp Core Animation - Luxury Tech Aesthetic */}
               <div className="relative w-40 h-40 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  {/* Outer glow field */}
                  <div className="absolute inset-0 bg-neon-purple/5 blur-3xl rounded-full animate-pulse" />
                  
                  {/* Ring 1 - Outer Orbital (Slow) */}
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-0 border-t border-neon-purple/40 rounded-full animate-[spin_10s_linear_infinite]" />
                  
                  {/* Ring 2 - Counter rotation with dash */}
                  <div className="absolute inset-4 border border-white/10 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Ring 3 - Inner Gyro (Fast) */}
                  <div className="absolute inset-8 border-l border-r border-neon-purple/60 rounded-full animate-[spin_3s_linear_infinite]" />
                  
                  {/* Geometric Core */}
                  <div className="absolute w-16 h-16 border border-white/20 rotate-45 animate-pulse" />
                  <div className="absolute w-16 h-16 border border-white/10 -rotate-45" />

                  {/* Central Singularity */}
                  <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_5px_rgba(217,70,239,0.8)] z-20 animate-ping" />
                  <div className="absolute w-6 h-6 bg-neon-purple/40 rounded-full blur-md animate-pulse" />
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-neon-purple group-hover:to-white transition-all duration-300">
                AI & ML Enthusiast
              </h3>
              <p className="text-gray-400 text-sm mt-3 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                Passionate about exploring the frontiers of Artificial Intelligence and advanced Machine Learning technologies.
              </p>
            </div>
            
            {/* Ambient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </SpotlightCard>
        </div>

        {/* Card 3: Pursuits & Exploration - ASYMMETRICAL LUXURY UPDATE */}
        <div className="md:col-span-2 row-span-1">
          <SpotlightCard className="h-full p-8 flex flex-col justify-between group bg-charcoal/80 border-white/10 hover:border-neon-blue/50 transition-colors duration-500 relative overflow-hidden">
             
             {/* 1. Asymmetrical Background Elements */}
             {/* Tilted Grid/Map effect positioned off-center */}
             <div className="absolute -right-[10%] -top-[20%] w-[120%] h-[120%] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rotate-12 origin-top-right">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                  {/* Tech Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
             </div>
             
             {/* Header Section */}
             <div className="flex justify-between items-start relative z-10">
              <div className="bg-white/5 p-3 rounded-lg ring-1 ring-white/10 group-hover:ring-neon-blue/50 transition-all shadow-[0_0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] backdrop-blur-md">
                <Gamepad2 className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
              </div>
              <span className="font-mono text-xs text-white/30 group-hover:text-neon-blue/80 transition-colors tracking-[0.2em] uppercase">03_LIFESTYLE</span>
            </div>
            
            {/* Center Visual: Asymmetrical Connected Constellation */}
            <div className="mt-4 mb-2 flex-grow relative w-full h-32 overflow-hidden md:overflow-visible">
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* Curve 1: Gaming (Top Left) to Globe (Right Center) */}
                    <motion.path 
                        d="M 80 30 Q 180 30 250 60" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* Curve 2: Globe to Language (Bottom Left) */}
                    <motion.path 
                        d="M 250 60 Q 150 100 100 90" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    />
                     {/* Line 3: Globe to Stats (Top Right) */}
                    <motion.path 
                        d="M 250 60 L 320 30" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                    />
                </svg>

                {/* Node 1: GAMING (Top Left) */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="absolute top-2 left-4 md:left-12 z-10 group/node"
                >
                     <div className="relative flex items-center gap-2 bg-obsidian/40 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg group-hover/node:border-neon-blue/40 group-hover/node:bg-white/5 transition-all">
                         <Gamepad2 className="w-3 h-3 text-neon-blue drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                         <span className="text-[10px] font-mono text-white/70 tracking-wider">GAMING</span>
                     </div>
                </motion.div>

                {/* Node 2: GLOBE / EXPLORATION (Center Right - Dominant) */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-8 right-16 md:right-32 z-20 group/globe"
                >
                     <div className="relative w-16 h-16 flex items-center justify-center">
                         {/* Asymmetrical Orbitals */}
                         <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_12s_linear_infinite]" />
                         <div className="absolute inset-[-4px] rounded-full border border-transparent border-r-neon-blue/30 border-b-white/10 rotate-12 animate-[spin_8s_linear_infinite_reverse]" />
                         
                         {/* Core Globe */}
                         <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover/globe:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500">
                             <Globe className="w-5 h-5 text-white/90 group-hover/globe:text-neon-blue transition-colors" />
                             {/* Orbiting Plane */}
                             <motion.div 
                                className="absolute inset-[-12px]"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                             >
                                 <Plane className="w-3 h-3 text-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                             </motion.div>
                         </div>
                     </div>
                     {/* Label below */}
                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                         <span className="text-[9px] font-mono text-white/40 tracking-[0.2em]">WORLD_CONNECT</span>
                     </div>
                </motion.div>

                {/* Node 3: LANGUAGE (Bottom Left) */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 left-16 md:left-24 z-10 group/node"
                >
                     <div className="relative flex items-center gap-2 bg-obsidian/40 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg group-hover/node:border-pink-500/40 group-hover/node:bg-white/5 transition-all">
                         <Languages className="w-3 h-3 text-pink-400 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]" />
                         <span className="text-[10px] font-mono text-white/70 tracking-wider">LANG</span>
                     </div>
                </motion.div>

                {/* Node 4: SKILLS / CHART (Top Right) */}
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute top-4 right-4 z-10 group/node"
                >
                     <div className="relative p-2 bg-obsidian/40 border border-white/10 rounded-lg backdrop-blur-md group-hover/node:border-emerald-500/40 transition-all shadow-lg">
                         {/* Mini Bar Chart */}
                         <div className="flex items-end gap-1 h-5">
                             <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} transition={{ delay: 0.8 }} className="w-1.5 bg-emerald-500/40 rounded-t-[1px]" />
                             <motion.div initial={{ height: 0 }} whileInView={{ height: '70%' }} transition={{ delay: 0.9 }} className="w-1.5 bg-emerald-500/60 rounded-t-[1px]" />
                             <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ delay: 1.0 }} className="w-1.5 bg-emerald-500 rounded-t-[1px] shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                         </div>
                     </div>
                </motion.div>

            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-neon-blue group-hover:to-white transition-all duration-500">
                Pursuits & Exploration
              </h3>
              <p className="text-gray-400 text-sm mt-2 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                Gaming enthusiast passionate about learning new skills and languages. I love to travel, explore diverse cultures, and build meaningful professional networks.
              </p>
            </div>
            
             {/* Decorative corner accent - Diamond shine */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-neon-blue/20 to-transparent rounded-full blur-[50px] pointer-events-none group-hover:opacity-100 transition-opacity" />
          </SpotlightCard>
        </div>
      </motion.div>
    </section>
  );
};