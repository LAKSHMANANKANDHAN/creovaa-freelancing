import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, Mail } from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const { contact } = agencyData;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    "Hi Creovaa, I'm reaching out from your website footer."
  );

  return (
    <footer className="relative bg-dark-950 border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-500 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-syne font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 text-lg">
                    C
                  </span>
                </div>
              </div>
              <span className="font-syne font-extrabold text-2xl tracking-[0.2em] text-white">
                {agencyData.brandName}
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-4">
              {agencyData.tagline}
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6 font-sans">
              {agencyData.positioning}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect / Socials (No LinkedIn, per explicit user request) */}
          <div className="lg:col-span-4">
            <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white mb-6">
              Connect With Us
            </h4>
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">WhatsApp</div>
                    <div className="text-[11px] font-mono text-slate-400">{contact.displayPhone}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram */}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Instagram</div>
                    <div className="text-[11px] font-mono text-slate-400">{contact.instagramHandle}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Call */}
              <a
                href={`tel:${contact.phoneTel}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Call Agency</div>
                    <div className="text-[11px] font-mono text-slate-400">{contact.displayPhone}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Email</div>
                    <div className="text-[11px] font-mono text-slate-400">{contact.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Creovaa. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Create. Edit. Elevate.</span>
            <span>•</span>
            <span className="text-slate-400">Creative Agency Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
