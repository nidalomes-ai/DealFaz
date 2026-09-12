const POSTHOG_PROJECT_TOKEN = 'phc_rFgxJmxxvwc6zPwq393rpTSYTgJZDKGzsoeLYebFPNxd';
const POSTHOG_CAPTURE_URL = 'https://eu.i.posthog.com/i/v0/e/';
const PUBLIC_ORIGIN = 'https://dealfaz.dealfaz-social.workers.dev';

function countPageview(request, context) {
  const url = new URL(request.url);
  const origin = request.headers.get('Origin');
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  if (request.method !== 'POST') return new Response(null, { status: 405 });
  if (url.origin !== PUBLIC_ORIGIN || origin !== PUBLIC_ORIGIN || (fetchSite && fetchSite !== 'same-origin')) {
    return new Response(null, { status: 403 });
  }

  // Der Besucher-Request wird nicht weitergeleitet. PostHog erhält nur eine
  // im Worker erzeugte Einmal-Kennung und den festen öffentlichen Seitenpfad.
  const forwarding = fetch(POSTHOG_CAPTURE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: POSTHOG_PROJECT_TOKEN,
      event: '$pageview',
      distinct_id: crypto.randomUUID(),
      properties: {
        '$current_url': `${PUBLIC_ORIGIN}/`,
        '$pathname': '/',
        '$process_person_profile': false,
        '$geoip_disable': true
      }
    })
  }).catch(() => {});
  context.waitUntil(forwarding);
  return new Response(null, {
    status: 204,
    headers: { 'Cache-Control': 'no-store' }
  });
}

export default {
  fetch(request, env, context) {
    const url = new URL(request.url);
    if (url.pathname === '/analytics-count') return countPageview(request, context);
    return env.ASSETS.fetch(request);
  }
};
