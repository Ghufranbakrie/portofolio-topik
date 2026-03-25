import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, BarChart3, Eye, Globe } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-headline text-5xl font-bold text-primary mb-6">Keahlian Teknis</h2>
          <p className="font-body text-2xl text-on-surface-variant italic max-w-2xl mx-auto">
            Sinergi antara ketelitian laboratorium dan analisis komputasi modern.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          <SkillItem 
            icon={<FlaskConical className="w-10 h-10" />}
            title="PCR & DNA"
            label="Molecular Tech"
            rotate={3}
          />
          <SkillItem 
            icon={<BarChart3 className="w-10 h-10" />}
            title="Data Analysis"
            label="R / Python / BioC"
            rotate={-3}
            delay={0.1}
          />
          <SkillItem 
            icon={<Eye className="w-10 h-10" />}
            title="Microscopy"
            label="SEM & Fluor"
            rotate={6}
            delay={0.2}
          />
          <SkillItem 
            icon={<Globe className="w-10 h-10" />}
            title="Field Work"
            label="Sampling & Tax"
            rotate={-6}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ icon: React.ReactNode; title: string; label: string; rotate: number; delay?: number }> = ({ icon, title, label, rotate, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="text-center"
  >
    <motion.div 
      whileHover={{ rotate: 0 }}
      animate={{ rotate }}
      className="w-24 h-24 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform shadow-sm"
    >
      <div className="text-primary">
        {icon}
      </div>
    </motion.div>
    <h4 className="font-headline font-bold text-primary text-lg mb-2">{title}</h4>
    <p className="text-[0.65rem] font-label uppercase text-outline tracking-widest">{label}</p>
  </motion.div>
);
