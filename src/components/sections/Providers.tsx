'use client'
import Image from 'next/image'
import { siteConfig } from '@/site.config'

const providers = [
  {
    name: 'Mehran Manoel',
    credentials: 'MD',
    specialty: 'Orthopedic Surgery & Sports Medicine',
    image: '/images/providers/dr-manoel.png',
  },
  {
    name: 'Amir Salem',
    credentials: 'MD',
    specialty: 'Interventional Radiology & Vascular Surgery',
    image: '/images/providers/dr-salem.png',
  },
]

export default function Providers() {
  return (
    <section className="py-20 bg-[var(--accent-light)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Providers</h2>
          <p className="text-lg text-gray-600">
            {siteConfig.providerSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {providers.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-80 relative bg-gradient-to-b from-[var(--accent)] to-[var(--secondary)]/20">
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill className="object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <div className="w-32 h-32 rounded-full bg-gray-200" />
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{p.name}, {p.credentials}</h3>
                <p className="text-[var(--secondary-dark)] font-medium mt-1">{p.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
