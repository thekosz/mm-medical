'use client'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Michael R.', location: 'Forest Hills, NY', rating: 5, text: "After struggling with chronic knee pain for years, the GAE treatment I received here was life-changing. The doctors explained every step and I was back on my feet faster than I imagined." },
  { name: 'Sarah L.', location: 'Forest Hills, NY', rating: 5, text: "The PRP treatment for my joint pain has made a remarkable difference. The staff is compassionate and truly understands the needs of older patients like myself." },
  { name: 'Robert K.', location: 'Queens, NY', rating: 5, text: "Outstanding vascular care. My treatment was well-coordinated between the specialists, and I always felt like they were working together as a team for my health." },
  { name: 'Margaret T.', location: 'Forest Hills, NY', rating: 5, text: "The physical therapy program here has dramatically improved my mobility. I can walk without pain for the first time in years. The whole team genuinely cares." },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600">Real stories from real patients.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[var(--accent-light)] rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 text-6xl text-[var(--primary)] opacity-20 font-serif">&ldquo;</div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 text-lg mb-6">&ldquo;{t.text}&rdquo;</p>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 flex justify-center gap-6">
          <a href="#" className="text-[var(--primary)] font-semibold hover:underline">Google Reviews</a>
          <a href="#" className="text-[var(--primary)] font-semibold hover:underline">Healthgrades</a>
          <a href="#" className="text-[var(--primary)] font-semibold hover:underline">Vitals</a>
        </div>
      </div>
    </section>
  )
}
