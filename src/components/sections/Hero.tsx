'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import AppointmentButton from '@/components/ui/AppointmentButton'
import { siteConfig } from '@/site.config'

const desktopSlides = [
  { image: '/images/hero/hero_senior_active.jpg', eyebrow: 'Your Mobility Starts Here', headline: 'Advanced Care for Active Living', description: 'Minimally invasive vascular and pain management solutions for seniors.' },
  { image: '/images/hero/hero_vascular_doctor.jpg', eyebrow: 'Expert Specialists', headline: 'Coordinated Care, One Practice', description: 'Vascular, orthopedic, and rehabilitation specialists working together for you.' },
  { image: '/images/hero/hero_knee_treatment.jpg', eyebrow: 'Minimally Invasive', headline: 'GAE for Chronic Knee Pain', description: 'An advanced, non-surgical option that may reduce knee pain from arthritis.' },
  { image: '/images/hero/hero_rehab.jpg', eyebrow: 'Strength & Recovery', headline: 'Get Back to What You Love', description: 'Physical therapy and rehabilitation tailored to your goals.' },
]

const mobileSlides = [
  { image: '/images/hero/hero_senior_active.jpg', eyebrow: 'Your Mobility Starts Here', headline: 'Advanced Care for Active Living', description: 'Minimally invasive solutions for seniors.' },
  { image: '/images/hero/hero_vascular_doctor.jpg', eyebrow: 'Expert Specialists', headline: 'Coordinated Care, One Practice', description: 'Vascular, orthopedic, and rehab specialists under one roof.' },
  { image: '/images/hero/hero_knee_treatment.jpg', eyebrow: 'Minimally Invasive', headline: 'GAE for Knee Pain', description: 'A non-surgical option for chronic knee pain.' },
  { image: '/images/hero/hero_rehab.jpg', eyebrow: 'Strength & Recovery', headline: 'Get Back to What You Love', description: 'Rehabilitation tailored to your goals.' },
]

function HeroCarousel({ slides, id }: { slides: typeof desktopSlides; id: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <>
      {slides.map((slide, index) => (
        <div key={`${id}-${index}`} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={slide.image} alt="" fill sizes="100vw" className="object-cover object-[center_15%]" priority={index === 0} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-2xl text-white px-2 md:px-0">
          <p className="text-[var(--accent)] font-semibold text-lg mb-2">{slides[currentSlide].eyebrow}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{slides[currentSlide].headline}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">{slides[currentSlide].description}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 px-6 py-3 bg-white text-[var(--primary)] rounded-full font-semibold hover:bg-gray-100 transition-colors">
              <Phone size={20} />Call Us
            </a>
            <AppointmentButton variant="primary" size="md" />
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full">
            <ChevronLeft size={28} className="text-white" />
          </button>
          <button onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full">
            <ChevronRight size={28} className="text-white" />
          </button>
        </>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-[var(--primary)] w-8' : 'bg-white/50'}`} />
        ))}
      </div>
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Desktop: 2 landscape slides */}
      <div className="hidden md:block absolute inset-0">
        <HeroCarousel slides={desktopSlides} id="desktop" />
      </div>
      {/* Mobile: 4 slides with clean portraits */}
      <div className="md:hidden absolute inset-0">
        <HeroCarousel slides={mobileSlides} id="mobile" />
      </div>
    </section>
  )
}
