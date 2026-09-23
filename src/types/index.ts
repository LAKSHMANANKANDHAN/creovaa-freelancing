export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  alt: string;
  accentColor: string;
}

export interface AboutFeature {
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  image: string;
  category: string;
  whatsappMessage: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface AgencyContact {
  whatsappNumber: string; // E.g. '919876543210' without '+' or spaces for wa.me
  displayPhone: string;   // E.g. '+91 98765 43210'
  phoneTel: string;       // E.g. '+919876543210'
  instagramUrl: string;   // E.g. 'https://instagram.com/creovaa'
  instagramHandle: string;// E.g. '@creovaa'
  email: string;          // E.g. 'hello@creovaa.com'
  location: string;       // E.g. 'Global / Remote'
}

export interface AgencyData {
  brandName: string;
  tagline: string;
  positioning: string;
  contact: AgencyContact;
  hero: {
    badge: string;
    headline: {
      line1: string;
      line2: string;
    };
    supportingText: string;
    slides: HeroSlide[];
  };
  about: {
    badge: string;
    headline: string;
    paragraph: string;
    features: AboutFeature[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  impact: {
    statement: string;
    highlight: string;
    supportingText: string;
    ctaText: string;
    backgroundImage: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
}
