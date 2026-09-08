import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [analytics, privacy, home, headers] = await Promise.all([
  readFile(new URL('analytics.js', root), 'utf8'),
  readFile(new URL('datenschutz/index.html', root), 'utf8'),
  readFile(new URL('index.html', root), 'utf8'),
  readFile(new URL('_headers', root), 'utf8')
]);

const token = analytics.match(/const CLOUDFLARE_TOKEN = '([^']*)';/)?.[1] || '';
const enabled = /^[A-Za-z0-9_-]{16,128}$/.test(token);
const privacySection = /Optionale Reichweitenmessung mit Cloudflare Web Analytics/;
const controller = /<script src="\/analytics\.js" defer><\/script>/;

if (enabled) {
  assert.match(privacy, /<h2>5\. Optionale Reichweitenmessung mit Cloudflare Web Analytics<\/h2>/, 'DEPLOY BLOCKED: Cloudflare Web Analytics muss als Ziffer 5 der Datenschutzhinweise veröffentlicht werden.');
  assert.match(home, controller, 'DEPLOY BLOCKED: Der Consent-Controller fehlt auf der Startseite.');
} else {
  assert.doesNotMatch(privacy, privacySection, 'DEPLOY BLOCKED: Ohne Site-Token darf Ziffer 5 keine optionale Reichweitenmessung behaupten.');
  assert.doesNotMatch(home, controller, 'DEPLOY BLOCKED: Ohne Site-Token darf der Analytics-Controller nicht veröffentlicht werden.');
  assert.doesNotMatch(home, /id="analytics(?:Consent|Settings|Accept|Reject)"/, 'DEPLOY BLOCKED: Ohne Site-Token dürfen keine wirkungslosen Analytics-Einstellungen erscheinen.');
}
assert.doesNotMatch(home, /static\.cloudflareinsights\.com|data-cf-beacon/, 'DEPLOY BLOCKED: Der Beacon darf nicht direkt und ohne Consent-Controller im HTML stehen.');
assert.match(analytics, /SENSITIVE_DEAL_NAVIGATION/, 'DEPLOY BLOCKED: Geteilte Deal-Fragmente müssen vom Beacon ausgeschlossen bleiben.');
assert.match(analytics, /readConsent\(\) !== 'granted'/, 'DEPLOY BLOCKED: Der Beacon muss eine ausdrückliche Einwilligung voraussetzen.');
assert.match(headers, /Cache-Control: public, max-age=0, must-revalidate, no-transform/, 'DEPLOY BLOCKED: Der Schutz vor automatischer Beacon-Injektion fehlt.');

console.log(enabled
  ? 'Analytics release gate: Datenschutz-Ziffer 5 und einwilligungsbasierter Beacon sind gemeinsam veröffentlichungsbereit.'
  : 'Analytics release gate: Beacon, Consent-Oberfläche und Analytics-Datenschutzabschnitt sind gemeinsam deaktiviert.');
