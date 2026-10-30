// Site-wide settings. Edit text here; no other file needs to change.
export const SITE = {
  title: 'First Layer',
  tagline: 'Notes on learning and building, one layer at a time.',
  description:
    'Tutorials, projects and notes on robotics, CAD and 3D printing, computer science, and gaming by Jun Seo.',
  author: 'Jun Seo',
  email: 'jun.seo2213@gmail.com',
  github: 'https://github.com/jun0032',
  linkedin: 'https://www.linkedin.com/in/junseo2/',
  // Free key from https://web3forms.com (sent to the email above).
  // Leave empty to hide the contact form and show only the email address.
  web3formsKey: '',
};

export const NAV = [
  { href: '/tutorials/', label: 'Tutorials' },
  { href: '/blog/', label: 'Blog' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/resume/', label: 'Resume' },
];

// Display names for tutorial categories (used in content.config.ts too).
export const CATEGORIES = {
  robotics: 'Robotics',
  'cad-3d-printing': 'CAD & 3D Printing',
  cs: 'Computer Science',
  gaming: 'Gaming',
  climbing: 'Climbing',
  misc: 'Misc',
} as const;
