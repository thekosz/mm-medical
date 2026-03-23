/**
 * SITE CONFIGURATION — MM Medical Services
 *
 * Cloned from Garden OB/GYN template.
 * Specialty: Vascular / Interventional Radiology / Pain Management
 * Focus: Senior-focused coordinated care
 */

export const siteConfig = {
  // ── Practice Identity ──────────────────────────────────────────
  name: 'M&S Vascular and Orthopedic Group P.C.',
  shortName: 'M&S Vascular',
  tagline: 'Your health. Your mobility. Your quality of life — our priority.',
  specialty: 'Vascular Surgery, Orthopedic Surgery & Interventional Radiology',
  description: 'Advanced vascular, orthopedic, and interventional radiology care — featuring GAE, sports medicine, pain management, and minimally invasive procedures across Queens and Long Island.',
  logo: '/images/logo.png',
  url: 'https://www.msorthovasc.com',

  // ── Contact ────────────────────────────────────────────────────
  phone: '(718) 897-2228',
  phoneTel: '+17188972228',
  fax: '',
  email: 'info@mandsvo.com',

  // ── External Links ─────────────────────────────────────────────
  bookingUrl: 'https://www.msorthovasc.com', // TODO: replace with actual booking link
  messagingUrl: 'https://www.msorthovasc.com', // TODO: replace with actual messaging link
  patientPortalUrl: '', // TODO: add if available

  // ── Location Summary ───────────────────────────────────────────
  locationCount: 2,
  regions: ['Queens', 'Long Island'],
  regionDisplay: 'Queens & Long Island, NY',

  // ── Provider Summary ───────────────────────────────────────────
  providerSubtitle: 'Our experienced physicians and specialists delivering advanced, coordinated care.',

  // ── Stats (homepage) ───────────────────────────────────────────
  stats: {
    providers: { value: '2', label: 'Expert Physicians' },
    locations: { value: '2', label: 'Convenient Locations' },
    specialties: { value: '5+', label: 'Specialty Services' },
    years: { value: '20+', label: 'Years of Excellence' },
  },

  // ── Colors (also update globals.css :root) ─────────────────────
  colors: {
    primary: '#1B2A4A',      // Dark navy blue
    primaryDark: '#111D35',  // Deeper navy
    secondary: '#C4A35A',    // Gold/tan accent
    secondaryDark: '#A8893D',
    accent: '#F0EAD6',       // Light warm cream
    accentLight: '#F8F5ED',  // Lighter cream
  },

  // ── SEO ────────────────────────────────────────────────────────
  seo: {
    titleTemplate: '%s | M&S Vascular and Orthopedic Group — Queens & Long Island',
    defaultTitle: 'M&S Vascular and Orthopedic Group P.C. — Queens & Long Island',
    defaultDescription: 'Advanced vascular surgery, orthopedic surgery, and interventional radiology in Forest Hills, Queens and Great Neck, Long Island.',
    keywords: ['vascular surgery', 'orthopedic surgery', 'interventional radiology', 'GAE', 'sports medicine', 'Queens', 'Forest Hills', 'Great Neck', 'Long Island'],
  },

  // ── Social Media ───────────────────────────────────────────────
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    linkedin: '',
  },

  // ── Admin Panel ────────────────────────────────────────────────
  adminPath: '/mm-portal',
}

export type SiteConfig = typeof siteConfig
