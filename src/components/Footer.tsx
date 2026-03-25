import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low border-t border-emerald-900/5 py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <span className="font-body font-bold text-2xl text-emerald-900 block mb-2">
            Taufiqurrahman
          </span>
          <p className="font-label text-[0.7rem] uppercase tracking-widest text-emerald-900/40">
            © 2024 Researcher — Biological Sciences
          </p>
        </div>
        <div className="flex gap-10">
          <FooterLink href="#">LinkedIn</FooterLink>
          <FooterLink href="#">Google Scholar</FooterLink>
          <FooterLink href="#">ResearchGate</FooterLink>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href}
    className="font-label text-[0.7rem] uppercase tracking-widest text-emerald-900/50 hover:text-emerald-900 transition-colors"
  >
    {children}
  </a>
);
