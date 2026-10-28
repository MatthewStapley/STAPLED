// Post-build guard: the business address may appear only on
// /business-details/, never on the homepage, in the footer, in metadata or
// in structured data. Reads the address lines from src/data/config.ts and
// scans every built page. While no address is set, it passes and says so.
// Run after `npm run build`.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");

if (!existsSync(dist)) {
  console.error("No dist/ folder. Run `npm run build` first.");
  process.exit(1);
}

const config = readFileSync(join(root, "src/data/config.ts"), "utf8");
const linesMatch = config.match(/addressLines:\s*\[([^\]]*)\]/);
const lines = linesMatch
  ? [...linesMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1].trim())
  : [];
// Country and very short lines (e.g. a county) are too generic to locate
// the address on their own; the street and postcode lines are what matter.
const distinctive = lines.filter((l) => l.length >= 5 && !/^united kingdom$/i.test(l));

if (distinctive.length === 0) {
  console.log("No business address set, so there's nothing to check yet.");
  process.exit(0);
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );

const norm = (s) => s.replace(/&amp;/g, "&").replace(/\s+/g, " ").toLowerCase();
const problems = [];
let shownOnDetails = false;

for (const file of walk(dist).filter((f) => f.endsWith(".html"))) {
  const rel = relative(dist, file);
  const text = norm(readFileSync(file, "utf8"));
  const found = distinctive.filter((l) => text.includes(norm(l)));
  if (rel.split(sep)[0] === "business-details") {
    shownOnDetails = found.length === distinctive.length;
  } else if (found.length) {
    problems.push(`${rel}: shows part of the business address`);
  }
}

if (!shownOnDetails) problems.push("business-details/index.html: the full business address isn't shown");

if (problems.length) {
  console.error(`Address placement problems (${problems.length}):\n`);
  for (const p of problems) console.error(`- ${p}`);
  process.exit(1);
}

console.log("Business address appears only on the Business details page.");
