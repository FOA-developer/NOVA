// Renders an <img> when src is set, otherwise a striped placeholder showing the alt text.
// `ratio` is a Tailwind aspect class (e.g. 'aspect-[16/9]'); extra classes via className.
export default function Photo({ src, alt, ratio = '', className = '', rounded = 'rounded-2xl' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full ${ratio} object-cover ${rounded} block ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`w-full ${ratio} ${rounded} placeholder-stripes border-[1.5px] border-dashed border-nova-purple/45 flex items-center justify-center text-center text-black/60 text-[13px] font-medium p-4 ${className}`}
    >
      {alt}
    </div>
  )
}
