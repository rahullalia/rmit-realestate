import { Home, DollarSign, TrendingUp, Key } from 'lucide-react'

const services = [
  {
    title: 'Buy',
    description:
      'Find your dream home with personalized guidance through every step of the buying process.',
    icon: Home,
  },
  {
    title: 'Sell',
    description:
      'Get top dollar for your property with strategic marketing and expert negotiation.',
    icon: DollarSign,
  },
  {
    title: 'Invest',
    description:
      'Build wealth through real estate with investment properties and market insights.',
    icon: TrendingUp,
  },
  {
    title: 'Rent',
    description:
      'Whether you need a rental or want to rent out your property, I can help.',
    icon: Key,
  },
]

export function Services() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] text-center">
          How I Can Help
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Full-service real estate support for all your property needs
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center mx-auto">
                <service.icon className="h-7 w-7 text-[#1e3a5f]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1e3a5f]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
