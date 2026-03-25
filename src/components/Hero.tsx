import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, FlaskConical, FileText } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <header className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="hero">
      <div className="absolute inset-0 micro-grid z-0" />
      <Leaf className="absolute top-1/4 left-10 w-[120px] h-[120px] opacity-[0.03] rotate-12" />
      <FlaskConical className="absolute bottom-1/4 right-10 w-[150px] h-[150px] opacity-[0.03] -rotate-12" />
      
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6 block">
            Peneliti Biologi & Akademisi
          </p>
          <h1 className="font-headline text-5xl md:text-8xl font-bold text-primary mb-8 leading-[1] tracking-tight">
            Mengungkap<br />
            <span className="italic font-body font-normal text-secondary inline-block">Rahasia Alam</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
            Eksplorasi kompleksitas kehidupan melalui riset molekuler dan ekologi berkelanjutan untuk masa depan bumi.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#contact" 
              className="bg-primary text-on-primary px-8 py-5 rounded-full font-label font-semibold tracking-wide hover:shadow-2xl transition-all flex items-center gap-2 group"
            >
              Mulai Kolaborasi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onOpenCV}
              className="text-primary border-b border-primary/20 hover:border-primary pb-1 px-2 font-label font-semibold tracking-wide transition-all self-center flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Lihat Resume Digital
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="order-1 md:order-2 relative group"
        >
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-sm transition-all duration-1000 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-[#D32F2F]/10 mix-blend-multiply z-10" /> {/* Subtle red tint to match background */}
            <img 
              alt="Taufiqurrahman - Animated Professional Portrait" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl max-w-[220px] z-20"
          >
            <span className="font-label text-[0.6rem] uppercase tracking-widest text-outline block mb-3 border-b pb-2">
              Batch ID: TAU-2024
            </span>
            <p className="text-sm font-body italic text-secondary leading-relaxed">
              "Sains bukan sekadar data, melainkan cara kita menghargai kehidupan."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};
