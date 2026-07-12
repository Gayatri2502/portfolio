'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { about, stats } from '@/data/portfolio'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Sparkles } from 'lucide-react'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    if (!isVisible) return

    const duration = 1200
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCounts(stats.map((stat) => Math.round(stat.value * progress)))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  return (
    <section id="about" className="relative py-24 px-4 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00d4ff]/10 to-transparent" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#080a12]/80 p-8 shadow-glow backdrop-blur-xl">
        <div
          ref={ref}
          className={`grid gap-12 md:grid-cols-[1.2fr_0.8fr] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700`}
        >
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-accent">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-sm uppercase tracking-[0.3em] text-accent/80">About</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold sm:text-5xl">{about.heading}</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{about.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <div key={highlight} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow transition hover:-translate-y-1">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Highlight</p>
                  <p className="mt-3 text-base font-medium text-white">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="rounded-[2rem] border border-white/10 bg-[#0c1018]/90 p-6 text-center shadow-glow"
              >
                <p className="text-4xl font-semibold text-white">{counts[index]}{stat.suffix}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
