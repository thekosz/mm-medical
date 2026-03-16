import { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} — over 35 years of comprehensive women's healthcare with 44 board-certified providers across ${siteConfig.regionDisplay}.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
