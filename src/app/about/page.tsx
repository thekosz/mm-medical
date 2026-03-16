'use client'
import Image from 'next/image'
import { Phone, Heart, Users, Award, MapPin } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import { siteConfig } from '@/site.config'

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About {siteConfig.name}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Providing compassionate, comprehensive women&apos;s healthcare for over 25 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                {siteConfig.name} was founded with a simple mission: to provide exceptional women&apos;s healthcare
                in a warm, supportive environment. What began as a single practice has grown into one of the
                largest OB/GYN groups in the New York metropolitan area.
              </p>
              <p className="text-gray-600 mb-4">
                Today, our team of 44 board-certified physicians, nurse practitioners, and certified nurse
                midwives serves patients across 10 convenient locations. We&apos;re proud to offer comprehensive
                care from adolescence through menopause and beyond.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence is reflected in our outcomes: a 3.1% preterm birth rate
                compared to the national average of 11.4%, demonstrating our dedication to the health
                of both mothers and babies.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/garden_hero_wellness_00001_.png"
                alt={`${siteConfig.name} Care`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[var(--accent-light)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <Heart size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600 text-sm">We treat every patient with kindness, empathy, and respect.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <Award size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive for the highest standards in medical care.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <Users size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">We work together as a team to provide seamless care.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <MapPin size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">We make quality healthcare convenient and accessible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">44</div>
              <p className="text-gray-600">Board-Certified Providers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">10</div>
              <p className="text-gray-600">Convenient Locations</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">25+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">3.1%</div>
              <p className="text-gray-600">Preterm Birth Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--accent)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Garden Family</h2>
          <p className="text-gray-700 mb-8">Experience the compassionate, comprehensive care that has made us one of the most trusted OB/GYN practices in New York.</p>
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
