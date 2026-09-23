import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';

export const Impact: React.FC = () => {
  const { impact, contact } = agencyData;
  const whatsappUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    "Hi Creovaa, Let's create together! I have an idea I want to turn into impact."
  );

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Visual Container with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src={impact.backgroundImage}
          alt="Creovaa Ideas Into Impact Background"
          className="w-full h-full object-cover object-center filter brightness-[0.25] saturate-150 scale-105"
        />
        {/* Deep gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/70 to-dark-950" />
        <div className="absolute inset-0 bg-radial-gradient from-purple-900/30 via-transparent to-dark-950/80" />
      </div>

      {/* Floating decorative light trails */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        {/* Subtle pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono uppercase tracking-[0.2em] text-cyan-300 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Ideas Into Impact</span>
        </motion.div>

        {/* Massive Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6"
        >
          {impact.statement} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
            {impact.highlight}
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {impact.supportingText}
        </motion.p>

        {/* Magnetic CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-9 py-5 rounded-full font-syne font-bold text-lg text-white bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-500 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.45)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-emerald-300" />
            <span>{impact.ctaText}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
