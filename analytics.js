(function () {
  'use strict';

  const POSTHOG_PROJECT_TOKEN = 'phc_rFgxJmxxvwc6zPwq393rpTSYTgJZDKGzsoeLYebFPNxd';
  const CONSENT_KEY = 'dealfaz:v1:analytics-consent';
  const CAPTURE_URL = 'https://eu.i.posthog.com/i/v0/e/';
  const TOKEN_PATTERN = /^phc_[A-Za-z0-9]{32,128}$/;
  // Geteilte Deals enthalten Eingaben im Fragment und werden nie gemessen.
  const SENSITIVE_DEAL_NAVIGATION = location.hash.startsWith('#deal=');
  let sessionConsent = null;
  let captured = false;

  const configured = TOKEN_PATTERN.test(POSTHOG_PROJECT_TOKEN);
  const consentPanel = document.getElementById('analyticsConsent');
  const settingsButton = document.getElementById('analyticsSettings');
  const acceptButton = document.getElementById('analyticsAccept');
  const rejectButton = document.getElementById('analyticsReject');

  function readConsent() {
    try {
      const value = localStorage.getItem(CONSENT_KEY);
      return value === 'granted' || value === 'denied' ? value : sessionConsent;
    } catch (_) { return sessionConsent; }
  }

  function writeConsent(value) {
    sessionConsent = value;
    try { localStorage.setItem(CONSENT_KEY, value); } catch (_) {}
  }

  function showPanel() {
    if (!configured || !consentPanel) return;
    consentPanel.hidden = false;
    rejectButton?.focus();
  }

  function hidePanel() {
    if (consentPanel) consentPanel.hidden = true;
  }

  function ephemeralId() {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    return `page-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  function capturePageview() {
    if (!configured || captured || SENSITIVE_DEAL_NAVIGATION || readConsent() !== 'granted') return false;
    captured = true;
    fetch(CAPTURE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: POSTHOG_PROJECT_TOKEN,
        event: '$pageview',
        distinct_id: ephemeralId(),
        properties: {
          '$current_url': `${location.origin}${location.pathname}`,
          '$pathname': location.pathname,
          '$process_person_profile': false
        }
      }),
      keepalive: true,
      credentials: 'omit',
      referrerPolicy: 'no-referrer'
    }).catch(() => {});
    return true;
  }

  function grantConsent() {
    writeConsent('granted');
    hidePanel();
    capturePageview();
  }

  function denyConsent() {
    writeConsent('denied');
    hidePanel();
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
    if (consent === 'granted') capturePageview();
    else if (consent === null) showPanel();
  }

  window.DINAVO_ANALYTICS = Object.freeze({ configured, consent: readConsent, openSettings: showPanel });
  init();
})();
