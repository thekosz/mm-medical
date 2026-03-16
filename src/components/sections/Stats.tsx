'use client'
import { siteConfig } from '@/site.config'

const stats = [
  { value: siteConfig.stats.providers.value, label: siteConfig.stats.providers.label, sub: 'Board-certified' },
  { value: siteConfig.stats.locations.value, label: siteConfig.stats.locations.label, sub: 'Queens & Long Island' },
  { value: siteConfig.stats.specialties.value, label: siteConfig.stats.specialties.label, sub: 'Comprehensive care' },
  { value: siteConfig.stats.years.value, label: siteConfig.stats.years.label, sub: 'Serving our community' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose {siteConfig.name}?</h2>
          <p className="text-white/80">Our commitment to excellence shows in our outcomes.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-lg font-semibold text-white mb-1">{s.label}</div>
              <div className="text-sm text-white/70">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col items-center justify-center max-w-md w-full">
            <div className="text-6xl font-bold text-white mb-2">98%</div>
            <p className="text-white/80 text-center">of patients would recommend us to friends and family</p>
          </div>
        </div>
      </div>
    </section>
  )
}
