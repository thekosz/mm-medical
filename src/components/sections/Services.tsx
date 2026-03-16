'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

// Top 8 services to highlight on homepage
const topServices = [
  { name: 'GAE for Knee Pain', slug: 'gae-knee-pain', image: '/images/services/gae-knee-pain.jpg', desc: 'Minimally invasive arthritis relief' },
  { name: 'Shoulder Embolization', slug: 'shoulder-embolization', image: '/images/services/shoulder-embolization.jpg', desc: 'Non-surgical shoulder pain treatment' },
  { name: 'Interventional Radiology', slug: 'interventional-radiology', image: '/images/services/interventional-radiology.jpg', desc: 'Image-guided procedures' },
  { name: 'Vascular Care', slug: 'vascular-care', image: '/images/services/vascular-care.jpg', desc: 'Comprehensive vascular treatment' },
  { name: 'Pain Management', slug: 'pain-management', image: '/images/services/pain-management.jpg', desc: 'Personalized chronic pain relief' },
  { name: 'Orthopedic Surgery', slug: 'orthopedic-surgery', image: '/images/services/orthopedic-surgery.jpg', desc: 'Joint pain and mobility solutions' },
  { name: 'Physical Therapy', slug: 'physical-therapy', image: '/images/services/physical-therapy.jpg', desc: 'Strength, balance, recovery' },
  { name: 'Annual Exams', slug: 'annual-exams', image: '/images/services/annual-exams.jpg', desc: 'Preventive yearly checkups' },
]

export default function Services() {
  return (
    <section className="py-20 bg-[var(--accent-light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Advanced vascular, pain management, and rehabilitation services for seniors.</p>
        </div>

        {/* Services Grid - Top 8 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topServices.map((service) => (
            <Link key={service.name} href={`/services/${service.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg card-hover border border-transparent hover:border-[var(--primary)]">
              <div className="relative h-32 md:h-40 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 group-hover:text-[var(--primary)] mb-1">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
