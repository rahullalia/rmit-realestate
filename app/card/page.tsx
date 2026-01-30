import Image from 'next/image'
import { Phone, MessageSquare, Mail, Download, Instagram } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Contact Card | ${CONTACT.name}`,
  description: `Save ${CONTACT.name}'s contact information - Real Estate Professional serving Nassau, Suffolk, and NYC.`,
}

export default function CardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 py-12">
      {/* Card Container */}
      <div className="w-full max-w-sm">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-3 border-[#c9a227]">
            <Image
              src="/rmit.jpg"
              alt={CONTACT.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">{CONTACT.name}</h1>
          <p className="text-gray-400">{CONTACT.title}</p>
          <p className="text-[#c9a227] text-sm mt-1">{CONTACT.team}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Save Contact */}
          <a
            href="/api/vcard"
            download={`${CONTACT.name.replace(' ', '_')}.vcf`}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#c9a227] text-[#0a0a0a] font-semibold rounded-xl hover:bg-[#d4af37] transition-colors"
          >
            <Download className="h-5 w-5" />
            Save Contact
          </a>

          {/* Call */}
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/10"
          >
            <Phone className="h-5 w-5" />
            Call
          </a>

          {/* Text */}
          <a
            href={`sms:${CONTACT.phoneRaw}`}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/10"
          >
            <MessageSquare className="h-5 w-5" />
            Text
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/10"
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="h-6 w-6" />
            <span className="text-sm">{CONTACT.instagramHandle}</span>
          </a>
        </div>

        {/* Company Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">{CONTACT.company}</p>
        </div>
      </div>
    </div>
  )
}
