'use client'
import Image from 'next/image'
import { Phone, CheckCircle } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import { siteConfig } from '@/site.config'

const carriers = [
  { name: 'Aetna', logo: '/images/insurance/aetna.png' },
  { name: 'Blue Cross Blue Shield', logo: '/images/insurance/blue-cross-blue-shield-3.png' },
  { name: 'Cigna', logo: '/images/insurance/cigna.png' },
  { name: 'United Healthcare', logo: '/images/insurance/united-healthcare.png' },
  { name: 'Empire', logo: '/images/insurance/empire-plan.png' },
  { name: 'Oxford', logo: '/images/insurance/uhc-oxford.png' },
  { name: 'GHI Emblem', logo: '/images/insurance/ghi-emblem-health.png' },
  { name: 'Healthfirst', logo: '/images/insurance/healthfirst.jpg' },
  { name: 'Fidelis', logo: '/images/insurance/fidelis-care.png' },
  { name: 'Affinity', logo: '/images/insurance/affinity.png' },
  { name: 'Multiplan', logo: '/images/insurance/multiplan.png' },
  { name: 'Medicare', logo: '/images/insurance/medicare.png' },
  { name: 'Humana', logo: '/images/insurance/humana.png' },
  { name: 'Tricare', logo: '/images/insurance/tricare.png' },
  { name: 'HIP', logo: '/images/insurance/hip.png' },
  { name: '1199 SEIU', logo: '/images/insurance/1199seiu.png' },
  { name: 'Magnacare', logo: '/images/insurance/magnacare.png' },
  { name: 'Aetna Medicare', logo: '/images/insurance/aetna-medicare.png' },
  { name: 'Amerigroup', logo: '/images/insurance/amerigroup.png' },
  { name: 'Coventry', logo: '/images/insurance/coventry.png' },
  { name: 'First Health', logo: '/images/insurance/first-health-network.png' },
  { name: 'Meritain', logo: '/images/insurance/meritain-health.png' },
  { name: 'NYSHIP', logo: '/images/insurance/nyship.png' },
  { name: 'UMR', logo: '/images/insurance/umr.png' },
  { name: 'Beech Street', logo: '/images/insurance/beech-street.png' },
]

export default function InsurancePage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accepted Insurances</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We accept most major insurance plans. Contact us to verify your coverage.
          </p>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[var(--accent-light)] rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <CheckCircle size={64} className="text-[var(--primary)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Insurance Verification</h2>
                <p className="text-gray-600 mb-4">
                  Our team will verify your insurance coverage before your appointment. If you don&apos;t see your insurance listed below,
                  please call us as we may still be able to accommodate you.
                </p>
                <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:underline">
                  <Phone size={18} />Call {siteConfig.phone} to verify coverage
                </a>
              </div>
            </div>
          </div>

          {/* Insurance Grid */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Insurance Plans We Accept</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {carriers.map(carrier => (
              <div
                key={carrier.name}
                className="h-24 bg-gray-50 rounded-lg flex items-center justify-center p-4 border border-gray-100 hover:border-[var(--primary)] hover:shadow-md transition-all"
              >
                <Image
                  src={carrier.logo}
                  alt={carrier.name}
                  width={100}
                  height={50}
                  className="object-contain max-h-14"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            This is a partial list. Please contact us if your insurance is not listed.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--accent)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Coverage?</h2>
          <p className="text-gray-700 mb-8">Our billing team is happy to help verify your benefits and explain your coverage.</p>
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
