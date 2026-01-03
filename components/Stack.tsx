import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, GraduationCap, BookOpen, Trophy, BrainCircuit, Terminal, Flag, Briefcase, Gamepad2, Clapperboard, Award, BadgeCheck, Database, Languages } from 'lucide-react';
import { ANIMATION_CONFIG } from '../utils/cn';

// Custom SVG Icon for English Language
const EnglishIso = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <text 
      x="12" 
      y="16" 
      fontSize="10" 
      fontWeight="900" 
      textAnchor="middle" 
      fill="currentColor"
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      ENG
    </text>
  </svg>
);

// --- DATA & STYLES ---

const skills = [
  { 
    id: 1,
    title: "Strategic Decision || Hackathon",
    institution: "KIIT - Kalinga Institute of Industrial Technology",
    icon: BrainCircuit,
    style: {
        bg: "bg-[#120818]",
        border: "border-purple-500/40",
        gradient: "from-purple-500/10",
        iconBox: "bg-purple-500/10 border-purple-500/60 shadow-[0_0_25px_rgba(168,85,247,0.3)]",
        iconColor: "text-purple-300",
        textHighlight: "text-purple-200",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.4)] group-hover:border-purple-400/80"
    }
  },
  { 
    id: 2,
    title: "C (Programming Language)",
    institution: "KIIT - Kalinga Institute of Industrial Technology",
    icon: Terminal,
    style: {
        bg: "bg-[#061218]",
        border: "border-cyan-500/40",
        gradient: "from-cyan-500/10",
        iconBox: "bg-cyan-500/10 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.3)]",
        iconColor: "text-cyan-300",
        textHighlight: "text-cyan-200",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/80"
    }
  },
  { 
    id: 3,
    title: "Leadership",
    institution: "Lions Public School Dhanbad",
    icon: Flag,
    style: {
        bg: "bg-[#181206]",
        border: "border-amber-500/40",
        gradient: "from-amber-500/10",
        iconBox: "bg-amber-500/10 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.3)]",
        iconColor: "text-amber-300",
        textHighlight: "text-amber-200",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.4)] group-hover:border-amber-400/80"
    }
  },
  { 
    id: 4,
    title: "Management",
    institution: "Professional Competency",
    icon: Briefcase,
    style: {
        bg: "bg-[#04160a]",
        border: "border-emerald-500/40",
        gradient: "from-emerald-500/10",
        iconBox: "bg-emerald-500/10 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.3)]",
        iconColor: "text-emerald-300",
        textHighlight: "text-emerald-200",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.4)] group-hover:border-emerald-400/80"
    }
  },
  { 
    id: 5,
    title: "Online Gaming",
    institution: "Competitive Strategy",
    icon: Gamepad2,
    style: {
        bg: "bg-[#180808]",
        border: "border-rose-500/40",
        gradient: "from-rose-500/10",
        iconBox: "bg-rose-500/10 border-rose-500/60 shadow-[0_0_25px_rgba(244,63,94,0.3)]",
        iconColor: "text-rose-300",
        textHighlight: "text-rose-200",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(244,63,94,0.4)] group-hover:border-rose-400/80"
    }
  },
  { 
    id: 6,
    title: "Video Editing",
    institution: "Content Production",
    icon: Clapperboard,
    style: {
        bg: "bg-[#180814]",
        border: "border-pink-500/40",
        gradient: "from-pink-500/10",
        iconBox: "bg-pink-500/10 border-pink-500/60 shadow-[0_0_25px_rgba(236,72,153,0.3)]",
        iconColor: "text-pink-300",
        textHighlight: "text-pink-200",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(236,72,153,0.4)] group-hover:border-pink-400/80"
    }
  }
];

const education = [
  {
    id: 1,
    school: "KIIT - Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Computer Science (AI & ML)",
    period: "Jul 2025 - Jul 2029",
    description: null,
    tags: ["Strategic Decision", "Hackathon", "C Programming"],
    icon: GraduationCap,
    style: {
        bg: "bg-[#051a0a]", // Deep Green
        border: "border-green-500/40",
        gradient: "from-green-500/10",
        iconBox: "bg-green-500/10 border-green-500/60 shadow-[0_0_25px_rgba(34,197,94,0.3)]",
        iconColor: "text-green-400",
        textHighlight: "text-green-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(34,197,94,0.4)] group-hover:border-green-400/80"
    }
  },
  {
    id: 2,
    school: "Vivekananda Vidya Mandir Ranchi",
    degree: "Central Board Of Secondary Education, Intermediate",
    period: "Aug 2022 - Mar 2024",
    description: null,
    tags: [],
    icon: BookOpen,
    style: {
        bg: "bg-[#1a0f05]", // Deep Orange
        border: "border-orange-500/40",
        gradient: "from-orange-500/10",
        iconBox: "bg-orange-500/10 border-orange-500/60 shadow-[0_0_25px_rgba(249,115,22,0.3)]",
        iconColor: "text-orange-400",
        textHighlight: "text-orange-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.4)] group-hover:border-orange-400/80"
    }
  },
  {
    id: 3,
    school: "Lions Public School Dhanbad",
    degree: "Central Board Of Secondary Education, Matriculation",
    period: "Apr 2013 - May 2022",
    description: "Got so much opportunities and learning from my School, Helped me to know my potential.",
    tags: ["Leadership", "Football"],
    icon: Trophy,
    style: {
        bg: "bg-[#1a1505]", // Deep Yellow
        border: "border-yellow-500/40",
        gradient: "from-yellow-500/10",
        iconBox: "bg-yellow-500/10 border-yellow-500/60 shadow-[0_0_25px_rgba(234,179,8,0.3)]",
        iconColor: "text-yellow-400",
        textHighlight: "text-yellow-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(234,179,8,0.4)] group-hover:border-yellow-400/80"
    }
  }
];

const awards = [
  {
    id: 1,
    title: "KIITMUN || MODEL UNITED NATIONS",
    issuer: "Issued by KIIT",
    date: "Dec 2025",
    association: "Associated with KIIT - Kalinga Institute of Industrial Technology",
    icon: Award,
    style: {
        bg: "bg-[#1a1205]", // Deep Gold/Amber
        border: "border-amber-500/40",
        gradient: "from-amber-500/10",
        iconBox: "bg-amber-500/10 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.3)]",
        iconColor: "text-amber-400",
        textHighlight: "text-amber-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.4)] group-hover:border-amber-400/80"
    }
  }
];

const certifications = [
  {
    id: 1,
    title: "MongoDB",
    issuer: "MongoDB",
    date: "Dec 2025",
    description: "Certificate",
    icon: Database,
    style: {
        bg: "bg-[#04160a]", // Deep Emerald
        border: "border-emerald-500/40",
        gradient: "from-emerald-500/10",
        iconBox: "bg-emerald-500/10 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.3)]",
        iconColor: "text-emerald-400",
        textHighlight: "text-emerald-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.4)] group-hover:border-emerald-400/80"
    }
  },
  {
    id: 2,
    title: "Omega 5.0 || Hackathon | FPL premiere league",
    issuer: "Fedkiit",
    date: "Aug 2025",
    description: "Certificate of Participation",
    icon: BadgeCheck,
    style: {
        bg: "bg-[#05151a]", // Deep Cyan
        border: "border-cyan-500/40",
        gradient: "from-cyan-500/10",
        iconBox: "bg-cyan-500/10 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.3)]",
        iconColor: "text-cyan-400",
        textHighlight: "text-cyan-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/80"
    }
  }
];

const languages = [
  {
    id: 1,
    language: "Japanese",
    proficiency: "Elementary proficiency",
    icon: Languages,
    style: {
        bg: "bg-[#1a0510]", // Deep Pink
        border: "border-pink-500/40",
        gradient: "from-pink-500/10",
        iconBox: "bg-pink-500/10 border-pink-500/60 shadow-[0_0_25px_rgba(236,72,153,0.3)]",
        iconColor: "text-pink-400",
        textHighlight: "text-pink-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(236,72,153,0.4)] group-hover:border-pink-400/80"
    }
  },
  {
    id: 2,
    language: "English",
    proficiency: "Professional working proficiency",
    icon: EnglishIso,
    style: {
        bg: "bg-[#05101a]", // Deep Sky Blue
        border: "border-sky-500/40",
        gradient: "from-sky-500/10",
        iconBox: "bg-sky-500/10 border-sky-500/60 shadow-[0_0_25px_rgba(14,165,233,0.3)]",
        iconColor: "text-sky-400",
        textHighlight: "text-sky-300",
        hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(14,165,233,0.4)] group-hover:border-sky-400/80"
    }
  }
];

// Experience data (Single item for now, but structured for consistency)
const experience = [
    {
        id: 1,
        title: "Content Creator",
        company: "YouTube",
        period: "Aug 2025 - Present",
        type: "Part-time",
        location: "India",
        description: "Documenting Life journey and experience || that will help me to navigate me the direction and to a new path which will give me a new || lesson and experience that will help me and add value in my life.",
        icon: Youtube,
        style: {
            bg: "bg-[#1a0505]", // Deep Red
            border: "border-red-500/40",
            gradient: "from-red-500/10",
            iconBox: "bg-red-500/10 border-red-500/60 shadow-[0_0_25px_rgba(239,68,68,0.3)]",
            iconColor: "text-red-400",
            textHighlight: "text-red-300",
            hoverShadow: "group-hover:shadow-[0_0_40px_-5px_rgba(239,68,68,0.4)] group-hover:border-red-400/80"
        }
    }
];


export const Stack: React.FC = () => {
  return (
    <section id="stack" className="relative py-32 px-6 max-w-4xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* MAIN PORTFOLIO HEADING */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-neon-blue drop-shadow-[0_0_25px_rgba(217,70,239,0.4)]">
                PORTFOLIO
              </span>
          </h2>
          <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>

      {/* SKILLS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="mb-32"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1.5 bg-neon-purple rounded-full shadow-[0_0_15px_#D946EF]" />
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">SKILL</h3>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-neon-purple to-white/10 animate-pulse rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...ANIMATION_CONFIG, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl border p-5 flex items-center gap-5 transition-all duration-500 hover:scale-[1.02] group backdrop-blur-md ${skill.style.bg} ${skill.style.border} ${skill.style.hoverShadow}`}
            >
               {/* Gradient Fill - Stronger opacity for distinction */}
               <div className={`absolute inset-0 bg-gradient-to-br ${skill.style.gradient} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />

               {/* Inner Light Reflection (Top-Left) - Glass sheen */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

               {/* Icon Box */}
               <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 backdrop-blur-xl ${skill.style.iconBox}`}>
                 <skill.icon className={`w-7 h-7 transition-colors ${skill.style.iconColor} drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
               </div>

               {/* Text Content */}
               <div className="relative z-10 flex-grow">
                 <h3 className={`font-bold text-lg leading-tight transition-colors text-white group-hover:text-white drop-shadow-md`}>{skill.title}</h3>
                 <div className="flex items-center gap-2 mt-1">
                    <span className={`w-1 h-1 rounded-full bg-white opacity-50`} />
                    <p className={`text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity ${skill.style.textHighlight}`}>
                        {skill.institution}
                    </p>
                 </div>
               </div>

               {/* Decorative corner accent - Vibrant Glow */}
               <div className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity ${skill.style.iconBox.split(' ')[0]}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* EXPERIENCE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="relative z-10 mb-32"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1.5 bg-neon-purple rounded-full shadow-[0_0_15px_#D946EF]" />
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h3>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-neon-purple to-white/10 animate-pulse rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="space-y-6">
            {experience.map((exp) => (
                <div key={exp.id} className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:scale-[1.01] group backdrop-blur-md shadow-lg ${exp.style.bg} ${exp.style.border} ${exp.style.hoverShadow}`}>
                    
                    {/* Gradient Fill */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.style.gradient} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                    
                     {/* Inner Light Reflection (Top-Left) */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                     {/* Decorative Hover Glow */}
                     <div className={`absolute -right-20 -top-20 w-64 h-64 blur-[80px] rounded-full transition-all duration-500 opacity-20 group-hover:opacity-50 ${exp.style.iconBox.split(' ')[0]}`} />
                    
                     <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        {/* Icon Column */}
                        <div className="flex-shrink-0">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-105 backdrop-blur-xl ${exp.style.iconBox}`}>
                                 <exp.icon className={`w-8 h-8 transition-colors ${exp.style.iconColor}`} />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-grow space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <h3 className={`text-2xl font-bold transition-colors text-white ${exp.style.iconColor.replace('400', '300')}`}>{exp.title}</h3>
                                <span className={`font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap group-hover:border-white/20 transition-colors`}>
                                    {exp.period} · 6 mos
                                </span>
                            </div>
                            
                            <div className="text-sm text-white/60 font-medium mb-4 flex items-center gap-2">
                                <span>{exp.company} · {exp.type}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span>{exp.location}</span>
                            </div>
                            
                            <p className={`text-gray-400 leading-relaxed text-sm max-w-2xl border-l-2 border-white/10 pl-4 transition-colors ${exp.style.border}`}>
                                {exp.description}
                            </p>
                        </div>
                     </div>
                </div>
            ))}
        </div>
      </motion.div>

      {/* EDUCATION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="relative z-10 mb-32"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1.5 bg-neon-purple rounded-full shadow-[0_0_15px_#D946EF]" />
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h3>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-neon-purple to-white/10 animate-pulse rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="space-y-6">
            {education.map((edu, idx) => (
                <motion.div 
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...ANIMATION_CONFIG, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-[1.01] group backdrop-blur-md ${edu.style.bg} ${edu.style.border} ${edu.style.hoverShadow}`}
                >
                    {/* Gradient Fill */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.style.gradient} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                    
                    {/* Inner Light Reflection (Top-Left) */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                    {/* Decorative Hover Glow */}
                    <div className={`absolute -right-20 -top-20 w-64 h-64 blur-[80px] rounded-full transition-all duration-500 opacity-20 group-hover:opacity-50 ${edu.style.iconBox.split(' ')[0]}`} />

                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-105 backdrop-blur-xl ${edu.style.iconBox}`}>
                                <edu.icon className={`w-7 h-7 transition-colors ${edu.style.iconColor}`} />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                                <div>
                                    <h3 className={`text-xl font-bold transition-colors text-white ${edu.style.textHighlight.replace('300', '200')}`}>
                                        {edu.school}
                                    </h3>
                                    <p className="text-white/60 text-sm mt-1 font-medium">{edu.degree}</p>
                                </div>
                                <span className="font-mono text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap self-start">
                                    {edu.period}
                                </span>
                            </div>

                            {edu.description && (
                                <p className={`text-gray-400 text-sm mt-4 leading-relaxed max-w-2xl border-l-2 border-white/10 pl-4 transition-colors ${edu.style.border}`}>
                                    {edu.description}
                                </p>
                            )}

                            {edu.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {edu.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>

      {/* HONORS & AWARDS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="relative z-10 mb-32"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1.5 bg-neon-purple rounded-full shadow-[0_0_15px_#D946EF]" />
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Honors & Awards</h3>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-neon-purple to-white/10 animate-pulse rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="space-y-6">
            {awards.map((award, idx) => (
                <motion.div 
                    key={award.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...ANIMATION_CONFIG, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-[1.01] group backdrop-blur-md ${award.style.bg} ${award.style.border} ${award.style.hoverShadow}`}
                >
                    {/* Gradient Fill */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.style.gradient} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                    
                    {/* Inner Light Reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                     {/* Decorative Hover Glow */}
                     <div className={`absolute -right-20 -top-20 w-64 h-64 blur-[80px] rounded-full transition-all duration-500 opacity-20 group-hover:opacity-50 ${award.style.iconBox.split(' ')[0]}`} />

                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-105 backdrop-blur-xl ${award.style.iconBox}`}>
                                <award.icon className={`w-7 h-7 transition-colors ${award.style.iconColor}`} />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                                <div>
                                    <h3 className={`text-xl font-bold transition-colors text-white ${award.style.textHighlight.replace('300', '200')}`}>
                                        {award.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-white/60 text-sm mt-1 font-medium items-center">
                                      <span>{award.issuer}</span>
                                      <span className="w-1 h-1 rounded-full bg-white/20" />
                                      <span>{award.date}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                {award.association}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>

      {/* LICENSES & CERTIFICATIONS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="relative z-10 mb-32"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1.5 bg-neon-purple rounded-full shadow-[0_0_15px_#D946EF]" />
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Licenses & certifications</h3>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-neon-purple to-white/10 animate-pulse rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="space-y-6">
            {certifications.map((cert, idx) => (
                <motion.div 
                    key={cert.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...ANIMATION_CONFIG, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:scale-[1.01] group backdrop-blur-md ${cert.style.bg} ${cert.style.border} ${cert.style.hoverShadow}`}
                >
                    {/* Gradient Fill */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.style.gradient} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                    
                    {/* Inner Light Reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                     {/* Decorative Hover Glow */}
                     <div className={`absolute -right-20 -top-20 w-64 h-64 blur-[80px] rounded-full transition-all duration-500 opacity-20 group-hover:opacity-50 ${cert.style.iconBox.split(' ')[0]}`} />

                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-105 backdrop-blur-xl ${cert.style.iconBox}`}>
                                <cert.icon className={`w-7 h-7 transition-colors ${cert.style.iconColor}`} />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                                <div>
                                    <h3 className={`text-xl font-bold transition-colors text-white ${cert.style.textHighlight.replace('300', '200')}`}>
                                        {cert.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-white/60 text-sm mt-1 font-medium items-center">
                                      <span>{cert.issuer}</span>
                                      <span className="w-1 h-1 rounded-full bg-white/20" />
                                      <span>{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>

      {/* LANGUAGES SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
               <div className="h-8 w-1.5 bg-neon-purple rounded-full shadow-[0_0_15px_#D946EF]" />
               <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Languages</h3>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-neon-purple to-white/10 animate-pulse rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, idx) => (
                <motion.div 
                    key={lang.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...ANIMATION_CONFIG, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-2xl border p-6 flex items-center gap-6 transition-all duration-500 hover:scale-[1.01] group backdrop-blur-md ${lang.style.bg} ${lang.style.border} ${lang.style.hoverShadow}`}
                >
                    {/* Gradient Fill */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${lang.style.gradient} to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                    
                    {/* Inner Light Reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                     {/* Decorative Hover Glow */}
                     <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[60px] rounded-full transition-all duration-500 opacity-20 group-hover:opacity-60 ${lang.style.iconBox.split(' ')[0]}`} />

                    {/* Icon */}
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-105 backdrop-blur-xl ${lang.style.iconBox}`}>
                        <lang.icon className={`w-6 h-6 transition-colors ${lang.style.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h3 className={`text-xl font-bold transition-colors text-white ${lang.style.textHighlight.replace('300', '200')}`}>
                            {lang.language}
                        </h3>
                        <p className="text-white/60 text-sm mt-1 font-medium">
                            {lang.proficiency}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};