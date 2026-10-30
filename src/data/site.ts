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
  { href: '/projects/', label: 'Projects' },
  { href: '/posts/', label: 'Posts' },
  { href: '/about/', label: 'About' },
  { href: '/resume/', label: 'Resume' },
];

// Post types (the `type:` field in a post's frontmatter) and their filter labels.
export const POST_TYPES = {
  tutorial: 'Tutorials',
  general: 'General',
} as const;

// Project categories (the `categories:` field in a project's frontmatter) and their filter labels.
export const PROJECT_CATEGORIES = {
  robotics: 'Robotics',
  'cad-3d-printing': 'CAD & 3D Printing',
  software: 'Software',
  games: 'Games',
  research: 'Research',
} as const;
