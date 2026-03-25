import React from 'react';
import { motion } from 'motion/react';
import { FileText, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-40 bg-primary text-on-primary relative overflow-hidden" id="contact">
      <div className="absolute inset-0 micro-grid opacity-10" />
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-5xl md:text-7xl font-bold mb-10"
        >
          Mari Berkolaborasi <br />
          <span className="italic font-body font-normal opacity-80">Demi Masa Depan</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-white/70 mb-16 font-body"
        >
          Terbuka untuk diskusi mengenai bioteknologi, konservasi, atau proyek akademik kolaboratif.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <a 
            href="mailto:ghufran.bakrie@gmail.com" 
            className="bg-white text-primary px-12 py-6 rounded-full font-label font-bold uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-3"
          >
            <Send className="w-5 h-5" /> Kirim Pesan
          </a>
          <button 
            onClick={() => window.print()} // Simple print trigger for now or could link to CV
            className="border border-white/30 text-white px-12 py-6 rounded-full font-label font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3"
          >
            <FileText className="w-5 h-5" /> Cetak Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
