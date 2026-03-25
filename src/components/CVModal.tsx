import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Download, Printer, X } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header Controls */}
        <div className="flex justify-between items-center p-4 border-b bg-surface-container-lowest sticky top-0 z-10">
          <h2 className="font-headline font-bold text-primary">Curriculum Vitae</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrint}
              className="p-2 hover:bg-primary/10 text-primary rounded-full transition-colors"
              title="Cetak CV"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-destructive/10 text-destructive rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="overflow-y-auto p-8 md:p-12 bg-white print:p-0" id="cv-content">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <div className="aspect-square bg-surface-container rounded-sm overflow-hidden grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop" 
                  alt="Taufiqurrahman"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <section>
                <h3 className="font-label text-xs uppercase tracking-widest text-primary border-b pb-2 mb-4">Kontak</h3>
                <ul className="space-y-3 text-sm font-body text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary" />
                    taufiq@ugm.ac.id
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary" />
                    +62 812 3456 7890
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary" />
                    Yogyakarta, Indonesia
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="font-label text-xs uppercase tracking-widest text-primary border-b pb-2 mb-4">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {['PCR', 'DNA Sequencing', 'R Analysis', 'Python', 'Microscopy', 'Field Sampling'].map(skill => (
                    <span key={skill} className="text-[10px] font-label uppercase tracking-wider bg-surface-container px-2 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">
              <header>
                <h1 className="font-headline text-4xl font-bold text-primary mb-2">Taufiqurrahman</h1>
                <p className="text-secondary font-body italic text-lg">Peneliti Biologi & Akademisi</p>
              </header>

              <section>
                <h3 className="font-label text-xs uppercase tracking-widest text-primary border-b pb-2 mb-6">Profil Profesional</h3>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  Lulusan Biologi Universitas Gadjah Mada dengan fokus pada genetika molekuler dan ekologi tropis. Berpengalaman dalam riset lapangan dan analisis laboratorium menggunakan teknologi sekuensing terkini. Berkomitmen pada pelestarian biodiversitas melalui pendekatan saintifik.
                </p>
              </section>

              <section>
                <h3 className="font-label text-xs uppercase tracking-widest text-primary border-b pb-2 mb-6">Pendidikan</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline font-bold text-primary">S1 Biologi</h4>
                      <span className="text-xs font-label text-outline">2018 — 2022</span>
                    </div>
                    <p className="text-secondary font-body italic">Universitas Gadjah Mada</p>
                    <p className="text-sm text-on-surface-variant mt-2">IPK: 3.85/4.00. Fokus: Genetika Populasi & Biologi Molekuler.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-label text-xs uppercase tracking-widest text-primary border-b pb-2 mb-6">Pengalaman Riset</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline font-bold text-primary">Asisten Peneliti</h4>
                      <span className="text-xs font-label text-outline">2022 — Sekarang</span>
                    </div>
                    <p className="text-secondary font-body italic">Lab Genetika Molekuler UGM</p>
                    <ul className="list-disc list-inside text-sm text-on-surface-variant mt-2 space-y-1">
                      <li>Menganalisis variasi genetik flora endemik Jawa.</li>
                      <li>Mengoperasikan alat NGS (Next Generation Sequencing).</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="p-4 bg-surface-container-low border-t flex justify-center">
          <button 
            onClick={handlePrint}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <Download className="w-4 h-4" /> Unduh PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
};
