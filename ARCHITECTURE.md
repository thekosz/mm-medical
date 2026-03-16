# Garden OB/GYN Website Architecture

**Live URL:** https://gardentempweb.com
**Last Updated:** February 20, 2026

---

## 🏗️ How The Site Is Built

### Tech Stack
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | **Next.js 16** | React-based web framework |
| UI | **React 19** | Component-based interface |
| Styling | **Tailwind CSS 4** | Utility-first CSS |
| Language | **TypeScript** | Type-safe JavaScript |
| Icons | **Lucide React** | Modern icon library |
| Hosting | **Vercel** | Cloud hosting + CDN |
| DNS | **Cloudflare** | Domain management |

### Static Site Architecture
This is a **static website** — all content (providers, locations, services) is stored in TypeScript data files, not a database. This means:

✅ **Fast** — No database queries, pages load instantly  
✅ **Secure** — No SQL injection, minimal attack surface  
✅ **Reliable** — No database to go down  
✅ **Simple** — Easy to update, version controlled with Git

**Data lives in:**
```
src/data/
├── providers.ts    # 45 healthcare providers
├── locations.ts    # 10 office locations  
└── services.ts     # 30+ medical services
```

---

## 🔗 Third-Party Services (BaaS)

We don't build everything from scratch — we integrate with trusted, **HIPAA-compliant** third-party services:

### 📋 Appointment Booking
**Provider:** Microsoft Forms  
**URL:** `forms.office.com/...`  
**Why:** 
- HIPAA compliant (Microsoft 365 Business)
- No custom backend needed
- Responses go directly to practice email
- Already part of Northwell's Microsoft ecosystem

**Where it's used:**
- All "Request Appointment" buttons sitewide
- Schedule page primary CTA
- Hero section booking buttons

---

### 💬 Secure Messaging
**Provider:** Northwell Health Secure Chat  
**URL:** `followmyhealth.northwell.edu`  
**Why:**
- Existing patient portal
- HIPAA compliant messaging
- Integrated with Northwell's EMR system

**Where it's used:**
- "Message Us Now" buttons
- Contact page secure messaging option

---

### 📞 Phone System
**Provider:** Existing practice phone lines  
**Main:** (516) 746-6373  
**Why:** Direct connection to office staff

---

## 🗺️ Site Map

```
gardentempweb.com/
│
├── / (Homepage)
│   ├── Hero carousel
│   ├── Providers preview
│   ├── Services grid (8 featured)
│   ├── Statistics banner
│   ├── Locations map
│   ├── Insurance logos
│   ├── Testimonials
│   └── CTA banner
│
├── /providers-and-staff
│   └── All 45 providers with bios
│
├── /services
│   └── Full 30+ services catalog
│
├── /locations
│   └── All 10 office locations with maps
│
├── /about
│   └── Practice history & mission
│
├── /schedule
│   ├── Book Online → Microsoft Forms
│   ├── Contact Form
│   └── Call Us
│
├── /contactus
│   └── Contact information & form
│
├── /accepted-insurances
│   └── List of accepted insurance plans
│
├── /patient-portal
│   └── Link to Northwell Follow My Health
│
├── /blog
│   └── Health articles (coming soon)
│
└── /garden-portal (Hidden Admin)
    ├── /providers — Manage provider data
    ├── /photos — Manage images
    └── /mfa — Security setup
```

---

## 🔒 Security Features

| Feature | Implementation |
|---------|---------------|
| **Admin Access** | Hidden URL path (not `/admin`) |
| **Authentication** | Password + TOTP (Google Authenticator) |
| **Rate Limiting** | 5 attempts, 15-min lockout |
| **File Security** | Path traversal protection |
| **HTTPS** | Auto-provisioned SSL via Vercel |

---

## 🔍 SEO Implementation

| Feature | Status |
|---------|--------|
| Meta titles & descriptions | ✅ Per-page |
| Open Graph tags | ✅ Social sharing |
| Schema.org markup | ✅ Medical practice |
| sitemap.xml | ✅ Auto-generated |
| robots.txt | ✅ Configured |
| Mobile responsive | ✅ All breakpoints |
| Image alt text | ✅ Accessibility |

---

## 📊 Key Numbers

- **45** Healthcare providers
- **10** Office locations
- **30+** Medical services
- **8** Featured services on homepage
- **2 days** Build time
- **0** Database dependencies

---

## 🚀 How Updates Work

**Automatic deployment via Vercel:**
1. **Make changes** → Edit code or data files
2. **Commit & push** → `git push origin main`
3. **Vercel auto-builds** → Detects push, runs `npm run build`
4. **Live in ~60 seconds** → Deployed to global CDN

**No manual server management needed.** No PM2, no SSH, no restarts.

Or use the Admin Panel (`/garden-portal`) for provider management.

### Infrastructure
| Component | Service | Details |
|-----------|---------|---------|
| **Hosting** | Vercel | Auto-deploy from GitHub |
| **Vercel URL** | `garden-obgyn.vercel.app` | Direct Vercel domain |
| **Domain** | `gardentempweb.com` | Cloudflare DNS → Vercel |
| **SSL** | Vercel | Auto-provisioned certificates |
| **CDN** | Vercel Edge | Global edge network |
| **Git Repo** | `github.com/thekosz/garden-obgyn` | Source of truth |

### Environment Variables (Vercel Dashboard)
| Variable | Purpose |
|----------|---------|
| `ADMIN_PASSWORD` | Admin panel login (required for `/garden-portal`) |

---

## 💡 Why This Architecture?

**For a medical practice website, we prioritized:**

1. **Security** — Patient trust is everything. Static = minimal attack surface.
2. **Speed** — Patients looking for doctors want fast answers.
3. **Reliability** — No database means nothing to crash.
4. **HIPAA Compliance** — Booking and messaging use certified services.
5. **Maintainability** — Tim's team can update content easily.

**What we DON'T handle:**
- Patient records (Northwell EMR)
- Appointment scheduling (Microsoft Forms)
- Secure messaging (Northwell portal)
- Payment processing (handled at office)

We're the **front door**, not the hospital. 🏥
