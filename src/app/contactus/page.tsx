'use client'
import { Phone, MapPin, Clock, MessageCircle, UserCircle, Calendar } from 'lucide-react'
import { locations as allLocations } from '@/data/locations'
import { siteConfig } from '@/site.config'

// Transform locations data for contact page display
const locations = allLocations.map(loc => ({
  name: loc.name,
  address: loc.address.split(',')[0], // Street address
  city: loc.address.split(',').slice(1).join(',').trim(), // City, State ZIP
  phone: loc.phone,
  hours: loc.hours,
}))

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center gap-4 p-6 bg-[var(--accent-light)] rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-[var(--primary)] text-white rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-[var(--primary)] font-medium">{siteConfig.phone}</p>
              </div>
            </a>

            <a
              href={siteConfig.messagingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[var(--accent-light)] rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-[var(--primary)] text-white rounded-full">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Message Us</h3>
                <p className="text-[var(--primary)] font-medium">Secure Chat</p>
              </div>
            </a>

            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=hW54f2ErvkunlnHpHl5-OETZVlApYBxMkTsBqFlhudBUNjBOMzFZS0M1STlLMzFJQUVTM0dIQUdaTC4u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[var(--accent-light)] rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-[var(--primary)] text-white rounded-full">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Request Appointment</h3>
                <p className="text-[var(--primary)] font-medium">Book Online</p>
              </div>
            </a>

            <a
              href="https://www.myhealthrecord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[var(--accent-light)] rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-[var(--secondary)] text-white rounded-full">
                <UserCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Patient Portal</h3>
                <p className="text-[var(--primary)] font-medium">Access Your Records</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-[var(--accent-light)] rounded-xl">
              <div className="p-3 bg-[var(--secondary)] text-white rounded-full">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Center Hours</h3>
                <p className="text-gray-600 text-sm">Mon-Fri 8am-8pm<br/>Sat 9am-2pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-[var(--accent-light)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Locations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{loc.name}</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-gray-600">
                    <MapPin size={16} className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <span>{loc.address}, {loc.city}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} className="text-[var(--primary)] flex-shrink-0" />
                    <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[var(--primary)] font-medium">{loc.phone}</a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-[var(--primary)] flex-shrink-0" />
                    {loc.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
