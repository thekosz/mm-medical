'use client'
import { Phone } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import { siteConfig } from '@/site.config'

export default function CTABanner() {
  return (
    <section className="py-16 bg-[var(--accent)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for Your Appointment?</h2>
        <p className="text-lg text-gray-700 mb-8">Our friendly team is here to help. Request your appointment today!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <AppointmentButton variant="primary" size="lg" />
          <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--primary)] rounded-full font-semibold text-lg border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors">
            <Phone size={22} />{siteConfig.phone}
          </a>
        </div>
        <p className="mt-8 text-gray-600 text-sm">Call center hours: Monday - Friday, 8am - 8pm | Saturday, 9am - 2pm</p>
      </div>
    </section>
  )
}
