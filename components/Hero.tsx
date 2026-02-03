'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { CONTACT, STATS } from '@/lib/utils'
import { FadeIn, ParallaxBg, Float, HoverScale } from './animations'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <ParallaxBg />
      <div className="bg-gradient" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo first on mobile */}
          <div className="flex justify-center lg:order-2">
            <FadeIn delay={0.1}>
              <Float>
                <div className="relative">
                  <div
                    className="overflow-hidden border border-[var(--border-subtle)] shadow-2xl"
                    style={{ width: '280px', height: '350px', borderRadius: '1rem' }}
                  >
                    <Image
                      src="/rmit.jpg"
                      alt={`${CONTACT.name}, Real Estate Professional`}
                      fill
                      priority
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-[#b8860b]/10 blur-2xl -z-10" style={{ borderRadius: '1rem' }} />
                </div>
              </Float>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left lg:order-1">
            <FadeIn>
              <p className="label mb-4">{CONTACT.team}</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="heading-xl text-white mb-4">
                {CONTACT.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="heading-md text-[#b8860b] mb-6">
                {CONTACT.title}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="body-lg max-w-lg mx-auto lg:mx-0 mb-8">
                I help people find their perfect home across Long Island and New York City.
                Whether you&apos;re buying, selling, or investing, I&apos;m here to make the process
                simple and stress-free.
              </p>
            </FadeIn>

            {/* Stats Row */}
            <FadeIn delay={0.22}>
              <div className="flex gap-6 lg:gap-8 justify-center lg:justify-start mb-10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-[var(--gold)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <HoverScale href={`tel:${CONTACT.phoneRaw}`}>
                  <span className="btn-primary whitespace-nowrap">
                    <Phone className="w-5 h-5" />
                    Call Me
                  </span>
                </HoverScale>

                <HoverScale href={`mailto:${CONTACT.email}`}>
                  <span className="btn-secondary whitespace-nowrap">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </span>
                </HoverScale>
              </div>

              <Link
                href="/rmit"
                className="mt-6 inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[#b8860b] transition-colors group justify-center lg:justify-start w-full lg:w-auto"
              >
                <span>Save my contact info</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
