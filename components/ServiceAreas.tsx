'use client'

import { MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn, FadeInStagger, staggerItem } from './animations'
import { motion } from 'framer-motion'

export function ServiceAreas() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Coverage
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Areas I Serve
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12">
            Local expertise across Long Island and New York City
          </p>
        </FadeIn>

        <FadeInStagger
          staggerDelay={0.15}
          className="flex flex-wrap justify-center gap-4"
        >
          {CONTACT.serviceAreas.map((area) => (
            <motion.div
              key={area}
              variants={staggerItem}
              className="glass-card-light rounded-full px-8 py-4 flex items-center gap-3 hover:border-[#c9a227]/50 transition-colors cursor-default"
            >
              <MapPin className="h-5 w-5 text-[#c9a227]" />
              <span className="font-medium text-white">{area}</span>
            </motion.div>
          ))}
        </FadeInStagger>

        {/* Decorative map lines */}
        <FadeIn delay={0.5}>
          <div className="mt-16 relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a227] glow-gold" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
