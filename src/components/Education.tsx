import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Leaf, FlaskConical } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="font-headline text-4xl font-bold text-primary tracking-tight leading-none mb-6">
              Latar Belakang Pendidikan
            </h2>
            <div className="h-[2px] w-24 bg-primary-container" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8"
          >
            <div className="bg-surface-container-lowest p-12 shadow-sm border-l-4 border-primary hover:shadow-xl transition-shadow group">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-primary group-hover:text-secondary transition-colors">
                    S1 Biologi
                  </h3>
                  <p className="text-secondary font-medium italic text-xl mt-1">
                    Universitas Gadjah Mada
                  </p>
                </div>
                <span className="font-label text-[0.7rem] bg-secondary-container/50 px-4 py-1.5 rounded-full text-on-secondary-container uppercase tracking-widest mt-4 md:mt-0">
                  2018 — 2022
                </span>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-2xl">
                Fokus pada Biologi Molekuler dan Genetika. Mengembangkan pemahaman mendalam tentang mekanisme seluler serta interaksi ekosistem tropis yang kompleks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <span className="font-label text-xs uppercase tracking-wider text-outline font-semibold">
                    Genetika Populasi
                  </span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-all">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span className="font-label text-xs uppercase tracking-wider text-outline font-semibold">
                    Ekologi Tropis
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
