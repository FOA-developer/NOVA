// All site content that isn't outreach or team data. Edit copy here, not in components.

// Brand colours rotate in this order for icon tiles, accents and highlights.
export const BRAND_COLORS = ['#9750D6', '#FF008E', '#FFCD1E']

// Social links, contact email, phone and address live in src/data/socials.js
// (single source of truth).

export const TAGLINE = 'Bridging the gender gap in STEM across Africa, one girl at a time'

export const HERO_SUBHEAD =
  'NOVA provides STEM education, mentorship, and opportunities to young girls across Africa, helping them build successful careers in STEM'

export const INTRODUCTION =
  'Nova is a women-led initiative focused on bridging the gap in STEM education for African secondary school girls. Through structured outreach programs, hands-on activities, storytelling, and practical exposure, Nova empowers girls to explore STEM subjects, build confidence, and make informed academic and career choices. The organization targets junior and senior secondary school students across diverse communities, prioritizing accessibility and inclusivity in all its programs.'

export const MISSION =
  'Nova equips African secondary school girls with early STEM education and exposure to enable informed academic and career choices.'

export const VISION =
  "To be Africa's leading women-led organization advancing equitable representation of women in STEM by delivering high-impact education and outreach programs."

export const CORE_VALUES = [
  { icon: 'ri-team-line', title: 'Inclusion', text: 'Ensure all eligible students have access to programs.' },
  { icon: 'ri-seedling-line', title: 'Empowerment', text: 'Prioritize the growth and confidence of girls in STEM.' },
  { icon: 'ri-shield-check-line', title: 'Trust & Confidentiality', text: 'Maintain the highest ethical standards in all interactions.' },
  { icon: 'ri-scales-3-line', title: 'Integrity', text: 'Transparency and accountability in all operations.' },
  { icon: 'ri-award-line', title: 'Excellence', text: 'Deliver high-quality, engaging, and impactful outreach programs.' },
  { icon: 'ri-lightbulb-flash-line', title: 'Innovation', text: 'Use creative methods to make STEM learning practical and inspiring.' },
]

// From the original repo js/data.js (aboutInfo).
export const FOCUS_AREAS = [
  { icon: 'ri-book-open-line', header: 'Education', info: 'Providing comprehensive technology training programs that cover coding, design, AI, and more' },
  { icon: 'ri-user-star-line', header: 'Mentorship', info: 'Connecting students with experienced tech professionals who guide and inspire their journey' },
  { icon: 'ri-rocket-line', header: 'Opportunities', info: 'Creating pathways to internships, jobs, and entrepreneurship in the technology sector' },
  { icon: 'ri-group-line', header: 'Community', info: 'Building a supportive network of young women in tech across Africa' },
]

export const APPROACH = [
  { title: 'Structured outreach sessions in schools', icon: 'ri-school-line' },
  { title: 'Hands-on STEM activities', icon: 'ri-flask-line' },
  { title: 'Storytelling and role model engagement', icon: 'ri-chat-quote-line' },
  { title: 'Monitoring, evaluation, and continuous improvement', icon: 'ri-line-chart-line' },
  { title: 'Building partnerships with schools, donors, and institutions', icon: 'ri-shake-hands-line' },
]

export const IMPACT_LABELS = ['Girls reached', 'Schools visited', 'Outreach sessions', 'Volunteers']

// Get Involved cards. Mentor removed per brief; Facilitator added.
export const JOIN_CARDS = [
  { id: 'volunteer', icon: 'ri-hand-heart-line', header: 'Volunteer', info: 'Join our team of dedicated volunteers helping to organize events, teach workshops, and support our programs across Africa to empower young girls', cta: 'Volunteer', to: '/join-us#partner' },
  { id: 'facilitator', icon: 'ri-user-heart-line', header: 'Become a Facilitator', info: 'Lead structured outreach sessions and hands-on STEM activities in schools, and share your story to help girls explore STEM with confidence.', cta: 'Apply', to: '/join-us#partner' },
  { id: 'partner-card', icon: 'ri-building-line', header: 'Partner with Us', info: 'Organizations and companies can partner with NOVA to sponsor programs, provide resources, or offer internship opportunities to our participants.', cta: 'Partner', to: '/join-us#partner' },
  { id: 'donate', icon: 'ri-gift-line', header: 'Donate', info: 'Your financial support helps us provide free technology education, equipment, and resources to girls who need it most, enabling them to explore technology.', cta: 'Donate', to: '/donate' },
]

export const DONATION_PRESETS = [5000, 10000, 25000, 50000]
export const CURRENCY = '₦'

// Flags that hide Home's placeholder sections until real content exists.
export const SHOW_SECTIONS = { impact: true, team: true, partners: true }
