import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'

// Home "Latest Outreach" card — links to the matching feature on /outreach.
export default function OutreachCard({ outreach }) {
  const o = outreach
  const hasCover = !!(o.cover && o.cover.src)
  return (
    <Reveal dir="zoom">
      <Link
        to={`/outreach#${o.id}`}
        className="flex flex-wrap bg-white rounded-3xl overflow-hidden shadow-card text-black transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-12px_rgba(151,80,214,0.4)] hover:text-black"
      >
        <div className="flex-[1.3_1_360px] min-w-0 relative">
          {hasCover ? (
            <div
              role="img"
              aria-label={o.cover.alt}
              style={{ backgroundImage: `url("${o.cover.src}")` }}
              className="w-full h-full aspect-[16/9] bg-cover bg-center"
            />
          ) : (
            <div className="w-full h-full aspect-[16/9] placeholder-stripes flex items-center justify-center text-black/60 text-[13px] font-medium text-center p-4">
              {o.cover.alt}
            </div>
          )}
        </div>
        <div className="flex-[1_1_320px] p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 text-[13px] font-medium bg-nova-purple/[0.12] text-black rounded-[2rem] px-3 py-[5px]">
              <i className="ri-calendar-line text-nova-purple" />
              {o.date}
            </span>
            <span className="flex items-center gap-1.5 text-[13px] font-medium bg-nova-pink/10 text-black rounded-[2rem] px-3 py-[5px]">
              <i className="ri-map-pin-line text-nova-pink" />
              {o.location}
            </span>
          </div>
          <h3 className="text-[length:clamp(22px,2.4vw,30px)] font-semibold m-0">{o.title}</h3>
          <p className="text-[15px] leading-[1.7] text-black/70 m-0">{o.description}</p>
          <span className="flex items-center gap-2 font-medium text-nova-purple">
            View outreach <i className="ri-arrow-right-up-line" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
