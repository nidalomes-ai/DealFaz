import fs from 'node:fs';

const path = 'index.html';
const source = fs.readFileSync(path, 'utf8');
const startMarker = "$('exportCsv').onclick=()=>{";
const endMarker = "\n$('clearWatch').onclick=";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);

if (start < 0 || end < 0 || source.indexOf(startMarker, start + 1) >= 0) {
  throw new Error('Expected one exact CSV export section; refusing broad rewrite');
}

const hardened = `$('exportCsv').onclick=()=>{const safeText=v=>{const s=String(v??'');return /^[=+\\-@\\t\\r]/.test(s)?"'"+s:s},rows=[['Produkt','Einkauf','Verkauf','Kosten','DealScore','Signal','ROI','Datenqualität'],...getWatch().map(d=>[safeText(d.product),d.buy,d.sell,d.cost,d.score,d.verdict,Number(d.roi).toFixed(2),d.quality])],csv='\\ufeff'+rows.map(r=>r.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(';')).join('\\n'),blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='dealfaz-watchlist.csv';a.click();setTimeout(()=>URL.revokeObjectURL(u),500)};`;

const next = source.slice(0, start) + hardened + source.slice(end);
if (!next.includes('safeText(d.product)')) throw new Error('CSV hardening verification failed');
fs.writeFileSync(path, next, 'utf8');
console.log('CSV export hardened without rewriting unrelated frontend code');
