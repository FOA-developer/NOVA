import { Link } from 'react-router-dom'

// Rounded CTA button. Renders <Link> for internal routes, <a> for external/mailto.
const VARIANTS = {
  light: 'bg-[#fafafa] text-black hover:text-nova-purple hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
  white: 'bg-white text-black hover:text-nova-pink hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]',
  dark: 'bg-black text-white hover:text-nova-amber hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]',
  purple: 'bg-nova-purple text-white hover:shadow-[0_8px_18px_rgba(151,80,214,0.4)]',
}

export default function PillLink({ to, href, variant = 'light', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[2rem] font-medium transition-all duration-200 ease-in-out hover:-translate-y-1 ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes} {...rest}>
      {children}
    </Link>
  )
}
