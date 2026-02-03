# CLAUDE.md - Rmit Sharma Real Estate Website

**Last Updated:** 2026-02-03

## Project Overview

Personal website and digital business card for Rmit Sharma, Real Estate Professional at The Lenard Team. Built for lead generation and professional presence.

**Live URL:** https://rmit.vercel.app
**Type:** Client website (friend project)
**Tech Stack:** Next.js 16, Tailwind CSS v4, Framer Motion, TypeScript
**SOP Reference:** `~/.claude/docs/mortgageLenderWebsiteSOP.md` (adapted for real estate)

---

## Project Structure

```
rmit/
├── app/
│   ├── page.tsx           # Homepage (all sections)
│   ├── layout.tsx         # Root layout with Inter font, SEO, JSON-LD
│   ├── globals.css        # Brand colors, typography, button styles
│   ├── rmit/page.tsx      # Digital contact card at /rmit
│   └── api/vcard/route.ts # VCard download endpoint
├── components/
│   ├── Navbar.tsx         # Sticky nav with smooth scroll, mobile menu
│   ├── ScrollProgress.tsx # Gold progress bar at top
│   ├── Hero.tsx           # Hero with photo, stats row, CTAs
│   ├── About.tsx          # About section
│   ├── Services.tsx       # 4 service cards (Buying, Selling, etc.)
│   ├── Process.tsx        # 5-step timeline with animated line
│   ├── Testimonials.tsx   # 3 placeholder reviews with ratings
│   ├── FAQ.tsx            # 6-item accordion
│   ├── ServiceAreas.tsx   # Long Island/NYC areas served
│   ├── CTA.tsx            # Call-to-action section
│   ├── Footer.tsx         # 3-column footer with quick links
│   └── animations.tsx     # Framer Motion utilities
├── lib/
│   └── utils.ts           # CONTACT, STATS, PROCESS_STEPS, FAQ_ITEMS, TESTIMONIALS, NAV_LINKS
└── public/
    └── rmit.jpg           # Portrait photo (800x1008px)
```

## Page Section Order

```
Navbar → ScrollProgress → Hero → About → Services → Process → Testimonials → FAQ → Service Areas → CTA → Footer
```

---

## Brand Design System

```css
--navy: #0c2340          /* Primary - trust, authority */
--gold: #b8860b          /* Accent - premium, success */
--bg-primary: #050505    /* Background - modern, elegant */
```

- Typography: Inter font
- Buttons: Pill-shaped (border-radius: 9999px)
- Cards: 1rem border-radius with subtle borders

---

## Key Technical Details

### Tailwind v4 Gotcha

**`rounded-2xl` class doesn't work reliably** in this setup. Use inline styles instead:

```tsx
// DON'T use Tailwind class for border-radius
className="rounded-2xl overflow-hidden"

// DO use inline style
style={{ borderRadius: '1rem' }}
```

### Image Containers

Photo containers use inline styles for dimensions AND border-radius:

```tsx
// Hero (280x350px portrait)
style={{ width: '280px', height: '350px', borderRadius: '1rem' }}

// Card page (120x150px portrait)
style={{ width: '120px', height: '150px', borderRadius: '1rem' }}
```

### Animation Components

Mobile-optimized (animations disabled on mobile for performance):
- `FadeIn` - Fade + slide up on scroll
- `Float` - Gentle floating animation
- `HoverScale` - Button/link hover effect
- `Stagger` - Staggered children animation

---

## Contact Constants

Located in `lib/utils.ts`:
- Name: Rmit Sharma
- Title: Real Estate Professional
- Team: The Lenard Team
- Company: Signature Premier Properties
- Phone, email, Instagram link
- STATS, PROCESS_STEPS, FAQ_ITEMS, TESTIMONIALS, NAV_LINKS

---

## Session Log

### 2026-02-03: Full SOP Alignment

**Reference:** Adapted `~/.claude/docs/mortgageLenderWebsiteSOP.md` for real estate

**New Components Created:**
- `Navbar.tsx` - Sticky nav with smooth scroll, mobile hamburger menu
- `ScrollProgress.tsx` - Gold progress bar showing scroll position
- `Process.tsx` - 5-step timeline with animated connecting line
- `Testimonials.tsx` - 3 placeholder reviews with star ratings
- `FAQ.tsx` - 6-item accordion (first open by default)

**Enhanced Existing:**
- `Hero.tsx` - Added stats row (100+ Families, 5★ Rating, LI & NYC Expert)
- `Footer.tsx` - 3-column layout with quick links and contact info
- All sections now have IDs for nav linking (#about, #services, etc.)
- `utils.ts` - Added STATS, PROCESS_STEPS, FAQ_ITEMS, TESTIMONIALS, NAV_LINKS

**Fixes:**
- Timeline line centered at 36px (middle of 72px circles)
- Rounded corners on Image components (both hero and card page)

**Commits:**
- `b985d34` - Add SOP-aligned sections
- `29ee794` - Fix timeline alignment and hero image corners
- `6e9b8ae` - Add rounded corners to card page image

---

### 2026-01-30: Photo Display Fixes

**Problems Solved:**
1. Photo appearing square - cropped source image from landscape (1290x1008) to portrait (800x1008)
2. Rounded corners not displaying - replaced Tailwind `rounded-2xl` with inline `borderRadius: '1rem'`
3. Button text wrapping - added `whitespace-nowrap`
4. Card page navigation - replaced back link with "Visit Website" button

---

## Potential Enhancements

For future sessions:
- [ ] Replace placeholder testimonials with real client reviews
- [ ] Update stats with Rmit's actual numbers
- [ ] Add Featured Listings carousel
- [ ] Add Contact form (lead capture)
- [ ] Add mortgage calculator widget (partner with lender?)
