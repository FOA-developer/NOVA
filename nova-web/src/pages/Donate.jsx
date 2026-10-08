import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { DONATION_PRESETS, CURRENCY } from '../data/site.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'
const PURPLE = '#9750D6'

const GIFT_SUPPORTS = [
  { icon: 'ri-school-line', color: '#9750D6', text: 'Structured outreach sessions in schools' },
  { icon: 'ri-flask-line', color: '#FF008E', text: 'Hands-on STEM activities' },
  { icon: 'ri-chat-quote-line', color: '#000', text: 'Storytelling and role model engagement' },
]

export default function Donate() {
  usePageTitle('Donate')
  const [freq, setFreq] = useState('once')
  const [amount, setAmount] = useState(10000)
  const [custom, setCustom] = useState('')
  const [done, setDone] = useState(false)

  const fmt = (n) => CURRENCY + Number(n).toLocaleString('en-NG')
  const value = custom ? Number(custom) : amount
  const valid = value > 0

  const submit = (e) => {
    e.preventDefault()
    if (valid) setDone(true)
  }

  const summary = `Your ${freq === 'monthly' ? 'monthly ' : ''}gift of ${fmt(value)} means a lot to us.`
  const ctaLabel = valid
    ? `Donate ${fmt(value)}${freq === 'monthly' ? ' / month' : ''}`
    : 'Enter an amount'

  const toggleBtn = (active) =>
    `h-11 border-none rounded-[2rem] cursor-pointer text-[15px] font-medium transition-all duration-[250ms] ${
      active ? 'bg-white text-nova-purple' : 'bg-transparent text-black'
    }`

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
            {done ? (
              <div className="text-center py-12 px-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-nova-pink text-white flex items-center justify-center text-[38px]">
                  <i className="ri-heart-fill" />
                </div>
                <h3 className="text-2xl font-semibold m-0">Thank you!</h3>
                <p className="text-black/70 my-2">{summary}</p>
                <p className="text-[13px] text-black/60 mb-6">
                  [Payment step placeholder — no payment was processed]
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="h-11 px-6 rounded-[2rem] border border-black/[0.18] bg-white cursor-pointer font-medium hover:border-nova-purple hover:text-nova-purple"
                >
                  Back
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 bg-nova-purple/10 rounded-[2rem] p-1">
                  <button type="button" onClick={() => setFreq('once')} className={toggleBtn(freq === 'once')}>
                    One-time
                  </button>
                  <button type="button" onClick={() => setFreq('monthly')} className={toggleBtn(freq === 'monthly')}>
                    Monthly
                  </button>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2.5">Choose an amount</div>
                  <div className="grid grid-cols-2 gap-3">
                    {DONATION_PRESETS.map((v) => {
                      const sel = !custom && amount === v
                      return (
                        <button
                          key={v}
                          type="button"
                          onClick={() => {
                            setAmount(v)
                            setCustom('')
                          }}
                          style={{
                            borderColor: sel ? PURPLE : 'rgba(0,0,0,0.12)',
                            background: sel ? PURPLE : '#fff',
                            color: sel ? '#fff' : '#000',
                          }}
                          className="h-14 rounded-[14px] cursor-pointer text-[17px] font-semibold border-2 transition-all duration-200 hover:border-nova-purple hover:-translate-y-0.5"
                        >
                          {fmt(v)}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <label className="flex flex-col gap-1.5 text-sm font-medium">
                  Or enter a custom amount
                  <div
                    style={{ borderColor: custom ? PURPLE : 'rgba(0,0,0,0.18)' }}
                    className="flex items-center h-[52px] rounded-xl border-[1.5px] px-3.5 gap-2 transition-[border-color] duration-200"
                  >
                    <span className="font-semibold text-black/70">{CURRENCY}</span>
                    <input
                      inputMode="numeric"
                      placeholder="0"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ''))}
                      className="flex-1 min-w-0 border-none outline-none text-[17px] font-semibold bg-transparent"
                    />
                  </div>
                </label>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-3">
                  <input required placeholder="Full name" className="nova-field h-12 px-3.5" />
                  <input required type="email" placeholder="Email" className="nova-field h-12 px-3.5" />
                </div>

                <button
                  type="submit"
                  disabled={!valid}
                  style={{ background: valid ? PURPLE : 'rgba(151,80,214,0.4)' }}
                  className="h-14 border-none rounded-[2rem] text-white text-base font-semibold cursor-pointer transition-all duration-[250ms] flex items-center justify-center gap-2 hover:-translate-y-[3px] hover:shadow-[0_12px_24px_rgba(151,80,214,0.45)] disabled:cursor-not-allowed"
                >
                  <i className="ri-heart-fill" />
                  {ctaLabel}
                </button>
                <p className="m-0 text-xs text-black/60 text-center flex items-center justify-center gap-1.5">
                  <i className="ri-lock-line" />
                  [Payment provider — e.g. Paystack / Flutterwave — to be connected]
                </p>
              </form>
            )}
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
