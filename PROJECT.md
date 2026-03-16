# Garden OB/GYN Website - Project Documentation

**Status:** ✅ APPROVED BY NORTHWELL (Feb 10, 2026)
**Live URL:** https://gardentempweb.com
**Build Time:** 2 days

---

## 📁 Project Structure

```
garden-obgyn-clone/
├── src/
│   ├── app/                    # Pages (Next.js App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── providers/          # Providers listing + individual pages
│   │   ├── locations/          # Locations page
│   │   ├── services/           # Services page (30+ services)
│   │   ├── schedule/           # Schedule appointment page
│   │   ├── contactus/          # Contact page
│   │   ├── garden-portal/      # Admin panel (hidden path)
│   │   └── api/                # API routes
│   │
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation
│   │   └── sections/           # Hero, Services, Stats, etc.
│   │
│   └── data/
│       ├── providers.ts        # 45 providers data
│       ├── locations.ts        # 10 locations data
│       └── services.ts         # 30+ services data
│
├── public/
│   └── images/
│       ├── providers/          # Provider headshots
│       └── services/           # Service stock photos
│
└── PROJECT.md                  # This file
```

---

## 👩‍⚕️ Providers (45 total)

**Data file:** `src/data/providers.ts`

Each provider has:
- `id` - Unique identifier
- `name` - Full name with credentials
- `title` - Specialty/role
- `image` - Photo URL (or placeholder)
- `bio` - Description
- `specialties` - Array of specialties
- `locations` - Array of location IDs
- `languages` - Array of languages spoken
- `education` - Array of education/training

**To add/edit providers:**
1. Edit `data/providers.json`
2. Or use Admin Panel: `/garden-portal/providers`

---

## 📍 Locations (10 total)

**Data file:** `src/data/locations.ts`

| Location | Address |
|----------|---------|
| Commack | 6285 Jericho Turnpike |
| Forest Hills | 99-01 Queens Blvd |
| Fresh Meadows | 180-10 Union Turnpike |
| Garden City | 877 Stewart Avenue |
| Lake Success | 3003 New Hyde Park Road |
| Massapequa | 50 East Sunrise Highway |
| Mineola | 200 Old Country Road |
| North Babylon | 740 Deer Park Ave |
| West Islip | 180 Sunrise Highway |
| Hewlett | 1315 Broadway |

**Each location has:**
- `id`, `name`, `address`, `city`, `state`, `zip`
- `phone`, `fax`
- `hours` (Mon-Sat)
- `coordinates` (lat/lng for maps)
- `services` (available at this location)

---

## 🏥 Services (30+ total)

**Data file:** `src/data/services.ts`

**Featured on Homepage (8):**
1. Prenatal Care
2. Labor & Delivery
3. Gynecological Exams
4. Family Planning
5. Menopause Management
6. Minimally Invasive Surgery
7. High-Risk Pregnancy
8. Fertility Services

**Full list on /services page (30+)**

Each service has:
- `id`, `name`, `description`
- `image` - Stock photo from `/public/images/services/`

---

## 🎨 Homepage Layout (Trust-First Design)

**Order of sections:**
1. **Hero** - Main banner with CTA
2. **Providers** - "Meet Our Expert Team" (trust first!)
3. **Services** - 8 featured services with photos
4. **Stats** - 35+ years, 45 providers, 10 locations, 250k+ patients
5. **Locations** - Map/list of all 10 locations
6. **Insurance** - Accepted insurance providers
7. **Testimonials** - Patient reviews
8. **CTA Banner** - Final call to action

---

## 🖼️ Images

### Provider Photos
- Location: `/public/images/providers/`
- Format: `provider-name.jpg`
- Fallback: Gradient placeholder with initials

### Service Photos
- Location: `/public/images/services/`
- Source: Unsplash (free commercial use)
- Files:
  - `prenatal.jpg`, `delivery.jpg`, `gynecology.jpg`
  - `family-planning.jpg`, `menopause.jpg`, `surgery.jpg`
  - `high-risk.jpg`, `fertility.jpg`, `ultrasound.jpg`
  - `pap-smear.jpg`, `breast-health.jpg`, `pelvic-pain.jpg`
  - `endometriosis.jpg`, `fibroids.jpg`, `hpv.jpg`
  - `sti-testing.jpg`, `birth-control.jpg`, `iud.jpg`
  - (and more...)

---

## 📞 Contact Information

**Main Phone:** (516) 746-6373
**Fax:** Listed per location

⚠️ **DO NOT USE:** 562 text number (removed per request)

---

## 🔧 Admin Panel

**URL:** `/garden-portal`
**Login:** Password + TOTP Authenticator (Google Auth / Authy)

> ⚠️ Old `/admin` path is DEAD (returns 404). Use `/garden-portal` only.

**Features:**
- View all providers
- Add new providers
- Edit existing providers
- Upload/manage provider photos (rename, delete)
- Manage specialties/locations
- MFA setup at `/garden-portal/mfa`
- Photo manager at `/garden-portal/photos`
- Provider manager at `/garden-portal/providers`

**Security (hardened Feb 19, 2026):**
- 🔒 Hidden admin path (not `/admin`)
- 🔐 TOTP authenticator (MFA) required
- ⏱️ Rate limiting: 5 login attempts, 15-min lockout
- 🛡️ Path traversal protection on all file operations
- 📁 MFA secret file restricted to owner-only (chmod 600)

---

## 🚀 Deployment

**Hosting:** Vercel (cloud)
**Vercel URL:** https://garden-obgyn.vercel.app
**Live Domain:** https://gardentempweb.com
**DNS:** Cloudflare → Vercel
**SSL:** Auto-provisioned by Vercel
**GitHub Repo:** https://github.com/thekosz/garden-obgyn

**Auto-deploy:** Every push to `main` triggers a Vercel build + deploy automatically. No manual steps needed.

**How to deploy changes:**
```bash
git add <files>
git commit -m "description of changes"
git push origin main
# Done — Vercel picks it up automatically
```

**Environment Variables (set in Vercel dashboard):**
| Variable | Purpose | Required |
|----------|---------|----------|
| `ADMIN_PASSWORD` | Admin panel login password | For admin panel only |

**Vercel Dashboard:** https://vercel.com (log in with GitHub)
- Project Settings → Environment Variables
- Deployments tab → view build logs
- Analytics tab → traffic stats

---

## 📋 Feedback Checklist

When Northwell sends feedback, note:

- [ ] **Provider changes** - Add/remove/edit providers in `providers.ts`
- [ ] **Location changes** - Edit `locations.ts`
- [ ] **Service changes** - Edit `services.ts`
- [ ] **Photo changes** - Add to `/public/images/`
- [ ] **Text changes** - Find in relevant component
- [ ] **Layout changes** - Edit section components
- [ ] **Color/style changes** - Edit Tailwind classes

---

---

*Last updated: Feb 20, 2026*
