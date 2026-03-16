'use client'
import { Calendar } from 'lucide-react'
import { siteConfig } from '@/site.config'

const BOOKING_URL = siteConfig.bookingUrl

interface AppointmentButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'light'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  showIcon?: boolean
}

export default function AppointmentButton({
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
}: AppointmentButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors'

  const variants = {
    primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] animate-glow',
    secondary: 'bg-[var(--secondary)] text-white hover:bg-[var(--secondary-dark)]',
    outline: 'bg-white text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white',
    white: 'bg-white text-[var(--primary)] hover:bg-gray-100',
    light: 'bg-white/20 text-white hover:bg-white/30 border border-white/40',
  }

  const sizes = {
    xs: 'px-3 py-1 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {showIcon && <Calendar size={size === 'lg' ? 22 : size === 'xs' ? 14 : size === 'sm' ? 16 : 20} />}
      Request Appointment
    </a>
  )
}
