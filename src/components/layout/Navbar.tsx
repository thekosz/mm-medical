'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, UserCircle, MapPin, Shield, MessageCircle } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import { siteConfig } from '@/site.config'

const navLinks = [
  { label: 'About Us', href: '/about', dropdown: [
    { label: 'Our Story', href: '/about' },
    { label: 'Insurance', href: '/accepted-insurances' },
  ]},
  { label: 'Providers', href: '/providers-and-staff' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contactus' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Secondary Quick Links Bar */}
      <div className="hidden lg:block bg-[var(--primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9 text-sm">
            <div className="flex items-center gap-5">
              <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Phone size={13} />
                <span>{siteConfig.phone}</span>
              </a>
              <Link href="/locations" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <MapPin size={13} />
                <span>{siteConfig.locationCount} Locations</span>
              </Link>
              <Link href="/accepted-insurances" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Shield size={13} />
                <span>Accepted Insurance</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="/patient-portal" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <UserCircle size={14} />
                <span>Patient Portal</span>
              </a>
              <span className="text-white/30">|</span>
              <a href={siteConfig.messagingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <MessageCircle size={13} />
                <span>Message Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt={siteConfig.name} width={280} height={80} className="h-20 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={link.href} className="flex items-center gap-1 text-gray-700 hover:text-[var(--primary)] font-medium">
                    {link.label}
                    {link.dropdown && <ChevronDown size={16} />}
                  </Link>
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                      {link.dropdown.map((item) => (
                        <Link key={item.label} href={item.href} className="block px-4 py-2 text-gray-700 hover:bg-[var(--accent)]">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <AppointmentButton variant="primary" size="sm" />
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block py-2 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}

          {/* Info Items */}
          <div className="border-t pt-3 space-y-2">
            <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 py-2 text-gray-700" onClick={() => setIsOpen(false)}>
              <Phone size={18} /> {siteConfig.phone}
            </a>
            <a href="/locations" className="flex items-center gap-2 py-2 text-gray-700" onClick={() => setIsOpen(false)}>
              <MapPin size={18} /> Find a Location
            </a>
            <a href="/accepted-insurances" className="flex items-center gap-2 py-2 text-gray-700" onClick={() => setIsOpen(false)}>
              <Shield size={18} /> Accepted Insurance
            </a>
          </div>

          {/* Action Buttons */}
          <div className="border-t pt-3 space-y-2">
            <a href="/patient-portal" className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[var(--primary)] text-white rounded-full font-semibold text-base" onClick={() => setIsOpen(false)}>
              <UserCircle size={20} /> Patient Portal
            </a>
            <a href={siteConfig.messagingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[var(--secondary)] text-white rounded-full font-semibold text-base" onClick={() => setIsOpen(false)}>
              <MessageCircle size={20} /> Message Us Now
            </a>
            <div onClick={() => setIsOpen(false)}>
              <AppointmentButton variant="primary" size="md" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
