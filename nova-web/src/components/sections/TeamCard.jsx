const SOCIAL_ICONS = {
  linkedin: ['ri-linkedin-fill', 'LinkedIn'],
  instagram: ['ri-instagram-fill', 'Instagram'],
  email: ['ri-mail-fill', 'Email'],
}

// Team member card (About /about#team). 4px top border in the rotating brand colour.
export default function TeamCard({ member, accent }) {
  const hasPhoto = !!member.photo
  const socials = Object.entries(member.socials || {})
    .filter(([k, v]) => v && SOCIAL_ICONS[k])
    .map(([k, v]) => ({
      icon: SOCIAL_ICONS[k][0],
      label: SOCIAL_ICONS[k][1],
      href: k === 'email' ? `mailto:${v}` : v,
    }))

  return (
    <div className="h-full rounded-[1.25rem] overflow-hidden bg-white shadow-card transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-2 hover:shadow-[0_24px_40px_-14px_rgba(151,80,214,0.5)]">
      {hasPhoto ? (
        <div
          role="img"
          aria-label={member.name}
          style={{ backgroundImage: `url("${member.photo}")` }}
          className="aspect-[4/5] bg-cover bg-center"
        />
      ) : (
        <div className="aspect-[4/5] placeholder-stripes flex items-center justify-center text-black/60 text-[13px] font-medium text-center p-4">
          [Team photo — portrait 4:5]
        </div>
      )}
      <div
        style={{ borderTopColor: accent }}
        className="p-5 pb-6 border-t-4"
      >
        <div className="text-lg font-semibold">{member.name}</div>
        <div className="text-sm font-medium text-nova-purple mt-0.5">{member.role}</div>
        {member.bio && <p className="text-sm leading-relaxed text-black/70 mt-2.5 m-0">{member.bio}</p>}
        {socials.length > 0 && (
          <div className="flex gap-2 mt-3.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-[10px] bg-nova-purple/10 text-nova-purple flex items-center justify-center text-lg transition-all duration-[250ms] hover:bg-nova-purple hover:text-white hover:-translate-y-0.5"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
