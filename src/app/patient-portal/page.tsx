import type { Metadata } from 'next'
import { UserCircle, FileText, Calendar, Shield, Clock, ExternalLink, Phone } from 'lucide-react'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Patient Portal',
  description: `Access your ${siteConfig.name} patient portal for medical records, appointments, and secure messaging.`,
}

const features = [
  {
    icon: FileText,
    title: 'View Medical Records',
    description: 'Access your health records, lab results, and visit summaries securely online.',
  },
  {
    icon: Calendar,
    title: 'Manage Appointments',
    description: 'View upcoming appointments, request new visits, and check appointment history.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your health information is protected with industry-standard encryption and HIPAA compliance.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description: 'Access your health information anytime, from any device — desktop, tablet, or phone.',
  },
]

export default function PatientPortalPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Portal</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Access your medical records, manage appointments, and communicate with your care team — all in one place.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-[var(--accent-light)] rounded-2xl p-10">
            <div className="w-20 h-20 mx-auto mb-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
              <UserCircle size={44} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Access Your Health Records</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Log in to the patient portal to view test results, request prescription refills, message your provider, and more.
            </p>
            <a
              href="https://www.myhealthrecord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[var(--primary)] text-white rounded-full font-semibold text-lg hover:bg-[var(--primary-dark)] transition-colors shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={22} />Go to Patient Portal
            </a>
            <p className="text-sm text-gray-500 mt-4">You will be redirected to MyHealthRecord.com</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[var(--accent-light)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What You Can Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            If you need assistance accessing the patient portal or have questions about your account, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--accent)] text-[var(--primary)] rounded-full font-semibold hover:bg-[var(--accent-light)] transition-colors"
            >
              <Phone size={18} />Call {siteConfig.phone}
            </a>
            <a
              href="/contactus"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-full font-semibold hover:bg-[var(--accent-light)] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
