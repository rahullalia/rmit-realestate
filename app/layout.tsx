import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Rmit Sharma | Real Estate Professional | Nassau, Suffolk & NYC',
  description:
    'Rmit Sharma helps clients buy, sell, invest in, and rent homes across Nassau County, Suffolk County, and all five boroughs of New York City. Signature Premier Properties | The Lenard Team.',
  keywords: [
    'real estate',
    'Nassau County',
    'Suffolk County',
    'NYC',
    'homes for sale',
    'buy home',
    'sell home',
    'real estate agent',
    'Rmit Sharma',
    'The Lenard Team',
  ],
  openGraph: {
    title: 'Rmit Sharma | Real Estate Professional',
    description:
      'Helping clients buy, sell, invest, and rent homes in Nassau, Suffolk, and NYC.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  )
}
