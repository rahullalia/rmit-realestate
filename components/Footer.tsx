'use client'

import { Instagram, Phone, Mail } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-semibold text-white text-lg mb-2">{CONTACT.name}</p>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              {CONTACT.title}
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              {CONTACT.company}
              <br />
              {CONTACT.team}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white mb-4">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} {CONTACT.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
