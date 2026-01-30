'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  MessageSquare,
  Mail,
  Download,
  Instagram,
  ArrowLeft,
} from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn, Float, GlowPulse, MagneticButton } from '@/components/animations'

export default function CardPage() {
  // Encode SMS body for URL
  const smsLink = `sms:${CONTACT.phoneRaw}?&body=${encodeURIComponent(CONTACT.smsText)}`

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#1e3a5f]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#c9a227]/10 blur-3xl" />

      {/* Back link */}
      <FadeIn>
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back</span>
        </Link>
      </FadeIn>

      {/* Card Container */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Profile Section */}
        <FadeIn>
          <div className="text-center mb-10">
            <Float duration={4}>
              <GlowPulse className="inline-block rounded-full">
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#c9a227]/50">
                  <Image
                    src="/rmit.jpg"
                    alt={CONTACT.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </GlowPulse>
            </Float>
            <h1 className="text-3xl font-bold text-gradient">{CONTACT.name}</h1>
            <p className="text-white/60 mt-2">{CONTACT.title}</p>
            <p className="text-[#c9a227]/80 text-sm mt-1">{CONTACT.team}</p>
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Save Contact */}
          <FadeIn delay={0.1}>
            <MagneticButton href="/api/vcard">
              <span className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#c9a227] text-[#0a0a0a] font-semibold rounded-xl btn-glow">
                <Download className="h-5 w-5" />
                Save Contact
              </span>
            </MagneticButton>
          </FadeIn>

          {/* Call */}
          <FadeIn delay={0.15}>
            <MagneticButton href={`tel:${CONTACT.phoneRaw}`}>
              <span className="flex items-center justify-center gap-3 w-full py-4 px-6 glass-card-light text-white font-medium rounded-xl hover:bg-white/10">
                <Phone className="h-5 w-5" />
                Call
              </span>
            </MagneticButton>
          </FadeIn>

          {/* Text with prefilled message */}
          <FadeIn delay={0.2}>
            <MagneticButton href={smsLink}>
              <span className="flex items-center justify-center gap-3 w-full py-4 px-6 glass-card-light text-white font-medium rounded-xl hover:bg-white/10">
                <MessageSquare className="h-5 w-5" />
                Text
              </span>
            </MagneticButton>
          </FadeIn>

          {/* Email */}
          <FadeIn delay={0.25}>
            <MagneticButton href={`mailto:${CONTACT.email}`}>
              <span className="flex items-center justify-center gap-3 w-full py-4 px-6 glass-card-light text-white font-medium rounded-xl hover:bg-white/10">
                <Mail className="h-5 w-5" />
                Email
              </span>
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Social Links */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-[#c9a227] transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span>{CONTACT.instagramHandle}</span>
            </a>
          </div>
        </FadeIn>

        {/* Company Info */}
        <FadeIn delay={0.35}>
          <div className="mt-8 text-center">
            <p className="text-white/30 text-sm">{CONTACT.company}</p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
