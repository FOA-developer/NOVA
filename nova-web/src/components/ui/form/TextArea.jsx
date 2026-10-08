export default function TextArea({ className = '', rows = 4, ...rest }) {
  return <textarea rows={rows} className={`nova-field py-3 px-3.5 resize-y ${className}`} {...rest} />
}
