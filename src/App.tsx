import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ButterflyEffect } from './components/ButterflyEffect';
import { CustomCursor } from './components/CustomCursor';
import { CVModal } from './components/CVModal';

const GrainOverlay: React.FC = () => <div className="grain-overlay" />;

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <CustomCursor />
      <GrainOverlay />
      <ButterflyEffect />
      
      <Navbar onOpenCV={() => setIsCVOpen(true)} />
      
      <main>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <Education />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </main>
      
      <Footer />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
