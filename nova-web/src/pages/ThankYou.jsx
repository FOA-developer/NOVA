import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

const WRAP = 'w-[90%] max-w-[1240px] mx-auto'

// Landing page after a Paystack payment (set as the redirect URL on each payment page).
// Restored from the thank-you state that used to live inside the Donate form.
// It reads nothing from the URL or router state, so any query params Paystack
// appends (e.g. ?reference=...) are simply ignored.
export default function ThankYou() {
  usePageTitle('Thank you')
  return (
    <section className="bg-hero pt-[clamp(150px,16vw,200px)] pb-[clamp(70px,8vw,110px)]">
      <div className={WRAP}>
        <Reveal
          dir="zoom"
          className="max-w-[560px] mx-auto bg-white rounded-[1.75rem] p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
        >
          <div className="text-center py-12 px-4">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-nova-pink text-white flex items-center justify-center text-[38px]">
              <i className="ri-heart-fill" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-semibold m-0">Thank you!</h1>
            <p className="text-[13px] text-black/60 mt-2 mb-6">
              [Payment step placeholder — no payment was processed]
            </p>
            <Link
              to="/"
              className="inline-flex items-center h-11 px-6 rounded-[2rem] border border-black/[0.18] bg-white cursor-pointer font-medium hover:border-nova-purple hover:text-nova-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nova-purple"
            >
              Back
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
