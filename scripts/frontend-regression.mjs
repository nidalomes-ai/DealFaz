import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const legalPagePaths = [
  'impressum/index.html',
  'datenschutz/index.html',
  'nutzungsbedingungen/index.html'
];
const [html, app, storeSource, css, headers, vercelConfig, knowledgePages, legalPages] = await Promise.all([
  readFile(new URL('index.html', root), 'utf8'),
  readFile(new URL('app.js', root), 'utf8'),
  readFile(new URL('data-store.js', root), 'utf8'),
  readFile(new URL('style.css', root), 'utf8'),
  readFile(new URL('_headers', root), 'utf8'),
  readFile(new URL('vercel.json', root), 'utf8'),
  Promise.all([
    'reselling-rechner/index.html',
    'maximaler-einkaufspreis/index.html',
    'roi-reselling/index.html',
    'sell-through/index.html'
  ].map(path => readFile(new URL(path, root), 'utf8'))),
  Promise.all(legalPagePaths.map(path => readFile(new URL(path, root), 'utf8')))
]);

const idMatches = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(idMatches).size, idMatches.length, 'HTML IDs must be unique');

const appIds = [...app.matchAll(/\$\('([^']+)'\)/g)].map(match => match[1]);
const missingIds = [...new Set(appIds)].filter(id => !idMatches.includes(id));
assert.deepEqual(missingIds, [], `Every app.js element reference must exist: ${missingIds.join(', ')}`);
assert.doesNotMatch(html, /simple-ui\.js/, 'The old competing calculator must not run beside app.js');
assert.doesNotMatch(app, /onclick="/, 'Generated controls must comply with the script-src CSP');
assert.match(css, /\.moneyInput input,[^}]*\.moneyValue\{color:var\(--green\)!important/, 'Money styling must be green');
assert.match(css, /--bg:\s*#09111f/, 'The DINAVO dark background token must stay enabled');
assert.match(css, /--surface:\s*#101c30/, 'The DINAVO surface token must stay enabled');
assert.match(css, /--accent:\s*#4da3ff/, 'DINAVO must use the single blue accent token');
assert.match(html, /<div class="app" data-app>[\s\S]*class="panel easyCheck form"[^>]*data-form[\s\S]*id="resultCard"[^>]*data-result/, 'Calculator and result must share the responsive app layout');
assert.match(html, /<nav class="tabbar" data-tabbar[\s\S]*>Prüfen<[\s\S]*>Meine Deals<[\s\S]*>Mehr</, 'Mobile navigation must expose the three primary destinations');
assert.match(html, /<footer class="siteFooter" data-legal>[\s\S]*href="\/impressum\/"[\s\S]*href="\/datenschutz\/"[\s\S]*href="\/nutzungsbedingungen\/"/, 'The homepage must expose only the compact legal footer');
assert.doesNotMatch(html, /id="(?:imprint|privacy|terms|liability)"|class="legalPage"/, 'Full legal documents must not remain embedded on the homepage');
assert.match(html, /DINAVO ist eine Rechenhilfe und ersetzt keine Kauf-, Rechts-, Steuer- oder Finanzberatung/, 'The homepage disclaimer must stay visible');
for (const [index, page] of legalPages.entries()) {
  const route = `/${legalPagePaths[index].replace(/index\.html$/, '')}`;
  assert.match(page, new RegExp(`<link rel="canonical" href="https://dealfaz\\.dealfaz-social\\.workers\\.dev${route}"`), `${route} must have its production canonical`);
  assert.match(page, /<h1>[^<]+<\/h1>/, `${route} must have one clear page heading`);
  assert.match(page, /href="\/impressum\/"/, `${route} must link to the imprint`);
  assert.match(page, /href="\/datenschutz\/"/, `${route} must link to privacy information`);
  assert.match(page, /href="\/nutzungsbedingungen\/"/, `${route} must link to the terms`);
  assert.doesNotMatch(page, /<script\b/i, `${route} must stay static and tracking-free`);
}
assert.match(html, /id="profit"[^>]*data-amount/, 'Profit must be the stable-width primary amount');
assert.match(html, /data-secondary>[\s\S]*?<div id="personalEstimate" data-factor hidden role="status"><\/div>/, 'The personal correction factor must sit directly below profit and ROI');
assert.doesNotMatch(html, /id="factorPanel"[^>]*data-factor/, 'The history factor summary must not capture the primary factor selector');
assert.match(app, /function dinavoShowFactor\(estimate\)/, 'The factor result renderer must exist');
assert.match(app, /dinavoShowFactor\(\{ buy, sell, costs, days \}\)/, 'The calculator must update the factor result');
assert.match(app, /window\.dinavoFactors\.recalc\(\)/, 'Saving an actual result must recalculate factors');
assert.match(storeSource, /global\.dinavoFactors = Object\.freeze/, 'The factor API must be available globally');
assert.match(app, /window\.dinavoVerdict = function dinavoVerdict/, 'The responsive verdict helper must exist in the CSP-safe external script');
assert.match(app, /new IntersectionObserver\(entries =>/, 'The mobile tab bar must track the visible section');
assert.doesNotMatch(app, /\)\.observe;/, 'No unused IntersectionObserver may be created');
const heroMetrics = html.match(/<div class="heroNumbers"[^>]*>([\s\S]*?)<\/div>\s*<div id="personalEstimate"/)?.[1] || '';
assert.match(heroMetrics, /id="profit"/, 'Profit must be a primary metric');
assert.match(heroMetrics, /id="roi"/, 'ROI must be a primary metric');
assert.doesNotMatch(heroMetrics, /id="score"/, 'Score must stay inside the expanded details');
for (const page of [html, ...knowledgePages]) {
  const withoutStyledAmounts = page.replace(/<[^>]+class="[^"]*moneyValue[^"]*"[^>]*>\s*[-+]?\d[\d.,]*\s*€\s*<\/[^>]+>/g, '');
  assert.doesNotMatch(withoutStyledAmounts, /[-+]?\d[\d.,]*\s*€/, 'Every visible euro amount must use the green money class');
}

const structuredData = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
assert.ok(structuredData, 'Structured application data must exist');
const structuredDataHash = createHash('sha256').update(structuredData).digest('base64');
assert.match(headers, new RegExp(`script-src[^;]*'sha256-${structuredDataHash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`), 'Cloudflare CSP must allow only the exact structured-data block');
assert.match(vercelConfig, new RegExp(`script-src[^;]*'sha256-${structuredDataHash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`), 'Vercel fallback CSP must match the structured-data hash');
assert.match(css, /@media\(max-width:680px\)\{[^}]*main\{/, 'A narrow-screen layout must exist');
assert.match(css, /\.advancedGrid,\.heroNumbers,[^}]*\{grid-template-columns:1fr\}/, 'Calculator grids must collapse on mobile');
assert.match(css, /@media\(max-width:680px\)\{\.costSummary\{grid-template-columns:1fr 1fr\}/, 'Cost summary must remain compact on mobile');

const labelledIds = new Set([...html.matchAll(/<label\b[^>]*\bfor="([^"]+)"/g)].map(match => match[1]));
const visibleControls = [...html.matchAll(/<(input|select|textarea)\b([^>]*)>/g)]
  .filter(([, , attributes]) => !/\btype="hidden"/.test(attributes) && !/\bhidden\b/.test(attributes))
  .map(([, , attributes]) => attributes.match(/\bid="([^"]+)"/)?.[1])
  .filter(Boolean);
const unlabelledControls = visibleControls.filter(id => !labelledIds.has(id));
assert.deepEqual(unlabelledControls, [], `Every visible input must have a label: ${unlabelledControls.join(', ')}`);

for (const requiredId of [
  'platform', 'feePercent', 'feeFixed', 'feeAmount', 'shipping', 'costsExtra', 'costAmount',
  'actualMinutes', 'defaultPlatform', 'currency', 'profitYtd', 'profitYtdYear',
  'profitMetricLink', 'roiMetricLink', 'maxBuyMetricLink', 'sellRateMetricLink'
]) {
  assert.ok(idMatches.includes(requiredId), `Required extended data field #${requiredId} must exist`);
}

const localValues = new Map();
globalThis.localStorage = {
  getItem(key) {
    return localValues.has(key) ? localValues.get(key) : null;
  },
  setItem(key, value) {
    localValues.set(key, String(value));
  },
  removeItem(key) {
    localValues.delete(key);
  }
};

await import('../data-store.js');
const store = globalThis.DEALFAZ_STORE;
for (const field of store.FIELDS) {
  const input = [...html.matchAll(/<input\b[^>]*>/g)].map(match => match[0]).find(tag => tag.includes(`id="${field.id}"`));
  assert.ok(input, `Configured field #${field.id} must exist`);
  assert.match(input, new RegExp(`inputmode="${field.inputmode}"`), `#${field.id} must request the configured mobile keyboard`);
}

class FakeElement {
  constructor(id, tagName, attributes = '') {
    this.id = id;
    this.tagName = tagName.toUpperCase();
    this.value = attributes.match(/\bvalue="([^"]*)"/)?.[1] || '';
    this.className = attributes.match(/\bclass="([^"]*)"/)?.[1] || '';
    this.dataset = {};
    const legal = attributes.match(/\bdata-legal="([^"]*)"/)?.[1];
    if (legal) this.dataset.legal = legal;
    this.hidden = false;
    this.disabled = false;
    this.innerHTML = '';
    this.textContent = '';
    this.firstChild = { nodeValue: '' };
    this.listeners = new Map();
    this.classes = new Set(this.className.split(/\s+/).filter(Boolean));
    this.classList = {
      toggle: (name, force) => {
        if (force) this.classes.add(name);
        else this.classes.delete(name);
        this.className = [...this.classes].join(' ');
      }
    };
  }

  addEventListener(type, listener) {
    const listeners = this.listeners.get(type) || [];
    listeners.push(listener);
    this.listeners.set(type, listeners);
  }

  async dispatch(type) {
    for (const listener of this.listeners.get(type) || []) await listener({ target: this });
  }

  click() {}
}

const elements = new Map();
for (const match of html.matchAll(/<([a-z][\w-]*)([^>]*\bid="([^"]+)"[^>]*)>/gi)) {
  elements.set(match[3], new FakeElement(match[3], match[1], match[2]));
}
elements.get('actualSold').value = 'true';
elements.get('currency').value = 'EUR';

const checkInputIds = [
  'product', 'buy', 'sell', 'cost', 'feePercent', 'feeFixed', 'shipping', 'costsExtra',
  'sold', 'active', 'comps', 'certainty', 'risk', 'target', 'days'
];
const battleInputIds = ['bName', 'bBuy', 'bSell', 'bCost', 'bRisk', 'bDays'];

globalThis.document = {
  getElementById(id) {
    return elements.get(id) || null;
  },
  querySelectorAll(selector) {
    if (selector === '#check input') return checkInputIds.map(id => elements.get(id));
    if (selector === '#battle input') return battleInputIds.map(id => elements.get(id));
    if (selector === '.legalPage') return [...elements.values()].filter(element => element.classes.has('legalPage'));
    if (selector === '[data-legal]') return [...elements.values()].filter(element => element.dataset.legal);
    return [];
  },
  createElement(tagName) {
    return new FakeElement('', tagName);
  }
};

globalThis.location = {
  origin: 'http://127.0.0.1:4173',
  pathname: '/',
  search: '',
  hash: ''
};
Object.defineProperty(globalThis, 'navigator', {
  configurable: true,
  value: { clipboard: { async writeText() {} } }
});
globalThis.confirm = () => true;
globalThis.alert = () => {};
globalThis.window = {
  DEALFAZ_STORE: store,
  dinavoFactors: globalThis.dinavoFactors,
  addEventListener() {}
};

await import(`../app.js?frontend-regression=${Date.now()}`);

assert.equal(elements.get('product').value, 'Beispiel: Nike Air Max 90, Gr. 43');
assert.equal(elements.get('platform').value, 'ebay_gewerblich');
assert.equal(Number(elements.get('feePercent').value), 11);
assert.equal(Number(elements.get('cost').value), 18.24);
assert.equal(elements.get('profit').textContent, '26,76 €');
assert.equal(elements.get('roi').textContent, '59.5 %');
assert.match(elements.get('resultCard').className, /\bis-(good|warn|bad)\b/, 'The result card must expose a visible state class');
assert.equal(elements.get('resultCard').dataset.state, 'good');
assert.equal(elements.get('profitMetricLink').href, '/reselling-rechner/');
assert.equal(elements.get('roiMetricLink').href, '/roi-reselling/');

elements.get('save').onclick();
assert.equal(store.getDeals().length, 0, 'The untouched demo must never be stored as a real deal');

await elements.get('product').dispatch('beforeinput');
assert.equal(elements.get('product').value, '');
assert.equal(elements.get('buy').value, '');
assert.equal(elements.get('sell').value, '');
assert.equal(elements.get('platform').value, 'ebay_privat');
assert.equal(Number(elements.get('cost').value), 0);

elements.get('product').value = 'Testschuh';
elements.get('buy').value = '50';
elements.get('sell').value = '100';
elements.get('platform').value = 'ebay_gewerblich';
await elements.get('platform').dispatch('change');
assert.equal(Number(elements.get('feePercent').value), 11);
assert.equal(Number(elements.get('feeFixed').value), 0.35);
assert.equal(Number(elements.get('shipping').value), 4.99);

elements.get('costsExtra').value = '3';
await elements.get('costsExtra').dispatch('input');
assert.equal(Number(elements.get('cost').value), 19.34);
assert.equal(elements.get('feeAmount').textContent, '11,35 €');
assert.equal(elements.get('costAmount').textContent, '19,34 €');
assert.equal(elements.get('profit').textContent, '30,66 €');

elements.get('save').onclick();
let [saved] = store.getOpenDeals();
assert.equal(saved.estimate.platformId, 'ebay_gewerblich');
assert.equal(saved.estimate.feeAmount, 11.35);
assert.equal(saved.estimate.costs, 19.34);

await globalThis.window.chooseForecast(0);
elements.get('actualSell').value = '78';
elements.get('actualCost').value = '21.10';
elements.get('actualDays').value = '34';
elements.get('actualMinutes').value = '45';
elements.get('saveOutcome').onclick();

const [closed] = store.getClosedDeals();
assert.equal(closed.actual.minutes, 45);
assert.equal(closed.actual.sell, 78);
assert.equal(closed.actual.costs, 21.10);
assert.equal(store.getSettings().profitYtd, 6.9);
assert.match(elements.get('outcomeList').innerHTML, /Stundenlohn/);
assert.match(elements.get('outcomeList').innerHTML, /moneyValue/);

const helperVerdict = globalThis.window.dinavoVerdict(10, 0.1);
assert.deepEqual(helperVerdict, { state: 'warn', text: 'Knapp' });
assert.equal(elements.get('resultCard').dataset.state, 'warn');
assert.equal(elements.get('verdict').textContent, 'Knapp');

assert.doesNotMatch(legalPages[0], /__DINAVO_PROJECT_EMAIL__|\[Projekt-Adresse eintragen\]/i, 'The imprint must contain the confirmed project email, never a placeholder');
assert.match(legalPages[0], /dealfaz\.social@gmail\.com/i, 'The imprint must contain the confirmed DealFaz project email');
assert.match(legalPages[0], /href="mailto:[^"\s]+@[^"\s]+\.[^"\s]+"/, 'The imprint must contain a clickable project email');

console.log('frontend regression: ok');
