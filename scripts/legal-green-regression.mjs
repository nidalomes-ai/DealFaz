import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const [
  home,
  imprint,
  privacy,
  terms,
  legalGuardrails,
  aiGuard,
  socialGuard,
  campaign,
  hosting,
  trademark,
  monetizationLock,
  amazonGate,
  ebayGate
] = await Promise.all([
  read('index.html'),
  read('impressum/index.html'),
  read('datenschutz/index.html'),
  read('nutzungsbedingungen/index.html'),
  read('LEGAL-GUARDRAILS.md'),
  read('AI-ADVERTISING-GUARD.md'),
  read('SOCIAL-LIMIT-GUARD.md'),
  read('ORGANIC-BETA-CAMPAIGN.md'),
  read('HOSTING-FALLBACKS.md'),
  read('TRADEMARK-CHECK.md'),
  read('MONETIZATION_DISABLED'),
  read('AMAZON-ACTIVATION.md'),
  read('EBAY-ACTIVATION.md')
]);

assert.doesNotMatch(imprint, /DINAVO wird derzeit nicht gewerblich betrieben|keine Umsatzsteuer-Identifikationsnummer/i, 'The imprint must not make unverified absolute business-status claims');
assert.match(imprint, /kostenlose, nicht monetarisierte Beta/, 'The current operating scope must be transparent');
assert.match(imprint, /keine Waren verkauft, Zahlungen entgegengenommen oder Kaufverträge vermittelt/, 'The current service boundary must be explicit');
assert.match(imprint, /§ 36 VSBG/, 'The VSBG statement must be qualified to its legal scope');
assert.match(imprint, /Stand: 10\. September 2026/, 'The imprint revision date must be current');

assert.match(privacy, /Die aktuelle DINAVO-Adresse wird über Cloudflare bereitgestellt/, 'Privacy information must identify the primary host');
assert.match(privacy, /Optionale Reichweitenmessung mit PostHog EU/, 'Consent-first analytics must be disclosed');
assert.match(privacy, /keine Werbe-Cookies und verwendet keine Affiliate-Verfolgung/, 'Advertising and affiliate tracking must remain disabled');
assert.match(privacy, /Stand: 12\. September 2026/, 'The privacy revision date must be current');
assert.match(home, /<script src="\/analytics\.js"/, 'The consent controller must be loaded');

assert.match(terms, /keine Partnerschaft, Empfehlung, Zertifizierung oder sonstige geschäftliche Verbindung/, 'Third-party marks must be used descriptively');
assert.match(terms, /Bei leicht fahrlässiger Verletzung einer wesentlichen Pflicht/, 'The liability clause must preserve essential-obligation liability');
assert.match(terms, /Produkthaftungsgesetz/, 'Mandatory product liability must remain untouched');
assert.match(terms, /Stand: 10\. September 2026/, 'The terms revision date must be current');
assert.match(home, /wie sich ein Wiederverkauf nach deinen Angaben rechnerisch darstellt/, 'The hero must describe a calculation rather than promise a profitable decision');

assert.match(aiGuard, /KI-generierte Person · fiktiv/, 'Synthetic people need a visible fiction label');
assert.match(aiGuard, /Werbung für die eigene DINAVO-Beta/, 'Own-brand promotion needs an immediate disclosure');
assert.match(aiGuard, /Keine reale Person wird ohne dokumentierte Einwilligung/, 'Real-person likenesses require documented consent');
assert.match(socialGuard, /Ohne dokumentierte Medienrechte, Werbekennzeichnung oder ausdrückliche Freigabe bleibt der Inhalt Entwurf/, 'Unsafe social content must remain draft');
assert.ok((campaign.match(/Werbung für die eigene DINAVO-Beta/g) || []).length >= 8, 'Every prepared campaign caption plus the campaign rule must disclose own-brand advertising');

assert.match(hosting, /Aktiver Plan A – Cloudflare Workers/, 'Cloudflare must be the primary host');
assert.match(hosting, /Vercel Hobby/, 'The noncommercial Vercel fallback restriction must remain visible');
assert.match(trademark, /kostenlose öffentliche Beta \| Grün mit dokumentiertem Restrisiko/i, 'The brand may only be green in the documented free-beta scope');
assert.match(trademark, /keine rechtlich garantierte oder weltweit freie Marke/, 'No absolute trademark clearance may be claimed');

assert.match(monetizationLock, /monetization is intentionally disabled/, 'The monetization lock must remain active');
assert.match(amazonGate, /MONETIZATION_DISABLED/, 'Amazon must remain behind the monetization lock');
assert.match(ebayGate, /keine EPN-Partnerlinks aktivieren/, 'eBay EPN must remain inactive');
assert.doesNotMatch(home, /([?&]|&amp;)tag=|dealfaz-21|EPN.*(?:campid|customid)/i, 'No Amazon or eBay affiliate parameters may reach the public homepage');
assert.match(legalGuardrails, /Amazon- und eBay-Affiliate-Funktionen sowie der geschäftliche Start bleiben/, 'The three excluded gates must be explicit');

console.log('legal green regression: ok');
