import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';
import { InstagramIcon } from './InstagramIcon';

export const FloatingActions: React.FC = () => {
  const { contact } = agencyData;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const whatsappUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    "Hi Creovaa, I'm reaching out through your website floating chat."
  );

  const actions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Chat',
      icon: MessageCircle,
      href: whatsappUrl,
      bg: 'bg-emerald-500 hover:bg-emerald-400',
      shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]',
      textColor: 'text-dark-950',
      isExternal: true,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: InstagramIcon,
      href: contact.instagramUrl,
      bg: 'bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 hover:from-amber-400 hover:to-purple-500',
      shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]',
      textColor: 'text-white',
      isExternal: true,
    },
    {
      id: 'call',
      label: 'Call Agency',
      icon: Phone,
      href: `tel:${contact.phoneTel}`,
      bg: 'bg-cyan-500 hover:bg-cyan-400',
      shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]',
      textColor: 'text-dark-950',
      isExternal: false,
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      aria-label="Direct contact options"
      className="fixed right-4 sm:right-6 bottom-8 z-40 flex flex-col items-end gap-3"
    >
      {actions.map((action, idx) => {
        const Icon = action.icon;
        const isHovered = hoveredIdx === idx;

        return (
          <div
            key={action.id}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Tooltip Label */}
            <motion.div
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? -12 : 0,
                scale: isHovered ? 1 : 0.9,
              }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute right-full mr-1 whitespace-nowrap rounded-xl bg-dark-900/95 px-3 py-1.5 text-xs font-mono font-medium text-white shadow-xl border border-white/10 backdrop-blur-md hidden sm:block"
            >
              {action.label}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-dark-900 rotate-45 border-t border-r border-white/10" />
            </motion.div>

            {/* Action Button */}
            <motion.a
              href={action.href}
              target={action.isExternal ? '_blank' : undefined}
              rel={action.isExternal ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.12, rotate: idx % 2 === 0 ? 4 : -4 }}
              whileTap={{ scale: 0.92 }}
              aria-label={action.label}
              className={`w-12 h-12 rounded-full ${action.bg} ${action.shadow} ${action.textColor} flex items-center justify-center transition-all duration-300 cursor-pointer`}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          </div>
        );
      })}
    </motion.aside>
  );
};
