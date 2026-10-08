import Reveal from '../ui/Reveal.jsx'

// Purple patterned hero: title + subtitle. Used on About, Outreach, Contact, 404.
// `padding` overrides the default vertical padding (Contact uses a tighter value).
export default function PageHero({
  title,
  subtitle,
  padding = 'py-[clamp(150px,18vw,220px)] pb-[clamp(70px,8vw,110px)]',
}) {
  return (
    <section className={`bg-hero text-center ${padding}`}>
      <div className="w-[90%] max-w-[900px] mx-auto">
        <Reveal
          as="h1"
          className="text-[length:clamp(32px,5vw,60px)] font-bold tracking-[1px] text-black/80 m-0 leading-[1.15]"
        >
          {title}
        </Reveal>
        {subtitle && (
          <Reveal
            as="p"
            delay={150}
            className="text-[length:clamp(15px,1.5vw,19px)] font-medium text-black/70 mt-4 mx-auto max-w-[680px] [text-wrap:pretty]"
          >
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  )
}
