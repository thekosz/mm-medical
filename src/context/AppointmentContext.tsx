'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import AppointmentModal from '@/components/ui/AppointmentModal'

interface AppointmentContextType {
  openModal: () => void
  closeModal: () => void
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined)

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <AppointmentContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AppointmentModal isOpen={isOpen} onClose={closeModal} />
    </AppointmentContext.Provider>
  )
}

export function useAppointment() {
  const context = useContext(AppointmentContext)
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider')
  }
  return context
}
