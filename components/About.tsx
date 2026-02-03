'use client'

import { CONTACT } from '@/lib/utils'
import { FadeIn } from './animations'

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="label text-center mb-4">About Me</p>
          <h2 className="heading-lg text-white text-center mb-12">
            Real Estate is About People
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="card p-8 lg:p-12">
            <div className="space-y-6 body-lg">
              <p>
                Hi, I'm <span className="text-white font-medium">{CONTACT.name}</span>.
                I work with <span className="text-gold">{CONTACT.company}</span> as part
                of <span className="text-gold">{CONTACT.team}</span>, helping families
                and individuals across Nassau County, Suffolk County, and all five
                boroughs of New York City.
              </p>

              <p>
                I got into real estate because I genuinely enjoy connecting people with
                the right home. It's not just about transactions for me. It's about
                understanding what matters to you and making sure you feel confident
                every step of the way.
              </p>

              <p>
                My approach is simple: clear communication, honest advice, and
                personalized service. I take the time to listen, answer your questions,
                and keep things as smooth as possible. No pressure, no jargon, just
                straightforward help when you need it.
              </p>

              <p>
                If you're thinking about buying, selling, investing, or renting, I'd
                love to hear from you. Let's talk about what you're looking for.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
