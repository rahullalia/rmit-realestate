'use client'

import { Home, DollarSign, TrendingUp, Key } from 'lucide-react'
import { FadeIn, Stagger, HoverCard, staggerChild } from './animations'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Buying',
    description:
      "Looking for your next home? I'll help you find the right place and guide you through every step of the process.",
    icon: Home,
  },
  {
    title: 'Selling',
    description:
      "Ready to sell? I'll help you price it right, market it well, and negotiate the best deal for you.",
    icon: DollarSign,
  },
  {
    title: 'Investing',
    description:
      "Interested in building wealth through real estate? Let's find investment properties that make sense for your goals.",
    icon: TrendingUp,
  },
  {
    title: 'Renting',
    description:
      'Need a rental or want to rent out your property? I can help on both sides of the equation.',
    icon: Key,
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="label text-center mb-4">What I Do</p>
          <h2 className="heading-lg text-white text-center mb-6">
            How I Can Help You
          </h2>
          <p className="body-lg text-center max-w-2xl mx-auto mb-16">
            Whether you&apos;re making your first purchase or your tenth, I&apos;m here to
            provide the guidance and support you need.
          </p>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerChild}>
              <HoverCard className="h-full">
                <div className="card card-hover h-full p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#b8860b]/10 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-[#b8860b]" />
                  </div>
                  <h3 className="heading-md text-white mb-3">{service.title}</h3>
                  <p className="body-md">{service.description}</p>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
