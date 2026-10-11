export default function Select({ options = [], placeholder, className = '', ...rest }) {
  return (
    <select className={`nova-field h-12 px-3 ${className}`} {...rest}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  )
}
