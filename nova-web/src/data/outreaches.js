// Outreach data. To add an outreach, copy one object and fill it in — no component changes needed.
// Newest first: the first item is featured on the Home page.
// Images: set src to an image path (e.g. '/img/outreach-images/outreach-01-cover.webp');
// leave null to show a placeholder.
export const outreaches = [
  {
    id: 'outreach-01',
    title: 'STEM Outreach at God’s Royal Supreme Academy',
    date: '[Date]',
    location: '[Location]',
    school: "God's Royal Supreme Academy",
    description:
      'Before the outreach, many of the girls knew little about what they could do in STEM. Over the course of the session, we explored what Science, Technology, Engineering and Mathematics can open up for them. They left filled with new possibilities for their future.',
    highlights: [
      'Walking in, many of these girls did not know what STEM was about, and so we broke it down bit by bit — Science, Technology, Engineering, Mathematics and showed them a world full of possibilities.',
    ],
    cover: {
      src: '/img/outreach-images/outreach-01-cover.webp',
      alt: "Nova volunteers with students at God's Royal Supreme Academy",
    },
    gallery: [
      { src: '/img/outreach-images/outreach-01-01.webp', alt: "Nova volunteer leading a STEM session at God's Royal Supreme Academy" },
      { src: '/img/outreach-images/outreach-01-02.webp', alt: "Students taking part in a Nova STEM activity at God's Royal Supreme Academy" },
      { src: '/img/outreach-images/outreach-01-03.jpg', alt: "Nova outreach session with girls at God's Royal Supreme Academy" },
      { src: '/img/outreach-images/outreach-01-04.webp', alt: "A student engaging with Nova volunteers at God's Royal Supreme Academy" },
    ],
  },
]
