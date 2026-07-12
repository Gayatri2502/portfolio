'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Cpu, Terminal, ServerCog, Zap, Sparkles, BarChart3, LineChart, Cloud } from 'lucide-react'

const skillDomains = [
  {
    title: 'Machine Learning',
    icon: Cpu,
    description: 'Developing intelligent models for real-world problems.',
    skills: [
      { name: 'Python', level: 5 },
      { name: 'Scikit-learn', level: 5 },
      { name: 'TensorFlow', level: 4 },
      { name: 'PyTorch', level: 4 },
      { name: 'Model Evaluation', level: 4 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    description: 'Extracting insights through data analysis and visualization.',
    skills: [
      { name: 'Pandas', level: 5 },
      { name: 'NumPy', level: 5 },
      { name: 'SQL', level: 5 },
      { name: 'Power BI', level: 4 },
      { name: 'Matplotlib', level: 4 },
    ],
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    description: 'Building AI-powered applications using modern LLMs.',
    skills: [
      { name: 'OpenAI API', level: 4 },
      { name: 'LangChain', level: 4 },
      { name: 'RAG', level: 4 },
      { name: 'Prompt Engineering', level: 5 },
      { name: 'Vector Databases', level: 3 },
    ],
  },
  {
    title: 'Backend & Deployment',
    icon: ServerCog,
    description: 'Deploying scalable AI applications and APIs.',
    skills: [
      { name: 'FastAPI', level: 4 },
      { name: 'Flask', level: 4 },
      { name: 'Docker', level: 3 },
      { name: 'Git', level: 5 },
      { name: 'GitHub', level: 5 },
    ],
  },
  {
    title: 'Data Visualization & Tools',
    icon: LineChart,
    description: 'Communicating insights through dashboards and visualizations.',
    skills: [
      { name: 'Tableau', level: 3 },
      { name: 'Power BI', level: 4 },
      { name: 'Excel', level: 5 },
      { name: 'Jupyter Notebook', level: 5 },
      { name: 'Google Colab', level: 5 },
    ],
  },
{
  title: 'Cloud & DevOps',
  icon: Cloud,
  description: 'Deploying, scaling, and automating AI and machine learning applications.',
  skills: [
    { name: 'AWS', level: 4 },
    { name: 'Docker', level: 5 },
    { name: 'Kubernetes', level: 4 },
    { name: 'CI/CD', level: 5 },
    { name: 'GitHub Actions', level: 4 },
  ],
},  
]

function SkillCard({ domain }: any) {
  const [hovered, setHovered] = useState(false)
  const Icon = domain.icon

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="
        group relative overflow-hidden rounded-[32px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-8
      "
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* Gradient glass overlay */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-cyan-500/10 backdrop-blur-xl">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-semibold text-white">
          {domain.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-400 leading-7">
          {domain.description}
        </p>

        {/* EXPAND ON HOVER */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-8 space-y-4">
                {domain.skills.map((skill: any, i: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-300">
                      {skill.name}
                    </span>

                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-2.5 w-2.5 rounded-full ${
                            idx < skill.level
                              ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]'
                              : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Skills across the{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-white bg-clip-text text-transparent">
              product stack
            </span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-8">
            I design and build full-stack AI-powered applications — from UI to
            scalable backend systems and cloud infrastructure.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillDomains.map((domain) => (
            <SkillCard key={domain.title} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  )
}