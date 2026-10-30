// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The site's public address. RSS, sitemap and canonical links all use it.
  // When junseo.dev is connected, change this one line to 'https://junseo.dev'.
  site: 'https://first-layer.pages.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
