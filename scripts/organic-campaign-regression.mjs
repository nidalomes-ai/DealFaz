import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const paths = {
  html: new URL('index.html', root),
  app: new URL('app.js', root),
  campaign: new URL('ORGANIC-BETA-CAMPAIGN.md', root),
  feedSvg: new URL('social/dinavo-feed.svg', root),
  storySvg: new URL('social/dinavo-story.svg', root),
  feedPng: new URL('social/dinavo-feed.png', root),
  storyPng: new URL('social/dinavo-story.png', root),
  monetizationLock: new URL('MONETIZATION_DISABLED', root)
};

await Promise.all(Object.values(paths).map(path => access(path)));
const [html, app, campaign, feed, story] = await Promise.all([
  readFile(paths.html, 'utf8'),
  readFile(paths.app, 'utf8'),
  readFile(paths.campaign, 'utf8'),
  readFile(paths.feedSvg, 'utf8'),
  readFile(paths.storySvg, 'utf8')
]);

assert.match(html, /id="shareBeta"/, 'The homepage needs a generic beta share action');
assert.match(html, /✓ Kostenlos[\s\S]*✓ Ohne Anmeldung[\s\S]*✓ Daten bleiben im Browser/, 'The campaign trust points must be visible');
assert.match(app, /const url = `\$\{location\.origin\}\$\{location\.pathname\}`;/, 'The beta share URL must remain clean');
assert.doesNotMatch(app, /shareBeta[\s\S]{0,900}(utm_|#deal=)/i, 'Generic beta sharing must not add tracking or deal data');

assert.match(campaign, /ausschließlich organische, unbezahlte Beiträge/);
assert.match(campaign, /Keine Gewinn- oder Verkaufsgarantie/);
assert.match(campaign, /https:\/\/dealfaz\.dealfaz-social\.workers\.dev\//);
assert.doesNotMatch(campaign, /([?&]|&amp;)tag=|dealfaz-21|amazon-adsystem|supabase\.co\/functions\/v1/i, 'Campaign material must not contain affiliate or tracking endpoints');

assert.match(feed, /width="1080" height="1350"/);
assert.match(story, /width="1080" height="1920"/);
for (const asset of [feed, story]) {
  assert.match(asset, /KOSTENLOSE BETA/);
  assert.match(asset, /keine Gewinn- oder Verkaufsgarantie/i);
  assert.doesNotMatch(asset, /®|garantierter Gewinn|sicher verkaufen/i);
}

console.log('organic campaign regression: ok');

