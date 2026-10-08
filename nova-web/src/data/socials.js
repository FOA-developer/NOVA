// Single source of truth for Nova's social links and contact email.
// Edit these in one place — every component reads from here.

export const CONTACT_EMAIL = 'nova.initiative01@gmail.com'

// Phone: `tel` is the dial-safe form (no spaces); `display` is the readable form.
export const PHONE = {
  display: '+234 813 403 7550',
  tel: 'tel:+2348134037550',
}

export const ADDRESS = 'Benin City, Edo State, Nigeria'

// Order matters: this is the order icons/cards render in.
export const SOCIALS = [
  {
    key: 'email',
    name: 'Email',
    label: 'Email Nova',
    handle: CONTACT_EMAIL,
    icon: 'ri-mail-fill',
    href: `mailto:${CONTACT_EMAIL}`,
    external: false, // mailto — don't force a new tab
    tile: '#9750D6',
    tileText: 'text-white',
  },
  {
    key: 'instagram',
    name: 'Instagram',
    label: 'Nova on Instagram',
    handle: '@thenova.project',
    icon: 'ri-instagram-fill',
    href: 'https://www.instagram.com/thenova.project',
    external: true,
    tile: '#FF008E',
    tileText: 'text-white',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    label: 'Nova on LinkedIn',
    handle: 'thenova-initiative',
    icon: 'ri-linkedin-fill',
    href: 'https://www.linkedin.com/company/thenova-initiative/',
    external: true,
    tile: '#FFCD1E',
    tileText: 'text-black',
  },
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    label: 'Nova on WhatsApp',
    handle: 'Chat on WhatsApp',
    icon: 'ri-whatsapp-line',
    href: 'https://api.whatsapp.com/send?phone=2348134037550',
    external: true,
    tile: '#000000',
    tileText: 'text-white',
  },
]

// Spread onto an <a> to open external links safely in a new tab.
export const extAnchorProps = (external) =>
  external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
