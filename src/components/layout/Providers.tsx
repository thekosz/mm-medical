'use client'
import { ReactNode } from 'react'
import { AppointmentProvider } from '@/context/AppointmentContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppointmentProvider>
      {children}
    </AppointmentProvider>
  )
}
