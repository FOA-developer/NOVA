import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import Field from '../components/ui/form/Field.jsx'
import TextInput from '../components/ui/form/TextInput.jsx'
import Select from '../components/ui/form/Select.jsx'
import TextArea from '../components/ui/form/TextArea.jsx'
import SubmitButton from '../components/ui/form/SubmitButton.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { JOIN_CARDS, BRAND_COLORS } from '../data/site.js'
import { CONTACT_EMAIL } from '../data/socials.js'
import { openMailto } from '../utils/openMailto.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

const PARTNER_ROWS = [
  { icon: 'ri-school-line', color: '#9750D6', tint: 'bg-nova-purple/[0.08]', iconText: 'text-white', title: 'Schools', text: 'Host structured outreach sessions' },
  { icon: 'ri-hand-heart-line', color: '#FF008E', tint: 'bg-nova-pink/[0.07]', iconText: 'text-white', title: 'Donors', text: 'Fund programs and resources' },
  { icon: 'ri-building-line', color: '#FFCD1E', tint: 'bg-nova-amber/[0.14]', iconText: 'text-black', title: 'Institutions', text: 'Offer expertise, role models and exposure' },
]

const INTEREST_OPTIONS = [
  'Partnering as a school',
  'Partnering as a donor',
  'Partnering as an institution',
  'Becoming a facilitator',
  'Volunteering',
]

export default function JoinUs() {
  usePageTitle('Join Us')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    openMailto({
      to: CONTACT_EMAIL,
      subject: `Join Nova: ${data.get('name')}`,
      fields: {
        Name: data.get('name'),
        Organisation: data.get('org'),
        Email: data.get('email'),
        'Interested in': data.get('type'),
        Message: data.get('message'),
      },
    })
    setSubmitted(true)
  }

  return (
    <>
      {/* 01 Join Us */}
      <section className="text-center bg-section pt-[clamp(150px,16vw,10rem)] pb-16">
        <Reveal as="h1" className="text-[length:clamp(28px,4.4vw,48px)] font-bold mx-auto w-[90%]">
          Be Part of Something Bigger
        </Reveal>
        <Reveal
          as="p"
          delay={150}
          className="w-[min(90%,720px)] text-[length:clamp(14px,1.3vw,17px)] font-medium text-black/70 mx-auto mt-4 mb-16 [text-wrap:pretty]"
        >
          Join NOVA in creating opportunities. Contribute just 1% and help change 100% of a young
          girl's future in Africa.
        </Reveal>
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-[clamp(1.5rem,3vw,3rem)] ${WRAP} text-left`}>
          {JOIN_CARDS.map((j, i) => {
            const color = BRAND_COLORS[i % 3]
            const iconColor = color === '#FFCD1E' ? '#000' : '#fff'
            return (
              <Reveal key={j.id} id={j.id} dir="up" delay={(i % 2) * 120} className="scroll-mt-[120px]">
                <div className="h-full min-h-[320px] p-8 flex flex-col rounded-3xl bg-white/85 shadow-card transition-all duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_20px_30px_rgba(0,0,0,0.12)]">
                  <div
                    style={{ background: color, color: iconColor }}
                    className="w-[100px] h-[100px] rounded-[20%] flex items-center justify-center mb-4 text-[50px]"
                  >
                    <i className={j.icon} />
                  </div>
                  <div className="text-[length:clamp(18px,1.8vw,22px)] font-semibold mb-2">{j.header}</div>
                  <div className="text-[length:clamp(14px,1.2vw,16px)] leading-[1.65] mb-6 text-black/80 flex-1">
                    {j.info}
                  </div>
                  <Link
                    to={j.to}
                    style={{ background: color, color: iconColor }}
                    className="self-start inline-flex items-center gap-1.5 py-2.5 px-5 min-h-[44px] rounded-[10px] text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                  >
                    {j.cta} <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* 02 Partner With Us */}
      <section id="partner" className="bg-white py-20 scroll-mt-[80px]">
        <div className={`${WRAP} flex flex-wrap gap-[clamp(2rem,5vw,4rem)] items-start`}>
          <Reveal dir="left" className="flex-[1_1_360px] min-w-0">
            <h2 className="text-[length:clamp(28px,3.4vw,44px)] font-semibold tracking-[1px] m-0 leading-[1.2]">
              Partner <span className="text-nova-purple">With Us</span>
            </h2>
            <p className="text-[length:clamp(14px,1.3vw,17px)] leading-[1.7] text-black/70 mt-4 mb-8">
              Organizations and companies can partner with NOVA to sponsor programs, provide resources,
              or offer internship opportunities to our participants.
            </p>
            <div className="flex flex-col gap-4">
              {PARTNER_ROWS.map((r) => (
                <div
                  key={r.title}
                  className={`flex gap-4 items-center py-[1.1rem] px-5 rounded-2xl ${r.tint}`}
                >
                  <span
                    style={{ background: r.color }}
                    className={`w-12 h-12 flex-none rounded-xl ${r.iconText} flex items-center justify-center text-[22px]`}
                  >
                    <i className={r.icon} />
                  </span>
                  <div>
                    <div className="font-semibold">{r.title}</div>
                    <div className="text-sm text-black/70">{r.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            dir="right"
            className="flex-[1.2_1_400px] min-w-0 bg-white rounded-3xl p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <form onSubmit={submit} className="flex flex-col gap-4">
              <h3 className="text-[22px] font-semibold mb-1 m-0">Express your interest</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4">
                <Field label="Full name">
                  <TextInput required name="name" />
                </Field>
                <Field label="Organisation">
                  <TextInput name="org" />
                </Field>
              </div>
              <Field label="Email">
                <TextInput required type="email" name="email" />
              </Field>
              <Field label="I'm interested in">
                <Select name="type" options={INTEREST_OPTIONS} />
              </Field>
              <Field label="Message">
                <TextArea name="message" rows={4} />
              </Field>
              <SubmitButton>Send</SubmitButton>
              {submitted && (
                <p className="text-sm text-black/70 text-center m-0">
                  Your email app should have opened. If nothing happened, email us directly at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-nova-purple font-medium break-all">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
