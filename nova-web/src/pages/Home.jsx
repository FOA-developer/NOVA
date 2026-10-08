import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import PillLink from '../components/ui/PillLink.jsx'
import MissionVision from '../components/sections/MissionVision.jsx'
import CoreValues from '../components/sections/CoreValues.jsx'
import PartnerCta from '../components/sections/PartnerCta.jsx'
import OutreachCard from '../components/sections/OutreachCard.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { outreaches } from '../data/outreaches.js'
import {
  BRAND_COLORS,
  HERO_SUBHEAD,
  TAGLINE,
  INTRODUCTION,
  FOCUS_AREAS,
  APPROACH,
  IMPACT_LABELS,
  SHOW_SECTIONS,
} from '../data/site.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

export default function Home() {
  usePageTitle()

  return (
    <>
      {/* 01 Hero */}
      <section className="bg-hero min-h-screen flex items-center justify-center text-center pt-[140px] pb-20">
        <div className="flex flex-col items-center w-[90%] max-w-[1100px]">
          <Reveal
            as="h1"
            delay={100}
            className="text-[length:clamp(32px,6vw,70px)] leading-[1.2] font-bold tracking-[1px] text-black/80 mb-4 [text-wrap:balance]"
          >
            Powering Africa’s Girls Through STEM Education
          </Reveal>
          <Reveal
            as="p"
            delay={250}
            className="text-[length:clamp(16px,1.6vw,20px)] font-medium text-black/70 mx-auto max-w-[820px] [text-wrap:pretty]"
          >
            {HERO_SUBHEAD}
          </Reveal>
          <Reveal delay={400} className="flex flex-wrap gap-4 justify-center mt-10">
            <PillLink to="/join-us#partner" variant="light" className="min-w-[220px]">
              Partner With Us
            </PillLink>
            <PillLink to="/donate" variant="dark" className="min-w-[180px]">
              Donate
            </PillLink>
          </Reveal>
        </div>
      </section>

      {/* 02 About */}
      <section id="about-nova" className="bg-section py-20 pb-16 scroll-mt-[100px]">
        <div className={WRAP}>
          <Reveal
            as="h2"
            className="text-[length:clamp(30px,4vw,48px)] font-semibold tracking-[1px] text-center m-0"
          >
            About <span className="text-nova-purple">NOVA</span>
          </Reveal>
          <Reveal
            as="p"
            delay={100}
            className="text-[length:clamp(14px,1.4vw,18px)] font-medium text-black/70 text-center mt-2 mb-12 mx-auto"
          >
            {TAGLINE}
          </Reveal>

          <div className="flex flex-wrap gap-12 items-center">
            <Reveal dir="left" className="flex-[1_1_380px] min-w-0">
              <img
                src="/img/about-page-image.jpg"
                alt="About NOVA"
                className="w-full aspect-[4/3] object-cover rounded-2xl block"
              />
            </Reveal>
            <div className="flex-[1_1_380px] min-w-0">
              <Reveal dir="right">
                <h3 className="text-[length:clamp(24px,2.6vw,36px)] font-semibold mb-4 m-0">Who We Are</h3>
                <p className="text-[length:clamp(14px,1.2vw,16px)] leading-[1.75] text-black/80 m-0 [text-wrap:pretty]">
                  {INTRODUCTION}
                </p>
                <PillLink to="/about" variant="purple" className="mt-7">
                  Learn more about Nova <i className="ri-arrow-right-line" />
                </PillLink>
              </Reveal>
            </div>
          </div>

          <MissionVision />
          <CoreValues perRow={4} />

          {/* Our Focus Area */}
          <Reveal
            as="h2"
            className="text-[length:clamp(24px,3vw,36px)] font-semibold tracking-[1px] text-center my-20 mb-10"
          >
            Our Focus Area
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[clamp(1.5rem,3vw,3rem)]">
            {FOCUS_AREAS.map((f, i) => (
              <Reveal key={f.header} dir="up" delay={(i % 4) * 90}>
                <div className="h-full bg-white rounded-2xl shadow-card text-center p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_30px_rgba(0,0,0,0.12)]">
                  <div
                    style={{ background: BRAND_COLORS[i % 3] }}
                    className="w-20 h-20 mx-auto rounded-[10px] flex items-center justify-center text-[44px]"
                  >
                    <i className={f.icon} />
                  </div>
                  <div className="text-2xl font-semibold pt-4">{f.header}</div>
                  <div className="text-sm leading-relaxed pt-2.5 text-black/80">{f.info}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Who We Serve */}
      <section id="who-we-serve" className="bg-white py-20">
        <div className={`${WRAP} flex flex-wrap gap-12 items-center`}>
          <Reveal dir="left" className="flex-[1_1_320px]">
            <h2 className="text-[length:clamp(28px,3.4vw,44px)] font-semibold tracking-[1px] m-0 leading-[1.2]">
              Who We <span className="text-nova-pink">Serve</span>
            </h2>
            <p className="text-[length:clamp(14px,1.3vw,17px)] leading-[1.7] text-black/70 mt-4 max-w-[440px]">
              Our programs reach girls directly, and the people around them who shape their learning.
            </p>
          </Reveal>
          <div className="flex-[2_1_480px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-6">
            <Reveal dir="up" className="rounded-3xl p-8 bg-nova-pink/[0.06] border border-nova-pink/25">
              <span className="inline-block text-xs font-semibold tracking-[1.5px] uppercase bg-nova-pink text-white rounded-[2rem] px-3 py-1">
                Primary
              </span>
              <h3 className="text-[22px] font-semibold mt-4 mb-2">African secondary school girls</h3>
              <p className="text-[15px] text-black/70 m-0">Junior (JSS) and Senior (SSS) secondary students</p>
            </Reveal>
            <Reveal dir="up" delay={120} className="rounded-3xl p-8 bg-nova-amber/[0.12] border border-nova-amber/60">
              <span className="inline-block text-xs font-semibold tracking-[1.5px] uppercase bg-nova-amber text-black rounded-[2rem] px-3 py-1">
                Secondary
              </span>
              <h3 className="text-[22px] font-semibold mt-4 mb-2">Teachers, schools &amp; communities</h3>
              <p className="text-[15px] text-black/70 m-0">Teachers, schools, and local communities</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 Our Approach */}
      <section id="our-approach" className="bg-black text-white py-20">
        <div className={WRAP}>
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <Reveal as="h2" className="text-[length:clamp(28px,3.4vw,44px)] font-semibold tracking-[1px] m-0">
              Our <span className="text-nova-amber">Approach</span>
            </Reveal>
            <Reveal
              as="p"
              delay={100}
              className="text-[length:clamp(14px,1.3vw,17px)] text-white/75 m-0 max-w-[460px]"
            >
              Structured outreach programs, hands-on activities, storytelling, and practical exposure.
            </Reveal>
          </div>
          <div className="flex flex-col border-t border-white/[0.18]">
            {APPROACH.map((s, i) => (
              <Reveal key={s.title} dir="up" delay={i * 70}>
                <div className="flex items-center gap-[clamp(1rem,3vw,2.5rem)] py-[clamp(1.25rem,2.4vw,1.75rem)] px-2 border-b border-white/[0.18] transition-[padding,background] duration-[350ms] cursor-default hover:pl-6 hover:bg-nova-purple/[0.18]">
                  <span
                    style={{ color: BRAND_COLORS[i % 3] }}
                    className="text-[length:clamp(28px,3.6vw,48px)] font-bold min-w-[2.2em] leading-none"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-[length:clamp(18px,2.2vw,30px)] font-medium">{s.title}</span>
                  <span style={{ color: BRAND_COLORS[i % 3] }} className="text-[28px]">
                    <i className={s.icon} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Latest Outreach */}
      <section id="latest-outreach" className="bg-section py-20">
        <div className={WRAP}>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <Reveal as="h2" className="text-[length:clamp(28px,3.4vw,44px)] font-semibold tracking-[1px] m-0">
              Latest <span className="text-nova-purple">Outreach</span>
            </Reveal>
            <Reveal>
              <Link
                to="/outreach"
                className="flex items-center gap-2 font-medium text-nova-purple transition-[gap] duration-300 hover:gap-3.5"
              >
                See all outreach &amp; events <i className="ri-arrow-right-line" />
              </Link>
            </Reveal>
          </div>
          <OutreachCard outreach={outreaches[0]} />
        </div>
      </section>

      {/* 06 Impact */}
      {SHOW_SECTIONS.impact && (
        <section id="impact" className="bg-hero text-white py-[4.5rem]">
          <div className={WRAP}>
            <Reveal
              as="h2"
              className="text-[length:clamp(26px,3vw,40px)] font-semibold tracking-[1px] mb-10 text-center"
            >
              Our Impact So Far
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-6">
              {IMPACT_LABELS.map((label, i) => (
                <Reveal
                  key={label}
                  dir="up"
                  delay={(i % 4) * 90}
                  className="text-center py-7 px-4 rounded-2xl bg-white/[0.12] border-[1.5px] border-dashed border-white/50"
                >
                  <div className="text-[length:clamp(36px,4.5vw,56px)] font-bold leading-none">[#]</div>
                  <div className="text-[15px] font-medium mt-3">{label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07 Team preview */}
      {SHOW_SECTIONS.team && (
        <section id="meet-our-team" className="bg-white py-20">
          <div className={WRAP}>
            <Reveal
              as="h2"
              className="text-[length:clamp(28px,3.4vw,44px)] font-semibold tracking-[1px] mb-2 text-center"
            >
              Meet Our <span className="text-nova-pink">Team</span>
            </Reveal>
            <Reveal
              as="p"
              delay={100}
              className="text-[length:clamp(14px,1.3vw,17px)] text-black/70 text-center mb-12"
            >
              The women behind Nova ·{' '}
              <a href="/about#team" className="text-nova-purple font-medium">
                Meet the full team
              </a>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-6">
              {[0, 1, 2, 3].map((i) => (
                <Reveal key={i} dir="up" delay={(i % 4) * 90}>
                  <div className="rounded-2xl overflow-hidden bg-white shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="aspect-square placeholder-stripes flex items-center justify-center text-black/60 text-[13px] font-medium">
                      [Team photo — 1:1]
                    </div>
                    <div className="p-5">
                      <div className="text-lg font-semibold">[Name]</div>
                      <div className="text-sm text-black/65 mt-0.5">[Role]</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 08 Partners */}
      {SHOW_SECTIONS.partners && (
        <section id="partners" className="bg-white pb-20">
          <div className={`${WRAP} border-t border-black/10 pt-14`}>
            <Reveal
              as="h3"
              className="text-sm font-semibold tracking-[2px] uppercase text-black/60 text-center mb-8"
            >
              Our Partners
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <Reveal
                  key={i}
                  dir="up"
                  delay={i * 60}
                  className="aspect-[3/1] rounded-xl border-[1.5px] border-dashed border-nova-purple/45 bg-nova-purple/[0.04] flex items-center justify-center text-xs font-medium text-black/60"
                >
                  [Partner logo]
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 09 Partner CTA */}
      <PartnerCta secondary={{ to: '/donate', label: 'Donate' }} />
    </>
  )
}
