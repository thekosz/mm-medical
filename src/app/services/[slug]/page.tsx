import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar, ChevronRight, ArrowLeft } from 'lucide-react'
import { services, getServiceBySlug, getRelatedServices } from '@/data/services'
import { siteConfig } from '@/site.config'
import AppointmentButton from '@/components/ui/AppointmentButton'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.name} | ${siteConfig.name} — ${siteConfig.regionDisplay}`,
    description: `${service.shortDesc}. Expert ${service.name.toLowerCase()} from board-certified OB/GYN providers across 10 locations in NYC and Long Island. Schedule your appointment today.`,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.shortDesc,
      images: [{ url: service.image }],
    },
  }
}

function ServiceSchema({ service }: { service: NonNullable<ReturnType<typeof getServiceBySlug>> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: service.name,
    description: service.shortDesc,
    url: `${siteConfig.url}/services/${service.slug}`,
    mainEntity: {
      '@type': 'HealthcareService',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'MedicalBusiness',
        name: siteConfig.name,
        telephone: siteConfig.phoneTel,
        url: siteConfig.url,
        medicalSpecialty: ['Obstetrics', 'Gynecology'],
        areaServed: [
          { '@type': 'City', name: 'Garden City' },
          { '@type': 'City', name: 'Massapequa' },
          { '@type': 'City', name: 'Commack' },
          { '@type': 'City', name: 'Brooklyn' },
          { '@type': 'City', name: 'Forest Hills' },
          { '@type': 'City', name: 'Lake Success' },
          { '@type': 'City', name: 'New York' },
        ],
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-[var(--primary)] hover:underline">← Back to Services</Link>
        </div>
      </main>
    )
  }

  const related = getRelatedServices(service.relatedSlugs)

  return (
    <>
      <ServiceSchema service={service} />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-80 md:h-[28rem] overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-5xl mx-auto px-4 pb-8 w-full">
              <Link href="/services" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-3 transition-colors">
                <ArrowLeft size={16} /> All Services
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white">{service.name}</h1>
              <p className="text-lg text-white/90 mt-2 max-w-2xl">{service.shortDesc}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Content Column */}
              <div className="lg:col-span-2 space-y-10">
                {/* About */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {service.name}</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
                </div>

                {/* What to Expect */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                  <p className="text-gray-700 leading-relaxed">{service.whatToExpect}</p>
                </div>

                {/* Who Is It For */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is This For?</h2>
                  <p className="text-gray-700 leading-relaxed">{service.whoIsItFor}</p>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <details key={i} className="group bg-gray-50 rounded-lg border border-gray-200">
                        <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-gray-900 hover:text-[var(--primary)] transition-colors">
                          {faq.question}
                          <ChevronRight size={20} className="transform group-open:rotate-90 transition-transform text-gray-400" />
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                {/* Schedule Card */}
                <div className="bg-[var(--accent)] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Schedule an Appointment</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our board-certified providers are ready to help. Book online or call us today.
                  </p>
                  <div className="space-y-3">
                    <AppointmentButton variant="primary" size="md" className="w-full" />
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-[var(--primary)] rounded-full font-semibold text-sm border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                    >
                      <Phone size={16} />{siteConfig.phone}
                    </a>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available at our locations:</h4>
                    <p className="text-xs text-gray-500">Garden City · Brooklyn · Commack · Queens · Lake Success · Massapequa · Manhattan · Cedarhurst</p>
                  </div>
                </div>

                {/* Related Services */}
                {related.length > 0 && (
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                    <div className="space-y-2">
                      {related.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/services/${rel.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={rel.image} alt={rel.name} fill className="object-cover" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[var(--primary)] transition-colors">{rel.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Take the Next Step</h2>
            <p className="text-white/90 mb-8 text-lg">
              Schedule your {service.name.toLowerCase()} appointment with ${siteConfig.name} today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AppointmentButton variant="white" size="lg" />
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg border-2 border-white/50 hover:bg-white/20 transition-colors"
              >
                <Phone size={22} />{siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
