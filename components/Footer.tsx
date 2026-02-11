import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Download } from 'lucide-react';
import { ANIMATION_CONFIG } from '../utils/cn';
import { jsPDF } from "jspdf";

export const Footer: React.FC = () => {
  
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Create new PDF document
    const doc = new jsPDF();
    
    // Styling Constants
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);
    let yPos = 20;
    
    const colors = {
      heading: '#1a1a1a',
      subheading: '#2d3748',
      text: '#4a5568',
      accent: '#2563eb' // Blue accent matching typical CV
    };

    // Helper to add text and advance cursor
    const addText = (text: string, size: number, style: 'normal' | 'bold' | 'italic', color: string, align: 'left' | 'center' = 'left', maxWidth?: number) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", style);
      doc.setTextColor(color);
      
      if (align === 'center') {
        doc.text(text, pageWidth / 2, yPos, { align: 'center', maxWidth: maxWidth || contentWidth });
      } else {
        if (maxWidth) {
          const lines = doc.splitTextToSize(text, maxWidth);
          doc.text(lines, margin, yPos);
          // Calculate height of lines
          const lineHeight = size * 0.5; // Approx
          yPos += (lines.length * lineHeight); 
        } else {
          doc.text(text, margin, yPos);
        }
      }
      yPos += (size * 0.5) + 2; // Spacing
    };

    // --- HEADER ---
    addText("Pranaw Prakash", 24, "bold", colors.heading);
    yPos -= 2;
    addText("Engineering Undergraduate | AI & ML Engineer | Developer", 11, "normal", colors.accent);
    yPos += 4;
    
    // Contact Info
    doc.setFontSize(9);
    doc.setTextColor(colors.text);
    doc.text("9334991039 | pranawprakash.23@gmail.com", margin, yPos);
    yPos += 5;
    doc.textWithLink("linkedin.com/in/pranaw-prakash-383737354", margin, yPos, { url: "https://linkedin.com/in/pranaw-prakash-383737354" });
    yPos += 10;

    // --- PROFILE SUMMARY ---
    addText("Profile Summary", 14, "bold", colors.subheading);
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    
    const summary = "Engineering undergraduate at KIIT University specializing in Artificial Intelligence & Machine Learning. Passionate about computational innovation, system logic, and building impactful technology-driven solutions. Strong interest in AI-native systems, research, and product development.";
    const summaryLines = doc.splitTextToSize(summary, contentWidth);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(colors.text);
    doc.text(summaryLines, margin, yPos);
    yPos += (summaryLines.length * 5) + 6;

    // --- CORE COMPETENCIES ---
    addText("Core Competencies", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    
    const competencies = [
      "• System Logic & Computational Thinking",
      "• AI & Machine Learning Fundamentals",
      "• Programming (C)",
      "• Strategic Decision Making & Hackathons",
      "• Leadership & Management Skills"
    ];
    competencies.forEach(comp => {
      addText(comp, 10, "normal", colors.text);
    });
    yPos += 4;

    // --- EDUCATION ---
    addText("Education", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    
    // KIIT
    addText("KIIT – Kalinga Institute of Industrial Technology", 11, "bold", colors.heading);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("B.Tech in Computer Science & Engineering (AI & ML)", margin, yPos);
    doc.text("Jul 2025 – Jul 2029", pageWidth - margin, yPos, { align: "right" });
    yPos += 6;

    // VVM
    addText("Vivekananda Vidya Mandir, Ranchi", 11, "bold", colors.heading);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("CBSE – Intermediate", margin, yPos);
    doc.text("2022 – 2024", pageWidth - margin, yPos, { align: "right" });
    yPos += 6;
    
    // Lions
    addText("Lions Public School, Dhanbad", 11, "bold", colors.heading);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("CBSE – Matriculation", margin, yPos);
    doc.text("2013 – 2022", pageWidth - margin, yPos, { align: "right" });
    yPos += 10;

    // --- EXPERIENCE ---
    addText("Experience", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    
    addText("Content Creator – YouTube (Part-time)", 11, "bold", colors.heading);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Aug 2025 – Present", pageWidth - margin, yPos - 6, { align: "right" }); // Adjust yPos relative to heading
    
    const expDesc = "Documenting life journey and experiences to create meaningful, reflective, and value-driven content.";
    const expLines = doc.splitTextToSize(expDesc, contentWidth);
    doc.text(expLines, margin, yPos);
    yPos += (expLines.length * 5) + 8;

    // Check for page break needed
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }

    // --- PROJECTS ---
    addText("Projects", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    
    addText("CAMPUS CONNECT (2025)", 11, "bold", colors.heading);
    addText("Professional social networking platform for campus communities.", 10, "normal", colors.text);
    yPos += 2;
    
    addText("PRANOA (2025)", 11, "bold", colors.heading);
    addText("AI-powered mental health companion focused on emotional support and CBT-style guidance.", 10, "normal", colors.text, 'left', contentWidth); // ensure wrap
    yPos += 6;

    // --- CERTIFICATIONS ---
    addText("Certifications & Achievements", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    
    const certs = [
      "• KIITMUN – Model United Nations (Dec 2025)",
      "• MongoDB Certification (Dec 2025)",
      "• Omega 5.0 Hackathon – Participation (Aug 2025)"
    ];
    certs.forEach(cert => {
      addText(cert, 10, "normal", colors.text);
    });
    yPos += 4;

    // --- SKILLS & INTERESTS ---
    if (yPos > 240) {
        doc.addPage();
        yPos = 20;
    }
    addText("Skills & Interests", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    const skills = [
        "• Gaming & Competitive Strategy",
        "• Video Editing & Content Production",
        "• Travel, Cultural Exploration & Networking"
    ];
    skills.forEach(skill => {
        addText(skill, 10, "normal", colors.text);
    });
    yPos += 4;

    // --- LANGUAGES ---
    addText("Languages", 14, "bold", colors.subheading);
    doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
    yPos += 2;
    addText("• English – Professional Working Proficiency", 10, "normal", colors.text);
    addText("• Japanese – Elementary Proficiency", 10, "normal", colors.text);

    // Save
    doc.save("Pranaw_Prakash_CV.pdf");
  };

  return (
    <section id="contact" className="relative min-h-[60vh] flex flex-col items-center justify-center border-t border-white/5 bg-obsidian overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-purple/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="text-center space-y-12 relative z-10 px-4 w-full max-w-4xl mx-auto">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={ANIMATION_CONFIG}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 drop-shadow-2xl"
        >
          Ready to engineer<br />the inevitable
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...ANIMATION_CONFIG, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 w-full"
        >
            {/* LinkedIn Connect Button */}
            <motion.a
              href="https://www.linkedin.com/in/pranaw-prakash-383737354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/50 rounded-full transition-all duration-300 w-full md:w-auto justify-center backdrop-blur-md shadow-lg"
            >
              <div className="absolute inset-0 bg-[#0077b5]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <Linkedin className="w-5 h-5 text-white/70 group-hover:text-[#0077b5] transition-colors relative z-10" />
              <span className="font-mono text-sm tracking-widest text-white/70 group-hover:text-white transition-colors uppercase relative z-10">
                Connect on LinkedIn
              </span>
            </motion.a>

            {/* Premium Download CV Button */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-neon-purple/20 border border-white/10 hover:border-neon-purple/50 rounded-full transition-all duration-300 w-full md:w-auto justify-center backdrop-blur-md shadow-lg overflow-hidden cursor-pointer"
            >
               {/* Button Internal Glow */}
               <div className="absolute inset-0 bg-neon-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
               
               {/* Shine Effect */}
               <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

               <Download className="w-5 h-5 text-white/70 group-hover:text-neon-purple transition-colors relative z-10" strokeWidth={1.5} />
               <span className="font-mono text-sm tracking-widest text-white/70 group-hover:text-white transition-colors uppercase relative z-10">
                Download CV
              </span>
            </motion.button>
        </motion.div>
        
        {/* Footer Copyright/Signature */}
        <div className="pt-16 pb-8 border-t border-white/5 w-full">
            <p className="text-white/30 text-xs font-mono tracking-widest uppercase">
                Designed & Engineered by Pranaw Prakash © 2025
            </p>
        </div>
      </div>
    </section>
  );
};