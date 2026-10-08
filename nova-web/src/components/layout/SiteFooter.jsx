import { Link } from 'react-router-dom'
import { SOCIALS, CONTACT_EMAIL, PHONE, ADDRESS, extAnchorProps } from '../../data/socials.js'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About NOVA' },
  { to: '/outreach', label: 'Outreach & Events' },
  { to: '/contact', label: 'Contact Us' },
]

const GET_INVOLVED = [
  { to: '/join-us#facilitator', label: 'Become a Facilitator' },
  { to: '/join-us#volunteer', label: 'Volunteer' },
  { to: '/join-us#partner', label: 'Partner with us' },
  { to: '/donate', label: 'Donate' },
]

const colTitle = 'text-[clamp(16px,1.4vw,20px)] font-semibold mb-4'
const colLink = 'transition-colors duration-300 hover:text-nova-purple'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white text-black">
      <div className="flex flex-wrap py-8 px-[clamp(1.5rem,4vw,3rem)] gap-[clamp(2rem,5vw,5rem)] border-b border-black/10">
        <div className="flex-[2_1_260px]">
          <img src="/img/Nova-04.png" alt="nova-logo" className="w-[120px] pt-8 block" />
          <h3 className="font-medium mt-4 text-[clamp(16px,1.4vw,18px)]">
            Nurturing Our Visionary African Girls
          </h3>
        </div>

        <ul className="list-none m-0 p-0 flex-[1_1_150px] flex flex-col gap-2">
          <li className={colTitle}>Quick Links</li>
          {QUICK_LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={colLink}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="list-none m-0 p-0 flex-[1_1_150px] flex flex-col gap-2">
          <li className={colTitle}>Get Involved</li>
          {GET_INVOLVED.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={colLink}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="list-none m-0 p-0 flex-[1_1_200px] flex flex-col gap-2">
          <li className={colTitle}>Contact Info</li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${colLink} break-all`}>
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a href={PHONE.tel} className={colLink}>
              {PHONE.display}
            </a>
          </li>
          <li className="text-black/60">{ADDRESS}</li>
        </ul>
      </div>

      <div className="flex flex-wrap-reverse items-center justify-between gap-4 py-4 px-[clamp(1.5rem,4vw,3rem)]">
        <p className="m-0 text-sm text-black/60">© {year} NOVA. All rights reserved.</p>
        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.key}
              href={s.href}
              aria-label={s.label}
              {...extAnchorProps(s.external)}
              className="text-nova-purple text-[26px] transition-transform duration-300 hover:-translate-y-[3px] hover:text-nova-pink"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
