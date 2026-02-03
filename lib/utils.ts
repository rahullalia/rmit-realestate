import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CONTACT = {
  name: 'Rmit Sharma',
  title: 'Real Estate Professional',
  company: 'Signature Premier Properties',
  team: 'The Lenard Team',
  email: 'rsharma@thelenardteam.com',
  phone: '+1 (516) 226-7459',
  phoneRaw: '5162267459',
  instagram: 'https://www.instagram.com/listedbyrmit/',
  instagramHandle: '@listedbyrmit',
  serviceAreas: ['Nassau County', 'Suffolk County', 'NYC (All 5 Boroughs)'],
  services: ['Buy', 'Sell', 'Invest', 'Rent'],
  smsText: "Hi Rmit! I found you online and I'm interested in learning more about buying/selling real estate. Can we chat?",
}

export const STATS = [
  { value: '100+', label: 'Families Helped' },
  { value: '5★', label: 'Client Rating' },
  { value: 'LI & NYC', label: 'Expert' },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Free Consultation',
    description: "Let's talk about your goals and timeline",
  },
  {
    step: 2,
    title: 'Property Search',
    description: 'I find homes that match your criteria',
  },
  {
    step: 3,
    title: 'Tours & Evaluation',
    description: 'We visit properties together',
  },
  {
    step: 4,
    title: 'Offer & Negotiation',
    description: 'I handle the paperwork and negotiations',
  },
  {
    step: 5,
    title: 'Closing',
    description: 'Keys in hand, deal done',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What areas do you serve?',
    answer:
      'I serve Nassau County, Suffolk County, and all five boroughs of New York City. My deep knowledge of these markets helps you find the right property at the right price.',
  },
  {
    question: 'How do I know if I\'m ready to buy?',
    answer:
      'Great question! You\'re ready when you have stable income, some savings for a down payment (as little as 3% in some cases), and a general idea of what you\'re looking for. I can help you figure out the rest.',
  },
  {
    question: 'How long does the buying process take?',
    answer:
      'Typically 30-60 days from accepted offer to closing. The timeline can vary based on financing, inspections, and negotiations. I keep you informed every step of the way.',
  },
  {
    question: 'Do I need a pre-approval before looking at homes?',
    answer:
      'It\'s highly recommended. Pre-approval shows sellers you\'re serious and helps you understand your budget. I can connect you with trusted lenders who make this easy.',
  },
  {
    question: 'How do you determine my home\'s value for selling?',
    answer:
      'I do a comprehensive market analysis comparing recent sales, current listings, and local trends. We\'ll price your home competitively to attract buyers while maximizing your return.',
  },
  {
    question: 'What makes working with you different?',
    answer:
      'I focus on clear communication and personalized service. No pressure, no jargon—just honest guidance. I\'m with you from first conversation to closing day and beyond.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Rmit made our first home purchase stress-free. He was patient, knowledgeable, and always available when we had questions.',
    name: 'Sarah M.',
    location: 'Nassau County',
    rating: 5,
  },
  {
    quote:
      'Best decision we made was working with Rmit. Sold our house in 2 weeks above asking price!',
    name: 'The Rodriguez Family',
    location: 'Suffolk County',
    rating: 5,
  },
  {
    quote:
      'As an investor, I need someone who understands the numbers. Rmit delivers every time.',
    name: 'David K.',
    location: 'Brooklyn',
    rating: 5,
  },
] as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const
