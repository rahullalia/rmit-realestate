import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rmit Sharma | Real Estate Professional | Long Island & NYC',
    template: '%s | Rmit Sharma Real Estate',
  },
  description:
    'Looking for a real estate agent in Nassau County, Suffolk County, or NYC? Rmit Sharma helps you buy, sell, invest, and rent homes with personalized service and local expertise.',
  keywords: [
    'real estate agent Nassau County',
    'real estate agent Suffolk County',
    'NYC real estate',
    'Long Island homes for sale',
    'buy home Nassau County',
    'sell home Suffolk County',
    'Rmit Sharma realtor',
    'The Lenard Team',
    'Signature Premier Properties',
  ],
  authors: [{ name: 'Rmit Sharma' }],
  openGraph: {
    title: 'Rmit Sharma | Real Estate Professional',
    description:
      'Your trusted real estate partner for buying, selling, and investing in Long Island and NYC properties.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rmit Sharma | Real Estate Professional',
    description:
      'Your trusted real estate partner for buying, selling, and investing in Long Island and NYC properties.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Structured data for local business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Rmit Sharma',
  jobTitle: 'Real Estate Professional',
  worksFor: {
    '@type': 'RealEstateAgent',
    name: 'Signature Premier Properties',
  },
  memberOf: {
    '@type': 'Organization',
    name: 'The Lenard Team',
  },
  areaServed: [
    { '@type': 'County', name: 'Nassau County, NY' },
    { '@type': 'County', name: 'Suffolk County, NY' },
    { '@type': 'City', name: 'New York City, NY' },
  ],
  telephone: '+1-516-226-7459',
  email: 'rsharma@thelenardteam.com',
  sameAs: ['https://www.instagram.com/listedbyrmit/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
