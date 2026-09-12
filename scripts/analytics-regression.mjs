import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../analytics.js', import.meta.url), 'utf8');

function runScenario({ configured = true, stored = null, blockedStorage = false, hash = '' } = {}) {
  const elements = new Map();
  const requests = [];
  const values = new Map(stored ? [['dealfaz:v1:analytics-consent', stored]] : []);
  let focused = null;
  for (const id of ['analyticsConsent', 'analyticsSettings', 'analyticsAccept', 'analyticsReject']) {
    const listeners = new Map();
    elements.set(id, { hidden: true, focus() { focused = id; }, addEventListener(type, fn) { listeners.set(type, fn); }, click() { listeners.get('click')?.(); } });
  }
  const localStorage = {
    getItem(key) { if (blockedStorage) throw new Error('blocked'); return values.get(key) ?? null; },
    setItem(key, value) { if (blockedStorage) throw new Error('blocked'); values.set(key, String(value)); }
  };
  const scenarioSource = source.replace(/const POSTHOG_PROJECT_TOKEN = '[^']*';/, `const POSTHOG_PROJECT_TOKEN = '${configured ? 'phc_abcdefghijklmnopqrstuvwxyz1234567890' : ''}';`);
  const window = {};
  vm.runInNewContext(scenarioSource, {
    document: { getElementById(id) { return elements.get(id) || null; } },
    localStorage,
    location: { hash, origin: 'https://example.test', pathname: '/', reload() {} },
    window,
    globalThis: { crypto: { randomUUID: () => 'one-page-id' } },
    fetch(url, options) { requests.push({ url, options }); return Promise.resolve({ ok: true }); },
    Date,
    Math
  });
  return { elements, requests, values, window, get focused() { return focused; } };
}

const inactive = runScenario({ configured: false });
assert.equal(inactive.requests.length, 0);
assert.equal(inactive.elements.get('analyticsSettings').hidden, true);

const undecided = runScenario();
assert.equal(undecided.requests.length, 0, 'No request may leave before consent');
assert.equal(undecided.elements.get('analyticsConsent').hidden, false);
assert.equal(undecided.focused, 'analyticsReject', 'The privacy-preserving choice receives focus');
undecided.elements.get('analyticsAccept').click();
assert.equal(undecided.requests.length, 1, 'Consent sends exactly one pageview');
assert.equal(undecided.values.get('dealfaz:v1:analytics-consent'), 'granted');
const request = undecided.requests[0];
assert.equal(request.url, 'https://eu.i.posthog.com/i/v0/e/');
assert.equal(request.options.credentials, 'omit');
assert.equal(request.options.referrerPolicy, 'no-referrer');
const body = JSON.parse(request.options.body);
assert.equal(body.event, '$pageview');
assert.equal(body.distinct_id, 'one-page-id');
assert.deepEqual(body.properties, { '$current_url': 'https://example.test/', '$pathname': '/', '$process_person_profile': false });
undecided.elements.get('analyticsAccept').click();
assert.equal(undecided.requests.length, 1, 'A pageview cannot be duplicated');

assert.equal(runScenario({ stored: 'denied' }).requests.length, 0, 'Stored rejection blocks analytics');
const shared = runScenario({ stored: 'granted', hash: '#deal=private' });
assert.equal(shared.requests.length, 0, 'Shared deal fragments are excluded');
shared.elements.get('analyticsAccept').click();
assert.equal(shared.requests.length, 0);

const granted = runScenario({ stored: 'granted' });
assert.equal(granted.requests.length, 1, 'Stored consent sends one pageview');
granted.elements.get('analyticsSettings').click();
granted.elements.get('analyticsReject').click();
assert.equal(granted.values.get('dealfaz:v1:analytics-consent'), 'denied');

const blocked = runScenario({ blockedStorage: true });
blocked.elements.get('analyticsAccept').click();
assert.equal(blocked.requests.length, 1, 'Session-only consent still works');

console.log('Analytics consent regression checks passed.');
