'use client'

import Link from 'next/link'
import { Phone, Mail, CreditCard, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn, MagneticButton } from './animations'

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1e3a5f]/20 blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#c9a227]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make a Move?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12">
            Whether you&apos;re buying your first home, selling a property, or
            looking to invest, I&apos;m here to guide you every step of the way.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton href={`tel:${CONTACT.phoneRaw}`}>
              <span className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a227] text-[#0a0a0a] font-semibold rounded-full btn-glow text-lg">
                <Phone className="h-5 w-5" />
                {CONTACT.phone}
              </span>
            </MagneticButton>

            <MagneticButton href={`mailto:${CONTACT.email}`}>
              <span className="inline-flex items-center justify-center gap-3 px-8 py-4 glass-card-light text-white font-medium rounded-full hover:bg-white/10 text-lg">
                <Mail className="h-5 w-5" />
                Email Me
              </span>
            </MagneticButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8">
            <Link
              href="/card"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#c9a227] transition-colors group"
            >
              <CreditCard className="h-4 w-4" />
              <span>Save my contact card</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
