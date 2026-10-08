import { useReveal } from '../../hooks/useReveal.js'

// Thin wrapper around useReveal. Reveal owns its element's transform, so put any
// hover transforms on a CHILD element, never on the Reveal element itself.
export default function Reveal({ as: Tag = 'div', dir = 'up', delay = 0, className, children, ...rest }) {
  const { ref, style } = useReveal(dir, delay)
  return (
    <Tag ref={ref} style={style} className={className} {...rest}>
      {children}
    </Tag>
  )
}
