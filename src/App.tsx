import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      {/* Interactive Micro-Interactions */}
      <CustomCursor />
      <ScrollProgress />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content Flow: CREOVAA -> WHO WE ARE -> WHAT WE DO -> HOW WE CREATE -> IDEAS INTO IMPACT -> CONTACT */}
      <main>
        {/* 1. HERO (CREOVAA) */}
        <Hero />

        {/* 2. ABOUT (WHO WE ARE) */}
        <About />

        {/* 3. SERVICES (WHAT WE DO) */}
        <Services />

        {/* 4. PROCESS (HOW WE CREATE) */}
        <Process />

        {/* 5. IMPACT (IDEAS INTO IMPACT) */}
        <Impact />

        {/* 6. CONTACT (LET'S BUILD SOMETHING THAT STANDS OUT) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp, Instagram, Call) */}
      <FloatingActions />
    </div>
  );
};

export default App;
