import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About NOVA' },
  { to: '/outreach', label: 'Outreach & Events' },
  { to: '/join-us', label: 'Join Us' },
  { to: '/contact', label: 'Contact Us' },
]

const linkClass = ({ isActive }) =>
  `transition-colors duration-300 hover:text-nova-purple ${isActive ? 'text-nova-purple' : 'text-black'}`

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const { pathname } = useLocation()
  const onDonate = pathname === '/donate'

  useEffect(() => {
    let lastY = window.scrollY
    const THRESHOLD = 8 // ignore tiny scroll jitter
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const delta = y - lastY
      if (Math.abs(delta) < THRESHOLD) return
      // Always show at the very top; otherwise hide going down, show going up.
      if (y < 80) setHidden(false)
      else setHidden(delta > 0)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onDoc = (e) => {
      if (open && headerRef.current && !headerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [open])

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const topClass = scrolled
    ? 'top-3'
    : 'top-4 min-[1070px]:top-12'
  const widthClass = 'w-[calc(100%-32px)] min-[1070px]:w-[80%]'
  // Keep the navbar visible while the mobile menu is open.
  const isHidden = hidden && !open
  const headerStyle = {
    boxShadow: scrolled
      ? '0 14px 30px -10px rgba(151,80,214,0.45)'
      : '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    transform: isHidden ? 'translateY(calc(-100% - 64px))' : 'translateY(0)',
  }

  return (
    <header
      ref={headerRef}
      style={headerStyle}
      className={`fixed inset-x-0 mx-auto ${topClass} ${widthClass} max-w-[1400px] h-16 px-[clamp(16px,2.5vw,32px)] bg-white rounded-[3rem] flex items-center justify-between z-50 font-medium text-base transition-[top,box-shadow,transform] duration-[400ms] ease`}
    >
      <Link to="/" aria-label="Nova home" className="flex items-center">
        <img src="/img/Nova-04.png" alt="Nova Logo" className="w-20 block" />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden min-[1070px]:flex gap-8 items-center">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>
            {n.label}
          </NavLink>
        ))}
      </nav>
      <Link
        to="/donate"
        style={{ background: onDonate ? '#9750D6' : 'rgba(151, 80, 214, 0.5)' }}
        className="hidden min-[1070px]:flex items-center justify-center h-[30px] w-[100px] rounded-[2rem] text-black text-sm font-medium transition-all duration-[400ms] ease-in-out hover:text-white hover:scale-110 hover:bg-nova-purple"
      >
        Donate
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setOpen((o) => !o)
        }}
        aria-label="Menu"
        aria-expanded={open}
        className="min-[1070px]:hidden relative w-11 h-11 bg-none border-none cursor-pointer p-0 flex items-center justify-center"
      >
        <span className="relative w-[25px] h-5 block">
          <span
            className="absolute left-0 top-[2px] w-[25px] h-[2px] bg-black transition-all duration-300"
            style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          <span
            className="absolute left-0 top-[9px] w-[25px] h-[2px] bg-black transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute left-0 top-[16px] w-[25px] h-[2px] bg-black transition-all duration-300"
            style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </span>
      </button>

      {/* Mobile dropdown */}
      <nav
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
        className="min-[1070px]:hidden absolute top-[76px] right-0 w-[220px] p-4 bg-white rounded-2xl shadow-card flex flex-col items-center gap-1 transition-[opacity,transform] duration-[250ms] ease"
      >
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `py-2.5 w-full text-center ${isActive ? 'text-nova-purple' : 'text-black'}`
            }
          >
            {n.label}
          </NavLink>
        ))}
        <Link
          to="/donate"
          onClick={() => setOpen(false)}
          className="mt-2 flex items-center justify-center h-11 w-full rounded-[2rem] bg-nova-purple text-white text-sm"
        >
          Donate
        </Link>
      </nav>
    </header>
  )
}
