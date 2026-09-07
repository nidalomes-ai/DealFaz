import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../analytics.js', import.meta.url), 'utf8');
const token = '0123456789abcdef0123456789abcdef';

function runScenario({ configured = true, stored = null, blockedStorage = false } = {}) {
  const elements = new Map();
  let focused = null;
  let reloads = 0;
  const scripts = [];
  const values = new Map(stored ? [['dealfaz:v1:analytics-consent', stored]] : []);

  for (const id of ['analyticsConsent', 'analyticsSettings', 'analyticsAccept', 'analyticsReject']) {
    const listeners = new Map();
    elements.set(id, {
      hidden: true,
      focus() { focused = id; },
      addEventListener(type, listener) { listeners.set(type, listener); },
      click() { listeners.get('click')?.(); }
    });
  }

  const document = {
    getElementById(id) { return elements.get(id) || null; },
    querySelector(selector) {
      return selector === 'script[data-dinavo-analytics]' ? scripts[0] || null : null;
    },
    createElement(tag) {
      assert.equal(tag, 'script');
      return { dataset: {}, defer: false, src: '' };
    },
    head: { appendChild(script) { scripts.push(script); } }
  };

  const localStorage = {
    getItem(key) {
      if (blockedStorage) throw new Error('blocked');
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      if (blockedStorage) throw new Error('blocked');
      values.set(key, String(value));
    }
  };

  const scenarioSource = source.replace(
    /const CLOUDFLARE_TOKEN = '[^']*';/,
    `const CLOUDFLARE_TOKEN = '${configured ? token : ''}';`
  );
  const window = {};
  vm.runInNewContext(scenarioSource, {
    document,
    localStorage,
    location: { reload() { reloads += 1; } },
    window
  });

  return {
    elements,
    scripts,
    values,
    window,
    get focused() { return focused; },
    get reloads() { return reloads; }
  };
}

const inactive = runScenario({ configured: false });
assert.equal(inactive.scripts.length, 0, 'A blank token must never load Cloudflare');
assert.equal(inactive.elements.get('analyticsConsent').hidden, true, 'A blank token must hide the consent panel');
assert.equal(inactive.elements.get('analyticsSettings').hidden, true, 'A blank token must hide analytics settings');

const undecided = runScenario();
assert.equal(undecided.scripts.length, 0, 'No beacon may load before a decision');
assert.equal(undecided.elements.get('analyticsConsent').hidden, false, 'An undecided visitor must see the consent panel');
assert.equal(undecided.elements.get('analyticsSettings').hidden, false, 'Configured analytics must expose settings');
assert.equal(undecided.focused, 'analyticsAccept', 'The opened consent panel must receive keyboard focus');
undecided.elements.get('analyticsAccept').click();
assert.equal(undecided.scripts.length, 1, 'Explicit consent must load exactly one beacon');
assert.equal(undecided.values.get('dealfaz:v1:analytics-consent'), 'granted', 'Consent must be stored locally');
assert.equal(undecided.scripts[0].src, 'https://static.cloudflareinsights.com/beacon.min.js');
assert.deepEqual(JSON.parse(undecided.scripts[0].dataset.cfBeacon), { token });
undecided.elements.get('analyticsAccept').click();
assert.equal(undecided.scripts.length, 1, 'Repeated consent must not duplicate the beacon');

const denied = runScenario({ stored: 'denied' });
assert.equal(denied.scripts.length, 0, 'A stored rejection must block the beacon');
assert.equal(denied.elements.get('analyticsConsent').hidden, true, 'A stored decision must avoid repeated prompting');

const granted = runScenario({ stored: 'granted' });
assert.equal(granted.scripts.length, 1, 'Stored consent may load one beacon');
granted.elements.get('analyticsSettings').click();
granted.elements.get('analyticsReject').click();
assert.equal(granted.values.get('dealfaz:v1:analytics-consent'), 'denied', 'Withdrawal must replace stored consent');
assert.equal(granted.reloads, 1, 'Withdrawal after loading must stop future measurement via reload');

const blockedStorage = runScenario({ blockedStorage: true });
blockedStorage.elements.get('analyticsAccept').click();
assert.equal(blockedStorage.scripts.length, 1, 'A current-page decision must work when persistent storage is blocked');

console.log('Analytics consent regression checks passed.');
