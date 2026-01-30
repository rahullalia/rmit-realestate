'use client'

import { Instagram } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn } from './animations'

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white">{CONTACT.name}</p>
              <p className="text-sm text-white/40">
                {CONTACT.company} • {CONTACT.team}
              </p>
            </div>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-[#c9a227] transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>{CONTACT.instagramHandle}</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} {CONTACT.name}. All rights
              reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
