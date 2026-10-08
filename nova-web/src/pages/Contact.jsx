import { useState } from 'react'
import Reveal from '../components/ui/Reveal.jsx'
import Field from '../components/ui/form/Field.jsx'
import TextInput from '../components/ui/form/TextInput.jsx'
import Select from '../components/ui/form/Select.jsx'
import TextArea from '../components/ui/form/TextArea.jsx'
import SubmitButton from '../components/ui/form/SubmitButton.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { PHONE, ADDRESS } from '../data/site.js'
import { SOCIALS, CONTACT_EMAIL, extAnchorProps } from '../data/socials.js'
import { openMailto } from '../utils/openMailto.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

const SUBJECT_OPTIONS = [
  'General enquiry',
  'Outreach to my school',
  'Partnership',
  'Volunteering / Facilitating',
  'Donations',
]

function ContactRow({ icon, iconBg, iconText, label, value }) {
  return (
    <>
      <span
        style={{ background: iconBg }}
        className={`w-[52px] h-[52px] flex-none rounded-[14px] ${iconText} flex items-center justify-center text-2xl`}
      >
        <i className={icon} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] text-black/60">{label}</span>
        <span className="block font-semibold break-all">{value}</span>
      </span>
    </>
  )
}

export default function Contact() {
  usePageTitle('Contact Us')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = data.get('subject')
    openMailto({
      to: CONTACT_EMAIL,
      subject: `Contact Form: ${subject}`,
      fields: {
        Name: data.get('name'),
        Email: data.get('email'),
        Subject: subject,
        Message: data.get('message'),
      },
    })
    setSubmitted(true)
  }

  const linkCard =
    'flex gap-4 items-center p-5 rounded-2xl bg-white shadow-[0_10px_15px_rgba(0,0,0,0.08)] text-black transition-transform duration-300 hover:translate-x-1.5 hover:text-black'
  const dashedCard =
    'flex gap-4 items-center p-5 rounded-2xl bg-white border-[1.5px] border-dashed border-nova-purple/45'

  return (
    <>
      <section className="bg-section pt-[clamp(120px,15vw,160px)] pb-20">
        <div className={`${WRAP} flex flex-wrap gap-[clamp(2rem,4vw,3rem)] items-start`}>
          <h1 className="sr-only">Contact Us</h1>
          <div className="flex-[1_1_320px] min-w-0 flex flex-col gap-4">
            {SOCIALS.map((s, i) => (
              <Reveal
                key={s.key}
                as="a"
                dir="left"
                delay={i * 80}
                href={s.href}
                aria-label={s.label}
                {...extAnchorProps(s.external)}
                className={linkCard}
              >
                <ContactRow
                  icon={s.icon}
                  iconBg={s.tile}
                  iconText={s.tileText}
                  label={s.name}
                  value={s.handle}
                />
              </Reveal>
            ))}
            <Reveal dir="left" delay={SOCIALS.length * 80} className={dashedCard}>
              <ContactRow icon="ri-phone-fill" iconBg="#000" iconText="text-white" label="Phone" value={PHONE} />
            </Reveal>
            <Reveal dir="left" delay={SOCIALS.length * 80 + 80} className={dashedCard}>
              <ContactRow icon="ri-map-pin-fill" iconBg="#000" iconText="text-white" label="Address" value={ADDRESS} />
            </Reveal>
          </div>

          <Reveal
            dir="right"
            className="flex-[1.5_1_420px] min-w-0 bg-white rounded-3xl p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <form onSubmit={submit} className="flex flex-col gap-4">
              <h2 className="text-[length:clamp(22px,2.2vw,28px)] font-semibold mb-1 m-0">
                Send us a message
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4">
                <Field label="Full name">
                  <TextInput required name="name" />
                </Field>
                <Field label="Email">
                  <TextInput required type="email" name="email" />
                </Field>
              </div>
              <Field label="Subject">
                <Select name="subject" options={SUBJECT_OPTIONS} />
              </Field>
              <Field label="Message">
                <TextArea required name="message" rows={6} />
              </Field>
              <SubmitButton>Send Message</SubmitButton>
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
