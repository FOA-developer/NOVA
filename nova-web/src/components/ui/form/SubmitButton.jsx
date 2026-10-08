export default function SubmitButton({ className = '', children, ...rest }) {
  return (
    <button
      type="submit"
      className={`h-[52px] border-none rounded-[2rem] bg-nova-purple text-white text-base font-medium cursor-pointer transition-all duration-[250ms] ease hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(151,80,214,0.4)] ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
