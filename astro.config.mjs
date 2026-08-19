// @ts-check
import { defineConfig } from 'astro/config';

// Deployed via GitHub Pages at the custom domain stapled.co.uk (see
// public/CNAME) — no `base` path is needed since the site is served from
// the domain root, not from a github.io/<repo> subpath.
// https://astro.build/config
export default defineConfig({
  site: 'https://stapled.co.uk',
});
