import fs from 'node:fs';
import path from 'node:path';

const nextRaw = process.argv[2] || '';
const oldOrigin = 'https://dealfaz.vercel.app';

function normalizeOrigin(value) {
  const u = new URL(value);
  if (u.protocol !== 'https:') throw new Error('Production origin must use HTTPS');
  if (u.username || u.password || u.search || u.hash) throw new Error('Pass only an HTTPS origin, without credentials/query/hash');
  const pathname = u.pathname.replace(/\/+$/, '');
  if (pathname && pathname !== '') throw new Error('Pass an origin without a path');
  return u.origin;
}

if (!nextRaw) {
  console.error('Usage: node scripts/cutover-host.mjs https://new-production-host.example');
  process.exit(2);
}

const nextOrigin = normalizeOrigin(nextRaw);
if (nextOrigin === oldOrigin) {
  console.error('New production origin equals old Vercel origin');
  process.exit(2);
}

const candidates = [
  'index.html',
  'robots.txt',
  'sitemap.xml',
  'reselling-rechner/index.html',
  'maximaler-einkaufspreis/index.html',
  'roi-reselling/index.html',
  'sell-through/index.html',
  '.github/workflows/live-health.yml',
  '.github/workflows/indexnow-vercel.yml',
];

let changed = 0;
for (const rel of candidates) {
  const file = path.resolve(rel);
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = before.split(oldOrigin).join(nextOrigin);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed += 1;
    console.log(`updated ${rel}`);
  }
}

if (!changed) {
  console.error(`No references to ${oldOrigin} were replaced`);
  process.exit(1);
}

const remaining = [];
for (const rel of candidates) {
  if (!fs.existsSync(rel)) continue;
  const text = fs.readFileSync(rel, 'utf8');
  if (text.includes(oldOrigin)) remaining.push(rel);
}
if (remaining.length) {
  console.error(`Old origin still present in: ${remaining.join(', ')}`);
  process.exit(1);
}

console.log(`Production-origin cutover prepared: ${oldOrigin} -> ${nextOrigin}`);
console.log('Next: update privacy hosting text/Supabase redirect targets, run Quality, deploy, then run Live Health.');
