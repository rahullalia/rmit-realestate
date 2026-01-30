import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { ServiceAreas } from '@/components/ServiceAreas'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ServiceAreas />
      <CTA />
      <Footer />
    </>
  )
}
