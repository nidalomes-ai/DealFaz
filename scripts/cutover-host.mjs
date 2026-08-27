import fs from 'node:fs';
import path from 'node:path';

const nextRaw = process.argv[2] || '';
const oldOrigin = 'https://dealfaz.vercel.app';
const vsbgNotice = '<p><strong>Verbraucherstreitbeilegung:</strong> DEALFAZ ist nicht freiwillig zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bereit. Soweit im Einzelfall eine gesetzliche Verpflichtung zur Teilnahme besteht, bleibt diese unberührt.</p>';

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

const indexFile = path.resolve('index.html');
if (!fs.existsSync(indexFile)) throw new Error('index.html is missing');
let index = fs.readFileSync(indexFile, 'utf8');
if (!index.includes('Verbraucherstreitbeilegung:')) {
  const marker = '<div class="legalLinks">';
  if (!index.includes(marker)) throw new Error('Could not find legalLinks insertion point');
  index = index.replace(marker, `${vsbgNotice}${marker}`);
  fs.writeFileSync(indexFile, index);
  changed += 1;
  console.log('added conservative VSBG notice to index.html');
}

if (!changed) {
  console.error(`No cutover change was made from ${oldOrigin}`);
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

index = fs.readFileSync(indexFile, 'utf8');
if (!index.includes('Verbraucherstreitbeilegung:') || !index.includes('nicht freiwillig zur Teilnahme')) {
  throw new Error('VSBG production notice missing after cutover preparation');
}

console.log(`Production-origin cutover prepared: ${oldOrigin} -> ${nextOrigin}`);
console.log('Next: update privacy hosting text/Supabase redirect targets, run Quality, deploy, then run Live Health.');
