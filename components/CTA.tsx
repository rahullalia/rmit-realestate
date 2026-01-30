'use client'

import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn, HoverScale } from './animations'

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0c2340]/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="label mb-4">Get in Touch</p>
          <h2 className="heading-lg text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="body-lg mb-12">
            Whether you have questions or you're ready to take the next step,
            I'm just a call or message away. Let's talk about what you're
            looking for.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <HoverScale href={`tel:${CONTACT.phoneRaw}`}>
              <span className="btn-primary text-lg">
                <Phone className="w-5 h-5" />
                {CONTACT.phone}
              </span>
            </HoverScale>

            <HoverScale href={`mailto:${CONTACT.email}`}>
              <span className="btn-secondary text-lg">
                <Mail className="w-5 h-5" />
                Send Email
              </span>
            </HoverScale>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Link
            href="/rmit"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[#b8860b] transition-colors group"
          >
            <span>Save my contact info</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
