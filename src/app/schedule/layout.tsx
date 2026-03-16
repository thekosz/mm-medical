import { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Schedule an Appointment',
  description: `Book your OB/GYN appointment at ${siteConfig.name}. Online scheduling available for all ${siteConfig.locationCount} locations.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
