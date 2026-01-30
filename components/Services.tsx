'use client'

import { Home, DollarSign, TrendingUp, Key } from 'lucide-react'
import { FadeIn, FadeInStagger, SpotlightCard, staggerItem } from './animations'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Buy',
    description:
      'Find your dream home with personalized guidance through every step of the buying process.',
    icon: Home,
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    title: 'Sell',
    description:
      'Get top dollar for your property with strategic marketing and expert negotiation.',
    icon: DollarSign,
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    title: 'Invest',
    description:
      'Build wealth through real estate with investment properties and market insights.',
    icon: TrendingUp,
    gradient: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'Rent',
    description:
      'Whether you need a rental or want to rent out your property, I can help.',
    icon: Key,
    gradient: 'from-orange-500/20 to-transparent',
  },
]

export function Services() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a5f]/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Services
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              How I Can Help
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Full-service real estate support for all your property needs
            </p>
          </div>
        </FadeIn>

        <FadeInStagger staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <SpotlightCard className="h-full glass-card rounded-2xl p-6 group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 glass-card-light rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-[#c9a227]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
