// Small icon + text pill (date / location / school).
export default function Chip({ icon, iconColor = '#9750D6', children, className = '' }) {
  return (
    <span
      className={`flex items-center gap-1.5 text-sm font-medium bg-white rounded-[2rem] px-3.5 py-[7px] shadow-[0_4px_10px_rgba(0,0,0,0.06)] ${className}`}
    >
      <i className={icon} style={{ color: iconColor }} />
      {children}
    </span>
  )
}
