import { Navbar } from '@/components/Navbar'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { ServiceAreas } from '@/components/ServiceAreas'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <ServiceAreas />
      <CTA />
      <Footer />
    </>
  )
}
