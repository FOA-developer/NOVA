export default function TextInput({ className = '', ...rest }) {
  return <input className={`nova-field h-12 px-3.5 ${className}`} {...rest} />
}
