import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "CAMPUS CONNECT",
    category: "Professional Social Network",
    year: "2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2532&auto=format&fit=crop",
    accent: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    title: "PRANOA",
    category: "AI Mental Health Companion",
    year: "2025",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2500&auto=format&fit=crop",
    accent: "from-cyan-500 to-blue-600",
  },
];

export const Gallery: React.FC = () => {
  return (
    <section className="relative py-32 bg-obsidian overflow-hidden border-t border-white/5">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tighter text-white drop-shadow-2xl">
               PROJECTS <br/> 
               <span className="text-white/20">BUILD</span>
             </h2>
             
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div className="flex items-center gap-4 mt-8">
                     <span className="h-[1px] w-12 bg-neon-purple shadow-[0_0_10px_#D946EF]"></span>
                     <p className="text-neon-purple font-mono text-xs tracking-widest uppercase drop-shadow-lg">Research & Dev</p>
                 </div>

                 {/* Swipe Indicator - Visible on all screens */}
                 <div className="flex items-center gap-2 opacity-60 animate-pulse mt-4 md:mt-0">
                    <span className="text-[10px] font-mono text-white tracking-widest uppercase">Swipe to see</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                 </div>
             </div>
          </motion.div>
      </div>

      {/* Horizontal Scroll Container - Native Scrolling */}
      {/* 'scrollbar-hide' class is added in index.html styles */}
      <div className="flex overflow-x-auto pb-12 px-6 gap-8 snap-x snap-mandatory scrollbar-hide items-start">
        {/* Spacer for proper left alignment on large screens within the flow */}
        <div className="w-1 md:w-[calc((100vw-80rem)/2)] shrink-0" />
        
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="relative h-[60vh] min-w-[85vw] md:min-w-[45vw] snap-center rounded-xl bg-charcoal border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden group shrink-0 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
             {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Colored Gradient Overlay - Replaces Grayscale with Color Tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-color z-10 transition-opacity duration-700 group-hover:opacity-0`} />
                
                {/* Soft ambient light for depth */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0`} />

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                
                {/* Dark Gradient for Text Readability - Always present */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-40 z-10" />
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-20">
                 <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <span className="font-mono text-[10px] text-obsidian bg-white px-2 py-1 rounded font-bold tracking-wider">LIVE_BUILD</span>
                    <span className="font-mono text-xs text-white/60">{project.year}</span>
                 </div>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-700 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.7)]">
                  {project.title}
                </h3>
                <div className={`h-1 w-12 bg-gradient-to-r ${project.accent} mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200`} />
                <p className="font-mono text-xs tracking-[0.2em] text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 uppercase drop-shadow-lg">
                  {project.category}
                </p>
              </div>
          </motion.div>
        ))}
         {/* Right Spacer */}
        <div className="w-6 shrink-0" />
      </div>
    </section>
  );
};