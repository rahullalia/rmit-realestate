'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CreditCard, ArrowDown } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import {
  FadeIn,
  MagneticButton,
  ParallaxBackground,
  Float,
  GlowPulse,
} from './animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <ParallaxBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
                {CONTACT.company}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="hero-heading font-bold text-gradient">
                {CONTACT.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-4 text-xl lg:text-2xl text-white/60">
                {CONTACT.title}
              </p>
              <p className="mt-2 text-lg text-[#c9a227]/80">{CONTACT.team}</p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-8 text-lg text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Helping you buy, sell, invest, and rent across Nassau County,
                Suffolk County, and all five boroughs of NYC.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton href={`tel:${CONTACT.phoneRaw}`}>
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a227] text-[#0a0a0a] font-semibold rounded-full btn-glow">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </span>
                </MagneticButton>

                <MagneticButton href={`mailto:${CONTACT.email}`}>
                  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card-light text-white font-medium rounded-full hover:bg-white/10">
                    <Mail className="h-5 w-5" />
                    Email Me
                  </span>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    href="/card"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-[#c9a227] hover:text-[#c9a227]"
                  >
                    <CreditCard className="h-5 w-5" />
                    Contact Card
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <FadeIn delay={0.3}>
              <Float duration={4}>
                <GlowPulse className="rounded-full">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-[#c9a227]/50">
                    <Image
                      src="/rmit.jpg"
                      alt={CONTACT.name}
                      fill
                      priority
                      className="object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 to-transparent" />
                  </div>
                </GlowPulse>
              </Float>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={0.8}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <Float duration={2}>
              <ArrowDown className="h-6 w-6 text-white/30" />
            </Float>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
