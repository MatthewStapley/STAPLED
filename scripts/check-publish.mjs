// Pre-deploy gate: fails while a published page still has unresolved
// content. It lists every <ToConfirm> in routed code (those notes are
// hidden in production, so the page would go live with a gap) and checks
// the business address has been set. Files under src/drafts/ aren't
// published, so their notes don't block anything. The address is reported
// once, however many pages show it. Run with `npm run check:publish`; it
// isn't part of `npm run build`, so local builds keep working.
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const problems = [];

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]
  );

for (const file of walk(join(root, "src"))) {
  if (!file.endsWith(".astro") || file.endsWith("ToConfirm.astro")) continue;
  if (relative(root, file).startsWith(join("src", "drafts"))) continue;
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/<ToConfirm\s+note=(?:"([^"]*)"|\{(\w+)\})/g)) {
    // Address notes are covered by the single config check below.
    if (match[2] === "addressNote") continue;
    const line = text.slice(0, match.index).split("\n").length;
    const note = match[1] ?? `(${match[2]})`;
    problems.push(`${relative(root, file)}:${line}  ${note.slice(0, 140)}`);
  }
}

const config = readFileSync(join(root, "src/data/config.ts"), "utf8");
if (/address:\s*""/.test(config)) {
  problems.push("Business address: src/data/config.ts business.address is empty. A verified geographic business address is required on the Business details page before publishing. See the private launch notes.");
}

if (problems.length) {
  console.error(`Not ready to publish: ${problems.length} unresolved item(s).\n`);
  for (const p of problems) console.error(`- ${p}`);
  process.exit(1);
}

console.log("No unresolved placeholders found. This is an automated completeness check, not legal approval; see the private launch notes for open legal questions.");
