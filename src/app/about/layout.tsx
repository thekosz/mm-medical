import { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} — advanced vascular, orthopedic, and interventional radiology care across ${siteConfig.regionDisplay}.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
