/**
 * SITE CONFIGURATION — MM Medical Services
 *
 * Cloned from Garden OB/GYN template.
 * Specialty: Vascular / Interventional Radiology / Pain Management
 * Focus: Senior-focused coordinated care
 */

export const siteConfig = {
  // ── Practice Identity ──────────────────────────────────────────
  name: 'MM Medical Services',
  shortName: 'MM Medical',
  tagline: 'Your health. Your mobility. Your quality of life — our priority.',
  specialty: 'Vascular & Interventional Medicine',
  description: 'Advanced, coordinated care for seniors — featuring GAE, interventional radiology, pain management, and vascular services across Queens and Long Island.',
  logo: '/images/logo.svg',
  url: 'https://www.mmmedicalservices.com',

  // ── Contact ────────────────────────────────────────────────────
  phone: '(718) 897-2228',
  phoneTel: '+17188972228',
  fax: '',
  email: '',

  // ── External Links ─────────────────────────────────────────────
  bookingUrl: 'https://www.mmmedicalservices.com', // TODO: replace with actual booking link
  messagingUrl: 'https://www.mmmedicalservices.com', // TODO: replace with actual messaging link
  patientPortalUrl: '', // TODO: add if available

  // ── Location Summary ───────────────────────────────────────────
  locationCount: 2,
  regions: ['Queens', 'Long Island'],
  regionDisplay: 'Queens & Long Island',

  // ── Provider Summary ───────────────────────────────────────────
  providerSubtitle: 'Our experienced physicians and specialists delivering advanced, coordinated care.',

  // ── Stats (homepage) ───────────────────────────────────────────
  stats: {
    providers: { value: '10+', label: 'Experienced Specialists' },
    locations: { value: '2', label: 'Convenient Locations' },
    specialties: { value: '8+', label: 'Specialty Services' },
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
    titleTemplate: '%s | MM Medical Services — Queens & Long Island',
    defaultTitle: 'MM Medical Services — Advanced Vascular & Pain Management | Queens & Long Island',
    defaultDescription: 'Senior-focused medical care specializing in GAE, interventional radiology, vascular services, and pain management. Locations in Forest Hills and Great Neck.',
    keywords: ['vascular medicine', 'interventional radiology', 'GAE', 'knee pain', 'pain management', 'Queens', 'Great Neck', 'senior care'],
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
