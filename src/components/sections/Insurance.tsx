'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export default function Insurance() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -150 : 150, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insurance We Accept</h2>
          <p className="text-gray-600">We accept most major insurance plans. Contact us to verify coverage.</p>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full hover:bg-gray-50">
            <ChevronRight size={20} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 px-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {carriers.map(carrier => (
              <div key={carrier.name} className="flex-shrink-0 w-28 h-20 snap-start bg-gray-50 rounded-lg flex items-center justify-center p-3 border border-gray-100">
                <Image src={carrier.logo} alt={carrier.name} width={80} height={40} className="object-contain max-h-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-6 gap-4">
          {carriers.map(carrier => (
            <div key={carrier.name} className="h-20 bg-gray-50 rounded-lg flex items-center justify-center p-3 border border-gray-100 hover:border-[var(--primary)] hover:shadow-md transition-all">
              <Image src={carrier.logo} alt={carrier.name} width={100} height={50} className="object-contain max-h-12" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/accepted-insurances" className="text-[var(--primary)] font-semibold hover:underline">View Full List →</a>
        </div>
      </div>
    </section>
  )
}
