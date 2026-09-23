import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { agencyData } from '../config/agencyData';

export const About: React.FC = () => {
  const { about } = agencyData;

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-dark-900/60 overflow-hidden">
      {/* Background subtle mesh glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Heading Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{about.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-syne font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]"
            >
              Transforming Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                Enduring Digital Impact
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-md"
          >
            <p className="text-slate-300/90 leading-relaxed text-sm sm:text-base border-l-2 border-purple-500/40 pl-5">
              {about.paragraph}
            </p>
          </motion.div>
        </div>

        {/* 3 Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {about.features.map((feature, idx) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/[0.08] hover:border-purple-500/40 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-black/40"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-dark-850">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider font-semibold text-white/90 bg-dark-950/70 backdrop-blur-md border border-white/10">
                    {feature.tag}
                  </span>
                </div>

                {/* Glowing Number Indicator */}
                <div className="absolute top-4 right-4 z-10 w-11 h-11 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                  {feature.number}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-purple-600/30 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-300/80 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>

                {/* Micro-interaction detail */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Creovaa Standard</span>
                </div>
              </div>

              {/* Bottom Subtle Gradient Bar on Hover */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
