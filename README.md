# CREOVAA — Creative Digital Agency Website
> **Tagline:** Create. Edit. Elevate.  
> **Brand Positioning:** Creovaa is a modern creative digital agency that helps brands turn ideas into impactful digital experiences through creative strategy, content, design, photography, videography, AI-powered content, and social media.

---

## 🚀 Quick Start Guide

### 1. Run Development Server
```bash
# Set Node.js path (if not already in system PATH)
$env:Path = "C:\Users\laksh\nodejs;$env:Path"

# Run Vite local development server
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 2. Build for Production
```bash
npm run build
```
This generates the optimized static production build in the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any web host.

---

## ⚙️ How to Update Contact Details & Assets

All contact information, social links, image URLs, and service descriptions are centralized in **one single file**:
📂 **[`src/config/agencyData.ts`](./src/config/agencyData.ts)**

### 📱 Updating Contact Information:
Open `src/config/agencyData.ts` and update the `contact` object:
```typescript
contact: {
  // WhatsApp number: Digits only, including country code (e.g. 919876543210)
  whatsappNumber: '919876543210', 

  // Display phone for UI
  displayPhone: '+91 98765 43210',

  // Phone dialer target (tel:)
  phoneTel: '+919876543210',

  // Instagram Profile URL and Handle
  instagramUrl: 'https://www.instagram.com/creovaamedia?utm_source=qr&stkn=ZWJ4b2R0c2k4YnIz',
  instagramHandle: '@creovaamedia',

  // Email address
  email: 'creovaamedia@gmail.com',

  location: 'Available Worldwide / Remote & On-Site',
}
```

### 🖼️ Updating Images & Placeholders:
In `src/config/agencyData.ts`:
- **Hero Carousel (3 images)**: Update `hero.slides` array (`image` URL or local path in `/public/images/`).
- **About Feature Cards (3 cards)**: Update `about.features` array (`image` URL).
- **Services (8 cards)**: Update `services.items` array (`image` URL).
- **Ideas Into Impact**: Update `impact.backgroundImage`.

---

## 🎨 Features & Architecture

- **Storytelling Flow**: `CREOVAA → WHO WE ARE → WHAT WE DO → HOW WE CREATE → IDEAS INTO IMPACT → CONTACT`
- **Dynamic Hero Section**:
  - Main headline: *"Together We Build Brands That Stand Out"*
  - Prominent CTAs: *"Start a Project"* and *"Explore Services"*
  - Direct Action buttons: WhatsApp (`wa.me`), Instagram, Call (`tel:`)
  - 3-Image Carousel with auto-sliding (5s interval), pause on hover, manual next/previous navigation, and progress dot indicators.
- **About Section**:
  - Three visual feature cards:
    1. `01 — Modern Solution`
    2. `02 — Designing`
    3. `03 — Partnership`
- **Services Section ("What We Do")**:
  - 8 individual service cards with numbers, categories, descriptions, and hover interactions:
    1. Social Media Management
    2. Content Creation
    3. AI Content / AI Videos
    4. Video Editing
    5. Graphic Design
    6. Photography
    7. Videography
    8. Poster Design
  - **Direct WhatsApp Quote Trigger**: Clicking *any* service card or CTA opens WhatsApp with a pre-filled, URL-encoded inquiry specific to that service.
- **"Ideas Into Impact" Creative Statement**:
  - Large statement: *"Your idea deserves more than attention. It deserves impact."*
  - Direct WhatsApp CTA: *"Let's Create Together →"*
- **Process Section ("How We Create")**:
  - 4-step agency workflow: `01 Discover` → `02 Strategize` → `03 Create` → `04 Elevate`.
- **Contact Section**:
  - Frontend-validated contact form (Name, Email, Mobile, Message) with direct WhatsApp / Email dispatch toggling.
  - Direct communication cards for WhatsApp, Call, Instagram, and Email.
- **Persistent UX & Micro-Interactions**:
  - Magnetic custom cursor on desktop (auto-disabled on touch devices).
  - Top scroll progress bar & floating back-to-top button.
  - Fixed floating action cluster (WhatsApp, Instagram, Call) with smooth hover tooltips.
  - Responsive mobile drawer navigation with animated hamburger trigger.
