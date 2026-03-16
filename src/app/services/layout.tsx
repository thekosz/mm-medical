import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive OB/GYN services including prenatal care, labor & delivery, gynecological exams, family planning, menopause management, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
