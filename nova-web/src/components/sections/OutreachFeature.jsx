import Reveal from '../ui/Reveal.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import Chip from '../ui/Chip.jsx'
import Gallery from './Gallery.jsx'
import { BRAND_COLORS } from '../../data/site.js'

// Full outreach block on /outreach. `num` is the "Outreach 0N" label (oldest = 01).
export default function OutreachFeature({ outreach, num }) {
  const o = outreach
  const hasCover = !!(o.cover && o.cover.src)
  return (
    <article id={o.id} className="flex flex-col gap-8 scroll-mt-[120px]">
      <Reveal dir="up" className="flex items-center gap-3">
        <Eyebrow>Outreach {num}</Eyebrow>
        <span className="flex-1 h-px bg-black/[0.12]" />
      </Reveal>

      <Reveal dir="zoom" className="rounded-3xl overflow-hidden shadow-card">
        {hasCover ? (
          <div
            role="img"
            aria-label={o.cover.alt}
            style={{ backgroundImage: `url("${o.cover.src}")` }}
            className="w-full aspect-[16/9] bg-cover bg-center"
          />
        ) : (
          <div className="w-full aspect-[16/9] rounded-3xl bg-[repeating-linear-gradient(135deg,rgba(151,80,214,0.12)_0_12px,rgba(151,80,214,0.05)_12px_24px)] border-[1.5px] border-dashed border-nova-purple/45 flex items-center justify-center text-black/60 text-sm font-medium">
            {o.cover.alt}
          </div>
        )}
      </Reveal>

      <div className="flex flex-wrap gap-[clamp(2rem,4vw,4rem)] items-start">
        <Reveal dir="left" className="flex-[1.4_1_400px] min-w-0">
          <h2 className="text-[length:clamp(26px,3.4vw,44px)] font-bold m-0 leading-[1.15]">{o.title}</h2>
          <div className="flex flex-wrap gap-2.5 mt-5">
            <Chip icon="ri-calendar-line" iconColor="#9750D6">{o.date}</Chip>
            <Chip icon="ri-map-pin-line" iconColor="#FF008E">{o.location}</Chip>
            <Chip icon="ri-school-line" iconColor="#000">{o.school}</Chip>
          </div>
          <p className="text-[length:clamp(15px,1.3vw,17px)] leading-[1.75] text-black/75 mt-6 [text-wrap:pretty]">
            {o.description}
          </p>
        </Reveal>

        <Reveal dir="right" className="flex-[1_1_300px] min-w-0 bg-white rounded-3xl p-8 shadow-card">
          <h3 className="text-xl font-semibold mb-5 m-0">Key Highlights</h3>
          <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
            {o.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 items-start text-[15px] leading-normal">
                <span
                  style={{ background: BRAND_COLORS[i % 3] }}
                  className="flex-none w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[15px] text-black"
                >
                  <i className="ri-star-smile-line" />
                </span>
                <span className="pt-0.5">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div>
        <Reveal as="h3" className="text-[length:clamp(20px,2vw,26px)] font-semibold mb-5">
          Gallery
        </Reveal>
        <Gallery photos={o.gallery} />
      </div>
    </article>
  )
}
