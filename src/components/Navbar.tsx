'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <header className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div
          className="
            flex items-center gap-2
            rounded-3xl
            border border-white/10
            bg-white/[0.04]
            px-4 py-3
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(0,212,255,0.08)]
          "
        >
          {/* Logo */}
          <div
            className="
              mr-2
              flex h-11 w-11 items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-400/20
              to-violet-500/20
              text-sm font-bold text-white
            "
          >
            GS
          </div>

          {/* Navigation */}
          {navLinks.map((link) => {
            const isActive = activeId === link.id

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative
                  rounded-xl
                  px-4 py-2
                  text-sm
                  transition-all duration-300
                  ${
                    isActive
                      ? 'text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }
                `}
              >
                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                        : 'w-0'
                    }
                  `}
                />

                {link.label}
              </a>
            )
          })}
        </div>
      </header>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed right-4 top-4 z-50
          flex h-11 w-11 items-center justify-center
          rounded-full border border-white/10
          bg-white/[0.05]
          text-white
          backdrop-blur-2xl
          md:hidden
        "
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
            fixed right-4 top-16 z-50
            w-[220px]
            rounded-3xl
            border border-white/10
            bg-white/[0.04]
            p-4
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(0,212,255,0.08)]
            md:hidden
          "
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`
                  rounded-xl
                  px-3 py-2
                  text-sm
                  transition-all
                  ${
                    activeId === link.id
                      ? 'bg-cyan-500/10 text-cyan-300'
                      : 'text-slate-300 hover:text-white'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}