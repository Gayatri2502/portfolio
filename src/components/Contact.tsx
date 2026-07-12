'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  FileText,
  ArrowUpRight,
} from 'lucide-react'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    'AI Products',
    'SaaS',
    'Automation',
    'Web Development',
  ]

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      hover: 'hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourprofile',
      hover: 'hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:youremail@gmail.com',
      hover: 'hover:border-red-400 hover:bg-red-500/10 hover:text-red-400',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/91XXXXXXXXXX',
      hover:
        'hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-400',
    },
    {
      icon: FileText,
      href: '/resume.pdf',
      hover:
        'hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-400',
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent" />

      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#090c16]/80 backdrop-blur-2xl p-6 sm:p-8 lg:p-10">

        {/* Heading */}

        <div className="text-center">

          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl lg:text-6xl">
            Have an Idea? Let's Build It
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Looking to build an AI product, SaaS platform, automation,
            website or collaborate on something exciting?
            Let's connect.
          </p>

        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]
          transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 sm:p-8"
          >

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/20 blur-[120px]" />

            <div className="relative z-10">

              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                LET'S CONNECT
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                I build digital businesses.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                From AI-powered SaaS platforms to intelligent automation and
                immersive web experiences, I enjoy transforming ambitious ideas
                into products that deliver measurable value.
              </p>

              {/* Services */}

              <div className="mt-8 flex flex-wrap gap-3">
                {services.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-300 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Social */}

              <div className="mt-10">

                <h4 className="mb-5 font-medium text-white">
                  Connect with me
                </h4>

                <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">

                  {socials.map((social, index) => {
                    const Icon = social.icon

                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex h-14 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
                      >
                        <Icon
                          size={22}
                          className="transition-colors duration-300"
                        />
                      </a>
                    )
                  })}

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {/* Availability */}

            <div className="rounded-3xl border border-white/10 bg-[#101523]/90 p-6 sm:p-8">

              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                Availability
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Let's Work Together
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  ['Response Time', 'Within 24 Hours'],
                  ['Location', 'India 🇮🇳'],
                  ['Time Zone', 'IST (UTC +5:30)'],
                  ['Work Mode', 'Remote Worldwide'],
                ].map(([title, value], index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-1 border-b border-white/5 pb-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm text-slate-400">
                      {title}
                    </span>

                    <span
                      className={`text-sm ${
                        title === 'Work Mode'
                          ? 'text-emerald-400'
                          : 'text-white'
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* CTA */}

            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 sm:p-8">

              <h4 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Every product starts
                <br />
                with the right questions.
              </h4>

              <a
                href="mailto:youremail@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105"
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