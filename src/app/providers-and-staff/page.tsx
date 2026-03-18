import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, UserCircle } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import providersData from '@/../data/providers.json'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Our Providers & Staff',
  description: 'Meet our team of experienced specialists in vascular medicine, pain management, and rehabilitation serving Forest Hills, Queens.',
}

// Group providers by type
const groupedProviders = providersData.providerTypes.map(type => ({
  ...type,
  providers: providersData.providers.filter(p => p.type === type.id)
})).filter(group => group.providers.length > 0)

// Get provider photo path from JSON data
// Accepts full path (/images/providers/...) or just filename (provider_123.jpg)
const getProviderPhoto = (provider: typeof providersData.providers[0]): string | null => {
  if (!provider.photo) return null

  // If it's already a full path, use it directly
  if (provider.photo.startsWith('/')) {
    return provider.photo
  }
  // Otherwise, prepend the providers directory
  return `/images/providers/${provider.photo}`
}

export default function ProvidersPage() {

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Providers & Staff</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {providersData.providers.length} experienced providers dedicated to your care,
            including board-certified physicians, nurse practitioners, midwives, and physician assistants.
          </p>
        </div>
      </section>

      {/* Provider Sections by Type */}
      {groupedProviders.map((group) => (
        <section key={group.id} className="py-12 odd:bg-[var(--accent-light)] even:bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{group.name}</h2>
              <p className="text-gray-600 mt-2">{group.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
              {group.providers.map((provider) => {
                const photo = getProviderPhoto(provider)

                return (
                  <div
                    key={provider.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100"
                  >
                    <div className="aspect-[3/4] md:aspect-auto md:h-56 relative bg-gradient-to-b from-[var(--accent)] to-[var(--secondary)]/20">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={provider.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <UserCircle className="w-16 h-16 md:w-24 md:h-24 text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="p-2 md:p-4 text-center">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">{provider.name}</h3>
                      {provider.credentials && (
                        <p className="text-xs md:text-sm text-[var(--primary)] font-semibold">{provider.credentials}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1 hidden sm:block">{provider.specialty}</p>
                      {provider.languages.length > 1 && (
                        <p className="text-xs text-gray-400 mt-1 hidden md:block">
                          Speaks: {provider.languages.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Team?</h2>
          <p className="text-lg opacity-90 mb-8">
            Schedule an appointment with one of our experienced providers today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <AppointmentButton variant="white" size="lg" />
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-semibold text-lg border-2 border-white hover:bg-white hover:text-[var(--primary)] transition-colors"
            >
              <Phone size={22} />{siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
