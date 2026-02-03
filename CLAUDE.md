# CLAUDE.md - Rmit Sharma Real Estate Website

## Project Overview

Personal website and digital business card for Rmit Sharma, Real Estate Professional at The Lenard Team. Built for lead generation and professional presence.

**Live URL:** https://rmit.vercel.app
**Type:** Client website (friend project)
**Tech Stack:** Next.js 16, Tailwind CSS v4, Framer Motion, TypeScript

---

## Project Structure

```
rmit/
├── app/
│   ├── page.tsx           # Homepage with Hero, Services, About, CTA
│   ├── layout.tsx         # Root layout with Inter font
│   ├── globals.css        # Brand colors, typography, button styles
│   ├── rmit/page.tsx      # Digital contact card at /rmit
│   └── api/vcard/route.ts # VCard download endpoint
├── components/
│   ├── Hero.tsx           # Main hero with photo and CTAs
│   ├── Services.tsx       # 4 service cards (Buying, Selling, etc.)
│   ├── About.tsx          # About section
│   ├── ServiceAreas.tsx   # Long Island/NYC areas served
│   ├── CTA.tsx            # Call-to-action section
│   ├── Footer.tsx         # Footer with contact info
│   └── animations.tsx     # Framer Motion utilities (FadeIn, Float, etc.)
├── lib/
│   └── utils.ts           # CONTACT constants, helper functions
└── public/
    └── rmit.jpg           # Portrait photo (800x1008px)
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
- Company: eXp Realty
- Phone, email, Instagram link

---

## Session Log

### 2026-01-30: Photo Display Fixes

**Problems Solved:**
1. Photo appearing square - cropped source image from landscape (1290x1008) to portrait (800x1008)
2. Rounded corners not displaying - replaced Tailwind `rounded-2xl` with inline `borderRadius: '1rem'`
3. Button text wrapping - added `whitespace-nowrap`
4. Card page navigation - replaced back link with "Visit Website" button

**Files Modified:**
- `components/Hero.tsx` - Photo container, button layout
- `app/rmit/page.tsx` - Photo container, added Instagram/Website buttons
- `components/animations.tsx` - Added `target` prop to HoverScale, fixed ease type
- `public/rmit.jpg` - Cropped to portrait orientation

**Deployed:** https://rmit.vercel.app

---

## Potential Enhancements

For future sessions:
- [ ] Add Testimonials section
- [ ] Add Stats/Achievements section
- [ ] Add Featured Listings carousel
- [ ] Add Contact form
- [ ] SEO optimization (meta tags, JSON-LD schema)
