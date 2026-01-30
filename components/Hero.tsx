import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CreditCard } from 'lucide-react'
import { CONTACT } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#0f2a4f] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-[#c9a227] font-medium tracking-wide uppercase text-sm mb-2">
              {CONTACT.company}
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              {CONTACT.name}
            </h1>
            <p className="mt-2 text-xl lg:text-2xl text-white/80">
              {CONTACT.title}
            </p>
            <p className="mt-1 text-lg text-[#c9a227]">{CONTACT.team}</p>

            <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
              Helping you buy, sell, invest, and rent across Nassau County,
              Suffolk County, and all five boroughs of NYC.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </a>
              <Link
                href="/card"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
              >
                <CreditCard className="h-5 w-5" />
                Contact Card
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#c9a227] shadow-2xl">
              <Image
                src="/rmit.jpg"
                alt={CONTACT.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
