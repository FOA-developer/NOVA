import { useEffect, useState } from 'react'
import Reveal from '../ui/Reveal.jsx'

// Thumbnail grid (4:3) that opens a full-screen Lightbox.
export default function Gallery({ photos }) {
  const [index, setIndex] = useState(null)
  const open = index !== null
  const total = photos.length

  const step = (dir) => setIndex((i) => (i + dir + total) % total)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, total])

  const current = open ? photos[index] : null

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-4">
        {photos.map((g, i) => (
          <Reveal key={i} dir="up" delay={(i % 3) * 80}>
            <button
              onClick={() => setIndex(i)}
              aria-label={`Open ${g.alt}`}
              className="block w-full p-0 border-none bg-none cursor-zoom-in rounded-2xl overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_16px_30px_-10px_rgba(151,80,214,0.45)]"
            >
              {g.src ? (
                <div
                  role="img"
                  aria-label={g.alt}
                  style={{ backgroundImage: `url("${g.src}")` }}
                  className="w-full aspect-[4/3] bg-cover bg-center"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-2xl placeholder-stripes border-[1.5px] border-dashed border-nova-purple/45 flex items-center justify-center text-black/60 text-[13px] font-medium text-center p-4">
                  {g.alt}
                </div>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div
          onClick={() => setIndex(null)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/[0.88] flex items-center justify-center p-[clamp(1rem,4vw,3rem)]"
        >
          <button
            onClick={() => setIndex(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-12 h-12 rounded-full border-none bg-white text-[22px] cursor-pointer"
          >
            <i className="ri-close-line" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 w-12 h-12 rounded-full border-none bg-white/15 text-white text-2xl cursor-pointer"
          >
            <i className="ri-arrow-left-s-line" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next"
            className="absolute right-4 top-1/2 w-12 h-12 rounded-full border-none bg-white/15 text-white text-2xl cursor-pointer"
          >
            <i className="ri-arrow-right-s-line" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="w-[min(100%,1000px)]">
            {current.src ? (
              <div
                role="img"
                aria-label={current.alt}
                style={{ backgroundImage: `url("${current.src}")` }}
                className="w-full h-[80vh] bg-contain bg-no-repeat bg-center"
              />
            ) : (
              <div className="w-full aspect-[4/3] max-h-[80vh] rounded-2xl bg-[repeating-linear-gradient(135deg,rgba(151,80,214,0.35)_0_12px,rgba(151,80,214,0.2)_12px_24px)] flex items-center justify-center text-white text-[15px] font-medium">
                {current.alt}
              </div>
            )}
            <p className="text-white text-center text-sm mt-4">
              {index + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
