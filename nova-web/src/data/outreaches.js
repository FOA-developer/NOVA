// Outreach data. To add an outreach, copy one object and fill it in — no component changes needed.
// Newest first: the first item is featured on the Home page.
// Images: set src to an image path (e.g. '/img/outreach-01/cover.jpg'); leave null to show a placeholder.
export const outreaches = [
  {
    id: 'outreach-01',
    title: '[Outreach title]',
    date: '[Date]',
    location: '[Location]',
    school: '[School / community name]',
    description:
      '[Description — 2–3 sentences about the outreach: who attended, what was covered and why it mattered.]',
    highlights: ['[Key highlight 1]', '[Key highlight 2]', '[Key highlight 3]', '[Key highlight 4]'],
    cover: { src: null, alt: '[Cover photo — 16:9]' },
    gallery: [
      { src: null, alt: '[Gallery photo 1 — 4:3]' },
      { src: null, alt: '[Gallery photo 2 — 4:3]' },
      { src: null, alt: '[Gallery photo 3 — 4:3]' },
      { src: null, alt: '[Gallery photo 4 — 4:3]' },
      { src: null, alt: '[Gallery photo 5 — 4:3]' },
      { src: null, alt: '[Gallery photo 6 — 4:3]' },
    ],
  },
]
