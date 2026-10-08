import Reveal from '../ui/Reveal.jsx'
import { MISSION, VISION } from '../../data/site.js'

// The two big cards (Home + About).
export default function MissionVision() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-8 mt-16">
      <Reveal dir="up">
        <div className="h-full bg-nova-purple text-white rounded-3xl p-[clamp(1.75rem,3vw,2.75rem)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(151,80,214,0.55)]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-11 h-11 rounded-xl bg-white text-nova-purple flex items-center justify-center text-[22px]">
              <i className="ri-focus-3-line" />
            </span>
            <h3 className="text-[length:clamp(22px,2.2vw,28px)] font-semibold m-0">Our Mission</h3>
          </div>
          <p className="text-[length:clamp(17px,1.6vw,21px)] leading-[1.55] font-medium m-0 [text-wrap:pretty]">
            {MISSION}
          </p>
        </div>
      </Reveal>
      <Reveal dir="up" delay={120}>
        <div className="h-full bg-black text-white rounded-3xl p-[clamp(1.75rem,3vw,2.75rem)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-11 h-11 rounded-xl bg-nova-amber text-black flex items-center justify-center text-[22px]">
              <i className="ri-eye-line" />
            </span>
            <h3 className="text-[length:clamp(22px,2.2vw,28px)] font-semibold m-0">Our Vision</h3>
          </div>
          <p className="text-[length:clamp(17px,1.6vw,21px)] leading-[1.55] font-medium m-0 [text-wrap:pretty]">
            {VISION}
          </p>
        </div>
      </Reveal>
    </div>
  )
}
