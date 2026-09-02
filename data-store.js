(function (global) {
  'use strict';

  // ============================================================
  // DEALFAZ / DINAVO – Zentrale Konfiguration
  // Dieser Block steht bewusst vor der gesamten Speicher- und Rechenlogik.
  // ============================================================

  // Das stabile "dealfaz:"-Praefix bleibt auch bei einem Rebranding
  // bestehen, damit bereits gespeicherte Nutzerdaten erreichbar bleiben.
  const STORE = Object.freeze({
    deals: 'dealfaz:v1:deals',
    factors: 'dealfaz:v1:factors',
    rules: 'dealfaz:v1:rules',
    settings: 'dealfaz:v1:settings',
    license: 'dealfaz:v1:license'
  });
  const KEYS = STORE;

  // Editierbare Richtwerte fuer den Rechner. Ein Deal speichert immer eine
  // Kopie der verwendeten Werte, damit Profil-Aenderungen nicht rueckwirken.
  const PLATFORMS = Object.freeze([
    Object.freeze({
      id: 'kleinanzeigen_privat', label: 'Kleinanzeigen (privat)',
      feePercent: 0, feeFixed: 0, shippingDefault: 0,
      note: 'Provisionsfrei; Versand zahlt in der Regel der Käufer.'
    }),
    Object.freeze({
      id: 'ebay_privat', label: 'eBay (privat)',
      feePercent: 0, feeFixed: 0, shippingDefault: 0,
      note: 'Innerhalb Deutschlands grundsätzlich provisionsfrei; Zusatzoptionen können kosten.'
    }),
    Object.freeze({
      id: 'ebay_gewerblich', label: 'eBay (gewerblich)',
      feePercent: 0.11, feeFixed: 0.35, shippingDefault: 4.99,
      note: 'Richtwert: Kategorie, Transaktionsbetrag, Fixbetrag und Umsatzsteuer können die Gebühr verändern.'
    }),
    Object.freeze({
      id: 'vinted', label: 'Vinted',
      feePercent: 0, feeFixed: 0, shippingDefault: 0,
      note: 'Käuferschutz und Versand werden dem Käufer beim Checkout berechnet.'
    }),
    Object.freeze({
      id: 'etsy', label: 'Etsy',
      feePercent: 0.065, feeFixed: 0.18, shippingDefault: 4.99,
      note: 'Richtwert; Zahlungs-, Listing-, Werbe- und weitere Gebühren können hinzukommen.'
    }),
    Object.freeze({
      id: 'amazon', label: 'Amazon',
      feePercent: 0.15, feeFixed: 0, shippingDefault: 3.50,
      note: 'Richtwert; Kategorie, Verkaufstarif und FBA können weitere Kosten verursachen.'
    }),
    Object.freeze({
      id: 'custom', label: 'Eigene Angabe',
      feePercent: 0, feeFixed: 0, shippingDefault: 0,
      note: 'Prozent, Fixbetrag und Versand selbst eintragen.'
    })
  ]);

  const FIELDS = Object.freeze([
    Object.freeze({ id: 'buy', label: 'Was zahlst du?', type: 'money', inputmode: 'decimal', primary: true }),
    Object.freeze({ id: 'sell', label: 'Verkaufspreis', type: 'money', inputmode: 'decimal', primary: true }),
    Object.freeze({ id: 'costsExtra', label: 'Weitere Kosten', type: 'money', inputmode: 'decimal', primary: false }),
    Object.freeze({ id: 'shipping', label: 'Versand', type: 'money', inputmode: 'decimal', primary: false }),
    Object.freeze({ id: 'days', label: 'Verkauf in Tagen', type: 'int', inputmode: 'numeric', primary: false }),
    Object.freeze({ id: 'risk', label: 'Risiko 1–5', type: 'range', inputmode: 'numeric', primary: false })
  ]);

  const PRIMARY_METRICS = Object.freeze(['profit', 'roi']);

  const DEMO_DEAL = Object.freeze({
    isDemo: true,
    name: 'Beispiel: Nike Air Max 90, Gr. 43',
    buy: 45,
    sell: 90,
    platformId: 'ebay_gewerblich',
    costsExtra: 3,
    days: 21,
    risk: 2
  });

  const METRIC_LINKS = Object.freeze({
    profit: Object.freeze({ label: 'Gewinn', url: '/reselling-rechner/' }),
    roi: Object.freeze({ label: 'ROI', url: '/roi-reselling/' }),
    maxBuy: Object.freeze({ label: 'Max. Einkauf', url: '/maximaler-einkaufspreis/' }),
    sellRate: Object.freeze({ label: 'Verkäufe/Angebote', url: '/sell-through/' })
  });

  const CALC = Object.freeze({
    minSampleForFactors: 5,
    priceFactorMin: 0.5,
    priceFactorMax: 1.5,
    useMedian: true,
    freeDealLimit: 20
  });

  const DEFAULT_SETTINGS = Object.freeze({
    schemaVersion: 1,
    currency: 'EUR',
    defaultPlatformId: 'ebay_privat',
    profitYtd: 0,
    profitYtdYear: new Date().getFullYear()
  });

  const DEFAULT_RULES = Object.freeze({
    minProfit: 20,
    minRoi: 0.30,
    maxRisk: 3,
    minDataQuality: 2
  });

  const CONFIG = Object.freeze({
    STORE,
    PLATFORMS,
    FIELDS,
    PRIMARY_METRICS,
    DEMO_DEAL,
    METRIC_LINKS,
    CALC,
    DEFAULT_SETTINGS,
    DEFAULT_RULES
  });
  const PLATFORM_IDS = new Set(PLATFORMS.map(platform => platform.id));

  const DEFAULT_FACTORS = Object.freeze({
    updatedAt: null,
    sampleSize: 0,
    priceFactor: 1,
    daysFactor: 1,
    costsDelta: 0,
    unsoldRate: 0,
    hourlyRate: 0
  });

  const LEGACY = Object.freeze({
    watch: ['pevru_watch_v2', 'zovyqo_watch_v2', 'mesiqo_watch_v2', 'dealfaz_watch_v2'],
    rules: ['pevru_rules_v2', 'zovyqo_rules_v2', 'mesiqo_rules_v2', 'dealfaz_rules_v2'],
    forecasts: ['pevru_forecasts_v1', 'zovyqo_forecasts_v1', 'mesiqo_forecasts_v1', 'dealfaz_forecasts_v1'],
    outcomes: ['pevru_outcomes_v1', 'zovyqo_outcomes_v1', 'mesiqo_outcomes_v1', 'dealfaz_outcomes_v1']
  });

  const memoryFallback = new Map();

  function readRaw(key) {
    try {
      const value = global.localStorage && global.localStorage.getItem(key);
      return value === null || value === undefined ? (memoryFallback.get(key) ?? null) : value;
    } catch (_) {
      return memoryFallback.get(key) ?? null;
    }
  }

  function writeRaw(key, value) {
    memoryFallback.set(key, value);
    try {
      if (global.localStorage) global.localStorage.setItem(key, value);
      return true;
    } catch (_) {
      return false;
    }
  }

  function removeRaw(key) {
    memoryFallback.delete(key);
    try {
      if (global.localStorage) global.localStorage.removeItem(key);
      return true;
    } catch (_) {
      return false;
    }
  }

  function readJson(key, fallback) {
    try {
      const raw = readRaw(key);
      if (raw === null) return fallback;
      const parsed = JSON.parse(raw);
      return parsed === null || parsed === undefined ? fallback : parsed;
    } catch (_) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    return writeRaw(key, JSON.stringify(value));
  }

  function mergeLegacyArrays(keys) {
    const merged = [];
    const seen = new Set();
    for (const key of keys) {
      const value = readJson(key, []);
      if (!Array.isArray(value)) continue;
      for (const item of value) {
        if (!item || typeof item !== 'object') continue;
        const fingerprint = item.id !== undefined
          ? `id:${String(item.id)}`
          : `value:${JSON.stringify(item)}`;
        if (seen.has(fingerprint)) continue;
        seen.add(fingerprint);
        merged.push(item);
      }
    }
    return merged;
  }

  function mergeLegacyObjects(keys, fallback) {
    const merged = keys.slice().reverse().reduce((result, key) => {
      const value = readJson(key, null);
      return value && typeof value === 'object' && !Array.isArray(value)
        ? { ...result, ...value }
        : result;
    }, {});
    return Object.keys(merged).length ? merged : { ...fallback };
  }

  function number(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function nonNegative(value, fallback = 0) {
    return Math.max(0, number(value, fallback));
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, number(value, min)));
  }

  function round(value, places = 2) {
    const factor = 10 ** places;
    return Math.round((number(value) + Number.EPSILON) * factor) / factor;
  }

  function iso(value) {
    const date = value instanceof Date ? value : new Date(value || Date.now());
    return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  }

  function currentYear() {
    return new Date().getUTCFullYear();
  }

  function defaultSettings() {
    return {
      ...DEFAULT_SETTINGS,
      profitYtdYear: currentYear()
    };
  }

  function platformId(value, fallback = 'custom') {
    const id = String(value || fallback);
    return PLATFORM_IDS.has(id) ? id : fallback;
  }

  function normalizeRate(value) {
    const rate = nonNegative(value);
    return round(clamp(rate > 1 ? rate / 100 : rate, 0, 1), 4);
  }

  function makeId(value = Date.now()) {
    const seconds = Math.floor(number(value, Date.now()) / 1000);
    let suffix = '';
    try {
      const bytes = new Uint8Array(2);
      global.crypto.getRandomValues(bytes);
      suffix = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
    } catch (_) {
      suffix = Math.floor(Math.random() * 0x10000).toString(16).padStart(4, '0');
    }
    return `d_${seconds}_${suffix}`;
  }

  function normalizeActual(actual) {
    if (!actual || typeof actual !== 'object') return null;
    const sold = actual.sold !== false;
    return {
      closedAt: iso(actual.closedAt || actual.savedAt),
      sold,
      sell: sold ? nonNegative(actual.sell ?? actual.actualSell) : 0,
      costs: nonNegative(actual.costs ?? actual.actualCost),
      days: Math.max(1, Math.round(nonNegative(actual.days ?? actual.actualDays, 1))),
      minutes: Math.round(nonNegative(actual.minutes ?? actual.actualMinutes)),
      note: String(actual.note || '').slice(0, 500)
    };
  }

  function calculatorSnapshot(source) {
    const estimate = source.estimate || {};
    return {
      sold: nonNegative(source.sold ?? source.calculator?.sold),
      active: nonNegative(source.active ?? source.calculator?.active),
      comps: nonNegative(source.comps ?? source.calculator?.comps),
      certainty: clamp(source.certainty ?? source.calculator?.certainty ?? 3, 1, 5),
      target: nonNegative(source.target ?? source.calculator?.target, 25),
      quality: clamp(source.quality ?? source.calculator?.quality ?? 0, 0, 100),
      verdict: String(source.verdict ?? source.calculator?.verdict ?? ''),
      margin: number(source.margin ?? source.calculator?.margin),
      roi30: number(source.roi30 ?? source.calculator?.roi30),
      worst: number(source.worst ?? source.calculator?.worst),
      best: number(source.best ?? source.calculator?.best),
      maxBuy: nonNegative(source.maxBuy ?? source.calculator?.maxBuy),
      estimateProfit: number(estimate.profit)
    };
  }

  function fromCalculator(source, options = {}) {
    const estimate = source.estimate || {};
    const createdAt = iso(options.createdAt || source.createdAt || source.savedAt || source.ts);
    const actual = normalizeActual(options.actual ?? source.actual);
    const updatedAt = iso(options.updatedAt || source.updatedAt || actual?.closedAt || createdAt);
    const buy = nonNegative(source.buy ?? estimate.buy);
    const sell = nonNegative(source.sell ?? source.expectedSell ?? estimate.sell);
    const selectedPlatform = platformId(source.platformId ?? estimate.platformId ?? source.calculator?.platformId);
    const feePercent = normalizeRate(source.feePercent ?? estimate.feePercent);
    const feeFixed = nonNegative(source.feeFixed ?? estimate.feeFixed);
    const feeAmount = round(sell * feePercent + feeFixed, 2);
    const shipping = nonNegative(source.shipping ?? estimate.shipping);
    const rawCosts = source.costs ?? source.cost ?? source.expectedCost ?? estimate.costs;
    const hasCostsExtra = source.costsExtra !== undefined || estimate.costsExtra !== undefined;
    const costsExtra = hasCostsExtra
      ? nonNegative(source.costsExtra ?? estimate.costsExtra)
      : nonNegative(number(rawCosts) - feeAmount - shipping);
    const hasFeeParts = source.platformId !== undefined || estimate.platformId !== undefined ||
      source.feePercent !== undefined || estimate.feePercent !== undefined ||
      source.feeFixed !== undefined || estimate.feeFixed !== undefined ||
      source.shipping !== undefined || estimate.shipping !== undefined || hasCostsExtra;
    const costs = round(hasFeeParts ? feeAmount + shipping + costsExtra : nonNegative(rawCosts), 2);
    const days = Math.max(1, Math.round(nonNegative(source.days ?? source.expectedDays ?? estimate.days, 30)));
    const risk = clamp(source.risk ?? estimate.risk ?? 3, 1, 5);
    const profit = number(source.profit ?? source.expectedProfit ?? estimate.profit, sell - buy - costs);
    let roi;
    if (source.estimate && estimate.roi !== undefined) roi = number(estimate.roi);
    else if (source.roi !== undefined) roi = number(source.roi) / 100;
    else if (source.expectedRoi !== undefined) roi = number(source.expectedRoi) / 100;
    else roi = buy ? profit / buy : 0;
    const score = Math.round(clamp(source.score ?? estimate.score ?? 0, 0, 100));
    const requestedStatus = ['open', 'closed', 'dropped'].includes(options.status || source.status)
      ? (options.status || source.status)
      : (actual ? 'closed' : 'open');

    return {
      id: String(options.id || source.id || makeId(Date.parse(createdAt))),
      createdAt,
      updatedAt,
      name: String(source.name ?? source.product ?? source.title ?? 'Unbenannter Deal').slice(0, 120),
      status: requestedStatus === 'closed' && !actual ? 'open' : requestedStatus,
      estimate: {
        buy,
        sell,
        platformId: selectedPlatform,
        feePercent,
        feeFixed,
        feeAmount,
        shipping,
        costsExtra,
        costs,
        days,
        risk,
        profit,
        roi,
        score
      },
      actual,
      calculator: calculatorSnapshot(source)
    };
  }

  function normalizeDeal(source) {
    if (!source || typeof source !== 'object') return null;
    return fromCalculator(source, {
      id: source.id,
      createdAt: source.createdAt,
      updatedAt: source.updatedAt,
      status: source.status,
      actual: source.actual
    });
  }

  function median(values, fallback) {
    const sorted = values.map(value => number(value, NaN)).filter(Number.isFinite).sort((a, b) => a - b);
    if (!sorted.length) return fallback;
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  function calculateFactors(deals, updatedAt = new Date().toISOString()) {
    const normalized = (Array.isArray(deals) ? deals : []).map(normalizeDeal).filter(Boolean);
    const closed = normalized.filter(deal => deal.status === 'closed' && deal.actual);
    const sold = closed.filter(deal =>
      deal.actual.sold === true &&
      deal.estimate.sell > 0 &&
      deal.estimate.days > 0 &&
      deal.actual.days > 0
    );
    const priceRatios = sold.map(deal => deal.actual.sell / deal.estimate.sell);
    const daysRatios = sold.map(deal => deal.actual.days / deal.estimate.days);
    const costsDeltas = sold.map(deal => deal.actual.costs - deal.estimate.costs);
    const timed = sold.filter(deal => deal.actual.minutes > 0);
    const totalMinutes = timed.reduce((sum, deal) => sum + deal.actual.minutes, 0);
    const totalProfit = timed.reduce(
      (sum, deal) => sum + deal.actual.sell - deal.estimate.buy - deal.actual.costs,
      0
    );
    const unsold = closed.filter(deal => deal.actual.sold === false).length;

    return {
      updatedAt: iso(updatedAt),
      sampleSize: sold.length,
      priceFactor: round(clamp(median(priceRatios, 1), CALC.priceFactorMin, CALC.priceFactorMax), 3),
      daysFactor: round(Math.max(0.01, median(daysRatios, 1)), 3),
      costsDelta: round(median(costsDeltas, 0), 2),
      unsoldRate: round(closed.length ? unsold / closed.length : 0, 3),
      hourlyRate: round(totalMinutes ? totalProfit / totalMinutes * 60 : 0, 2)
    };
  }

  function normalizeRules(source = {}) {
    const minRoi = number(source.minRoi, DEFAULT_RULES.minRoi);
    const legacyQuality = source.minQuality;
    const minDataQuality = source.minDataQuality !== undefined
      ? source.minDataQuality
      : (legacyQuality !== undefined ? Math.ceil(nonNegative(legacyQuality) / 20) : DEFAULT_RULES.minDataQuality);
    return {
      minProfit: nonNegative(source.minProfit, DEFAULT_RULES.minProfit),
      minRoi: clamp(minRoi, 0, 5),
      maxRisk: Math.round(clamp(source.maxRisk ?? DEFAULT_RULES.maxRisk, 1, 5)),
      minDataQuality: Math.round(clamp(minDataQuality, 1, 5))
    };
  }

  function normalizeSettings(source = {}) {
    const defaults = defaultSettings();
    const rawCurrency = String(source.currency || defaults.currency).toUpperCase();
    return {
      schemaVersion: 1,
      currency: rawCurrency === 'EUR' ? rawCurrency : defaults.currency,
      defaultPlatformId: platformId(source.defaultPlatformId, defaults.defaultPlatformId),
      profitYtd: round(number(source.profitYtd), 2),
      profitYtdYear: Math.round(number(source.profitYtdYear, defaults.profitYtdYear))
    };
  }

  function getDeals() {
    const stored = readJson(KEYS.deals, []);
    return (Array.isArray(stored) ? stored : []).map(normalizeDeal).filter(Boolean);
  }

  function calculateProfitYtd(deals, year = currentYear()) {
    return round((Array.isArray(deals) ? deals : []).reduce((sum, deal) => {
      const normalized = normalizeDeal(deal);
      if (!normalized || normalized.status !== 'closed' || !normalized.actual?.sold) return sum;
      if (new Date(normalized.actual.closedAt).getUTCFullYear() !== year) return sum;
      return sum + normalized.actual.sell - normalized.estimate.buy - normalized.actual.costs;
    }, 0), 2);
  }

  function syncSettings(deals = getDeals(), source = readJson(KEYS.settings, defaultSettings())) {
    const normalized = normalizeSettings(source);
    const year = currentYear();
    const synced = {
      ...normalized,
      profitYtd: calculateProfitYtd(deals, year),
      profitYtdYear: year
    };
    writeJson(KEYS.settings, synced);
    return synced;
  }

  function saveDeals(deals, recalculate = false) {
    const normalized = (Array.isArray(deals) ? deals : []).map(normalizeDeal).filter(Boolean);
    writeJson(KEYS.deals, normalized);
    if (recalculate) writeJson(KEYS.factors, calculateFactors(normalized));
    syncSettings(normalized);
    return normalized;
  }

  function addEstimate(snapshot) {
    const now = new Date().toISOString();
    const deal = fromCalculator(snapshot, {
      id: makeId(), createdAt: now, updatedAt: now, status: 'open', actual: null
    });
    saveDeals([deal, ...getDeals()]);
    return normalizeDeal(deal);
  }

  function removeDeal(id) {
    const before = getDeals();
    const after = before.filter(deal => deal.id !== id);
    saveDeals(after, before.some(deal => deal.id === id && deal.status === 'closed'));
    return after.length !== before.length;
  }

  function closeDeal(id, actual) {
    const deals = getDeals();
    const index = deals.findIndex(deal => deal.id === id && deal.status === 'open');
    if (index < 0) return null;
    const estimateSnapshot = deals[index].estimate;
    const normalizedActual = normalizeActual(actual);
    if (!normalizedActual) return null;
    deals[index] = {
      ...deals[index],
      updatedAt: normalizedActual.closedAt,
      status: 'closed',
      estimate: estimateSnapshot,
      actual: normalizedActual
    };
    saveDeals(deals, true);
    return normalizeDeal(deals[index]);
  }

  function toCalculator(deal) {
    const normalized = normalizeDeal(deal);
    if (!normalized) return null;
    const estimate = normalized.estimate;
    const calculator = normalized.calculator || {};
    return {
      id: normalized.id,
      product: normalized.name,
      buy: estimate.buy,
      sell: estimate.sell,
      platformId: estimate.platformId,
      feePercent: estimate.feePercent,
      feeFixed: estimate.feeFixed,
      feeAmount: estimate.feeAmount,
      shipping: estimate.shipping,
      costsExtra: estimate.costsExtra,
      costs: estimate.costs,
      cost: estimate.costs,
      days: estimate.days,
      risk: estimate.risk,
      profit: estimate.profit,
      roi: estimate.roi * 100,
      score: estimate.score,
      savedAt: Date.parse(normalized.createdAt),
      updatedAt: Date.parse(normalized.updatedAt),
      ...calculator
    };
  }

  function toOutcome(deal) {
    const normalized = normalizeDeal(deal);
    if (!normalized || normalized.status !== 'closed' || !normalized.actual) return null;
    const estimate = normalized.estimate;
    const actual = normalized.actual;
    const actualProfit = actual.sell - estimate.buy - actual.costs;
    return {
      id: normalized.id,
      forecastId: normalized.id,
      product: normalized.name,
      buy: estimate.buy,
      platformId: estimate.platformId,
      expectedSell: estimate.sell,
      expectedCost: estimate.costs,
      expectedProfit: estimate.profit,
      expectedRoi: estimate.roi * 100,
      expectedDays: estimate.days,
      sold: actual.sold,
      actualSell: actual.sell,
      actualCost: actual.costs,
      actualProfit,
      actualRoi: estimate.buy ? actualProfit / estimate.buy * 100 : 0,
      actualDays: actual.days,
      actualMinutes: actual.minutes,
      actualHourlyRate: actual.minutes ? actualProfit / actual.minutes * 60 : 0,
      note: actual.note,
      savedAt: Date.parse(actual.closedAt)
    };
  }

  function importDeals(items) {
    if (!Array.isArray(items)) return { imported: 0 };
    const canonical = items.every(item => item && typeof item === 'object' && item.estimate);
    if (canonical) {
      const existing = getDeals();
      const byId = new Map(existing.map(deal => [deal.id, deal]));
      let imported = 0;
      for (const item of items) {
        const incoming = normalizeDeal(item);
        if (!incoming) continue;
        if (byId.has(incoming.id)) {
          const current = byId.get(incoming.id);
          byId.set(incoming.id, { ...incoming, estimate: current.estimate });
        } else {
          byId.set(incoming.id, incoming);
          imported += 1;
        }
      }
      saveDeals(Array.from(byId.values()), true);
      return { imported };
    }

    const existing = getDeals();
    const closedOrDropped = existing.filter(deal => deal.status !== 'open');
    const open = items.map(item => fromCalculator(item, { id: makeId(), status: 'open', actual: null }));
    saveDeals([...open, ...closedOrDropped], true);
    return { imported: open.length };
  }

  function getRules() {
    return normalizeRules(readJson(KEYS.rules, DEFAULT_RULES));
  }

  function setRules(rules) {
    const normalized = normalizeRules(rules);
    writeJson(KEYS.rules, normalized);
    return normalized;
  }

  function getFactors() {
    const stored = readJson(KEYS.factors, DEFAULT_FACTORS);
    return {
      updatedAt: stored.updatedAt || null,
      sampleSize: Math.max(0, Math.round(number(stored.sampleSize))),
      priceFactor: round(clamp(stored.priceFactor ?? 1, CALC.priceFactorMin, CALC.priceFactorMax), 3),
      daysFactor: round(Math.max(0.01, number(stored.daysFactor, 1)), 3),
      costsDelta: round(number(stored.costsDelta), 2),
      unsoldRate: round(clamp(stored.unsoldRate ?? 0, 0, 1), 3),
      hourlyRate: round(number(stored.hourlyRate), 2)
    };
  }

  function applyFactors(estimate = {}) {
    const factors = getFactors();
    const sampleSize = factors.sampleSize;
    if (sampleSize < CALC.minSampleForFactors || !Number.isFinite(factors.priceFactor)) {
      return {
        ready: false,
        sampleSize,
        missing: Math.max(0, CALC.minSampleForFactors - sampleSize)
      };
    }

    const buy = nonNegative(estimate.buy);
    const estimatedSell = nonNegative(estimate.sell);
    const estimatedCosts = nonNegative(estimate.costs ?? estimate.cost);
    const estimatedDays = Math.max(1, Math.round(nonNegative(estimate.days, 1)));
    const sell = round(estimatedSell * factors.priceFactor, 2);
    const costs = round(Math.max(0, estimatedCosts + factors.costsDelta), 2);
    const profit = round(sell - buy - costs, 2);

    return {
      ready: true,
      sampleSize,
      sell,
      costs,
      profit,
      days: Math.round(Math.max(1, estimatedDays * factors.daysFactor)),
      roi: buy > 0 ? profit / buy : null,
      unsoldRate: factors.unsoldRate,
      hourlyRate: factors.hourlyRate
    };
  }

  function getSettings() {
    return syncSettings(getDeals());
  }

  function setSettings(settings) {
    const current = normalizeSettings(readJson(KEYS.settings, defaultSettings()));
    return syncSettings(getDeals(), { ...current, ...settings });
  }

  function exportData() {
    return {
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      deals: getDeals(),
      rules: getRules(),
      settings: getSettings()
    };
  }

  function importData(payload) {
    if (Array.isArray(payload)) return importDeals(payload);
    if (!payload || typeof payload !== 'object' || !Array.isArray(payload.deals)) {
      return { imported: 0, valid: false };
    }
    const result = importDeals(payload.deals);
    if (payload.rules && typeof payload.rules === 'object') setRules(payload.rules);
    if (payload.settings && typeof payload.settings === 'object') setSettings(payload.settings);
    return { ...result, valid: true };
  }

  function migrate() {
    if (readRaw(KEYS.deals) === null) {
      const forecasts = mergeLegacyArrays(LEGACY.forecasts);
      const outcomes = mergeLegacyArrays(LEGACY.outcomes);
      const watch = mergeLegacyArrays(LEGACY.watch);
      const migrated = [];
      const closedForecastIds = new Set();

      outcomes.forEach(outcome => {
        if (!outcome || typeof outcome !== 'object') return;
        if (outcome.forecastId) closedForecastIds.add(String(outcome.forecastId));
        migrated.push(fromCalculator({
          product: outcome.product,
          buy: outcome.buy,
          sell: outcome.expectedSell,
          cost: outcome.expectedCost,
          days: outcome.expectedDays,
          profit: outcome.expectedProfit,
          roi: outcome.expectedRoi,
          score: outcome.score,
          risk: outcome.risk
        }, {
          id: makeId(outcome.savedAt),
          createdAt: outcome.createdAt || outcome.savedAt,
          updatedAt: outcome.savedAt,
          status: 'closed',
          actual: {
            closedAt: outcome.savedAt,
            sold: outcome.sold !== false,
            sell: outcome.actualSell,
            costs: outcome.actualCost,
            days: outcome.actualDays,
            minutes: outcome.actualMinutes ?? outcome.minutes,
            note: outcome.note || ''
          }
        }));
      });

      forecasts.forEach(forecast => {
        if (!forecast || typeof forecast !== 'object' || closedForecastIds.has(String(forecast.id))) return;
        migrated.push(fromCalculator(forecast, {
          id: makeId(forecast.savedAt),
          createdAt: forecast.savedAt,
          updatedAt: forecast.savedAt,
          status: 'open',
          actual: null
        }));
      });

      watch.forEach(item => {
        if (!item || typeof item !== 'object') return;
        migrated.push(fromCalculator(item, {
          id: makeId(item.ts || item.savedAt),
          createdAt: item.ts || item.savedAt,
          updatedAt: item.ts || item.savedAt,
          status: 'open',
          actual: null
        }));
      });

      saveDeals(migrated, true);
    }

    if (readRaw(KEYS.rules) === null) {
      const legacyRules = mergeLegacyObjects(LEGACY.rules, DEFAULT_RULES);
      const hasLegacyRoi = LEGACY.rules.some(key => {
        const value = readJson(key, null);
        return value && typeof value === 'object' && value.minRoi !== undefined;
      });
      if (hasLegacyRoi) legacyRules.minRoi = number(legacyRules.minRoi) / 100;
      setRules(legacyRules);
    }

    if (readRaw(KEYS.factors) === null) writeJson(KEYS.factors, calculateFactors(getDeals()));
    syncSettings(getDeals());
  }

  function clearAllData() {
    const keys = new Set([...Object.values(KEYS), ...Object.values(LEGACY).flat()]);
    keys.forEach(removeRaw);
    writeJson(KEYS.deals, []);
    writeJson(KEYS.rules, DEFAULT_RULES);
    writeJson(KEYS.factors, DEFAULT_FACTORS);
    writeJson(KEYS.settings, defaultSettings());
    return true;
  }

  migrate();

  const storeApi = Object.freeze({
    KEYS,
    CONFIG,
    PLATFORMS,
    FIELDS,
    PRIMARY_METRICS,
    DEMO_DEAL,
    METRIC_LINKS,
    CALC,
    DEFAULT_SETTINGS,
    DEFAULT_RULES,
    getDeals,
    getOpenDeals: () => getDeals().filter(deal => deal.status === 'open'),
    getClosedDeals: () => getDeals().filter(deal => deal.status === 'closed' && deal.actual),
    addEstimate,
    removeDeal,
    closeDeal,
    importDeals,
    importData,
    exportData,
    getRules,
    setRules,
    getFactors,
    getSettings,
    setSettings,
    clearAllData,
    recomputeFactors: () => {
      const factors = calculateFactors(getDeals());
      writeJson(KEYS.factors, factors);
      return factors;
    },
    toCalculator,
    toOutcome,
    calculateFactors,
    calculateProfitYtd
  });
  global.DEALFAZ_STORE = storeApi;

  // Öffentliche, rückwärtskompatible Schnittstelle für die Ergebnisanzeige.
  // Sie verwendet dieselben stabilen dealfaz:v1:-Keys wie der zentrale Store.
  global.dinavoFactors = Object.freeze({
    recalc: storeApi.recomputeFactors,
    apply: applyFactors,
    load: storeApi.getFactors
  });
})(typeof window !== 'undefined' ? window : globalThis);
