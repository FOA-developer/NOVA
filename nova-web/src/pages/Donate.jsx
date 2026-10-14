import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { DONATION_PRESETS, CURRENCY } from '../data/site.js'
import { getDonationLink } from '../data/donations.js'
import { CONTACT_EMAIL } from '../data/socials.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

const GIFT_SUPPORTS = [
  { icon: 'ri-school-line', color: '#9750D6', text: 'Structured outreach sessions in schools' },
  { icon: 'ri-flask-line', color: '#FF008E', text: 'Hands-on STEM activities' },
  { icon: 'ri-chat-quote-line', color: '#000', text: 'Storytelling and role model engagement' },
]

export default function Donate() {
  usePageTitle('Donate')
  const [freq, setFreq] = useState('once')
  // A preset amount, or 'custom' (donor enters the amount on Paystack's page).
  const [choice, setChoice] = useState(10000)

  const monthly = freq === 'monthly'
  const fmt = (n) => CURRENCY + Number(n).toLocaleString('en-NG')
  const link = getDonationLink(freq, choice)

  const ctaLabel =
    choice === 'custom'
      ? monthly ? 'Donate monthly' : 'Donate'
      : `Donate ${fmt(choice)}${monthly ? ' / month' : ''}`

  const emailLink = (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-medium text-nova-purple underline underline-offset-2 break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nova-purple rounded-sm"
    >
      {CONTACT_EMAIL}
    </a>
  )

  const toggleBtn = (active) =>
    `h-11 border-none rounded-[2rem] cursor-pointer text-[15px] font-medium transition-all duration-[250ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nova-purple ${
      active ? 'bg-white text-nova-purple' : 'bg-transparent text-black'
    }`

  const amountBtn = (sel) =>
    `h-14 rounded-[14px] cursor-pointer text-[17px] font-semibold border-2 transition-all duration-200 hover:border-nova-purple hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nova-purple ${
      sel ? 'border-nova-purple bg-nova-purple text-white' : 'border-black/[0.12] bg-white text-black'
    }`

  const ctaClass =
    'h-14 w-full px-4 border-none rounded-[2rem] text-white text-base font-semibold flex items-center justify-center gap-2 transition-all duration-[250ms] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-nova-purple'

  return (
    <>
      <section className="bg-hero pt-[clamp(150px,16vw,200px)] pb-[clamp(70px,8vw,110px)]">
        <div className={`${WRAP} flex flex-wrap gap-[clamp(2rem,5vw,4rem)] items-center`}>
          <div className="flex-[1_1_380px] min-w-0">
            <Reveal
              as="h1"
              className="text-[length:clamp(32px,4.6vw,58px)] font-bold tracking-[1px] text-black/85 m-0 leading-[1.15] [text-wrap:balance]"
            >
              Help a girl discover STEM
            </Reveal>
            <Reveal
              as="p"
              delay={150}
              className="text-[length:clamp(15px,1.5vw,19px)] font-medium text-black/75 mt-5 mb-8 max-w-[520px] [text-wrap:pretty]"
            >
              Your financial support helps us provide free technology education, equipment, and
              resources to girls who need it most, enabling them to explore technology.
            </Reveal>
            <Reveal delay={250} className="flex flex-col gap-3">
              <div className="text-[13px] font-semibold tracking-[1.5px] uppercase text-black/70">
                Your gift supports
              </div>
              {GIFT_SUPPORTS.map((g) => (
                <div key={g.text} className="flex items-center gap-3 font-medium">
                  <span
                    style={{ color: g.color }}
                    className="w-[34px] h-[34px] rounded-[10px] bg-white flex items-center justify-center"
                  >
                    <i className={g.icon} />
                  </span>
                  {g.text}
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal
            dir="zoom"
            className="flex-[1_1_420px] min-w-0 bg-white rounded-[1.75rem] p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
          >
            <div className="flex flex-col gap-5">
              <div role="group" aria-label="Donation frequency" className="grid grid-cols-2 bg-nova-purple/10 rounded-[2rem] p-1">
                <button type="button" aria-pressed={!monthly} onClick={() => setFreq('once')} className={toggleBtn(!monthly)}>
                  One-time
                </button>
                <button type="button" aria-pressed={monthly} onClick={() => setFreq('monthly')} className={toggleBtn(monthly)}>
                  Monthly
                </button>
              </div>

              <div role="group" aria-labelledby="donate-amount-label">
                <div id="donate-amount-label" className="text-sm font-medium mb-2.5">
                  Choose an amount
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {DONATION_PRESETS.map((v) => (
                    <button
                      key={v}
                      type="button"
                      aria-pressed={choice === v}
                      onClick={() => setChoice(v)}
                      className={amountBtn(choice === v)}
                    >
                      {fmt(v)}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-pressed={choice === 'custom'}
                    aria-describedby={choice === 'custom' ? 'donate-custom-note' : undefined}
                    onClick={() => setChoice('custom')}
                    className={`${amountBtn(choice === 'custom')} col-span-2`}
                  >
                    Other amount
                  </button>
                </div>
                {choice === 'custom' && link && (
                  <p id="donate-custom-note" className="mt-2.5 mb-0 text-sm text-black/70">
                    You'll enter your amount on the secure payment page.
                  </p>
                )}
              </div>

              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaClass} bg-nova-purple cursor-pointer hover:text-white hover:-translate-y-[3px] motion-reduce:hover:translate-y-0 hover:shadow-[0_12px_24px_rgba(151,80,214,0.45)]`}
                >
                  <i className="ri-heart-fill" aria-hidden="true" />
                  {ctaLabel}
                  <span className="sr-only"> (opens Paystack in a new tab)</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-describedby="donate-unavailable-note"
                  className={`${ctaClass} bg-nova-purple/40 cursor-not-allowed`}
                >
                  <i className="ri-heart-fill" aria-hidden="true" />
                  {ctaLabel}
                </button>
              )}

              {!link && (
                <p id="donate-unavailable-note" role="status" className="m-0 text-sm text-black/75 text-center">
                  Online donations for this option are coming soon. To give now, email {emailLink}
                </p>
              )}

              <p className="m-0 text-xs text-black/60 text-center flex items-center justify-center gap-1.5">
                <i className="ri-lock-line" aria-hidden="true" />
                Secure payments powered by Paystack.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-section py-[4.5rem]">
        <div className={`${WRAP} grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6`}>
          <Reveal dir="up" className="bg-white rounded-[1.25rem] p-8 shadow-[0_10px_15px_rgba(0,0,0,0.08)]">
            <span className="w-[52px] h-[52px] rounded-[14px] bg-nova-purple text-white flex items-center justify-center text-2xl">
              <i className="ri-bank-line" />
            </span>
            <h3 className="text-[19px] font-semibold mt-4 mb-2">Bank transfer</h3>
            <p className="text-sm leading-[1.7] text-black/75 m-0">
              [Bank name]
              <br />
              [Account name]
              <br />
              [Account number]
            </p>
          </Reveal>
          <Reveal dir="up" delay={100} className="bg-white rounded-[1.25rem] p-8 shadow-[0_10px_15px_rgba(0,0,0,0.08)]">
            <span className="w-[52px] h-[52px] rounded-[14px] bg-nova-pink text-white flex items-center justify-center text-2xl">
              <i className="ri-building-line" />
            </span>
            <h3 className="text-[19px] font-semibold mt-4 mb-2">Give as an organisation</h3>
            <p className="text-sm leading-[1.7] text-black/75 mb-4">
              Sponsor programs or provide resources.
            </p>
            <Link
              to="/join-us#partner"
              className="inline-flex items-center gap-1.5 font-medium text-nova-purple transition-[gap] duration-[250ms] hover:gap-3"
            >
              Partner with us <i className="ri-arrow-right-line" />
            </Link>
          </Reveal>
          <Reveal dir="up" delay={200} className="bg-white rounded-[1.25rem] p-8 shadow-[0_10px_15px_rgba(0,0,0,0.08)]">
            <span className="w-[52px] h-[52px] rounded-[14px] bg-nova-amber text-black flex items-center justify-center text-2xl">
              <i className="ri-shield-check-line" />
            </span>
            <h3 className="text-[19px] font-semibold mt-4 mb-2">Transparency</h3>
            <p className="text-sm leading-[1.7] text-black/75 m-0">
              Transparency and accountability in all operations.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
