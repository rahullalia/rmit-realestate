# Rmit Sharma - Real Estate Website

Personal website and digital business card for Rmit Sharma, Real Estate Professional at The Lenard Team.

**Live:** https://rmit.vercel.app

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Features

- **Sticky Navbar** with smooth scroll navigation
- **Scroll Progress Bar** showing page position
- **Stats Row** in hero (Families Helped, Rating, Expertise)
- **5-Step Process** timeline with animations
- **Testimonials** section with ratings
- **FAQ Accordion** with common questions
- **Digital Contact Card** at `/rmit` with vCard download
- **SEO Optimized** with JSON-LD schema

## Pages

- `/` - Full landing page with all sections
- `/rmit` - Digital contact card with vCard download

## Sections (in order)

1. Hero (photo, stats, CTAs)
2. About
3. Services (Buying, Selling, Investing, Renting)
4. Process (5-step timeline)
5. Testimonials
6. FAQ
7. Service Areas
8. CTA
9. Footer

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deployment

```bash
vercel --prod
```

## Project Structure

```
app/
├── page.tsx          # Homepage (all sections)
├── layout.tsx        # SEO metadata, JSON-LD
├── rmit/page.tsx     # Contact card
└── api/vcard/        # VCard download API

components/
├── Navbar.tsx        # Sticky nav, mobile menu
├── ScrollProgress.tsx# Progress bar
├── Hero.tsx          # Hero with stats
├── About.tsx         # About section
├── Services.tsx      # Service cards
├── Process.tsx       # 5-step timeline
├── Testimonials.tsx  # Reviews
├── FAQ.tsx           # Accordion
├── ServiceAreas.tsx  # Areas served
├── CTA.tsx           # Call to action
├── Footer.tsx        # 3-column footer
└── animations.tsx    # Framer Motion utilities

lib/
└── utils.ts          # All constants (CONTACT, STATS, etc.)
```

## Customization

Update content in `lib/utils.ts`:
- `CONTACT` - Name, phone, email, social links
- `STATS` - Hero stats (families helped, rating, etc.)
- `PROCESS_STEPS` - Timeline steps
- `TESTIMONIALS` - Client reviews
- `FAQ_ITEMS` - Questions and answers
- `NAV_LINKS` - Navigation menu items
