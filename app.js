'use strict';

const $ = id => document.getElementById(id);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const round = (value, places = 2) => {
  const factor = 10 ** places;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
};
const num = id => Math.max(0, Number($(id)?.value) || 0);
const esc = (value = '') => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

const STORE = window.DEALFAZ_STORE;
if (!STORE) throw new Error('Lokaler Deal-Speicher konnte nicht geladen werden.');

const CONFIG = STORE.CONFIG;
const PLATFORMS = CONFIG.PLATFORMS;
const FIELDS = CONFIG.FIELDS;
const PRIMARY_METRICS = CONFIG.PRIMARY_METRICS;
const DEMO_DEAL = CONFIG.DEMO_DEAL;
const METRIC_LINKS = CONFIG.METRIC_LINKS;
const CALC = CONFIG.CALC;
let settings = STORE.getSettings();
let current = {};
let demoActive = false;

function eur(value) {
  try {
    return Number(value || 0).toLocaleString('de-DE', {
      style: 'currency',
      currency: settings.currency || 'EUR'
    });
  } catch (_) {
    return Number(value || 0).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  }
}

function platformById(id) {
  return PLATFORMS.find(platform => platform.id === id) || PLATFORMS.find(platform => platform.id === 'custom');
}

function platformLabel(id) {
  return platformById(id)?.label || 'Eigene Angabe';
}

function qualityTier(value) {
  return clamp(Math.ceil(Number(value || 0) / 20), 1, 5);
}

function money(value) {
  return `<span class="moneyValue">${eur(value)}</span>`;
}

function getRules() {
  return STORE.getRules();
}

function getWatch() {
  return STORE.getOpenDeals().map(STORE.toCalculator).filter(Boolean);
}

function getForecasts() {
  return getWatch();
}

function getOutcomes() {
  return STORE.getClosedDeals().map(STORE.toOutcome).filter(Boolean);
}

function populatePlatformSelect(select) {
  select.innerHTML = PLATFORMS.map(platform =>
    `<option value="${esc(platform.id)}">${esc(platform.label)}</option>`
  ).join('');
}

function updatePlatformNote() {
  const profile = platformById($('platform').value);
  $('platformNote').innerHTML = `<strong>Editierbarer Richtwert:</strong> ${esc(profile.note)} ` +
    '<span class="feeDisclaimer">Prüfe vor dem Kauf die aktuellen, kategorieabhängigen Gebühren der Plattform.</span>';
}

function applyPlatformProfile(id) {
  const profile = platformById(id);
  $('platform').value = profile.id;
  $('feePercent').value = round(profile.feePercent * 100, 2);
  $('feeFixed').value = profile.feeFixed;
  $('shipping').value = profile.shippingDefault;
  updatePlatformNote();
}

function setMoney(id, value) {
  $(id).textContent = eur(value);
}

function setVerdict(text, type = '') {
  const verdict = $('verdict');
  verdict.textContent = text;
  verdict.className = `bigVerdict${type ? ` verdict-${type}` : ''}`;
}

function configureFieldsAndMetricLinks() {
  FIELDS.forEach(field => {
    const input = $(field.id);
    if (input) input.inputMode = field.inputmode;
  });
  const links = {
    profit: $('profitMetricLink'),
    roi: $('roiMetricLink'),
    maxBuy: $('maxBuyMetricLink'),
    sellRate: $('sellRateMetricLink')
  };
  Object.entries(links).forEach(([metric, link]) => {
    const definition = METRIC_LINKS[metric];
    if (!link || !definition) return;
    link.href = definition.url;
    link.ariaLabel = `${definition.label} einfach erklärt`;
  });
}

function fillDemoDeal() {
  demoActive = true;
  $('product').value = DEMO_DEAL.name;
  $('buy').value = DEMO_DEAL.buy;
  $('sell').value = DEMO_DEAL.sell;
  applyPlatformProfile(DEMO_DEAL.platformId);
  $('costsExtra').value = DEMO_DEAL.costsExtra;
  $('days').value = DEMO_DEAL.days;
  $('risk').value = DEMO_DEAL.risk;
}

function clearDemoBeforeInput(target) {
  if (!demoActive) return;
  demoActive = false;
  $('product').value = '';
  $('buy').value = '';
  $('sell').value = '';
  $('costsExtra').value = '';
  $('days').value = '';
  $('risk').value = '';
  applyPlatformProfile(settings.defaultPlatformId);
  if (target) target.value = '';
  calculate();
}

function calculate() {
  const product = $('product').value.trim();
  const buy = num('buy');
  const sell = num('sell');
  const platformId = $('platform').value || 'custom';
  const feePercent = clamp(num('feePercent') / 100, 0, 1);
  const feeFixed = num('feeFixed');
  const feeAmount = round(sell * feePercent + feeFixed, 2);
  const shipping = num('shipping');
  const costsExtra = num('costsExtra');
  const costs = round(feeAmount + shipping + costsExtra, 2);
  const sold = num('sold');
  const active = num('active');
  const comps = num('comps');
  const certainty = clamp(num('certainty') || 1, 1, 5);
  const risk = clamp(num('risk') || 1, 1, 5);
  const target = num('target');
  const days = Math.max(1, num('days') || 30);
  const sample = sold + active;
  const sellThrough = sample ? sold / sample * 100 : 0;
  const profit = sell - buy - costs;
  const roi = buy ? profit / buy * 100 : 0;
  const margin = sell ? profit / sell * 100 : 0;
  const roi30 = roi * 30 / days;
  const quality = Math.round(clamp(
    clamp(sample / 30 * 45, 0, 45) + clamp(comps / 8 * 30, 0, 30) + certainty / 5 * 25,
    0,
    100
  ));
  let score = clamp(roi / 50 * 35, 0, 35) + clamp(sellThrough / 80 * 25, 0, 25) +
    (6 - risk) / 5 * 20 + clamp(margin / 30 * 20, 0, 20);
  const worst = sell * 0.85 - buy - costs * 1.15;
  const best = sell * 1.10 - buy - costs * 0.95;
  if (profit <= 0) score = Math.min(score, 35);
  if (worst < 0) score -= 10;
  score = Math.round(clamp(score, 0, 100));
  const maxBuy = Math.max(0, (sell - costs) / (1 + target / 100));
  const hasCoreValues = Boolean(product && buy > 0 && sell > 0);
  const hasEvidence = sold + active + comps > 0;

  let verdict = '3 ANGABEN FEHLEN';
  let verdictType = '';
  if (hasCoreValues && profit <= 0) {
    verdict = 'EHER NICHT';
    verdictType = 'bad';
  } else if (hasCoreValues && hasEvidence && quality < 45) {
    verdict = 'NOCH PRÜFEN';
    verdictType = 'warn';
  } else if (hasCoreValues && hasEvidence && score >= 72) {
    verdict = 'SIEHT GUT AUS';
    verdictType = 'good';
  } else if (hasCoreValues && hasEvidence && score >= 45) {
    verdict = 'PREIS PRÜFEN';
    verdictType = 'warn';
  } else if (hasCoreValues && hasEvidence) {
    verdict = 'EHER NICHT';
    verdictType = 'bad';
  } else if (hasCoreValues && roi >= target) {
    verdict = 'RECHNET SICH';
    verdictType = 'good';
  } else if (hasCoreValues) {
    verdict = 'PREIS PRÜFEN';
    verdictType = 'warn';
  }

  current = {
    product,
    buy,
    sell,
    platformId,
    feePercent,
    feeFixed,
    feeAmount,
    shipping,
    costsExtra,
    costs,
    cost: costs,
    sold,
    active,
    comps,
    certainty,
    risk,
    target,
    days,
    sth: sellThrough,
    quality,
    profit,
    roi,
    margin,
    roi30,
    worst,
    best,
    score,
    verdict,
    maxBuy,
    ts: Date.now(),
    isDemo: demoActive
  };

  $('cost').value = costs;
  setMoney('feeAmount', feeAmount);
  setMoney('shippingAmount', shipping);
  setMoney('extraAmount', costsExtra);
  setMoney('costAmount', costs);
  const primaryMetricWriters = {
    profit: () => setMoney('profit', profit),
    roi: () => { $('roi').textContent = `${roi.toFixed(1)} %`; }
  };
  PRIMARY_METRICS.forEach(metric => primaryMetricWriters[metric]?.());
  setMoney('maxbuy', maxBuy);
  setMoney('worst', worst);
  setMoney('real', profit);
  setMoney('bestcase', best);
  setVerdict(verdict, verdictType);

  $('scoreCard').hidden = !hasEvidence;
  $('score').textContent = hasEvidence ? score : '–';
  $('sth').textContent = hasEvidence ? `${sellThrough.toFixed(0)} %` : '–';
  $('quality').textContent = hasEvidence ? `${quality}/100` : '–';
  $('margin').textContent = `${margin.toFixed(1)} %`;
  $('roi30').textContent = `${roi30.toFixed(1)} %`;

  if (!hasCoreValues) {
    $('summary').textContent = 'Artikel, Einkaufspreis und Verkaufspreis eintragen.';
  } else if (profit >= 0) {
    $('summary').innerHTML = `${esc(product)} · Rechnerisch bleiben ${money(profit)} übrig.`;
  } else {
    $('summary').innerHTML = `${esc(product)} · Rechnerisch fehlen ${money(Math.abs(profit))}.`;
  }

  const gate = $('gate');
  if (!hasCoreValues) {
    gate.hidden = true;
  } else if (!hasEvidence) {
    gate.hidden = false;
    gate.textContent = 'Schnellcheck: nur gerechnet. Für mehr Sicherheit „Genauer prüfen“ öffnen.';
  } else if (quality < 45) {
    gate.hidden = false;
    gate.textContent = 'Noch zu wenig Vergleichsdaten für eine belastbare Einschätzung.';
  } else {
    gate.hidden = true;
  }

  const rules = getRules();
  const rulesMet = profit >= rules.minProfit && roi / 100 >= rules.minRoi &&
    risk <= rules.maxRisk && qualityTier(quality) >= rules.minDataQuality;
  $('ruleStatus').innerHTML = `Deine Kriterien: <strong class="${rulesMet ? 'status-ok' : 'status-bad'}">` +
    `${rulesMet ? 'ERFÜLLT' : 'NICHT ERFÜLLT'}</strong>`;

  renderCounter(hasCoreValues, hasEvidence);
  renderBattle();
  renderMarkets(product);
  renderPersonalEstimate(current);
}

function renderCounter(hasCoreValues, hasEvidence) {
  if (!hasCoreValues) {
    $('counterList').innerHTML = '<div class="counter"><b>Noch nicht fertig</b><span>Fülle oben die drei Felder aus.</span></div>';
    return;
  }
  const warnings = [];
  if (current.profit <= 0) warnings.push(['Kein Gewinn', `Verkauf minus Einkauf und Kosten ergibt ${money(current.profit)}.`]);
  if (current.worst < 0) warnings.push(['Worst Case negativ', `Im vorsichtigen Szenario ${money(current.worst)}.`]);
  if (current.profit > 0 && current.roi < current.target) {
    warnings.push(['Ziel-ROI verfehlt', `ROI ${current.roi.toFixed(1)} % unter Ziel ${current.target.toFixed(0)} %.`]);
  }
  if (!hasEvidence) warnings.push(['Markt noch nicht geprüft', 'Vergleiche echte Preise, bevor du kaufst.']);
  if (hasEvidence && current.quality < 45) warnings.push(['Datenbasis zu schwach', `Datenqualität ${current.quality}/100.`]);
  if (current.risk >= 4) warnings.push(['Risiko hoch', `Von dir angegeben: ${current.risk}/5.`]);
  if (hasEvidence && current.sold + current.active < 10) warnings.push(['Kleine Stichprobe', 'Weniger als 10 beobachtete Verkäufe und Angebote.']);
  if (!warnings.length) {
    warnings.push(['Keine starke Warnung aus deinen Eingaben', 'Zustand, Echtheit, Gebühren, Versand, Steuern und Plattformregeln trotzdem prüfen.']);
  }
  $('counterList').innerHTML = warnings.slice(0, 3).map(([title, text]) =>
    `<div class="counter"><b>${title}</b><span>${text}</span></div>`
  ).join('');
}

function renderBattle() {
  if (!current.buy) return;
  const buy = num('bBuy');
  const sell = num('bSell');
  const costs = num('bCost');
  const risk = clamp(num('bRisk') || 1, 1, 5);
  const days = Math.max(1, num('bDays') || 30);
  const profit = sell - buy - costs;
  const roi = buy ? profit / buy * 100 : 0;
  const roi30 = roi * 30 / days;
  const nameA = current.product || 'Deal A';
  const nameB = $('bName').value || 'Deal B';

  $('battleA').innerHTML = `${esc(nameA)} · Gewinn ${money(current.profit)} · ROI ${current.roi.toFixed(1)} % · ROI/30T ${current.roi30.toFixed(1)} %`;
  $('battleB').innerHTML = `${esc(nameB)} · Gewinn ${money(profit)} · ROI ${roi.toFixed(1)} % · ROI/30T ${roi30.toFixed(1)} %`;

  const winner = $('battleWinner');
  const difference = current.roi30 - roi30;
  if (Math.abs(difference) > 5) {
    winner.className = 'winner';
    winner.textContent = `${difference > 0 ? nameA : nameB} liegt beim ROI pro 30 Tage vorn.`;
  } else if (Math.abs(current.profit - profit) > 10) {
    winner.className = 'winner';
    winner.textContent = `${current.profit > profit ? nameA : nameB} liegt bei ähnlichem Kapitaltempo beim Gewinn vorn.`;
  } else if (current.risk !== risk) {
    winner.className = 'winner';
    winner.textContent = `${current.risk < risk ? nameA : nameB} hat die niedrigere angegebene Risikostufe.`;
  } else {
    winner.className = 'winner neutral';
    winner.textContent = 'Nahe beieinander – echte Daten, Zustand und vollständige Kosten sollten entscheiden.';
  }
}

function renderMarkets(query) {
  const encoded = encodeURIComponent(query || '');
  const links = [
    ['eBay verkauft', `https://www.ebay.de/sch/i.html?_nkw=${encoded}&LH_Sold=1&LH_Complete=1`],
    ['eBay aktiv', `https://www.ebay.de/sch/i.html?_nkw=${encoded}`],
    ['Kleinanzeigen', `https://www.kleinanzeigen.de/s-suchanfrage.html?keywords=${encoded}`],
    ['idealo', `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${encoded}`],
    ['Google Shopping', `https://www.google.com/search?tbm=shop&q=${encoded}`],
    ['Amazon', `https://www.amazon.de/s?k=${encoded}`]
  ];
  $('marketLinks').innerHTML = links.map(([label, href]) =>
    `<a class="market" rel="nofollow noopener noreferrer" target="_blank" href="${href}"><strong>${label}</strong><span>Originalquelle öffnen →</span></a>`
  ).join('');
}

function renderWatch() {
  const watch = getWatch();
  $('watch').innerHTML = watch.length ? watch.map((deal, index) =>
    `<div class="watch"><div class="watchTop"><div><strong>${esc(deal.product || 'Unbenannter Deal')}</strong><br>` +
    `<small>${money(deal.buy)} → ${money(deal.sell)} · ${esc(platformLabel(deal.platformId))} · ${deal.score ?? '–'}/100 · ${esc(deal.verdict || '')}</small>` +
    `</div><div class="actions"><button class="secondary" data-watch-action="load" data-index="${index}">Laden</button>` +
    `<button class="secondary" data-watch-action="remove" data-index="${index}">Entfernen</button></div></div></div>`
  ).join('') : '<p>Noch keine Deals gespeichert.</p>';
}

window.removeWatch = index => {
  const deal = getWatch()[index];
  if (deal && STORE.removeDeal(deal.id)) renderStoredData();
};

window.loadWatch = index => {
  const deal = getWatch()[index];
  if (!deal) return;
  $('product').value = deal.product || '';
  $('buy').value = deal.buy;
  $('sell').value = deal.sell;
  $('platform').value = deal.platformId;
  $('feePercent').value = round(deal.feePercent * 100, 2);
  $('feeFixed').value = deal.feeFixed;
  $('shipping').value = deal.shipping;
  $('costsExtra').value = deal.costsExtra;
  ['sold', 'active', 'comps', 'certainty', 'risk', 'target', 'days'].forEach(key => {
    if (deal[key] !== undefined && $(key)) $(key).value = deal[key];
  });
  updatePlatformNote();
  calculate();
  location.hash = '#check';
};

function renderForecasts() {
  const forecasts = getForecasts();
  $('forecastList').innerHTML = forecasts.length
    ? '<h3 style="margin-top:18px">Vorgemerkte Erwartungen</h3>' + forecasts.map((forecast, index) =>
      `<div class="forecastCard"><strong>${esc(forecast.product || 'Unbenannter Deal')}</strong><br>` +
      `<small>${esc(platformLabel(forecast.platformId))} · Verkauf ${money(forecast.sell)} · Gewinn ${money(forecast.profit)} · ` +
      `${Number(forecast.days || 0)} Tage · Score ${forecast.score ?? '–'}/100</small><div class="actions">` +
      `<button class="secondary" data-forecast-action="choose" data-index="${index}">Ergebnis erfassen</button>` +
      `<button class="secondary" data-forecast-action="remove" data-index="${index}">Entfernen</button></div></div>`
    ).join('')
    : '<p>Du hast noch keine Erwartung vorgemerkt.</p>';
}

window.removeForecast = index => {
  const forecast = getForecasts()[index];
  if (forecast && STORE.removeDeal(forecast.id)) renderStoredData();
};

window.chooseForecast = index => {
  const forecast = getForecasts()[index];
  if (!forecast) return;
  $('selectedForecast').value = forecast.id;
  $('actualSold').value = 'true';
  $('actualSell').value = forecast.sell;
  $('actualCost').value = forecast.cost;
  $('actualDays').value = forecast.days;
  $('actualMinutes').value = '';
  $('actualNote').value = '';
  syncActualSaleState();
  $('outcomeHint').textContent = `Ausgewählt: ${forecast.product || 'Deal'} · Erwartung vom ${new Date(forecast.savedAt).toLocaleDateString('de-DE')}`;
  location.hash = '#realitaet';
};

function renderOutcomes() {
  const outcomes = getOutcomes();
  $('outcomeList').innerHTML = outcomes.length
    ? '<h3 style="margin-top:18px">Deine Ergebnis-Historie</h3>' + outcomes.map(outcome => {
      const profitDifference = outcome.actualProfit - outcome.expectedProfit;
      const daysDifference = outcome.actualDays - outcome.expectedDays;
      const differenceClass = profitDifference >= 0 ? 'deltaPos' : 'deltaNeg';
      const actualLabel = outcome.sold
        ? `Tatsächlich: ${money(outcome.actualProfit)} Gewinn`
        : `Nicht verkauft: ${money(outcome.actualProfit)} Ergebnis`;
      const time = outcome.actualMinutes > 0
        ? `<br>Aufwand: ${outcome.actualMinutes} Min. · Stundenlohn ${money(outcome.actualHourlyRate)}`
        : '';
      return `<div class="historyCard"><div class="historyTop"><div><strong>${esc(outcome.product || 'Deal')}</strong><br>` +
        `<small>Erwartung: ${money(outcome.expectedProfit)} Gewinn · ${outcome.expectedDays} Tage<br>${actualLabel} · ${outcome.actualDays} Tage${time}` +
        `${outcome.note ? `<br>Notiz: ${esc(outcome.note)}` : ''}</small></div><div>` +
        `<strong class="${differenceClass} moneyValue">Gewinn Δ ${profitDifference >= 0 ? '+' : ''}${eur(profitDifference)}</strong><br>` +
        `<small>Tage Δ ${daysDifference >= 0 ? '+' : ''}${daysDifference}</small></div></div></div>`;
    }).join('')
    : '<p>Noch keine tatsächlichen Ergebnisse gespeichert.</p>';
}

function renderFactors() {
  const box = $('factorPanel');
  const factors = STORE.getFactors();
  const missing = Math.max(0, CALC.minSampleForFactors - factors.sampleSize);
  if (factors.sampleSize < CALC.minSampleForFactors) {
    box.innerHTML = `<strong>Persönlicher Korrekturfaktor</strong><p>Noch ${missing} verkaufte ` +
      `${missing === 1 ? 'Abschluss' : 'Abschlüsse'}, dann wird deine persönliche Auswertung sichtbar.</p>`;
    return;
  }
  const costSign = factors.costsDelta > 0 ? '+' : '';
  box.innerHTML = `<strong>Persönlicher Korrekturfaktor · ${factors.sampleSize} Verkäufe</strong><div class="factorGrid">` +
    `<div><span>Verkaufspreis</span><b>${Math.round(factors.priceFactor * 100)} %</b></div>` +
    `<div><span>Verkaufsdauer</span><b>${factors.daysFactor.toLocaleString('de-DE', { maximumFractionDigits: 2 })}×</b></div>` +
    `<div><span>Kosten-Abweichung</span><b class="moneyValue">${costSign}${eur(factors.costsDelta)}</b></div>` +
    `<div><span>Nicht verkauft</span><b>${Math.round(factors.unsoldRate * 100)} %</b></div>` +
    `<div><span>Stundenlohn</span><b class="moneyValue">${eur(factors.hourlyRate)}</b></div></div>`;
}

function renderPersonalEstimate(deal) {
  const panel = $('personalEstimate');
  const factors = STORE.getFactors();
  if (factors.sampleSize < CALC.minSampleForFactors) {
    panel.hidden = true;
    return;
  }
  const adjustedSell = deal.sell * factors.priceFactor;
  const adjustedCosts = Math.max(0, deal.costs + factors.costsDelta);
  const adjustedDays = Math.max(1, Math.round(deal.days * factors.daysFactor));
  const adjustedProfit = adjustedSell - deal.buy - adjustedCosts;
  panel.hidden = false;
  $('personalEstimateText').innerHTML = `Aus deinen ${factors.sampleSize} verkauften Deals: Verkauf etwa ${money(adjustedSell)}, ` +
    `Kosten etwa ${money(adjustedCosts)}, Dauer etwa ${adjustedDays} Tage und daraus etwa ${money(adjustedProfit)} Gewinn.`;
}

function renderSettings() {
  settings = STORE.getSettings();
  $('defaultPlatform').value = settings.defaultPlatformId;
  $('currency').value = settings.currency;
  $('profitYtdYear').textContent = settings.profitYtdYear;
  setMoney('profitYtd', settings.profitYtd);
}

function renderStoredData() {
  renderWatch();
  renderForecasts();
  renderOutcomes();
  renderFactors();
  renderSettings();
}

function syncActualSaleState() {
  const sold = $('actualSold').value === 'true';
  $('actualSell').disabled = !sold;
  $('actualSellField').firstChild.nodeValue = sold ? 'Verkaufspreis (€)' : 'Verkaufspreis (€) – entfällt';
  if (!sold) $('actualSell').value = '0';
}

function canSaveDeal() {
  if (demoActive || current.isDemo) {
    $('summary').textContent = 'Das ist nur ein Beispiel. Ändere zuerst eine Eingabe, bevor du den Deal speicherst.';
    return false;
  }
  if (current.product && current.buy > 0 && current.sell > 0) return true;
  $('summary').textContent = 'Bitte zuerst Artikel, Einkaufspreis und Verkaufspreis vollständig eintragen.';
  return false;
}

function download(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

const safeText = value => {
  const text = String(value ?? '');
  return /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
};
const csv = value => `"${safeText(value).replaceAll('"', '""')}"`;

populatePlatformSelect($('platform'));
populatePlatformSelect($('defaultPlatform'));
configureFieldsAndMetricLinks();
$('defaultPlatform').value = settings.defaultPlatformId;
applyPlatformProfile(settings.defaultPlatformId);

const configuredFieldIds = new Set(['product', ...FIELDS.map(field => field.id)]);
document.querySelectorAll('#check input').forEach(input => {
  input.addEventListener('input', event => {
    if (demoActive && configuredFieldIds.has(input.id)) {
      const firstValue = event.target.value;
      clearDemoBeforeInput();
      event.target.value = firstValue;
    }
    calculate();
  });
  if (configuredFieldIds.has(input.id)) {
    input.addEventListener('beforeinput', event => clearDemoBeforeInput(event.target));
  }
});
document.querySelectorAll('#battle input').forEach(input => input.addEventListener('input', calculate));
$('watch').addEventListener('click', event => {
  const button = event.target.closest?.('[data-watch-action]');
  if (!button) return;
  const index = Number(button.dataset.index);
  if (button.dataset.watchAction === 'load') window.loadWatch(index);
  if (button.dataset.watchAction === 'remove') window.removeWatch(index);
});
$('forecastList').addEventListener('click', event => {
  const button = event.target.closest?.('[data-forecast-action]');
  if (!button) return;
  const index = Number(button.dataset.index);
  if (button.dataset.forecastAction === 'choose') window.chooseForecast(index);
  if (button.dataset.forecastAction === 'remove') window.removeForecast(index);
});
$('platform').addEventListener('change', () => {
  applyPlatformProfile($('platform').value);
  calculate();
});
$('actualSold').addEventListener('change', syncActualSaleState);

$('saveRules').onclick = () => {
  STORE.setRules({
    minProfit: num('ruleProfit'),
    minRoi: num('ruleRoi') / 100,
    maxRisk: clamp(num('ruleRisk'), 1, 5),
    minDataQuality: clamp(num('ruleQuality'), 1, 5)
  });
  calculate();
};

$('saveSettings').onclick = () => {
  settings = STORE.setSettings({
    currency: $('currency').value,
    defaultPlatformId: $('defaultPlatform').value
  });
  renderSettings();
  calculate();
  $('settingsStatus').textContent = 'Einstellungen wurden nur auf diesem Gerät gespeichert.';
};

$('save').onclick = () => {
  if (!canSaveDeal()) return;
  STORE.addEstimate(current);
  renderStoredData();
};

$('copy').onclick = async () => {
  const text = `DINAVO ${current.product || 'Deal'}: ${current.score}/100 · ${current.verdict} · Gewinn ${eur(current.profit)} · ROI ${current.roi.toFixed(1)}%`;
  try { await navigator.clipboard.writeText(text); } catch (_) {}
};

$('share').onclick = async () => {
  const params = new URLSearchParams({
    product: current.product,
    buy: current.buy,
    sell: current.sell,
    platformId: current.platformId,
    feePercent: current.feePercent,
    feeFixed: current.feeFixed,
    shipping: current.shipping,
    costsExtra: current.costsExtra,
    sold: current.sold,
    active: current.active,
    comps: current.comps,
    certainty: current.certainty,
    risk: current.risk,
    target: current.target,
    days: current.days
  });
  const url = `${location.origin}${location.pathname}#deal=${encodeURIComponent(params.toString())}`;
  const text = `DINAVO ${current.product || 'Deal'}: ${current.score}/100 · ${current.verdict}`;
  if (navigator.share) {
    try { await navigator.share({ title: 'DINAVO DealCheck', text, url }); } catch (_) {}
  } else {
    try { await navigator.clipboard.writeText(url); } catch (_) {}
  }
};

$('exportJson').onclick = () => download(
  'dinavo-backup.json',
  JSON.stringify(STORE.exportData(), null, 2),
  'application/json'
);

$('exportCsv').onclick = () => {
  const rows = [
    ['Produkt', 'Plattform', 'Einkauf', 'Verkauf', 'Gebühr', 'Versand', 'Weitere Kosten', 'Gesamtkosten', 'Score', 'Signal', 'ROI', 'Datenqualität'],
    ...getWatch().map(deal => [
      deal.product, platformLabel(deal.platformId), deal.buy, deal.sell, deal.feeAmount, deal.shipping,
      deal.costsExtra, deal.costs, deal.score, deal.verdict, Number(deal.roi || 0).toFixed(1), deal.quality
    ])
  ];
  download('dinavo-watchlist.csv', `\ufeff${rows.map(row => row.map(csv).join(';')).join('\n')}`, 'text/csv;charset=utf-8');
};

$('importJson').onclick = () => $('importFile').click();
$('importFile').onchange = async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const result = STORE.importData(payload);
    if (result.valid === false) throw new Error('Kein DINAVO-Backup');
    renderStoredData();
    calculate();
  } catch (_) {
    alert('Backup konnte nicht gelesen werden.');
  } finally {
    event.target.value = '';
  }
};

$('clearWatch').onclick = () => {
  if (!confirm('Alle offenen, lokal gespeicherten Deals wirklich löschen?')) return;
  STORE.getOpenDeals().forEach(deal => STORE.removeDeal(deal.id));
  renderStoredData();
};

$('saveForecast').onclick = () => {
  if (!canSaveDeal()) return;
  const forecast = STORE.addEstimate(current);
  renderStoredData();
  $('outcomeHint').textContent = `Erwartung lokal vorgemerkt: ${forecast.name || 'Deal'}`;
};

$('saveOutcome').onclick = () => {
  const id = $('selectedForecast').value;
  const forecast = getForecasts().find(item => item.id === id);
  if (!forecast) {
    $('outcomeHint').textContent = 'Bitte zuerst eine vorgemerkte Erwartung auswählen.';
    return;
  }
  const sold = $('actualSold').value === 'true';
  const actualDays = num('actualDays');
  const actualMinutes = num('actualMinutes');
  if (actualDays < 1) {
    $('outcomeHint').textContent = 'Bitte tatsächliche Verkaufstage eintragen.';
    return;
  }
  if (actualMinutes < 1) {
    $('outcomeHint').textContent = 'Bitte deinen Arbeitsaufwand in Minuten eintragen.';
    return;
  }
  const saved = STORE.closeDeal(id, {
    closedAt: new Date().toISOString(),
    sold,
    sell: sold ? num('actualSell') : 0,
    costs: num('actualCost'),
    days: actualDays,
    minutes: actualMinutes,
    note: $('actualNote').value.trim()
  });
  if (!saved) {
    $('outcomeHint').textContent = 'Das Ergebnis konnte nicht gespeichert werden.';
    return;
  }
  $('selectedForecast').value = '';
  renderStoredData();
  calculate();
  $('outcomeHint').textContent = 'Tatsächliches Ergebnis wurde nur lokal gespeichert.';
};

$('exportOutcomes').onclick = () => {
  const rows = [
    ['Produkt', 'Plattform', 'Verkauft', 'Erwarteter Verkauf', 'Tatsächlicher Verkauf', 'Erwarteter Gewinn', 'Tatsächlicher Gewinn', 'Erwartete Tage', 'Tatsächliche Tage', 'Minuten', 'Stundenlohn', 'Notiz'],
    ...getOutcomes().map(outcome => [
      outcome.product, platformLabel(outcome.platformId), outcome.sold ? 'Ja' : 'Nein', outcome.expectedSell,
      outcome.actualSell, outcome.expectedProfit, outcome.actualProfit, outcome.expectedDays, outcome.actualDays,
      outcome.actualMinutes, Number(outcome.actualHourlyRate || 0).toFixed(2), outcome.note
    ])
  ];
  download('dinavo-ergebnisse.csv', `\ufeff${rows.map(row => row.map(csv).join(';')).join('\n')}`, 'text/csv;charset=utf-8');
};

const legalIds = new Set(['imprint', 'privacy', 'terms', 'liability']);
function openLegal(id) {
  document.querySelectorAll('.legalPage').forEach(page => page.classList.toggle('open', page.id === id));
}
function routeLegalHash() {
  const id = location.hash.slice(1);
  if (legalIds.has(id)) openLegal(id);
}
document.querySelectorAll('[data-legal]').forEach(button => {
  button.onclick = () => {
    openLegal(button.dataset.legal);
    location.hash = button.dataset.legal;
  };
});
window.addEventListener('hashchange', routeLegalHash);

$('clearAllData').onclick = () => {
  if (!confirm('Wirklich alle lokal gespeicherten Deals, Ergebnisse, Faktoren, Regeln und Einstellungen löschen?')) return;
  STORE.clearAllData();
  settings = STORE.getSettings();
  const rules = getRules();
  $('ruleProfit').value = rules.minProfit;
  $('ruleRoi').value = Math.round(rules.minRoi * 100);
  $('ruleRisk').value = rules.maxRisk;
  $('ruleQuality').value = rules.minDataQuality;
  $('defaultPlatform').value = settings.defaultPlatformId;
  applyPlatformProfile(settings.defaultPlatformId);
  renderStoredData();
  calculate();
  $('privacyDeleteStatus').textContent = 'Alle DINAVO-Daten wurden auf diesem Gerät gelöscht.';
};

const query = new URLSearchParams(location.search);
let shared = new URLSearchParams();
if (location.hash.startsWith('#deal=')) {
  try { shared = new URLSearchParams(decodeURIComponent(location.hash.slice(6))); } catch (_) {}
}
const incoming = shared.size ? shared : query;
const sharedFields = [
  'product', 'buy', 'sell', 'platformId', 'platform', 'feePercent', 'feeFixed', 'shipping',
  'costsExtra', 'cost', 'sold', 'active', 'comps', 'certainty', 'risk', 'target', 'days'
];
const hasSharedDeal = sharedFields.some(key => incoming.has(key));

if (hasSharedDeal) {
  const incomingPlatform = incoming.get('platformId') || incoming.get('platform') || (incoming.has('cost') ? 'custom' : settings.defaultPlatformId);
  applyPlatformProfile(incomingPlatform);
  ['product', 'buy', 'sell', 'feePercent', 'feeFixed', 'shipping', 'costsExtra', 'sold', 'active', 'comps', 'certainty', 'risk', 'target', 'days'].forEach(key => {
    if (incoming.has(key) && $(key)) $(key).value = incoming.get(key);
  });
  if (incoming.has('feePercent')) {
    const sharedRate = Math.max(0, Number(incoming.get('feePercent')) || 0);
    $('feePercent').value = sharedRate <= 1 ? round(sharedRate * 100, 2) : sharedRate;
  }
  if (!incoming.has('costsExtra') && incoming.has('cost')) $('costsExtra').value = incoming.get('cost');
} else if (STORE.getDeals().length === 0) {
  fillDemoDeal();
} else {
  $('product').value = '';
  $('buy').value = '';
  $('sell').value = '';
}

const rules = getRules();
$('ruleProfit').value = rules.minProfit;
$('ruleRoi').value = Math.round(rules.minRoi * 100);
$('ruleRisk').value = rules.maxRisk;
$('ruleQuality').value = rules.minDataQuality;
syncActualSaleState();
renderStoredData();
calculate();
routeLegalHash();
