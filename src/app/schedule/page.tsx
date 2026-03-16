'use client'
import { Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/site.config'

export default function SchedulePage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule Your Appointment</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Book online or call us to schedule your visit. We offer same-day appointments when available.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Book Online */}
            <div className="bg-[var(--accent-light)] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                <Clock size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Book Online</h2>
              <p className="text-gray-600 mb-6">Request an appointment through our secure HIPAA-compliant booking form.</p>
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=hW54f2ErvkunlnHpHl5-OETZVlApYBxMkTsBqFlhudBUNjBOMzFZS0M1STlLMzFJQUVTM0dIQUdaTC4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
              >
                <Clock size={20} />Request Appointment
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--accent-light)] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--secondary)] text-white rounded-full flex items-center justify-center">
                <MessageCircle size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600 mb-6">Fill out our contact form and we&apos;ll get back to you promptly.</p>
              <a
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[var(--secondary)] text-white rounded-full font-semibold hover:bg-[var(--secondary-dark)] transition-colors"
              >
                <MessageCircle size={20} />Contact Form
              </a>
            </div>

            {/* Call */}
            <div className="bg-[var(--accent-light)] rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                <Phone size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Call Us</h2>
              <p className="text-gray-600 mb-6">Speak directly with our scheduling team during business hours.</p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
              >
                <Phone size={20} />{siteConfig.phone}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-[var(--accent-light)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What to Bring to Your Appointment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Valid photo ID (driver\'s license, passport, etc.)',
              'Insurance card (front and back)',
              'List of current medications',
              'Medical records from previous providers (if applicable)',
              'Completed patient forms (available online)',
              'Payment for any co-pays or deductibles',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <CheckCircle className="text-[var(--primary)] flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Center Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-[var(--primary)] mb-4">
            <Clock size={24} />
            <span className="font-semibold text-lg">Call Center Hours</span>
          </div>
          <div className="bg-[var(--accent)] rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">Monday - Friday</h3>
                <p>8:00 AM - 8:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Saturday</h3>
                <p>9:00 AM - 2:00 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              For emergencies, please call 911 or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
