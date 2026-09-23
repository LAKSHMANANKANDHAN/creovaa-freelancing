import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappCTAUrl = buildWhatsAppUrl(
    agencyData.contact.whatsappNumber,
    "Hi Creovaa, I'm ready to create something extraordinary together."
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-dark-950/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-500 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <span className="font-syne font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 text-lg tracking-wider">
                  C
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-xl tracking-[0.2em] text-white group-hover:text-purple-300 transition-colors duration-300">
                {agencyData.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans -mt-1 hidden sm:block">
                {agencyData.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 font-syne font-semibold flex items-center gap-1.5">
                Let's Create
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={whatsappCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full bg-purple-600/80 text-white font-medium flex items-center gap-1"
            >
              Let's Create
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl md:hidden pt-28 px-6 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-5">
              <span className="text-xs uppercase tracking-widest text-purple-400 font-mono mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="font-syne text-2xl font-bold text-slate-200 hover:text-white flex items-center justify-between py-2 border-b border-white/[0.06]"
                >
                  {link.label}
                  <ArrowUpRight className="w-5 h-5 text-purple-400" />
                </motion.a>
              ))}
            </div>

            <div className="pt-8 flex flex-col gap-4">
              <a
                href={whatsappCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl text-center font-syne font-bold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-500 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                Let's Create Together
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <div className="text-center text-xs text-slate-400 pt-2 font-mono">
                {agencyData.brandName} • {agencyData.tagline}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
