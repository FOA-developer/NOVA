// A label that wraps its input, with the field name on top.
export default function Field({ label, children, className = '' }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-medium ${className}`}>
      {label}
      {children}
    </label>
  )
}
