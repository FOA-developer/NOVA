import Reveal from '../components/ui/Reveal.jsx'
import Eyebrow from '../components/ui/Eyebrow.jsx'
import MissionVision from '../components/sections/MissionVision.jsx'
import CoreValues from '../components/sections/CoreValues.jsx'
import PartnerCta from '../components/sections/PartnerCta.jsx'
import TeamCard from '../components/sections/TeamCard.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { founder, team } from '../data/team.js'
import { BRAND_COLORS, INTRODUCTION } from '../data/site.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

export default function About() {
  usePageTitle('About Nova')
  const hasPhoto = !!founder.photo

  return (
    <>
      {/* 02 The Foundation */}
      <section id="foundation" className="bg-section pt-[clamp(120px,15vw,160px)] pb-20">
        <div className={WRAP}>
          <h1 className="sr-only">About Nova</h1>
          <div className="flex flex-wrap gap-12 items-center">
            <Reveal dir="left" className="flex-[1_1_380px] min-w-0">
              <img
                src="/img/about-page-image.jpg"
                alt="Nova outreach"
                className="w-full aspect-[4/3] object-cover rounded-2xl block"
              />
            </Reveal>
            <Reveal dir="right" className="flex-[1_1_380px] min-w-0">
              <Eyebrow>The Foundation</Eyebrow>
              <h2 className="text-[length:clamp(26px,3vw,40px)] font-semibold my-4">Who We Are</h2>
              <p className="text-[length:clamp(14px,1.2vw,16px)] leading-[1.75] text-black/80 m-0 [text-wrap:pretty]">
                {INTRODUCTION}
              </p>
            </Reveal>
          </div>

          <MissionVision />
          <CoreValues perRow={3} />
        </div>
      </section>

      {/* 03 The Founder */}
      <section id="founder" className="bg-white py-20">
        <div className={`${WRAP} flex flex-wrap gap-[clamp(2rem,5vw,4.5rem)] items-center`}>
          <Reveal dir="left" className="flex-[1_1_320px] max-w-[480px] min-w-0 relative">
            <div className="absolute inset-[18px_-18px_-18px_18px] rounded-3xl bg-nova-amber" />
            {hasPhoto ? (
              <div
                role="img"
                aria-label={founder.name}
                style={{ backgroundImage: `url("${founder.photo}")` }}
                className="relative w-full aspect-[4/5] rounded-3xl bg-cover bg-center"
              />
            ) : (
              <div className="relative w-full aspect-[4/5] rounded-3xl bg-[repeating-linear-gradient(135deg,rgba(151,80,214,0.14)_0_12px,rgba(151,80,214,0.06)_12px_24px)] border-[1.5px] border-dashed border-nova-purple/50 flex items-center justify-center text-black/60 text-sm font-medium">
                [Founder photo — portrait 4:5]
              </div>
            )}
          </Reveal>
          <Reveal dir="right" className="flex-[1.3_1_380px] min-w-0">
            <Eyebrow color="#FF008E">The Founder</Eyebrow>
            <h2 className="text-[length:clamp(28px,3.4vw,44px)] font-bold mt-4 mb-1 leading-[1.15]">
              {founder.name}
            </h2>
            <p className="text-[length:clamp(15px,1.4vw,18px)] font-medium text-nova-purple mb-5">
              {founder.title}
            </p>
            <p className="text-[length:clamp(14px,1.2vw,16px)] leading-[1.75] text-black/80 m-0 [text-wrap:pretty]">
              {founder.bio}
            </p>
            {founder.quote && (
              <blockquote className="mt-8 py-6 px-7 rounded-[1.25rem] bg-nova-purple/[0.08] relative">
                <i className="ri-double-quotes-l text-4xl text-nova-purple leading-none" />
                <p className="text-[length:clamp(17px,1.7vw,22px)] font-medium leading-[1.5] mt-2 m-0">
                  {founder.quote}
                </p>
              </blockquote>
            )}
          </Reveal>
        </div>
      </section>

      {/* 04 The Team */}
      <section id="team" className="bg-section py-20 scroll-mt-[80px]">
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
            The women behind Nova
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-6">
            {team.map((m, i) => (
              <Reveal key={i} dir="up" delay={(i % 3) * 90}>
                <TeamCard member={m} accent={BRAND_COLORS[i % 3]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnerCta secondary={{ to: '/join-us#partner', label: 'Partner With Us' }} id="about-cta" />
    </>
  )
}
