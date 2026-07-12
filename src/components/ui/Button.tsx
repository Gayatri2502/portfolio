"use client"

import { useRef } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null)

  return (
    <button
      ref={ref}
      {...rest}
      className={
        `group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform will-change-transform ` +
        (variant === 'primary'
          ? 'bg-accent text-slate-900 shadow-glow hover:scale-[1.03]'
          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10') +
        ' ' + className
      }
    >
      {children}
    </button>
  )
}
