'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { socialLinks } from '@/data/portfolio'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (status === 'success') {
      const timer = window.setTimeout(() => setStatus('idle'), 3200)
      return () => window.clearTimeout(timer)
    }
  }, [status])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 px-4 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#00d4ff]/10 to-transparent" />
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#080b14]/80 p-8 shadow-glow backdrop-blur-xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Have an Idea? Let's Build It</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-slate-300">
            Ready to collaborate on a bold interface, AI product, or motion-led brand experience? Send a note and I’ll get back to you within 24 hours.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700`}
        >
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0d1222]/90 p-8 shadow-glow">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                Name
              </label>
              <input
                className="w-full rounded-3xl border border-white/10 bg-[#08101c] px-4 py-3 text-white outline-none transition focus:border-accent"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                Email
              </label>
              <input
                className="w-full rounded-3xl border border-white/10 bg-[#08101c] px-4 py-3 text-white outline-none transition focus:border-accent"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                Message
              </label>
              <textarea
                className="h-40 w-full rounded-3xl border border-white/10 bg-[#08101c] px-4 py-3 text-white outline-none transition focus:border-accent resize-none"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or collaboration."
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-[#00b2e3]"
            >
              Send Message
            </button>

            {status === 'success' ? (
              <p className="rounded-3xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">Message sent successfully — I’ll respond soon.</p>
            ) : null}
            {status === 'error' ? (
              <p className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-300">Please complete all form fields before sending.</p>
            ) : null}
          </form>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1222]/90 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Social</p>
              <p className="mt-3 text-lg font-medium text-white">Reach out on your preferred channel.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-100 transition hover:border-accent hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0d1222]/90 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Office</p>
              <p className="mt-3 text-lg font-medium text-white">Remote-first. Global availability for product teams.</p>
              <p className="mt-4 text-slate-400">I collaborate with founders, startups, and design-led organizations to launch digital products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
