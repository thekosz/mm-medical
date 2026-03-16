import { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name}. Call us, message us, or visit one of our ${siteConfig.locationCount} convenient locations across ${siteConfig.regionDisplay}.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
