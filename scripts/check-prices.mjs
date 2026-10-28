// Post-build guard: the marketing pages must not show package prices or
// payment-plan wording (pricing is on enquiry since Oct 2026). Scans the
// built HTML in dist/, so run it after `npm run build`.
//
// Legal pages (/terms/, /privacy/, /business-details/) get the £ and
// payment-plan checks only: since 28 Oct 2026 the terms state no fixed
// prices (each written quote does), but they legitimately describe things
// like "one copy a month" for backups.
// Skipped on purpose: /concepts/, fictional concept pages (e.g. a coffee
// menu's prices).
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");

if (!existsSync(dist)) {
  console.error("No dist/ folder. Run `npm run build` first.");
  process.exit(1);
}

const skip = ["concepts"];
const legal = ["terms", "privacy", "business-details"];
const patterns = [
  { name: "a £ amount", re: /(£|&pound;|&#163;)\s?\d/i, legal: true },
  { name: "payment plans", re: /payment[\s-]plans?/i, legal: true },
  { name: "a monthly price", re: /(per|a)\s+month\b|\/\s?month\b/i },
  { name: "instalments", re: /instal(l)?ments?/i },
];

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );

const problems = [];
for (const file of walk(dist)) {
  if (!file.endsWith(".html")) continue;
  const rel = relative(dist, file);
  const section = rel.split(sep)[0];
  if (skip.includes(section)) continue;
  const isLegal = legal.includes(section);
  const text = readFileSync(file, "utf8")
    .replace(/<script[\s\S]*?<\/script>/gi, (m) =>
      // Keep JSON-LD (structured data is public copy); drop other scripts.
      m.includes("application/ld+json") ? m : ""
    )
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  for (const { name, re, legal: onLegal } of patterns) {
    if (isLegal && !onLegal) continue;
    const m = text.match(re);
    if (m) {
      const at = text.indexOf(m[0]);
      const context = text.slice(Math.max(0, at - 60), at + 60).replace(/\s+/g, " ");
      problems.push(`${rel}: ${name}: …${context}…`);
    }
  }
}

if (problems.length) {
  console.error(`Pricing wording found on ${problems.length} marketing page check(s):\n`);
  for (const p of problems) console.error(`- ${p}`);
  process.exit(1);
}

console.log("No prices or payment-plan wording on the marketing pages, and no £ amounts or payment plans on the legal pages (concepts skipped).");
