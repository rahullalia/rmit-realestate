'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/utils'
import { FadeIn, Stagger, staggerChild } from './animations'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="label text-center mb-4">Client Success</p>
          <h2 className="heading-lg text-white text-center mb-6">
            What Clients Say
          </h2>
          <p className="body-lg text-center max-w-2xl mx-auto mb-16">
            Don&apos;t just take my word for it. Here&apos;s what families I&apos;ve
            worked with have to say.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={staggerChild}>
              <div className="card h-full p-6 lg:p-8 flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[var(--gold)] mb-4 opacity-50" />

                {/* Quote */}
                <p className="body-md flex-grow mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
                    />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
