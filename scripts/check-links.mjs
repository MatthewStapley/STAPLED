// Post-build guard: every internal link in dist/ must point at a page that
// exists, and every #fragment at an id on that page. Redirect pages count
// as existing (Astro writes them as small forwarding pages). Also checks
// that mailto links are well formed. Run after `npm run build`.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");

if (!existsSync(dist)) {
  console.error("No dist/ folder. Run `npm run build` first.");
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );

const files = walk(dist);
const pages = new Map(); // "/path/" -> html
for (const f of files.filter((f) => f.endsWith(".html"))) {
  const rel = "/" + relative(dist, f).replace(/index\.html$/, "");
  pages.set(rel, readFileSync(f, "utf8"));
}

const idsOn = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const resolvePage = (path) => {
  if (pages.has(path)) return pages.get(path);
  if (pages.has(path + "/")) return pages.get(path + "/");
  return null;
};

const problems = [];
let checked = 0;

for (const [page, html] of pages) {
  for (const m of html.matchAll(/\shref="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (/^(https?:)?\/\//.test(href) || href.startsWith("tel:")) continue;

    if (href.startsWith("mailto:")) {
      checked++;
      const [addr, query = ""] = href.slice(7).split("?");
      if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(decodeURIComponent(addr))) {
        problems.push(`${page}: malformed mailto address`);
      }
      try {
        new URLSearchParams(query).forEach((v) => decodeURIComponent(v));
      } catch {
        problems.push(`${page}: mailto query can't be decoded`);
      }
      continue;
    }

    checked++;
    const [pathPart, frag] = href.split("#");
    let target = html;
    if (pathPart) {
      const abs = pathPart.startsWith("/") ? pathPart : join(dirname(page), pathPart);
      if (/\.[a-z0-9]+$/i.test(abs)) {
        if (!existsSync(join(dist, abs))) problems.push(`${page}: missing file ${href}`);
        continue;
      }
      target = resolvePage(abs);
      if (target == null) {
        problems.push(`${page}: broken link ${href}`);
        continue;
      }
    }
    if (frag && !idsOn(target).has(frag)) {
      problems.push(`${page}: no #${frag} on ${pathPart || page}`);
    }
  }
}

if (problems.length) {
  console.error(`Link problems (${problems.length}):\n`);
  for (const p of problems) console.error(`- ${p}`);
  process.exit(1);
}

console.log(`All ${checked} internal and email links resolve.`);
