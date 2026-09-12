import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../worker.js', import.meta.url), 'utf8');
const outbound = [];
const originalFetch = globalThis.fetch;
const originalCrypto = globalThis.crypto;
globalThis.fetch = async (url, options) => { outbound.push({ url, options }); return new Response(null, { status: 200 }); };
Object.defineProperty(globalThis, 'crypto', { configurable: true, value: { randomUUID: () => 'server-one-time-id' } });
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const worker = (await import(moduleUrl)).default;
const waits = [];
const context = { waitUntil(promise) { waits.push(promise); } };
const headers = { Origin: 'https://dealfaz.dealfaz-social.workers.dev', 'Sec-Fetch-Site': 'same-origin' };

const response = await worker.fetch(new Request('https://dealfaz.dealfaz-social.workers.dev/analytics-count', { method: 'POST', headers }), {}, context);
assert.equal(response.status, 204);
assert.equal(response.headers.get('Cache-Control'), 'no-store');
assert.equal(outbound.length, 1);
assert.equal(outbound[0].url, 'https://eu.i.posthog.com/i/v0/e/');
const body = JSON.parse(outbound[0].options.body);
assert.equal(body.event, '$pageview');
assert.equal(body.distinct_id, 'server-one-time-id');
assert.deepEqual(body.properties, {
  '$current_url': 'https://dealfaz.dealfaz-social.workers.dev/',
  '$pathname': '/',
  '$process_person_profile': false,
  '$geoip_disable': true
});
assert.equal(JSON.stringify(body).includes('Sec-Fetch'), false);
assert.equal((await worker.fetch(new Request('https://dealfaz.dealfaz-social.workers.dev/analytics-count'), {}, context)).status, 405);
assert.equal((await worker.fetch(new Request('https://dealfaz.dealfaz-social.workers.dev/analytics-count', { method: 'POST', headers: { Origin: 'https://attacker.example' } }), {}, context)).status, 403);
await Promise.all(waits);
globalThis.fetch = originalFetch;
Object.defineProperty(globalThis, 'crypto', { configurable: true, value: originalCrypto });

console.log('Analytics Worker regression checks passed.');
