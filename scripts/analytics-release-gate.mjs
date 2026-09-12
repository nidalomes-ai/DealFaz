import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [client, worker, privacy, home, headers, wrangler, assetIgnore] = await Promise.all([
  readFile(new URL('analytics.js', root), 'utf8'),
  readFile(new URL('worker.js', root), 'utf8'),
  readFile(new URL('datenschutz/index.html', root), 'utf8'),
  readFile(new URL('index.html', root), 'utf8'),
  readFile(new URL('_headers', root), 'utf8'),
  readFile(new URL('wrangler.jsonc', root), 'utf8'),
  readFile(new URL('.assetsignore', root), 'utf8')
]);

assert.match(home, /<script src="\/analytics\.js" defer><\/script>/, 'DEPLOY BLOCKED: Zähl-Controller fehlt.');
assert.equal((home.match(/<script src="\/analytics\.js" defer><\/script>/g) || []).length, 1, 'DEPLOY BLOCKED: Zähl-Controller darf nur einmal geladen werden.');
assert.doesNotMatch(home, /analytics(?:Consent|Settings|Accept|Reject)|Besucherzählung erlauben/, 'DEPLOY BLOCKED: Einwilligungsabfrage muss entfernt sein.');
assert.match(client, /fetch\(COUNT_ENDPOINT/, 'DEPLOY BLOCKED: Same-Origin-Zählaufruf fehlt.');
assert.doesNotMatch(client, /posthog|localStorage|sessionStorage|document\.|cookieStore|window\.|location\.(?:hash|search|href)/i, 'DEPLOY BLOCKED: Client darf keine Besucherdaten lesen, speichern oder Drittanbieter aufrufen.');
assert.match(worker, /const POSTHOG_PROJECT_TOKEN = 'phc_[A-Za-z0-9]{32,128}';/);
assert.match(worker, /'\$process_person_profile': false/);
assert.match(worker, /'\$geoip_disable': true/);
assert.match(worker, /crypto\.randomUUID\(\)/);
assert.match(worker, /const PUBLIC_ORIGIN = 'https:\/\/dealfaz\.dealfaz-social\.workers\.dev'/);
assert.match(worker, /'\$current_url': `\$\{PUBLIC_ORIGIN\}\/`/);
assert.doesNotMatch(worker, /request\.headers(?!\.get\('Origin'\)|\.get\('Sec-Fetch-Site'\))/, 'DEPLOY BLOCKED: Besucher-Header dürfen nicht weitergeleitet werden.');
assert.match(privacy, /4\. Einfache Seitenaufrufzählung ohne Einwilligungsabfrage/);
assert.match(privacy, /Art\. 6 Abs\. 1 lit\. f DSGVO/);
assert.match(privacy, /Ereignisaufbewahrung des Projekts ist derzeit auf zwölf Monate eingestellt/);
assert.doesNotMatch(privacy, /Art\. 6 Abs\. 1 lit\. a DSGVO|Analytics-Auswahl|ausdrücklich zustimmst/);
assert.match(headers, /connect-src 'self';/, 'DEPLOY BLOCKED: Browser-CSP darf nur Same-Origin-Verbindungen zulassen.');
assert.doesNotMatch(headers, /posthog/i, 'DEPLOY BLOCKED: PostHog darf im Browser-CSP nicht freigegeben sein.');
assert.match(wrangler, /"main": "worker\.js"/);
assert.match(wrangler, /"binding": "ASSETS"/);
assert.match(wrangler, /"run_worker_first": \["\/analytics-count"\]/);
assert.match(assetIgnore, /^worker\.js$/m, 'Worker darf nicht als öffentliches Asset ausgeliefert werden.');

console.log('Analytics release gate: anonymous same-origin pageview counter is publishable.');
