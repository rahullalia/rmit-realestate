'use client'

import { Instagram } from 'lucide-react'
import { CONTACT } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-white">{CONTACT.name}</p>
            <p className="text-sm text-[var(--text-muted)]">
              {CONTACT.company} · {CONTACT.team}
            </p>
          </div>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[#b8860b] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>{CONTACT.instagramHandle}</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} {CONTACT.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
