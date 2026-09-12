(function () {
  'use strict';

  const PRODUCTION_HOST = 'dealfaz.dealfaz-social.workers.dev';
  const COUNT_ENDPOINT = '/analytics-count';

  // Fallback-Hosts werden nicht gezählt; die Startseite lädt dieses Skript einmal.
  if (location.hostname !== PRODUCTION_HOST) return;

  // Leerer Same-Origin-Aufruf: keine Eingaben, URL-Parameter, Fragmente,
  // Referrer, Cookies oder dauerhaften Besucherkennungen werden übertragen.
  fetch(COUNT_ENDPOINT, {
    method: 'POST',
    body: null,
    keepalive: true,
    cache: 'no-store',
    credentials: 'omit',
    referrerPolicy: 'no-referrer'
  }).catch(() => {});
})();
