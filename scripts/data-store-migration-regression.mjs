import assert from 'node:assert/strict';

const values = new Map([
  ['pevru_watch_v2', JSON.stringify([])],
  ['pevru_forecasts_v1', JSON.stringify([])],
  ['pevru_outcomes_v1', JSON.stringify([])],
  ['pevru_rules_v2', JSON.stringify({})],
  ['dealfaz_watch_v2', JSON.stringify([{
    product: 'Watchlist-Deal', buy: 20, sell: 50, cost: 5, days: 14, risk: 2, profit: 25, roi: 125, score: 80
  }])],
  ['dealfaz_forecasts_v1', JSON.stringify([{
    id: 'f_legacy', product: 'Alter Abschluss', buy: 40, sell: 100, cost: 10, days: 20, risk: 3,
    profit: 50, roi: 125, score: 70, savedAt: 1_756_713_600_000
  }])],
  ['dealfaz_outcomes_v1', JSON.stringify([{
    id: 'o_legacy', forecastId: 'f_legacy', product: 'Alter Abschluss', buy: 40,
    expectedSell: 100, expectedCost: 10, expectedProfit: 50, expectedRoi: 125, expectedDays: 20,
    actualSell: 80, actualCost: 12, actualDays: 30, savedAt: 1_759_693_200_000
  }])],
  ['dealfaz_rules_v2', JSON.stringify({ minProfit: 25, minRoi: 25, maxRisk: 4, minQuality: 50 })]
]);

globalThis.localStorage = {
  getItem(key) {
    return values.has(key) ? values.get(key) : null;
  },
  setItem(key, value) {
    values.set(key, String(value));
  }
};

await import('../data-store.js');

const store = globalThis.DEALFAZ_STORE;
const deals = store.getDeals();
assert.equal(deals.length, 2, 'Closed forecast and watchlist deal should migrate once each');
assert.equal(deals.filter(deal => deal.status === 'closed').length, 1);
assert.equal(deals.filter(deal => deal.status === 'open').length, 1);
assert.equal(deals.find(deal => deal.status === 'closed').actual.sell, 80);
assert.equal(deals.find(deal => deal.status === 'closed').actual.minutes, 0);
assert.ok(deals.every(deal => deal.updatedAt), 'Migrated deals need an updatedAt value');
assert.ok(deals.every(deal => deal.estimate.platformId === 'custom'));
assert.ok(deals.every(deal => deal.estimate.costsExtra === deal.estimate.costs));
assert.deepEqual(store.getRules(), {
  minProfit: 25,
  minRoi: 0.25,
  maxRisk: 4,
  minDataQuality: 3
});
assert.ok(values.has('dealfaz:v1:deals'));
assert.ok(values.has('dealfaz:v1:factors'));
assert.ok(values.has('dealfaz:v1:rules'));
assert.ok(values.has('dealfaz:v1:settings'));
assert.equal(store.KEYS.license, 'dealfaz:v1:license');
assert.equal(store.getSettings().schemaVersion, 1);
assert.equal(store.getSettings().defaultPlatformId, 'ebay_privat');
assert.ok(values.has('dealfaz_watch_v2'), 'Legacy data must remain as a fallback');

console.log('data-store migration regression: ok');
