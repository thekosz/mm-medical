import { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Our Locations',
  description: `Visit ${siteConfig.name} in Forest Hills, Queens — convenient care close to home.`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
