import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accepted Insurance',
  description: 'Garden OB/GYN accepts most major insurance plans. View our complete list of accepted insurance providers.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
