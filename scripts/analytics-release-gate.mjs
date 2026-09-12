import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [analytics, privacy, home, headers] = await Promise.all([
  readFile(new URL('analytics.js', root), 'utf8'),
  readFile(new URL('datenschutz/index.html', root), 'utf8'),
  readFile(new URL('index.html', root), 'utf8'),
  readFile(new URL('_headers', root), 'utf8')
]);

assert.match(analytics, /const POSTHOG_PROJECT_TOKEN = 'phc_[A-Za-z0-9]{32,128}';/, 'DEPLOY BLOCKED: gültiger PostHog-Projektschlüssel fehlt.');
assert.match(privacy, /<h2 id="reichweitenmessung">4\. Optionale Reichweitenmessung mit PostHog EU<\/h2>/, 'DEPLOY BLOCKED: PostHog-Datenschutzabschnitt fehlt.');
assert.match(home, /<script src="\/analytics\.js" defer><\/script>/, 'DEPLOY BLOCKED: Consent-Controller fehlt.');
for (const id of ['analyticsConsent', 'analyticsSettings', 'analyticsAccept', 'analyticsReject']) assert.match(home, new RegExp(`id="${id}"`));
assert.match(analytics, /readConsent\(\) !== 'granted'/, 'DEPLOY BLOCKED: ausdrückliche Einwilligung fehlt.');
assert.match(analytics, /SENSITIVE_DEAL_NAVIGATION/, 'DEPLOY BLOCKED: geteilte Deals müssen ausgeschlossen sein.');
assert.match(analytics, /'\$process_person_profile': false/, 'DEPLOY BLOCKED: Personenprofile müssen deaktiviert sein.');
assert.match(analytics, /credentials: 'omit'/, 'DEPLOY BLOCKED: Zugangsdaten dürfen nicht übertragen werden.');
assert.match(headers, /connect-src[^;]*https:\/\/eu\.i\.posthog\.com/, 'DEPLOY BLOCKED: EU-Endpunkt fehlt in CSP.');
assert.doesNotMatch(home, /eu\.i\.posthog\.com|posthog\.capture/, 'DEPLOY BLOCKED: kein Analytics-Aufruf direkt im HTML.');

console.log('Analytics release gate: consent-first PostHog EU pageviews are publishable.');
