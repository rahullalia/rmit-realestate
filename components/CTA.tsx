import Link from 'next/link'
import { Phone, Mail, CreditCard } from 'lucide-react'
import { CONTACT } from '@/lib/utils'

export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-[#1e3a5f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Ready to Make a Move?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Whether you&apos;re buying your first home, selling a property, or
          looking to invest, I&apos;m here to guide you every step of the way.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </a>
          <Link
            href="/card"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a227] text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#d4af37] transition-colors text-lg"
          >
            <CreditCard className="h-5 w-5" />
            Save My Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
