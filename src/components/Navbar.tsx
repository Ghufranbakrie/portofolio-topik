import React from 'react';
import { motion } from 'motion/react';
import { Dna, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  return (
    <nav className="fixed top-0 w-full z-[60] bg-white/40 backdrop-blur-2xl border-b border-emerald-900/5">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-body italic text-2xl text-emerald-900"
        >
          Taufiqurrahman
        </motion.span>
        <div className="hidden md:flex gap-12 items-center">
          <NavLink href="#" active>Beranda</NavLink>
          <NavLink href="#about">Tentang Saya</NavLink>
          <NavLink href="#research">Proyek & Riset</NavLink>
          <NavLink href="#publications">Publikasi</NavLink>
          <NavLink href="#contact">Kontak</NavLink>
          <button 
            onClick={onOpenCV}
            className="flex items-center gap-2 font-label font-medium uppercase tracking-wider text-[0.75rem] text-emerald-900/60 hover:text-emerald-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            CV
          </button>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Dna className="text-emerald-900 w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean }> = ({ href, children, active }) => (
  <a 
    href={href}
    className={`font-label font-medium uppercase tracking-wider text-[0.75rem] transition-colors duration-300 ${
      active ? 'text-emerald-700 border-b-2 border-emerald-700 pb-1' : 'text-emerald-900/60 hover:text-emerald-700'
    }`}
  >
    {children}
  </a>
);
