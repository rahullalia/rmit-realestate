'use client'

import { MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/utils'
import { FadeIn, Stagger, staggerChild } from './animations'
import { motion } from 'framer-motion'

export function ServiceAreas() {
  return (
    <section id="areas" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="label mb-4">Where I Work</p>
          <h2 className="heading-lg text-white mb-6">Areas I Serve</h2>
          <p className="body-lg max-w-2xl mx-auto mb-12">
            I know these neighborhoods inside and out. Local knowledge makes a
            real difference when you're buying or selling.
          </p>
        </FadeIn>

        <Stagger className="flex flex-wrap justify-center gap-4">
          {CONTACT.serviceAreas.map((area) => (
            <motion.div
              key={area}
              variants={staggerChild}
              className="card px-6 py-4 flex items-center gap-3"
            >
              <MapPin className="w-5 h-5 text-[#b8860b]" />
              <span className="font-medium text-white">{area}</span>
            </motion.div>
          ))}
        </Stagger>

        <FadeIn delay={0.3}>
          <div className="divider mt-16 max-w-lg mx-auto" />
        </FadeIn>
      </div>
    </section>
  )
}
