'use client'

import { CONTACT } from '@/lib/utils'
import { FadeIn } from './animations'
import { Quote } from 'lucide-react'

export function About() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#1e3a5f]/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              About
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              People, Not Just Properties
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <Quote className="h-10 w-10 text-[#c9a227]/30 mb-6" />
            <div className="text-lg lg:text-xl text-white/70 leading-relaxed space-y-6">
              <p>
                My name is{' '}
                <span className="text-white font-medium">{CONTACT.name}</span>,
                and I am a real estate professional with{' '}
                <span className="text-[#c9a227]">{CONTACT.company}</span> and a
                proud member of{' '}
                <span className="text-[#c9a227]">{CONTACT.team}</span>.
              </p>
              <p>
                I help clients buy, sell, invest in, and rent homes across
                Nassau County, Suffolk County, and all five boroughs of New York
                City.
              </p>
              <p>
                I believe real estate is about{' '}
                <span className="text-white font-medium">people</span>, not just
                properties. I focus on clear communication, honest guidance, and
                personalized service to make every transaction smooth and
                stress-free.
              </p>
              <p>
                Backed by strong market knowledge and trusted resources, I am
                committed to helping my clients achieve their real estate goals
                with{' '}
                <span className="text-[#c9a227]">
                  confidence and success
                </span>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
