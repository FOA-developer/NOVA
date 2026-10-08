export default function Select({ options = [], className = '', ...rest }) {
  return (
    <select className={`nova-field h-12 px-3 ${className}`} {...rest}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  )
}
