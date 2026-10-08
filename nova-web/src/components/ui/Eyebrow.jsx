// Small uppercase coloured label ("The Foundation", "Outreach 01", "Primary").
// Amber background uses black text for readability.
export default function Eyebrow({ color = '#9750D6', className = '', children }) {
  const textColor = color === '#FFCD1E' ? '#000' : '#fff'
  return (
    <span
      style={{ background: color, color: textColor }}
      className={`inline-block text-xs font-semibold tracking-[1.5px] uppercase rounded-[2rem] px-3.5 py-[5px] ${className}`}
    >
      {children}
    </span>
  )
}
