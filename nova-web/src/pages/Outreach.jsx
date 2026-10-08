import Reveal from '../components/ui/Reveal.jsx'
import PillLink from '../components/ui/PillLink.jsx'
import OutreachFeature from '../components/sections/OutreachFeature.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { outreaches } from '../data/outreaches.js'

export default function Outreach() {
  usePageTitle('Outreach & Events')

  return (
    <>
      <section className="bg-section pt-[clamp(120px,15vw,160px)] pb-20 [background-position:center_top]">
        <div className="w-[90%] max-w-[1240px] mx-auto flex flex-col gap-20">
          <h1 className="sr-only">Outreach &amp; Events</h1>
          {outreaches.map((o, i) => (
            <OutreachFeature
              key={o.id}
              outreach={o}
              num={String(outreaches.length - i).padStart(2, '0')}
            />
          ))}

          <Reveal className="text-center bg-white rounded-3xl p-[clamp(2rem,4vw,3rem)] border-[1.5px] border-dashed border-black/15">
            <h3 className="text-[length:clamp(20px,2.2vw,28px)] font-semibold m-0">
              More outreaches coming soon
            </h3>
            <p className="text-[15px] text-black/70 mx-auto mt-3 mb-6 max-w-[520px]">
              Want Nova to visit your school or community?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PillLink to="/contact" variant="purple" className="!h-12 !px-7">
                Contact Us
              </PillLink>
              <PillLink to="/join-us#facilitator" variant="dark" className="!h-12 !px-7">
                Become a Facilitator
              </PillLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
