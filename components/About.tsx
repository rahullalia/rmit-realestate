import { CONTACT } from '@/lib/utils'

export function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] text-center">
          About Me
        </h2>
        <div className="mt-8 text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            My name is {CONTACT.name}, and I am a real estate professional with{' '}
            {CONTACT.company} and a proud member of {CONTACT.team}. I help
            clients buy, sell, invest in, and rent homes across Nassau County,
            Suffolk County, and all five boroughs of New York City.
          </p>
          <p>
            I believe real estate is about people, not just properties. I focus
            on clear communication, honest guidance, and personalized service to
            make every transaction smooth and stress-free.
          </p>
          <p>
            Backed by strong market knowledge and trusted resources, I am
            committed to helping my clients achieve their real estate goals with
            confidence and success.
          </p>
        </div>
      </div>
    </section>
  )
}
