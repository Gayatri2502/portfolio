"use client"

import { useRef, useEffect } from 'react'

export default function useTilt(active = true) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current || !active) return
    const el = ref.current

    function handleMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotateX = (py - 0.5) * 8
      const rotateY = (px - 0.5) * -8
      const translateX = (px - 0.5) * 6
      const translateY = (py - 0.5) * -6
      el.style.transform = `perspective(800px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    function handleLeave() {
      el.style.transform = 'perspective(800px) translate3d(0,0,0) rotateX(0) rotateY(0)'
      el.style.transition = 'transform 450ms cubic-bezier(.2,.8,.2,1)'
      window.setTimeout(() => (el.style.transition = ''), 500)
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [active])

  return ref
}
