// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed via GitHub Pages at the custom domain stapled.co.uk (see
// public/CNAME) — no `base` path is needed since the site is served from
// the domain root, not from a github.io/<repo> subpath.
// https://astro.build/config
export default defineConfig({
  site: 'https://stapled.co.uk',
  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time. Pages that
    // are marked noindex (thank-you, concept demos) are kept out of it.
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you') && !page.includes('/concepts/'),
    }),
  ],
});
