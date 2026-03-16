'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { locations } from '@/data/locations'
import { siteConfig } from '@/site.config'

export default function Footer() {
  return (
    <footer className="bg-[#fbf7fb] border-t">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg" alt={siteConfig.name} width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 mt-4 mb-6">Comprehensive women&apos;s healthcare across NYC metro area.</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Gardenobgyn/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-dark)] transition-colors"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/gardenobgyn/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-dark)] transition-colors"><Instagram size={18} /></a>
              <a href="https://www.youtube.com/channel/UC3otUmDB4TXydDfHtrVOQRg" target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-dark)] transition-colors"><Youtube size={18} /></a>
              <a href="https://www.tiktok.com/@theofficialgardenobgyn" target="_blank" rel="noopener noreferrer" className="p-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-dark)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Providers', href: '/providers-and-staff' },
                { label: 'Locations', href: '/locations' },
                { label: 'Blog', href: '/blog' },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-gray-600 hover:text-[var(--primary)]">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">Our Locations</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map(loc => (
                <div key={loc.name} className="text-sm">
                  <h4 className="font-semibold text-gray-900">{loc.name}</h4>
                  <p className="flex items-center gap-1 text-gray-600 text-xs"><MapPin size={10} className="text-[var(--primary)] flex-shrink-0" />{loc.address}</p>
                  <p className="flex items-center gap-1 text-gray-600 text-xs"><Phone size={10} className="text-[var(--primary)] flex-shrink-0" /><a href={`tel:${loc.phone}`} className="hover:text-[var(--primary)]">{loc.phone}</a></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
