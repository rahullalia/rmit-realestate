import { MapPin } from 'lucide-react'
import { CONTACT } from '@/lib/utils'

export function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f]">
          Areas I Serve
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Local expertise across Long Island and New York City
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {CONTACT.serviceAreas.map((area) => (
            <div
              key={area}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white rounded-full"
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
