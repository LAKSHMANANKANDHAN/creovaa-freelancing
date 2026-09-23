import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { agencyData, buildWhatsAppUrl } from '../config/agencyData';
import { InstagramIcon } from './InstagramIcon';

interface FormState {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { contact } = agencyData;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionOption, setSubmissionOption] = useState<'whatsapp' | 'email'>('whatsapp');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = 'Please provide your name';
    } else if (form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!form.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!form.mobile.trim()) {
      errs.mobile = 'Please provide your mobile number';
    } else if (!/^[0-9+-\s()]{7,20}$/.test(form.mobile.trim())) {
      errs.mobile = 'Please enter a valid mobile number';
    }

    if (!form.message.trim()) {
      errs.message = 'Please share a brief message about your project';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);

    // If configured to dispatch via WhatsApp directly:
    const formattedMsg = `Hi Creovaa,\n\nName: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\n\nProject Brief:\n${form.message}`;

    if (submissionOption === 'whatsapp') {
      const waUrl = buildWhatsAppUrl(contact.whatsappNumber, formattedMsg);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } else {
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Project Inquiry from ${form.name}`
      )}&body=${encodeURIComponent(formattedMsg)}`;
      window.location.href = mailtoUrl;
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', mobile: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const directOptions = [
    {
      title: 'WhatsApp Chat',
      value: contact.displayPhone,
      sub: 'Direct creative discussion',
      icon: MessageCircle,
      href: buildWhatsAppUrl(
        contact.whatsappNumber,
        "Hi Creovaa, I'd like to get in touch regarding a creative project."
      ),
      color: 'hover:text-emerald-400 hover:border-emerald-500/40',
      badge: 'Fastest Response',
      isExternal: true,
    },
    {
      title: 'Direct Call',
      value: contact.displayPhone,
      sub: 'Available business hours',
      icon: Phone,
      href: `tel:${contact.phoneTel}`,
      color: 'hover:text-cyan-400 hover:border-cyan-500/40',
      badge: 'Voice Call',
      isExternal: false,
    },
    {
      title: 'Instagram',
      value: contact.instagramHandle,
      sub: 'Visuals & behind the scenes',
      icon: InstagramIcon,
      href: contact.instagramUrl,
      color: 'hover:text-pink-400 hover:border-pink-500/40',
      badge: '@creovaa',
      isExternal: true,
    },
    {
      title: 'Email Studio',
      value: contact.email,
      sub: 'For RFPs and deep briefs',
      icon: Mail,
      href: `mailto:${contact.email}`,
      color: 'hover:text-purple-400 hover:border-purple-500/40',
      badge: 'Official Inquiry',
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-dark-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-syne font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4"
          >
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              That Stands Out.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-sans"
          >
            Have a project in mind or want to elevate your brand presence? Fill out the brief or reach out directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: DIRECT COMMUNICATION CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-syne font-bold text-xl text-white mb-2">
              Direct Communication
            </h3>
            <p className="text-sm text-slate-400 font-sans mb-4">
              Connect directly with our creative leadership through your preferred channel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {directOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <a
                    key={opt.title}
                    href={opt.href}
                    target={opt.isExternal ? '_blank' : undefined}
                    rel={opt.isExternal ? 'noopener noreferrer' : undefined}
                    className={`p-5 rounded-2xl glass-card border border-white/[0.08] ${opt.color} transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-lg`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-syne font-bold text-base text-white">
                            {opt.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-400">
                            {opt.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{opt.value}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5 font-sans">{opt.sub}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/[0.1] shadow-2xl shadow-black/50 relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-syne font-bold text-2xl text-white mb-2">
                      Inquiry Ready & Sent!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-8">
                      Thank you, <span className="text-purple-300 font-semibold">{form.name}</span>. Your brief has been prepared. Our creative team will get back to you shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/10 text-white text-sm font-medium border border-white/10 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="e.g. John Doe"
                          className={`w-full px-4 py-3 rounded-xl bg-dark-900/80 border ${
                            errors.name ? 'border-rose-500/80' : 'border-white/10 focus:border-purple-500'
                          } text-white placeholder-slate-400 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="e.g. john@brand.com"
                          className={`w-full px-4 py-3 rounded-xl bg-dark-900/80 border ${
                            errors.email ? 'border-rose-500/80' : 'border-white/10 focus:border-purple-500'
                          } text-white placeholder-slate-400 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={form.mobile}
                        onChange={(e) => {
                          setForm({ ...form, mobile: e.target.value });
                          if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                        }}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900/80 border ${
                          errors.mobile ? 'border-rose-500/80' : 'border-white/10 focus:border-purple-500'
                        } text-white placeholder-slate-400 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.mobile && (
                        <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Project Message / Brief *
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell us about your brand, services needed, timeline, or objectives..."
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900/80 border ${
                          errors.message ? 'border-rose-500/80' : 'border-white/10 focus:border-purple-500'
                        } text-white placeholder-slate-400 text-sm focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Dispatch via WhatsApp / Email toggle */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                      <span>Send inquiry directly via:</span>
                      <div className="inline-flex rounded-lg p-0.5 bg-dark-900 border border-white/10">
                        <button
                          type="button"
                          onClick={() => setSubmissionOption('whatsapp')}
                          className={`px-3 py-1 rounded-md transition-all ${
                            submissionOption === 'whatsapp'
                              ? 'bg-emerald-500 text-dark-950 font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={() => setSubmissionOption('email')}
                          className={`px-3 py-1 rounded-md transition-all ${
                            submissionOption === 'email'
                              ? 'bg-purple-600 text-white font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Email
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-syne font-bold text-base text-white bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-500 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Communicate</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-[11px] text-slate-400 font-sans">
                      Frontend validated. No third-party spam. Opens direct conversation with Creovaa.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
