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
}
