'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  FileText,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:youremail@gmail.com',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/91XXXXXXXXXX',
    },
    {
      name: 'Resume',
      icon: FileText,
      href: '/resume.pdf',
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-5 lg:px-8">

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent" />

      <div className="mx-auto max-w-6xl rounded-[34px] border border-white/10 bg-[#090c16]/80 backdrop-blur-2xl p-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-cyan-400 uppercase tracking-[0.45em] text-sm">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            Have an Idea? Let's Build It
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400 leading-8">
            Looking to build an AI product, SaaS platform, automation,
            website or collaborate on something exciting? Let's connect.
          </p>

        </div>

        {/* Grid */}

        <div
          ref={ref}
          className={`mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]
          transition-all duration-700 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >

          {/* Left */}
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-2xl"
          >
            {/* Background Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-[110px]" />
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-violet-500/20 blur-[110px]" />

            <div className="relative z-10">

              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                LET'S CONNECT
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white leading-tight">
    
                I build digital businesses.
              </h3>

              <p className="mt-5 max-w-md leading-8 text-slate-400">
                From AI-powered SaaS platforms to intelligent automation and immersive
                web experiences, I enjoy transforming ambitious ideas into products
                that deliver measurable value.
              </p>

              {/* Services */}

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "AI Products",
                  "SaaS",
                  "Automation",
                  "Web Development",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {service}
                  </span>
                ))}

              </div>

              {/* Social Icons */}

              <div className="mt-10">

                <h4 className="mb-5 text-white font-medium">
                  Connect with me
                </h4>

                <div className="grid grid-cols-5 gap-4">

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:-translate-y-1"
                  >
                    <Github
                      size={24}
                      className="text-white group-hover:text-cyan-400"
                    />
                  </a>

                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-1"
                  >
                    <Linkedin
                      size={24}
                      className="text-white group-hover:text-blue-400"
                    />
                  </a>

                  <a
                    href="mailto:youremail@gmail.com"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-red-400 hover:bg-red-500/10 hover:-translate-y-1"
                  >
                    <Mail
                      size={24}
                      className="text-white group-hover:text-red-400"
                    />
                  </a>

                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-emerald-400 hover:bg-emerald-500/10 hover:-translate-y-1"
                  >
                    <MessageCircle
                      size={24}
                      className="text-white group-hover:text-emerald-400"
                    />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-violet-400 hover:bg-violet-500/10 hover:-translate-y-1"
                  >
                    <FileText
                      size={24}
                      className="text-white group-hover:text-violet-400"
                    />
                  </a>

                </div>

              </div>

            </div>
          </motion.div>
          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            {/* Availability */}

            <div className="rounded-[30px] border border-white/10 bg-[#101523]/90 p-8 backdrop-blur-xl">

              <p className="uppercase tracking-[0.35em] text-sm text-cyan-400">
                Availability
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Let's Work Together
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Response Time
                  </span>

                  <span className="text-white">
                    Within 24 Hours
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Location
                  </span>

                  <span className="text-white">
                    India 🇮🇳
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Time Zone
                  </span>

                  <span className="text-white">
                    IST (UTC +5:30)
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Work Mode
                  </span>

                  <span className="text-emerald-400">
                    Remote Worldwide
                  </span>

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="rounded-[30px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">

              <h5 className="mt-4 text-3xl font-bold text-white leading-tight">
                Every product starts
                <br />
                with the right questions.
              </h5>
              <a
                href="mailto:youremail@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                Say Hello

                <ArrowUpRight size={18} />

              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}