'use client'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { locations, regionColors, regionGradients, getDirectionsUrl, getMapViewUrl } from '@/data/locations'

export default function Locations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600">{locations.length} convenient locations across the New York metro area.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(loc => (
            <div key={loc.name} className="bg-white rounded-xl border border-gray-200 overflow-hidden card-hover">
              <a
                href={getMapViewUrl(loc.address)}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-32 bg-gradient-to-br ${regionGradients[loc.region]} relative flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity`}
              >
                <MapPin size={40} className="text-white/80" />
                <div className="absolute bottom-2 left-3 text-white/90 text-sm font-medium">
                  Click to view on map
                </div>
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 ${regionColors[loc.region]}`}>
                  {loc.region}
                </span>
              </a>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{loc.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2"><MapPin size={16} className="text-[var(--primary)] mt-0.5 flex-shrink-0" /><span>{loc.address}</span></div>
                  <div className="flex items-center gap-2"><Phone size={16} className="text-[var(--primary)] flex-shrink-0" /><a href={`tel:${loc.phone}`} className="hover:text-[var(--primary)]">{loc.phone}</a></div>
                  <div className="flex items-center gap-2"><Clock size={16} className="text-[var(--primary)] flex-shrink-0" />{loc.hours}</div>
                </div>
                <div className="flex gap-3 mt-4">
                  <a href="/schedule" className="flex-1 text-center py-2 bg-[var(--primary)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--primary-dark)]">Schedule</a>
                  <a href={getDirectionsUrl(loc.address)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold text-sm hover:bg-gray-50">
                    <Navigation size={14} />Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
