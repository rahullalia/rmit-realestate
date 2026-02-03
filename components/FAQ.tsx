'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/utils'
import { FadeIn } from './animations'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="label text-center mb-4">Questions & Answers</p>
          <h2 className="heading-lg text-white text-center mb-6">
            Common Questions
          </h2>
          <p className="body-lg text-center max-w-2xl mx-auto mb-12">
            Got questions? Here are answers to some of the most common ones I
            hear.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <span className="font-medium text-white pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-[var(--text-secondary)]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
