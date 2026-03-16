'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import { services } from '@/data/services'
import { siteConfig } from '@/site.config'

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive women&apos;s healthcare services from expert providers across the NYC metro area.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[var(--accent-light)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-[var(--primary)]">
                <div className="relative h-32 md:h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-2 left-3 right-3 font-bold text-white text-sm md:text-base">{service.name}</h3>
                </div>
                <div className="p-3">
                  <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{service.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose {siteConfig.name}?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">44</div>
              <p className="text-gray-600">Board-Certified Providers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">10</div>
              <p className="text-gray-600">Convenient Locations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">3.1%</div>
              <p className="text-gray-600">Preterm Birth Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">25+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--accent)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-8">Contact us today to schedule an appointment with one of our specialists.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AppointmentButton variant="primary" size="lg" />
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--primary)] rounded-full font-semibold text-lg border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              <Phone size={22} />{siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
