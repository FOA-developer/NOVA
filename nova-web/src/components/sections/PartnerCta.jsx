import Reveal from '../ui/Reveal.jsx'
import PillLink from '../ui/PillLink.jsx'

// Pink banner (Home + About). The first button is always "Get Involved" → /join-us.
// The second button is passed in via `secondary` ({ to, label }).
export default function PartnerCta({ secondary, id }) {
  return (
    <section id={id} className="bg-white pb-20 scroll-mt-[100px]">
      <Reveal
        dir="zoom"
        className="w-[90%] max-w-[1240px] mx-auto bg-nova-pink text-white rounded-[2rem] p-[clamp(2rem,5vw,4rem)] flex flex-wrap items-center justify-between gap-8 relative overflow-hidden"
      >
        <img
          src="/img/Nova-12.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[-60px] bottom-[-80px] w-[320px] opacity-[0.12] [filter:brightness(0)_invert(1)] pointer-events-none"
        />
        <div className="flex-[1_1_420px] relative">
          <h2 className="text-[length:clamp(28px,3.6vw,46px)] font-bold m-0 leading-[1.15]">
            Partner With Us
          </h2>
          <p className="text-[length:clamp(15px,1.4vw,18px)] font-medium mt-4 max-w-[560px]">
            We build partnerships with schools, donors, and institutions to bring STEM education and
            exposure to more girls.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 relative">
          <PillLink to="/join-us" variant="white">
            Get Involved
          </PillLink>
          <PillLink to={secondary.to} variant="dark">
            {secondary.label}
          </PillLink>
        </div>
      </Reveal>
    </section>
  )
}
