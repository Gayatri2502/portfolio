'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import useTilt from '@/hooks/useTilt'

function ProjectCard({ project, onOpen }: { project: any; onOpen: (id: string) => void }) {
  const tiltRef = useTilt(true)

  return (
    <motion.button
      ref={tiltRef as any}
      type="button"
      onClick={() => onOpen(project.id)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09101b]/95 p-6 text-left shadow-glow transition duration-300 hover:border-accent/40 hover:bg-[#0d1525]/95"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-transparent to-[#7c3aed]/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#0f172a] px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
            {project.badge}
          </span>
          <span className="text-sm font-medium text-slate-400">Tap for details</span>
        </div>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const activeProject = projects.find((project) => project.id === activeProjectId) || null

  useEffect(() => {
    if (!activeProjectId) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProjectId(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProjectId])

  return (
    <section id="projects" className="relative py-24 px-4 lg:px-8">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#080b14]/80 p-8 shadow-glow backdrop-blur-xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="block text-sm uppercase tracking-[0.32em] text-accent/80">Portfolio</span>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Featured Projects</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore a selection of AI product experiences, immersive dashboards, and premium interface systems.
          </p>
        </div>

        <div
          ref={ref}
          className={
            'grid gap-8 md:grid-cols-3 ' +
            (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10') +
            ' transition-all duration-700'
          }
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActiveProjectId} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#08101f]/95 p-8 shadow-glow"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Close project modal"
                onClick={() => setActiveProjectId(null)}
                className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
              >
                ×
              </button>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Project</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">{activeProject.title}</h3>
                  </div>
                  <div className="rounded-full bg-[#0f172a] px-4 py-2 text-sm text-slate-300">{activeProject.badge}</div>
                </div>
                <p className="text-slate-300">{activeProject.longDescription}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Technologies</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech: string) => (
                        <span key={tech} className="rounded-full bg-[#0f172a] px-3 py-2 text-xs text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Links</p>
                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm font-medium text-accent hover:bg-accent/15"
                      >
                        <ExternalLink className="h-4 w-4" /> Live demo
                      </a>
                      {activeProject.github ? (
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 hover:bg-white/10"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
