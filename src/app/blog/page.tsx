import type { Metadata } from 'next'
import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: 'Blog',
  description: `Health tips, vascular and orthopedic wellness articles from the experts at ${siteConfig.name}.`,
}

export default function BlogPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Health tips, news, and insights from our team of experts.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[var(--accent-light)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-[var(--accent)] text-[var(--primary)] rounded-full flex items-center justify-center">
            <BookOpen size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-lg mb-8">
            We&apos;re working on bringing you helpful articles about vascular health, orthopedic wellness, and the latest updates from {siteConfig.name}. Stay tuned!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
