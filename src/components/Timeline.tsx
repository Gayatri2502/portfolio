'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '@/data/portfolio'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

export default function Timeline() {
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    const elements = document.querySelectorAll('.timeline-item')
    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elements[0],
          start: 'top 80%',
        },
      }
    )
  }, [isVisible])

  return (
    <section id="experience" className="relative py-24 px-4 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#7c3aed]/10 to-transparent" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#080b14]/80 p-8 shadow-glow backdrop-blur-xl">
        <div className="mb-12 flex items-center gap-3 text-accent">
          <span className="h-1.5 w-16 rounded-full bg-accent" />
          <h2 className="text-4xl font-semibold sm:text-5xl">Experience Timeline</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 to-transparent md:block" />
          <div className="space-y-10">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                className={`timeline-item flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:flex-1">
                  <div className={`rounded-[2rem] border border-white/10 bg-[#0c1018]/90 p-6 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                    <span className="text-accent font-semibold">{event.year}</span>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
                    <p className="mt-3 text-slate-300">{event.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center md:w-16">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/20 bg-[#02060f]/90 shadow-glow">
                    <div className="h-4 w-4 rounded-full bg-accent" />
                  </div>
                </div>
                <div className="md:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
