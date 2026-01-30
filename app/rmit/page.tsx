'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageSquare, Mail, Download, Instagram, Globe } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn, Float, HoverScale } from '@/components/animations'

export default function ContactCard() {
  const smsLink = `sms:${CONTACT.phoneRaw}?&body=${encodeURIComponent(CONTACT.smsText)}`

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background */}
      <div className="bg-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#0c2340]/20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Profile */}
        <FadeIn>
          <div className="text-center mb-10">
            <Float>
              <div className="relative inline-block">
                <div className="card p-2 mx-auto mb-6">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{ width: '100px', height: '130px' }}
                  >
                    <Image
                      src="/rmit.jpg"
                      alt={CONTACT.name}
                      fill
                      priority
                      className="object-cover"
                      sizes="100px"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#b8860b]/10 blur-xl -z-10" />
              </div>
            </Float>
            <h1 className="heading-md text-white mb-2">{CONTACT.name}</h1>
            <p className="text-[var(--text-secondary)]">{CONTACT.title}</p>
            <p className="text-[#b8860b] text-sm mt-1">{CONTACT.team}</p>
          </div>
        </FadeIn>

        {/* Actions */}
        <div className="space-y-3">
          <FadeIn delay={0.05}>
            <HoverScale href="/api/vcard">
              <span className="btn-primary w-full justify-center">
                <Download className="w-5 h-5" />
                Save Contact
              </span>
            </HoverScale>
          </FadeIn>

          <FadeIn delay={0.1}>
            <HoverScale href={`tel:${CONTACT.phoneRaw}`}>
              <span className="btn-secondary w-full justify-center">
                <Phone className="w-5 h-5" />
                Call
              </span>
            </HoverScale>
          </FadeIn>

          <FadeIn delay={0.15}>
            <HoverScale href={smsLink}>
              <span className="btn-secondary w-full justify-center">
                <MessageSquare className="w-5 h-5" />
                Text
              </span>
            </HoverScale>
          </FadeIn>

          <FadeIn delay={0.2}>
            <HoverScale href={`mailto:${CONTACT.email}`}>
              <span className="btn-secondary w-full justify-center">
                <Mail className="w-5 h-5" />
                Email
              </span>
            </HoverScale>
          </FadeIn>
        </div>

        {/* More actions */}
        <div className="mt-6 space-y-3">
          <FadeIn delay={0.25}>
            <HoverScale href={CONTACT.instagram} target="_blank">
              <span className="btn-secondary w-full justify-center">
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </span>
            </HoverScale>
          </FadeIn>

          <FadeIn delay={0.3}>
            <HoverScale>
              <Link href="/" className="btn-secondary w-full justify-center">
                <Globe className="w-5 h-5" />
                Visit Website
              </Link>
            </HoverScale>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            {CONTACT.company}
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
