'use client'

import { socialLinks } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202]/90 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Alphacentauric. Crafted for product-led AI experiences.</p>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
