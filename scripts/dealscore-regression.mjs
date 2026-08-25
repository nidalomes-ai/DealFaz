import assert from 'node:assert/strict';

function deal({buy,sell,cost,sold,active,comps,certainty,risk,target=25,minQuality=50}) {
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const sample=sold+active;
  const sth=sample?sold/sample*100:0;
  let quality=Math.round(clamp(sample/40*45,0,45)+clamp(comps/8*30,0,30)+certainty/5*25);
  if(sample<5) quality=Math.min(quality,45);
  const profit=sell-buy-cost;
  const roi=buy>0?profit/buy*100:0;
  const margin=sell>0?profit/sell*100:0;
  const worst=sell*.85-buy-cost*1.15;
  let score=Math.round(clamp(clamp(roi/50*35,0,35)+clamp(sth/80*25,0,25)+(6-risk)/5*20+clamp(margin/30*20,0,20),0,100));
  if(profit<=0) score=Math.min(score,35);
  if(worst<0) score=Math.max(0,score-10);
  const raw=score>=72&&profit>0&&worst>=0?'KAUFEN':score>=45&&profit>0?'VERHANDELN':'LIEGEN LASSEN';
  const verdict=raw==='KAUFEN'&&quality<minQuality?'DATEN PRÜFEN':raw;
  const maxBuy=(sell-cost)/(1+target/100);
  return {score,quality,profit,roi,margin,worst,sth,raw,verdict,maxBuy};
}

const strong=deal({buy:50,sell:120,cost:10,sold:30,active:10,comps:8,certainty:5,risk:1});
assert.equal(strong.raw,'KAUFEN');
assert.ok(strong.score>=72);
assert.ok(strong.worst>=0);

const weakEvidence=deal({buy:20,sell:100,cost:5,sold:1,active:0,comps:1,certainty:2,risk:1,minQuality:50});
assert.ok(weakEvidence.quality<50);
if(weakEvidence.raw==='KAUFEN') assert.equal(weakEvidence.verdict,'DATEN PRÜFEN');

const loss=deal({buy:100,sell:90,cost:15,sold:20,active:5,comps:8,certainty:5,risk:1});
assert.ok(loss.profit<=0);
assert.ok(loss.score<=35);
assert.equal(loss.verdict,'LIEGEN LASSEN');

const risky=deal({buy:80,sell:130,cost:20,sold:5,active:20,comps:4,certainty:3,risk:5});
assert.ok(risky.score<100);
assert.ok(risky.maxBuy>=0);

console.log('DEALFAZ DealScore regression tests passed');
