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
              <Image src="/images/logo.png" alt={siteConfig.name} width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 mt-4 mb-6">Advanced vascular, orthopedic, and interventional radiology care across Queens &amp; Long Island.</p>
            <p className="text-gray-600 text-sm">info@mandsvo.com</p>
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
