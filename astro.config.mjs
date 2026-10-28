// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed via GitHub Pages at the custom domain stapled.co.uk (see
// public/CNAME) — no `base` path is needed since the site is served from
// the domain root, not from a github.io/<repo> subpath.
// https://astro.build/config
export default defineConfig({
  site: 'https://stapled.co.uk',
  // Retired routes point somewhere useful rather than 404ing. GitHub Pages
  // has no server redirects, so Astro writes a small page that forwards
  // the visitor (meta refresh plus a canonical link). The thank-you page
  // belonged to the FormSubmit form removed on 22 Oct 2026. Other routes
  // proposed for redirects are listed in the private launch notes.
  redirects: {
    '/thank-you': '/contact/',
    // Temporary until the case study can be restored with written
    // permission (the private launch notes).
    '/work/leroy-driving-instructor': '/possibilities/',
  },
  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time. Pages that
    // are marked noindex (thank-you, concept demos) are kept out of it.
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you') && !page.includes('/concepts/'),
    }),
  ],
});
