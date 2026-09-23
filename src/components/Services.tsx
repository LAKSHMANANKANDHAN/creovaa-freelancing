import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Sparkles, Layers } from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';

export const Services: React.FC = () => {
  const { services, contact } = agencyData;

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-dark-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-purple-400 mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{services.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-6xl text-white tracking-tight mb-4"
          >
            {services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-sans"
          >
            {services.subtitle}
          </motion.p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service, index) => {
            const serviceWhatsAppUrl = buildWhatsAppUrl(
              contact.whatsappNumber,
              service.whatsappMessage
            );

            return (
              <motion.a
                key={service.id}
                href={serviceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden glass-card border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-between shadow-lg shadow-black/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                {/* Service Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-dark-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                  {/* Service Number Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10 font-mono text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {service.number}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-0.5 rounded-full bg-white/[0.08] backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-slate-300">
                    {service.category}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-dark-900/40">
                  <div>
                    <h3 className="font-syne font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Direct WhatsApp Call to Action Indicator */}
                  <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </span>

                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-purple-600/30 group-hover:border-purple-400/40 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Subtle Neon Underline reveal */}
                <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.a>
            );
          })}
        </div>

        {/* WhatsApp Custom Inquiry Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Need a customized combination of services?</span>
          <a
            href={buildWhatsAppUrl(
              contact.whatsappNumber,
              "Hi Creovaa, I need a custom package combining multiple creative services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-4 font-semibold"
          >
            Start a custom consultation on WhatsApp &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
