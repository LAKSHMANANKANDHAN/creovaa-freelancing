import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';
import { InstagramIcon } from './InstagramIcon';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = agencyData.hero.slides;

  // Auto sliding every 5 seconds, pausing on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const whatsappHeroUrl = buildWhatsAppUrl(
    agencyData.contact.whatsappNumber,
    "Hi Creovaa, I'd like to start a new project with your agency."
  );

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-28 flex items-center overflow-hidden noise-overlay"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT / MAIN AREA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-wider text-purple-300 mb-6 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{agencyData.hero.badge}</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-400">2026 Creative Lab</span>
            </motion.div>

            {/* CREOVAA Brand & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4"
            >
              <h2 className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-purple-300 uppercase">
                {agencyData.brandName}
              </h2>
              <p className="font-mono text-sm sm:text-base tracking-[0.3em] uppercase text-cyan-400/90 mt-1 font-semibold">
                {agencyData.tagline}
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-syne font-bold text-4xl sm:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-white mb-6"
            >
              Together We Build Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                That Stand Out
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {agencyData.hero.supportingText}
            </motion.p>

            {/* Main CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-syne font-bold text-base text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-cyan-400 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-syne font-medium text-base text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Action / Contact Buttons in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-4 border-t border-white/[0.08] w-full"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-slate-400">
                <span className="font-mono uppercase tracking-wider text-slate-400">Direct Actions:</span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* WhatsApp */}
                  <a
                    href={whatsappHeroUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-medium transition-all duration-200 group"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={agencyData.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 hover:text-pink-300 text-xs font-medium transition-all duration-200 group"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Call */}
                  <a
                    href={`tel:${agencyData.contact.phoneTel}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-all duration-200 group"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Agency</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: ANIMATED IMAGE SHOWCASE / CAROUSEL */}
          <div className="lg:col-span-5 relative">
            {/* Ambient decorative elements */}
            <div className="absolute -top-10 -right-8 w-44 h-44 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-6 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent blur-2xl pointer-events-none" />

            {/* Floating creative badge top-right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-left-6 z-20 px-4 py-2.5 rounded-2xl bg-dark-850/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-purple-300 uppercase tracking-widest font-semibold">
                  Creative Studio
                </span>
                <span className="text-xs font-bold text-white">Impact Driven</span>
              </div>
            </motion.div>

            {/* Floating stat bottom-right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 z-20 px-4 py-3 rounded-2xl bg-dark-850/95 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Approach
                </span>
                <span className="text-xs font-bold text-white">100% Bespoke</span>
              </div>
            </motion.div>

            {/* Main Carousel Container */}
            <div
              className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/[0.1] backdrop-blur-xl shadow-2xl shadow-purple-950/30 overflow-hidden group/carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Background image */}
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].alt}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
                    />

                    {/* Gradient scrim for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                    {/* Slide details overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
                      <div className="inline-flex items-center gap-2 mb-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold text-white backdrop-blur-md border border-white/20"
                          style={{ backgroundColor: `${slides[currentSlide].accentColor}80` }}
                        >
                          {slides[currentSlide].tag}
                        </span>
                        <span className="text-xs font-mono text-slate-300">
                          0{slides[currentSlide].id} / 0{slides.length}
                        </span>
                      </div>

                      <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mb-1">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300/80 font-sans">
                        {slides[currentSlide].subtitle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Manual Navigation Arrows (appear on hover) */}
                <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-10 opacity-70 group-hover/carousel:opacity-100 transition-opacity">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="pointer-events-auto p-2.5 rounded-full bg-dark-900/70 hover:bg-dark-900 border border-white/15 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-md shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="pointer-events-auto p-2.5 rounded-full bg-dark-900/70 hover:bg-dark-900 border border-white/15 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-md shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dot Pagination indicators */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1.5 rounded-full bg-dark-950/60 backdrop-blur-md border border-white/10">
                  {slides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
