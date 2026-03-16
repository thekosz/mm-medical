import { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Our Locations',
  description: `Find a ${siteConfig.name} location near you. ${siteConfig.locationCount} convenient offices across NYC, Long Island, Brooklyn, Queens, and Manhattan.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
