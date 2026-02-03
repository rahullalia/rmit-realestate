'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Name */}
            <a
              href="#"
              className="font-semibold text-white hover:text-[var(--gold)] transition-colors"
            >
              {CONTACT.name}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-primary text-sm py-2 px-4"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
              <div className="px-6 py-4 space-y-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-[var(--text-secondary)] hover:text-white transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="btn-primary w-full justify-center mt-4"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
