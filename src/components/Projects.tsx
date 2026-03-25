import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Microscope, Droplets, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="py-32 bg-surface" id="research">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4">Scientific Portfolio</p>
            <h2 className="font-headline text-5xl font-bold text-primary">Proyek & Riset Terpilih</h2>
          </motion.div>
          <motion.a 
            whileHover={{ x: 10 }}
            href="#" 
            className="group text-primary font-label text-sm uppercase tracking-widest flex items-center gap-3 mt-8 md:mt-0"
          >
            Lihat Semua <TrendingUp className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main Project */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative overflow-hidden bg-primary-container min-h-[500px] flex flex-col justify-end p-12 shadow-2xl"
          >
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-[3s] ease-out">
              <img 
                alt="DNA Sequencing" 
                className="w-full h-full object-cover opacity-60" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGmWrufqJa8mX3CUEym-FQei6ST21ZlKed7nkPvL20pFEH-lo59RNw5Zr5fu5kmxrSTq2SU11j0Y3XhKkE92QMR8Xny0OwLVYlRzvddm_RMeIZehnilpvd8zvGHP4wbcWszvWkYQgVjS6m640Ev3zxrQti1hswRhDE4YGK2gD4LJcX3sZAmviMo8pv0jHOc6YXjTHUMHIUzqRH1vOsajOZCLRZavfDT26xir8O_5zoNY5Oa9stc00pMbObvbwo2C0GFwHyuIZsBuM"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
            <div className="relative z-10">
              <span className="font-label text-[0.6rem] uppercase tracking-[0.2em] bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md mb-6 inline-block text-white">
                Genomic Study
              </span>
              <h3 className="font-headline text-4xl font-bold text-white mb-6 leading-tight">Analisis Sekuensing DNA Endemik</h3>
              <p className="text-white/70 max-w-lg mb-8 text-lg font-body">
                Variasi genetik flora endemik di wilayah pegunungan Jawa Tengah menggunakan metode Next-Generation Sequencing.
              </p>
              <div className="flex gap-6">
                <span className="text-xs font-label uppercase tracking-widest text-white/40">#Genetics</span>
                <span className="text-xs font-label uppercase tracking-widest text-white/40">#Biodiversity</span>
              </div>
            </div>
          </motion.div>

          {/* Side Projects */}
          <div className="flex flex-col gap-8">
            <ProjectCard 
              icon={<Microscope className="w-8 h-8" />}
              title="Mikrobiologi Tanah"
              description="Studi komunitas mikroba pada lahan gambut pasca rehabilitasi."
              delay={0.1}
            />
            <ProjectCard 
              icon={<Droplets className="w-8 h-8" />}
              title="Kualitas Air"
              description="Bioindikator makroinvertebrata untuk kesehatan sungai urban."
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group bg-surface-container-high p-10 flex flex-col justify-between hover:bg-primary transition-all duration-500 cursor-pointer"
  >
    <div>
      <div className="text-primary group-hover:text-white mb-8 transition-colors">
        {icon}
      </div>
      <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-white mb-4 transition-colors">
        {title}
      </h3>
      <p className="text-on-surface-variant group-hover:text-white/70 text-base leading-relaxed mb-6 transition-colors">
        {description}
      </p>
    </div>
    <span className="inline-flex items-center text-primary group-hover:text-white font-label text-xs uppercase tracking-widest font-bold transition-colors">
      Detail <ArrowUpRight className="ml-2 w-4 h-4" />
    </span>
  </motion.div>
);
