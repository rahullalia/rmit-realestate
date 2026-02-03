# Rmit Sharma - Real Estate Website

Personal website and digital business card for Rmit Sharma, Real Estate Professional at The Lenard Team.

**Live:** https://rmit.vercel.app

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Pages

- `/` - Homepage with hero, services, about, and CTA sections
- `/rmit` - Digital contact card with vCard download

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
├── page.tsx          # Homepage
├── rmit/page.tsx     # Contact card
└── api/vcard/        # VCard download API

components/
├── Hero.tsx          # Hero section with photo
├── Services.tsx      # Service cards
├── About.tsx         # About section
├── CTA.tsx           # Call to action
└── animations.tsx    # Framer Motion utilities

lib/
└── utils.ts          # Contact info constants
```

## Contact Info

Update contact details in `lib/utils.ts` (CONTACT object).
