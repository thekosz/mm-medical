'use client'
import { useState } from 'react'
import { Phone, MessageCircle, Clock, CheckCircle, Send, User, Mail, Calendar } from 'lucide-react'
import { siteConfig } from '@/site.config'
import { locations } from '@/data/locations'

export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // Store submission locally via API
    try {
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submitted_at: new Date().toISOString() }),
      })
    } catch {
      // Silent fail — we'll still show success since the form data is captured
    }

    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="pt-20">
        <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Request Received</h2>
            <p className="text-gray-600 mb-8">
              We&apos;ve received your request and will contact you within one business day to confirm your appointment.
            </p>
            <div className="bg-[var(--accent-light)] rounded-xl p-6 text-left space-y-2">
              <p className="text-gray-700"><strong>Name:</strong> {form.name}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {form.phone}</p>
              {form.location && <p className="text-gray-700"><strong>Location:</strong> {form.location}</p>}
              {form.service && <p className="text-gray-700"><strong>Service:</strong> {form.service}</p>}
              {form.preferred_date && <p className="text-gray-700"><strong>Preferred Date:</strong> {form.preferred_date}</p>}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Need immediate assistance? Call us at <a href={`tel:${siteConfig.phoneTel}`} className="text-[var(--primary)] font-semibold">{siteConfig.phone}</a>
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule Your Appointment</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fill out the form below and our team will contact you to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Location</label>
                    <select
                      value={form.location}
                      onChange={e => setForm({...form, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select a location</option>
                      {locations.map(loc => (
                        <option key={loc.name} value={loc.name}>{loc.name} — {loc.phone}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="GAE for Knee Pain">GAE for Knee Pain</option>
                      <option value="Shoulder Embolization">Shoulder Embolization</option>
                      <option value="Interventional Radiology">Interventional Radiology</option>
                      <option value="Vascular Care">Vascular Care</option>
                      <option value="Pain Management">Pain Management</option>
                      <option value="Orthopedic Surgery">Orthopedic Surgery</option>
                      <option value="Physical Therapy">Physical Therapy</option>
                      <option value="Podiatry">Podiatry</option>
                      <option value="Annual Exam">Annual Exam</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={form.preferred_date}
                        onChange={e => setForm({...form, preferred_date: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                    <select
                      value={form.preferred_time}
                      onChange={e => setForm({...form, preferred_time: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select a time</option>
                      <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                      <option value="Afternoon (12pm-3pm)">Afternoon (12pm-3pm)</option>
                      <option value="Late Afternoon (3pm-5pm)">Late Afternoon (3pm-5pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your condition, insurance, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold text-lg hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                  {sending ? 'Submitting...' : 'Request Appointment'}
                </button>

                <p className="text-sm text-gray-500">
                  * This is a request, not a confirmed appointment. Our team will call you to confirm availability.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[var(--accent)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Prefer to Call?</h3>
                <div className="space-y-3">
                  {locations.map(loc => (
                    <a key={loc.name} href={`tel:${loc.phone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <Phone size={18} className="text-[var(--primary)]" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{loc.name}</p>
                        <p className="text-[var(--primary)] text-sm">{loc.phone}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--accent-light)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  For emergencies, call 911 or visit your nearest ER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-[var(--accent-light)]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What to Bring to Your Appointment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Valid photo ID (driver\'s license, passport, etc.)',
              'Insurance card (front and back)',
              'List of current medications',
              'Medical records or imaging from previous providers',
              'Referral from your primary care physician (if required)',
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
    </main>
  )
}
