import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accepted Insurance',
  description: 'M&S Vascular and Orthopedic Group accepts most major insurance plans. View our complete list of accepted insurance providers.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
