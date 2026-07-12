'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Globe,
  Brain,
  Database,
  BarChart3,
  Cpu,
  Layers,
  Rocket,
} from 'lucide-react'

const services = [
  { name: 'Web Development', icon: Globe },
  { name: 'AI Applications', icon: Brain },
  { name: 'Machine Learning Models', icon: Cpu },
  { name: 'Data Annotation Systems', icon: Database },
  { name: 'Business Strategy', icon: BarChart3 },
  { name: 'Data Engineering', icon: Layers },
  { name: 'Automation Systems', icon: Rocket },
  { name: 'Full-Stack Solutions', icon: Code2 },
]

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-16 md:py-20">
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_55%)]" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Expertise
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Services I provide
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Minimal, scalable solutions across AI, web, and systems.
          </p>
        </div>

        {/* Service chips */}
        <div className="flex flex-wrap gap-4">
          {services.map((service, i) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.06,
                  y: -3,
                }}
                className="
                  group relative flex items-center gap-3
                  rounded-full border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  px-5 py-3
                  text-sm text-slate-200
                  shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                  transition-all
                  hover:border-cyan-300/30
                  hover:bg-white/[0.06]
                "
              >
                {/* glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

                {/* icon */}
                <Icon className="relative z-10 h-4 w-4 text-cyan-300" />

                {/* text */}
                <span className="relative z-10 whitespace-nowrap">
                  {service.name}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* subtle footer line */}
        <div className="mt-10 h-px w-full bg-white/10" />
      </div>
    </section>
  )
}