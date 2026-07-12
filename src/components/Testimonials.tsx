'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-4 lg:px-8">
      <div className="absolute right-0 top-12 h-36 w-36 rounded-full bg-gradient-to-br from-[#7c3aed]/15 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#080b14]/80 p-8 shadow-glow backdrop-blur-xl">
        <div className="mb-12 flex items-center gap-3 text-accent">
          <span className="h-1.5 w-16 rounded-full bg-accent" />
          <h2 className="text-4xl font-semibold sm:text-5xl">Testimonials</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-[2rem] border border-white/10 bg-[#0d1222]/90 p-6 shadow-glow"
            >
              <p className="text-lg leading-8 text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.3em] text-slate-400">{testimonial.role} · {testimonial.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
