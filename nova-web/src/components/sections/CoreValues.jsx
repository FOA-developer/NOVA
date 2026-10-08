import Reveal from '../ui/Reveal.jsx'
import { CORE_VALUES, BRAND_COLORS } from '../../data/site.js'

// Heading + 6-card grid (Home + About). perRow drives the reveal-delay stagger.
export default function CoreValues({ perRow = 3 }) {
  return (
    <>
      <Reveal
        as="h2"
        className="text-[length:clamp(24px,3vw,36px)] font-semibold tracking-[1px] text-center my-20 mb-10"
      >
        Our Core Values
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
        {CORE_VALUES.map((v, i) => (
          <Reveal key={v.title} dir="up" delay={(i % perRow) * 90}>
            <div className="h-full bg-white rounded-2xl shadow-card p-7 flex gap-4 items-start transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(0,0,0,0.12)]">
              <span
                style={{ background: BRAND_COLORS[i % 3] }}
                className="flex-none w-14 h-14 rounded-[10px] flex items-center justify-center text-[28px] text-black"
              >
                <i className={v.icon} />
              </span>
              <div>
                <h4 className="text-xl font-semibold mb-1.5 m-0">{v.title}</h4>
                <p className="text-sm leading-relaxed text-black/75 m-0">{v.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
