'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, UserCircle } from 'lucide-react'
import providersData from '@/../data/providers.json'
import { siteConfig } from '@/site.config'

// Get providers with photos for the carousel (up to 16)
const providersWithPhotos = providersData.providers
  .filter(p => p.photo && p.photo.trim() !== '')
  .slice(0, 16)
  .map(p => ({
    name: p.name,
    credentials: p.credentials,
    specialty: p.specialty,
    image: p.photo.startsWith('/') ? p.photo : `/images/providers/${p.photo}`
  }))

// If no providers have photos yet, show first 16 with placeholders
const displayProviders = providersWithPhotos.length > 0
  ? providersWithPhotos
  : providersData.providers.slice(0, 16).map(p => ({
      name: p.name,
      credentials: p.credentials,
      specialty: p.specialty,
      image: null
    }))

export default function Providers() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        scrollRef.current.scrollLeft = scrollLeft >= scrollWidth - clientWidth - 10 ? 0 : scrollLeft + 1
      }
    }, 30)
    return () => clearInterval(interval)
  }, [isAutoScrolling])

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-[var(--accent-light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Providers</h2>
          <p className="text-lg text-gray-600">
            {siteConfig.providerSubtitle}
          </p>
        </div>
        <div className="relative" onMouseEnter={() => setIsAutoScrolling(false)} onMouseLeave={() => setIsAutoScrolling(true)}>
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover:bg-gray-50">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover:bg-gray-50">
            <ChevronRight size={24} />
          </button>
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 px-8" style={{ scrollbarWidth: 'none' }}>
            {displayProviders.map((p, i) => (
              <div key={i} className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 relative bg-gradient-to-b from-[var(--accent)] to-[var(--secondary)]/20">
                  {p.image ? (
                    <Image src={p.image} alt={p.name} fill className="object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <UserCircle className="w-24 h-24 text-gray-300" />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  {p.credentials && <p className="text-sm text-[var(--primary)] font-medium">{p.credentials}</p>}
                  <p className="text-sm text-gray-500 mt-1">{p.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/providers-and-staff" className="px-6 py-3 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] inline-block">
            View All Providers
          </a>
        </div>
      </div>
    </section>
  )
}
