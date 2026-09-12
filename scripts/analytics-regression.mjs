import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../analytics.js', import.meta.url), 'utf8');

function run(hostname = 'dealfaz.dealfaz-social.workers.dev') {
  const requests = [];
  vm.runInNewContext(source, {
    location: { hostname },
    fetch(url, options) { requests.push({ url, options }); return Promise.resolve({ ok: true }); }
  });
  return { requests };
}

const production = run();
assert.equal(production.requests.length, 1, 'Production must send one count request without prompting');
assert.equal(production.requests[0].url, '/analytics-count');
assert.deepEqual(JSON.parse(JSON.stringify(production.requests[0].options)), {
  method: 'POST', body: null, keepalive: true, cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer'
});
assert.equal(run('fallback.example').requests.length, 0, 'Fallback hosts without the Worker endpoint must not count');
assert.doesNotMatch(source, /localStorage|sessionStorage|document\.|cookie|window\.|location\.(?:hash|search|href)/, 'Counter must not access visitor storage, DOM, query, fragment, or full URL');

console.log('Anonymous pageview counter regression checks passed.');
