import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '../utils/cn';
import { Camera } from 'lucide-react';

interface HeroProps {
  profileImage: string;
  onImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Hero: React.FC<HeroProps> = ({ profileImage, onImageSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section 
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={onImageSelect}
        accept="image/*"
        className="hidden"
      />

      {/* 1. Volumetric Atmosphere (Static) */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle 1000px at 50% 50%, rgba(30, 10, 50, 0.5), #050505 70%)`,
            }}
          />
          
          {/* Secondary Rim Light (Blue Accent) */}
          <div 
            className="absolute inset-0 mix-blend-screen"
            style={{
              background: `radial-gradient(circle 800px at 50% 60%, rgba(59, 130, 246, 0.08), transparent 60%)`,
            }}
          />
      </div>

      {/* 2. The "Gyroscope" Artifact (Abstract Form) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        >
          {/* Ring 1: Outer Orbital (Neon Purple) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-[1px] border-neon-purple/20 shadow-[0_0_80px_rgba(217,70,239,0.05)] backdrop-blur-[1px]"
          >
             <div className="absolute top-0 left-1/2 w-2 h-2 bg-neon-purple rounded-full blur-[1px] shadow-[0_0_15px_#D946EF]" />
          </motion.div>

          {/* Ring 2: Inclined White Tech Ring - Counter rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[80px] rounded-full border border-white/10 border-dashed opacity-30"
          />

          {/* Ring 3: Inner Fast Ring (Blue) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[160px] rounded-full border-[1px] border-neon-blue/10"
          >
             <div className="absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-neon-blue rounded-full blur-[1px] shadow-[0_0_15px_#3B82F6]" />
          </motion.div>

          {/* Core: The Obsidian Prism */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-3xl backdrop-blur-md"
            style={{
               background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
               border: "1px solid rgba(255,255,255,0.08)",
               boxShadow: "inset 0 0 60px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
             {/* Core Light Reflection */}
             <div 
               className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-50"
             />
             
             {/* Inner Glowing Essence */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-neon-purple/20 blur-2xl mix-blend-screen animate-pulse" />
          </div>

        </div>
      </div>

      {/* 3. Text Content (Foreground) */}
      <div className="z-10 text-center px-4 relative max-w-7xl mx-auto flex flex-col items-center justify-center h-full pb-20 md:pb-0">
        {/* === PROFILE PICTURE AREA === */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
           transition={{ ...ANIMATION_CONFIG, duration: 1.2 }}
           className="relative w-32 h-32 md:w-48 md:h-48 mb-8 group mt-16 md:mt-0 cursor-pointer"
           onClick={triggerFileInput}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-2xl group-hover:bg-neon-purple/40 transition-colors duration-500 pointer-events-none" />
            
            {/* Tech Rings - Spinner */}
            <div className="absolute -inset-2 border border-white/10 rounded-full border-t-neon-purple/50 animate-[spin_8s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-2 border border-white/10 rounded-full border-b-neon-blue/50 animate-[spin_8s_linear_infinite_reverse] pointer-events-none" />
            
            {/* Main Container */}
            <div className="relative h-full w-full rounded-full overflow-hidden border border-white/20 bg-obsidian/80 ring-1 ring-white/5 group-hover:ring-neon-purple/50 transition-all duration-500 shadow-2xl">
               <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none" />
               <img 
                 src={profileImage} 
                 alt="Pranaw Prakash"
                 className="h-full w-full object-cover object-center transition-transform duration-700 saturate-110 contrast-110"
               />
               
               {/* Upload Overlay (WhatsApp Style) */}
               <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 backdrop-blur-[2px]">
                 <Camera className="w-8 h-8 text-white mb-1" />
                 <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">Change Photo</span>
               </div>
               
               {/* Glass Reflection */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 z-20 pointer-events-none" />
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ANIMATION_CONFIG, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-4 md:mb-6"
        >
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-neon-purple/60"></span>
            <span className="font-mono text-[10px] md:text-sm text-neon-purple tracking-[0.4em] uppercase opacity-90 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]">
              Engineering Undergraduate
            </span>
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-neon-purple/60"></span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...ANIMATION_CONFIG, duration: 1, delay: 0.4 }}
          className="text-5xl md:text-[8rem] lg:text-[9rem] font-bold tracking-tighter text-white relative z-10 leading-[0.85] select-none"
        >
          <span className="block text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">PRANAW</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            PRAKASH
          </span>
        </motion.h1>

        {/* === LUXURY CREDENTIALS HUD === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ANIMATION_CONFIG, delay: 0.6 }}
          className="mt-16 w-full max-w-6xl mx-auto relative z-40 px-4" 
        >
          {/* Outer Glow Halo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/20 via-blue-500/20 to-neon-purple/20 rounded-3xl md:rounded-full blur-2xl opacity-20 pointer-events-none" />

          {/* Main Glass Structure */}
          <div className="relative rounded-3xl md:rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_30px_-5px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
            
            {/* Top Highlight Reflection */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />
            
            {/* Bottom Shadow/Reflex */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col md:flex-row items-center justify-between py-2 md:py-3 px-2 md:px-6 relative z-10">

                {/* Item 1: KIIT University */}
                <div className="group/item relative px-6 py-3 md:py-3 rounded-xl md:rounded-full transition-all duration-500 hover:bg-white/5 w-full md:w-auto flex justify-center border border-transparent hover:border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/5 to-neon-purple/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="flex items-center gap-4 relative z-10">
                         {/* High-Tech Indicator */}
                        <div className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
                            <div className="absolute inset-0 bg-neon-purple rounded-full blur-[2px] opacity-60 animate-pulse" />
                            <div className="relative w-1.5 h-1.5 bg-neon-purple rounded-full shadow-[0_0_10px_#D946EF] z-10" />
                            <div className="absolute inset-[-4px] border border-neon-purple/30 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300" />
                        </div>
                        
                        <span className="text-xs md:text-sm font-bold text-white tracking-[0.15em] uppercase drop-shadow-sm group-hover/item:text-neon-purple transition-colors text-left">
                           KIIT University
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[1px] h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-2" />
                <div className="block md:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />

                {/* Item 2: BTech CSE */}
                <div className="group/item relative px-6 py-3 md:py-3 rounded-xl md:rounded-full transition-all duration-500 hover:bg-white/5 w-full md:w-auto flex justify-center border border-transparent hover:border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="flex items-center gap-4 relative z-10">
                        {/* High-Tech Indicator */}
                         <div className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
                            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[2px] opacity-60 animate-pulse" />
                            <div className="relative w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] z-10" />
                            <div className="absolute inset-[-4px] border border-cyan-400/30 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300" />
                        </div>
                        
                        <span className="text-xs md:text-sm font-bold text-white tracking-[0.15em] uppercase drop-shadow-sm group-hover/item:text-cyan-400 transition-colors text-left">
                           BTech CSE (AI & ML)
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[1px] h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-2" />
                <div className="block md:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />

                {/* Item 3: AI Engineering */}
                <div className="group/item relative px-6 py-3 md:py-3 rounded-xl md:rounded-full transition-all duration-500 hover:bg-white/5 w-full md:w-auto flex justify-center border border-transparent hover:border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/5 to-rose-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="flex items-center gap-4 relative z-10">
                         {/* High-Tech Indicator */}
                         <div className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
                            <div className="absolute inset-0 bg-rose-500 rounded-full blur-[2px] opacity-60 animate-pulse" />
                            <div className="relative w-1.5 h-1.5 bg-rose-500 rounded-full shadow-[0_0_10px_#f43f5e] z-10" />
                            <div className="absolute inset-[-4px] border border-rose-500/30 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300" />
                        </div>

                        <span className="text-xs md:text-sm font-bold text-white tracking-[0.15em] uppercase drop-shadow-sm group-hover/item:text-rose-500 transition-colors text-left">
                           AI & ML Engineering
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[1px] h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-2" />
                <div className="block md:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />

                 {/* Item 4: Developer */}
                 <div className="group/item relative px-6 py-3 md:py-3 rounded-xl md:rounded-full transition-all duration-500 hover:bg-white/5 w-full md:w-auto flex justify-center border border-transparent hover:border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="flex items-center gap-4 relative z-10">
                        {/* High-Tech Indicator */}
                         <div className="relative flex items-center justify-center w-3 h-3 flex-shrink-0">
                            <div className="absolute inset-0 bg-neon-blue rounded-full blur-[2px] opacity-60 animate-pulse" />
                            <div className="relative w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_10px_#3B82F6] z-10" />
                            <div className="absolute inset-[-4px] border border-neon-blue/30 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300" />
                        </div>

                        <span className="text-xs md:text-sm font-bold text-white tracking-[0.15em] uppercase drop-shadow-sm group-hover/item:text-neon-blue transition-colors text-left">
                           Developer
                        </span>
                    </div>
                </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};