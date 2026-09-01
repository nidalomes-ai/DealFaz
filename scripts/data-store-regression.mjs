import assert from 'node:assert/strict';

const values = new Map();
globalThis.localStorage = {
  getItem(key) {
    return values.has(key) ? values.get(key) : null;
  },
  setItem(key, value) {
    values.set(key, String(value));
  },
  removeItem(key) {
    values.delete(key);
  }
};

await import('../data-store.js');

const store = globalThis.DEALFAZ_STORE;
const year = new Date().getUTCFullYear();
assert.ok(store, 'Store must be exposed');
assert.deepEqual(store.KEYS, {
  deals: 'dealfaz:v1:deals',
  factors: 'dealfaz:v1:factors',
  rules: 'dealfaz:v1:rules',
  settings: 'dealfaz:v1:settings',
  license: 'dealfaz:v1:license'
});
assert.equal(Object.isFrozen(store.CONFIG), true, 'Central configuration must be immutable');
assert.deepEqual(store.PRIMARY_METRICS, ['profit', 'roi']);
assert.deepEqual(store.FIELDS.map(({ id, inputmode, primary }) => ({ id, inputmode, primary })), [
  { id: 'buy', inputmode: 'decimal', primary: true },
  { id: 'sell', inputmode: 'decimal', primary: true },
  { id: 'costsExtra', inputmode: 'decimal', primary: false },
  { id: 'shipping', inputmode: 'decimal', primary: false },
  { id: 'days', inputmode: 'numeric', primary: false },
  { id: 'risk', inputmode: 'numeric', primary: false }
]);
assert.deepEqual(store.DEMO_DEAL, {
  isDemo: true,
  name: 'Beispiel: Nike Air Max 90, Gr. 43',
  buy: 45,
  sell: 90,
  platformId: 'ebay_gewerblich',
  costsExtra: 3,
  days: 21,
  risk: 2
});
assert.deepEqual(store.CALC, {
  minSampleForFactors: 5,
  priceFactorMin: 0.5,
  priceFactorMax: 1.5,
  useMedian: true,
  freeDealLimit: 20
});
assert.equal(store.METRIC_LINKS.roi.url, '/roi-reselling/');
assert.equal(Object.isFrozen(store.PLATFORMS), true, 'Platform profile list must be immutable');
assert.equal(store.PLATFORMS.length, 7);
assert.deepEqual(
  store.PLATFORMS.map(({ id, feePercent, feeFixed, shippingDefault }) => ({ id, feePercent, feeFixed, shippingDefault })),
  [
    { id: 'kleinanzeigen_privat', feePercent: 0, feeFixed: 0, shippingDefault: 0 },
    { id: 'ebay_privat', feePercent: 0, feeFixed: 0, shippingDefault: 0 },
    { id: 'ebay_gewerblich', feePercent: 0.11, feeFixed: 0.35, shippingDefault: 4.99 },
    { id: 'vinted', feePercent: 0, feeFixed: 0, shippingDefault: 0 },
    { id: 'etsy', feePercent: 0.065, feeFixed: 0.18, shippingDefault: 4.99 },
    { id: 'amazon', feePercent: 0.15, feeFixed: 0, shippingDefault: 3.50 },
    { id: 'custom', feePercent: 0, feeFixed: 0, shippingDefault: 0 }
  ]
);
assert.deepEqual(store.getRules(), {
  minProfit: 20,
  minRoi: 0.30,
  maxRisk: 3,
  minDataQuality: 2
});
assert.deepEqual(store.getSettings(), {
  schemaVersion: 1,
  currency: 'EUR',
  defaultPlatformId: 'ebay_privat',
  profitYtd: 0,
  profitYtdYear: year
});

const actualSells = [80, 90, 100, 110, 400];
const actualDays = [10, 20, 30, 40, 50];
const actualCosts = [21.34, 22.34, 23.34, 24.34, 25.34];
const actualMinutes = [30, 45, 60, 75, 90];

for (let index = 0; index < 5; index += 1) {
  const deal = store.addEstimate({
    product: `Deal ${index + 1}`,
    buy: 50,
    sell: 100,
    platformId: 'ebay_gewerblich',
    feePercent: 0.11,
    feeFixed: 0.35,
    shipping: 4.99,
    costsExtra: 3,
    days: 20,
    risk: 2,
    profit: 30.66,
    roi: 61.32,
    score: 72
  });
  assert.match(deal.id, /^d_\d+_[a-f0-9]{4}$/);
  assert.equal(deal.status, 'open');
  assert.equal(deal.actual, null);
  assert.equal(deal.estimate.roi, 0.6132);
  assert.equal(deal.estimate.feeAmount, 11.35);
  assert.equal(deal.estimate.costs, 19.34);
  assert.deepEqual(Object.keys(deal.estimate), [
    'buy', 'sell', 'platformId', 'feePercent', 'feeFixed', 'feeAmount', 'shipping',
    'costsExtra', 'costs', 'days', 'risk', 'profit', 'roi', 'score'
  ]);
  const estimateBeforeClose = JSON.stringify(deal.estimate);
  const closedAt = new Date(Date.UTC(year, 9, index + 1)).toISOString();
  const closed = store.closeDeal(deal.id, {
    closedAt,
    sold: true,
    sell: actualSells[index],
    costs: actualCosts[index],
    days: actualDays[index],
    minutes: actualMinutes[index],
    note: ''
  });
  assert.equal(JSON.stringify(closed.estimate), estimateBeforeClose, 'Estimate snapshot must stay immutable');
  assert.equal(closed.actual.minutes, actualMinutes[index]);
  assert.equal(closed.updatedAt, closedAt);
}

const unsold = store.addEstimate({
  product: 'Nicht verkauft',
  buy: 50,
  sell: 100,
  platformId: 'custom',
  feePercent: 0,
  feeFixed: 0,
  shipping: 0,
  costsExtra: 5,
  days: 20,
  risk: 3,
  profit: 45,
  roi: 90,
  score: 60
});
store.closeDeal(unsold.id, {
  closedAt: new Date(Date.UTC(year, 10, 1)).toISOString(),
  sold: false,
  sell: 999,
  costs: 12,
  days: 60,
  minutes: 20,
  note: 'Kein Käufer'
});

const factors = store.getFactors();
assert.equal(factors.sampleSize, 5);
assert.equal(factors.priceFactor, 1);
assert.equal(factors.daysFactor, 1.5);
assert.equal(factors.costsDelta, 4);
assert.equal(factors.unsoldRate, 0.167);
assert.equal(factors.hourlyRate, 82.66);

const settingsAfterResults = store.getSettings();
assert.equal(settingsAfterResults.profitYtd, 413.3, 'YTD profit must include sold deals in the current year');
const changedSettings = store.setSettings({ currency: 'USD', defaultPlatformId: 'amazon', profitYtd: 99999 });
assert.equal(changedSettings.currency, 'EUR', 'Schema v1 must keep the currently supported currency');
assert.equal(changedSettings.defaultPlatformId, 'amazon');
assert.equal(changedSettings.profitYtd, 413.3, 'Derived YTD profit must not accept a stale manual value');

const capped = store.calculateFactors(
  store.getClosedDeals().filter(deal => deal.actual.sold).map(deal => ({
    ...deal,
    actual: { ...deal.actual, sell: deal.estimate.sell * 3 }
  }))
);
assert.equal(capped.priceFactor, 1.5, 'Price factor must be capped at 1.5');

const unsoldStored = store.getClosedDeals().find(deal => deal.id === unsold.id);
assert.equal(unsoldStored.actual.sell, 0, 'Unsold deals must not retain a sale price');
assert.equal(unsoldStored.actual.sold, false);

store.importDeals([{
  id: 'd_1756713600_a7f3',
  createdAt: '2026-09-01T10:22:00.000Z',
  name: 'Hoher ROI',
  status: 'open',
  estimate: { buy: 10, sell: 100, costs: 10, days: 21, risk: 2, profit: 80, roi: 8, score: 90 },
  actual: null
}]);
const oldCanonical = store.getDeals().find(deal => deal.id === 'd_1756713600_a7f3');
assert.equal(oldCanonical.estimate.roi, 8, 'Canonical ROI ratios must not be divided a second time');
assert.equal(oldCanonical.estimate.platformId, 'custom');
assert.equal(oldCanonical.estimate.costsExtra, 10, 'Legacy costs must be preserved as extra costs');
assert.equal(oldCanonical.estimate.costs, 10);

const backup = store.exportData();
assert.deepEqual(Object.keys(backup), ['schemaVersion', 'exportedAt', 'deals', 'rules', 'settings']);
assert.ok(Array.isArray(backup.deals));

values.set('dealfaz_watch_v2', JSON.stringify([{ product: 'Noch aelter' }]));
values.set(store.KEYS.license, JSON.stringify({ status: 'inactive-test' }));
store.clearAllData();
assert.deepEqual(store.getDeals(), [], 'All deals must be deleted');
assert.deepEqual(store.getRules(), {
  minProfit: 20,
  minRoi: 0.30,
  maxRisk: 3,
  minDataQuality: 2
}, 'Rules must return to defaults');
assert.equal(store.getFactors().sampleSize, 0, 'Personal factors must be deleted');
assert.equal(store.getFactors().hourlyRate, 0, 'Hourly rate must be deleted');
assert.deepEqual(store.getSettings(), {
  schemaVersion: 1,
  currency: 'EUR',
  defaultPlatformId: 'ebay_privat',
  profitYtd: 0,
  profitYtdYear: year
}, 'Settings must return to defaults');
assert.equal(values.has('dealfaz_watch_v2'), false, 'Original legacy storage must be deleted on explicit user request');
assert.equal(values.has(store.KEYS.license), false, 'Reserved license data must be deleted on explicit user request');

console.log('data-store regression: ok');
