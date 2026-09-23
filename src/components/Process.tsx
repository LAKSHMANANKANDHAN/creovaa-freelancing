import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Palette, Rocket, ArrowRight } from 'lucide-react';
import { agencyData } from '../config/agencyData';

export const Process: React.FC = () => {
  const { process } = agencyData;

  const stepIcons = [Compass, Lightbulb, Palette, Rocket];

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-dark-900/40 overflow-hidden">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 noise-overlay opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4"
          >
            <span>{process.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-6xl text-white tracking-tight mb-4"
          >
            {process.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-sans"
          >
            {process.subtitle}
          </motion.p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {process.steps.map((item, idx) => {
            const IconComponent = stepIcons[idx % stepIcons.length];

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-7 glass-card border border-white/[0.08] hover:border-purple-500/40 transition-all duration-400 flex flex-col justify-between shadow-xl shadow-black/30"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-syne font-bold text-2xl text-white group-hover:text-purple-300 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Tag */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400">Deliverable:</span>
                  <span className="text-cyan-400/90 font-medium text-right text-[11px]">
                    {item.deliverable}
                  </span>
                </div>

                {/* Arrow indicator between steps on desktop */}
                {idx < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/20 group-hover:text-purple-400/60 transition-colors pointer-events-none">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
