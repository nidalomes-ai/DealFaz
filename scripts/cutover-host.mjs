import fs from 'node:fs';
import path from 'node:path';

const nextRaw = process.argv[2] || '';
const oldOrigin = 'https://dealfaz.dealfaz-social.workers.dev';
const vsbgNotice = '<h2>Verbraucherstreitbeilegung:</h2><p>DINAVO ist nicht freiwillig zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bereit. Soweit im Einzelfall eine gesetzliche Verpflichtung zur Teilnahme besteht, bleibt diese unberührt.</p>';

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
  console.error('New production origin equals the current production origin');
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
  'impressum/index.html',
  'datenschutz/index.html',
  'nutzungsbedingungen/index.html',
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

const imprintFile = path.resolve('impressum/index.html');
if (!fs.existsSync(imprintFile)) throw new Error('impressum/index.html is missing');
let imprint = fs.readFileSync(imprintFile, 'utf8');
if (!imprint.includes('Verbraucherstreitbeilegung')) {
  const marker = '</article>';
  if (!imprint.includes(marker)) throw new Error('Could not find the imprint article insertion point');
  imprint = imprint.replace(marker, `${vsbgNotice}\n    ${marker}`);
  fs.writeFileSync(imprintFile, imprint);
  changed += 1;
  console.log('added conservative VSBG notice to impressum/index.html');
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

imprint = fs.readFileSync(imprintFile, 'utf8');
if (!imprint.includes('Verbraucherstreitbeilegung') || !imprint.includes('Eine im Einzelfall bestehende gesetzliche Pflicht bleibt unberührt')) {
  throw new Error('VSBG production notice missing after cutover preparation');
}

console.log(`Production-origin cutover prepared: ${oldOrigin} -> ${nextOrigin}`);
console.log('Next: update privacy hosting text/Supabase redirect targets, run Quality, deploy, then run Live Health.');
