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
            Advanced vascular, orthopedic, and interventional radiology care for over 20 years.
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
                {siteConfig.name} was founded with a commitment to providing advanced, minimally invasive
                surgical care in a patient-centered environment. Our physicians bring decades of combined
                experience in vascular surgery, orthopedic surgery, and interventional radiology.
              </p>
              <p className="text-gray-600 mb-4">
                Led by Dr. Mehran Manoel and Dr. Amir Salem, our practice offers comprehensive care
                across two convenient locations in Forest Hills, Queens and Great Neck, Long Island.
              </p>
              <p className="text-gray-600">
                We specialize in cutting-edge treatments including GAE for knee pain, shoulder embolization,
                sports medicine, and advanced vascular procedures — helping our patients return to active,
                pain-free living.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden bg-[var(--accent)]">
              <div className="flex items-center justify-center h-full text-[var(--primary)]">
                <Award size={80} strokeWidth={1} />
              </div>
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
              <p className="text-gray-600 text-sm">We strive for the highest standards in surgical and medical care.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <Users size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">Our specialists work together to provide coordinated, seamless care.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <MapPin size={28} className="text-[var(--primary)]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Two convenient locations serving Queens and Long Island.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">2</div>
              <p className="text-gray-600">Expert Physicians</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">2</div>
              <p className="text-gray-600">Convenient Locations</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">20+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[var(--primary)] mb-2">98%</div>
              <p className="text-gray-600">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--accent)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Your Visit</h2>
          <p className="text-gray-700 mb-8">Experience the advanced, personalized care that has made us a trusted name in vascular and orthopedic medicine.</p>
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
