import type { AgencyData } from '../types';

/**
 * =======================================================================
 * CREOVAA AGENCY MASTER CONFIGURATION
 * =======================================================================
 * You can easily update contact details, phone numbers, social links,
 * and image placeholders in this single file whenever you are ready!
 */

export const agencyData: AgencyData = {
  brandName: 'CREOVAA',
  tagline: 'Create. Edit. Elevate.',
  positioning:
    'Creovaa is a modern creative digital agency that helps brands turn ideas into impactful digital experiences through creative strategy, content, design, photography, videography, AI-powered content, and social media.',

  // -------------------------------------------------------------
  // CONTACT & SOCIAL DETAILS (EASILY REPLACE WITH YOUR REAL DETAILS)
  // -------------------------------------------------------------
  contact: {
    // Digits only, including country code (e.g. 919876543210 for India, 1234567890 for US)
    whatsappNumber: '919787070553',

    // Display formatted phone number for UI
    displayPhone: '+91 97870 70553',

    // Phone dialer target (tel:)
    phoneTel: '+919787070553',

    // Instagram URL and Handle
    instagramUrl: 'https://www.instagram.com/creovaamedia?utm_source=qr&stkn=ZWJ4b2R0c2k4YnIz',
    instagramHandle: '@creovaamedia',

    // Email address
    email: 'creovaamedia@gmail.com',

    location: 'Available Worldwide / Remote & On-Site',
  },

  // -------------------------------------------------------------
  // HERO SECTION
  // -------------------------------------------------------------
  hero: {
    badge: 'Creative Digital Studio',
    headline: {
      line1: 'Together We Build Brands',
      line2: 'That Stand Out',
    },
    supportingText:
      'We create. We strategize. We grow — creative digital solutions for modern brands, turning ideas into impact.',
    
    // 3 Curated Hero Carousel Images (From user assets)
    slides: [
      {
        id: 1,
        title: 'Editorial Visuals & Strategy',
        subtitle: 'Crafting timeless digital identities',
        tag: 'Creative Direction',
        accentColor: '#8B5CF6',
        image: '/images/hero-strategy.png',
        alt: 'AI Strategy, Transformation and Executive Insights',
      },
      {
        id: 2,
        title: 'Cinematic Motion & AI',
        subtitle: 'Dynamic storytelling engineered for engagement',
        tag: 'Motion & AI',
        accentColor: '#06B6D4',
        image: '/images/hero-cinematic-motion.jpg',
        alt: 'Image to Video AI - Turn Any Picture Into Cinematic Motion',
      },
      {
        id: 3,
        title: 'High-Impact Brand Design',
        subtitle: 'Turning complex ideas into cultural resonance',
        tag: 'Design Systems',
        accentColor: '#EC4899',
        image: '/images/hero-brand-design.png',
        alt: 'High-Impact Branding Mockups and Design Systems',
      },
    ],
  },

  // -------------------------------------------------------------
  // ABOUT SECTION
  // -------------------------------------------------------------
  about: {
    badge: 'Who We Are',
    headline: 'We craft iconic digital experiences that leave a lasting mark.',
    paragraph:
      'Creovaa is a modern creative digital agency that helps brands turn ideas into impactful digital experiences through creative strategy, content, design, photography, videography, AI-powered content, and social media. We bridge the gap between imagination and execution, helping visionary brands lead their categories.',
    features: [
      {
        number: '01',
        title: 'Modern Solution',
        tag: 'Innovation & Strategy',
        description:
          'Modern creative and digital solutions tailored to contemporary culture, algorithms, and consumer behavior.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop', // <-- REPLACE WITH ABOUT IMAGE 1
      },
      {
        number: '02',
        title: 'Designing',
        tag: 'Visual Identity',
        description:
          'Highlighting creative design, visual identity, and immersive digital experiences that command attention.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=900&auto=format&fit=crop', // <-- REPLACE WITH ABOUT IMAGE 2
      },
      {
        number: '03',
        title: 'Partnership',
        tag: 'Collaborative Growth',
        description:
          'Working closely with clients as an invested partner to build, scale, and sustainably grow their brands.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop', // <-- REPLACE WITH ABOUT IMAGE 3
      },
    ],
  },

  // -------------------------------------------------------------
  // SERVICES SECTION (8 REQUESTED SERVICES)
  // -------------------------------------------------------------
  services: {
    badge: 'What We Do',
    title: 'What We Do',
    subtitle: 'Creative solutions designed to make your brand stand out.',
    items: [
      {
        id: 'social-media-management',
        number: '01',
        title: 'Social Media Management',
        shortDesc:
          'Managing and growing your social presence with strategy, consistency, and creative content.',
        category: 'Growth & Strategy',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop', // Instagram feed & profile image
        whatsappMessage: "Hi Creovaa, I'm interested in your Social Media Management service.",
      },
      {
        id: 'content-creation',
        number: '02',
        title: 'Content Creation',
        shortDesc:
          'Creating engaging and brand-focused content designed for today\'s digital platforms.',
        category: 'Digital Content',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
        whatsappMessage: "Hi Creovaa, I'm interested in your Content Creation service.",
      },
      {
        id: 'ai-content-videos',
        number: '03',
        title: 'AI Content / AI Videos',
        shortDesc:
          'Using modern AI tools and creative direction to produce innovative visual content and AI-powered videos.',
        category: 'Generative Tech',
        image: '/images/service-ai-content.png',
        whatsappMessage: "Hi Creovaa, I'm interested in your AI Content / AI Videos service.",
      },
      {
        id: 'video-editing',
        number: '04',
        title: 'Video Editing',
        shortDesc:
          'Professional editing, motion, transitions, storytelling, sound design, and post-production.',
        category: 'Post-Production',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', // <-- REPLACE WITH SERVICE IMAGE 04
        whatsappMessage: "Hi Creovaa, I'm interested in your Video Editing service.",
      },
      {
        id: 'graphic-design',
        number: '05',
        title: 'Graphic Design',
        shortDesc:
          'Creative visual communication for brands, campaigns, digital platforms, and marketing materials.',
        category: 'Brand Identity',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop', // <-- REPLACE WITH SERVICE IMAGE 05
        whatsappMessage: "Hi Creovaa, I'm interested in your Graphic Design service.",
      },
      {
        id: 'photography',
        number: '06',
        title: 'Photography',
        shortDesc:
          'Professional photography that captures products, people, brands, events, and visual stories.',
        category: 'Visual Storytelling',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop', // <-- REPLACE WITH SERVICE IMAGE 06
        whatsappMessage: "Hi Creovaa, I'm interested in your Photography service.",
      },
      {
        id: 'videography',
        number: '07',
        title: 'Videography',
        shortDesc:
          'Professional video production for campaigns, brands, events, social media, and promotional content.',
        category: 'Film & Camera',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop', // <-- REPLACE WITH SERVICE IMAGE 07
        whatsappMessage: "Hi Creovaa, I'm interested in your Videography service.",
      },
      {
        id: 'poster-design',
        number: '08',
        title: 'Poster Design',
        shortDesc:
          'Creative poster designs that communicate ideas clearly and capture attention.',
        category: 'Editorial & Print',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop', // <-- REPLACE WITH SERVICE IMAGE 08
        whatsappMessage: "Hi Creovaa, I'm interested in your Poster Design service.",
      },
    ],
  },

  // -------------------------------------------------------------
  // IDEAS INTO IMPACT (EXTRA CREATIVE SECTION)
  // -------------------------------------------------------------
  impact: {
    statement: 'Your idea deserves more than attention.',
    highlight: 'It deserves impact.',
    supportingText:
      'We partner with modern brands to transform creative vision into undeniable digital authority. No boring templates. No generic formulas. Just pure, magnetic storytelling.',
    ctaText: "Let's Create Together",
    backgroundImage:
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop', // <-- REPLACE WITH IMPACT BG IMAGE
  },

  // -------------------------------------------------------------
  // PROCESS SECTION ("How We Create")
  // -------------------------------------------------------------
  process: {
    badge: 'Our Methodology',
    title: 'How We Create',
    subtitle: 'A disciplined, 4-step creative framework turning ambition into results.',
    steps: [
      {
        step: '01',
        title: 'Discover',
        description: 'Understand the brand, audience, goals, and vision.',
        deliverable: 'Strategic Blueprint & Creative Brief',
      },
      {
        step: '02',
        title: 'Strategize',
        description: 'Build a creative strategy designed around the brand\'s objectives.',
        deliverable: 'Concept Architecture & Content Roadmap',
      },
      {
        step: '03',
        title: 'Create',
        description: 'Develop content, designs, videos, visuals, and campaigns.',
        deliverable: 'Production, Editing & Asset Mastery',
      },
      {
        step: '04',
        title: 'Elevate',
        description: 'Refine, publish, optimize, and help the brand grow.',
        deliverable: 'Launch, Growth Analytics & Iteration',
      },
    ],
  },
};

/**
 * Helper to build direct WhatsApp link with encoded message
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
