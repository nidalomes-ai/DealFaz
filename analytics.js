(function () {
  'use strict';

  // Öffentliche Cloudflare-Web-Analytics-Kennung aus „Manage Site“ einsetzen.
  // Ohne gültigen Wert bleibt die gesamte Reichweitenmessung automatisch aus.
  const CLOUDFLARE_TOKEN = '';
  const CONSENT_KEY = 'dealfaz:v1:analytics-consent';
  const BEACON_URL = 'https://static.cloudflareinsights.com/beacon.min.js';
  const TOKEN_PATTERN = /^[A-Za-z0-9_-]{16,128}$/;
  let sessionConsent = null;

  const configured = TOKEN_PATTERN.test(CLOUDFLARE_TOKEN);
  const consentPanel = document.getElementById('analyticsConsent');
  const settingsButton = document.getElementById('analyticsSettings');
  const acceptButton = document.getElementById('analyticsAccept');
  const rejectButton = document.getElementById('analyticsReject');

  function readConsent() {
    try {
      const value = localStorage.getItem(CONSENT_KEY);
      return value === 'granted' || value === 'denied' ? value : sessionConsent;
    } catch (_) {
      return sessionConsent;
    }
  }

  function writeConsent(value) {
    sessionConsent = value;
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // Ohne lokalen Speicher gilt die Entscheidung nur für diesen Seitenaufruf.
    }
  }

  function showPanel() {
    if (!configured || !consentPanel) return;
    consentPanel.hidden = false;
    acceptButton?.focus();
  }

  function hidePanel() {
    if (consentPanel) consentPanel.hidden = true;
  }

  function loadBeacon() {
    if (!configured || readConsent() !== 'granted') return false;
    if (document.querySelector('script[data-dinavo-analytics]')) return true;

    const script = document.createElement('script');
    script.src = BEACON_URL;
    script.defer = true;
    script.dataset.dinavoAnalytics = 'cloudflare';
    script.dataset.cfBeacon = JSON.stringify({ token: CLOUDFLARE_TOKEN });
    document.head.appendChild(script);
    return true;
  }

  function grantConsent() {
    writeConsent('granted');
    hidePanel();
    loadBeacon();
  }

  function denyConsent() {
    const beaconWasLoaded = Boolean(document.querySelector('script[data-dinavo-analytics]'));
    writeConsent('denied');
    hidePanel();
    if (beaconWasLoaded) location.reload();
  }

  function init() {
    if (!configured) {
      hidePanel();
      if (settingsButton) settingsButton.hidden = true;
      return;
    }

    if (settingsButton) settingsButton.hidden = false;
    acceptButton?.addEventListener('click', grantConsent);
    rejectButton?.addEventListener('click', denyConsent);
    settingsButton?.addEventListener('click', showPanel);

    const consent = readConsent();
    if (consent === 'granted') loadBeacon();
    else if (consent === null) showPanel();
  }

  window.DINAVO_ANALYTICS = Object.freeze({
    configured,
    consent: readConsent,
    openSettings: showPanel
  });

  init();
})();
