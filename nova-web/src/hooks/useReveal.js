import { useEffect, useRef, useState } from 'react'

const TRANSFORMS = {
  up: 'translateY(28px)',
  left: 'translateX(-36px)',
  right: 'translateX(36px)',
  zoom: 'scale(0.95)',
}

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Reproduces designs/motion.js, but replays: reveals every time the element
// enters the viewport and resets to hidden when it leaves, so scrolling up or
// down re-triggers the animation. Returns a ref and the inline style to spread.
export function useReveal(dir = 'up', delay = 0) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  const reduce = prefersReduced()

  useEffect(() => {
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setShown(e.isIntersecting))
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduce])

  const style = reduce
    ? undefined
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : TRANSFORMS[dir] || TRANSFORMS.up,
        transition: `opacity .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }

  return { ref, style }
}
