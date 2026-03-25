import React from 'react';
import { motion } from 'motion/react';
import { FileText, Link as LinkIcon, FileJson } from 'lucide-react';

export const Publications: React.FC = () => {
  return (
    <section className="py-32 bg-surface-container-low" id="publications">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-bold text-primary mb-16 text-center"
        >
          Publikasi Akademik
        </motion.h2>
        <div className="space-y-6">
          <PublicationItem 
            type="Scientific Journal"
            title="Genomic Diversity of Endemic Orchidaceae in Central Java"
            author="Taufiqurrahman, et al. — Journal of Tropical Biology (2023)"
            delay={0}
          />
          <PublicationItem 
            type="Conference Paper"
            title="Microbial Succession in Rehabilitated Peatlands"
            author="Presented at International Student Science Conf. (2022)"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
};

const PublicationItem: React.FC<{ type: string; title: string; author: string; delay: number }> = ({ type, title, author, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:translate-x-4 transition-all duration-500 shadow-sm hover:shadow-xl group"
  >
    <div className="flex-1">
      <span className="font-label text-[0.65rem] text-primary bg-primary/10 px-3 py-1 mb-4 inline-block uppercase tracking-widest font-bold">
        {type}
      </span>
      <h3 className="font-body text-2xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
        "{title}"
      </h3>
      <p className="text-on-surface-variant text-sm mt-3 italic">{author}</p>
    </div>
    <div className="flex gap-3">
      <a 
        href="#" 
        className="p-4 rounded-full bg-surface-container hover:bg-primary hover:text-white transition-all shadow-sm"
      >
        <FileText className="w-5 h-5" />
      </a>
      <a 
        href="#" 
        className="p-4 rounded-full bg-surface-container hover:bg-primary hover:text-white transition-all shadow-sm"
      >
        <LinkIcon className="w-5 h-5" />
      </a>
    </div>
  </motion.div>
);
