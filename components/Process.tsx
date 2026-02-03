'use client'

import { motion } from 'framer-motion'
import {
  MessageCircle,
  Search,
  Home,
  FileText,
  Key,
} from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/utils'
import { FadeIn, Stagger, staggerChild } from './animations'

const icons = [MessageCircle, Search, Home, FileText, Key]

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="label text-center mb-4">How It Works</p>
          <h2 className="heading-lg text-white text-center mb-6">
            Simple Process, Big Results
          </h2>
          <p className="body-lg text-center max-w-2xl mx-auto mb-16">
            Buying or selling a home doesn&apos;t have to be complicated. Here&apos;s
            how we&apos;ll work together.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-[var(--border-subtle)]">
            <motion.div
              className="h-full bg-[var(--gold)]"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={step.step}
                  variants={staggerChild}
                  className="relative text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div
                      className="w-[72px] h-[72px] mx-auto flex items-center justify-center bg-[var(--bg-elevated)] border-2 border-[var(--gold)] relative"
                      style={{ borderRadius: '50%' }}
                    >
                      <Icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--gold)] text-[var(--bg-primary)] text-sm font-bold flex items-center justify-center rounded-full">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="heading-md text-white mb-2">{step.title}</h3>
                  <p className="body-md text-sm">{step.description}</p>
                </motion.div>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
