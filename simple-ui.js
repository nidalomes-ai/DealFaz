'use strict';
(()=>{
  const $=id=>document.getElementById(id);
  const n=id=>Math.max(0,Number($(id)?.value)||0);
  const eur=v=>Number(v||0).toLocaleString('de-DE',{style:'currency',currency:'EUR'});
  const shared=location.search.length>1||location.hash.startsWith('#deal=');

  if(!shared){
    if($('buy'))$('buy').value='';
    if($('sell'))$('sell').value='';
  }

  function paint(type){
    const el=$('verdict');
    if(!el)return;
    el.style.color=type==='good'?'#9be0b5':type==='bad'?'#ff9b9b':type==='warn'?'#ffe8a6':'#f7f9fc';
  }

  function updateSimple(){
    const product=$('product')?.value.trim()||'';
    const buy=n('buy'),sell=n('sell'),cost=n('cost');
    const sold=n('sold'),active=n('active'),comps=n('comps');
    const target=Math.max(0,n('target')||25);
    const profit=sell-buy-cost;
    const roi=buy?profit/buy*100:0;
    const evidence=sold+active+comps>0;
    const verdict=$('verdict'),summary=$('summary'),gate=$('gate'),counter=$('counterList');
    const scoreCard=$('score')?.closest('.heroNumbers > div');

    if(scoreCard)scoreCard.hidden=!evidence;
    if(!evidence){if($('score'))$('score').textContent='–';if($('quality'))$('quality').textContent='–';if($('sth'))$('sth').textContent='–';}

    if(!product||buy<=0||sell<=0){
      if(verdict)verdict.textContent='3 ANGABEN FEHLEN';
      if(summary)summary.textContent='Artikel, Einkaufspreis und Verkaufspreis eintragen.';
      if(gate)gate.hidden=true;
      if(counter)counter.innerHTML='<div class="counter"><b>Noch nicht fertig</b><span>Fülle oben die drei Felder aus.</span></div>';
      paint('neutral');
      return;
    }

    let text='';let type='warn';
    if(profit<=0){text='EHER NICHT';type='bad';}
    else if(evidence){
      const quality=parseInt($('quality')?.textContent||'0',10)||0;
      const score=parseInt($('score')?.textContent||'0',10)||0;
      if(quality<45){text='NOCH PRÜFEN';type='warn';}
      else if(score>=72){text='SIEHT GUT AUS';type='good';}
      else if(score>=45){text='PREIS PRÜFEN';type='warn';}
      else{text='EHER NICHT';type='bad';}
    }else if(roi>=target){text='RECHNET SICH';type='good';}
    else{text='PREIS PRÜFEN';type='warn';}

    if(verdict)verdict.textContent=text;
    if(summary)summary.textContent=profit>=0
      ?'Rechnerisch bleiben '+eur(profit)+' übrig.'
      :'Rechnerisch fehlen '+eur(Math.abs(profit))+'.';
    paint(type);

    if(gate){
      if(!evidence){gate.hidden=false;gate.textContent='Schnellcheck: nur gerechnet. Für mehr Sicherheit „Genauer prüfen“ öffnen.';}
      else if((parseInt($('quality')?.textContent||'0',10)||0)<45){gate.hidden=false;gate.textContent='Noch zu wenig Vergleichsdaten für eine sichere Einschätzung.';}
    }

    if(counter){
      const a=[];
      if(profit<=0)a.push(['Kein Gewinn','Verkaufspreis minus Einkauf und Kosten ist nicht positiv.']);
      if(profit>0&&roi<target)a.push(['Abstand eher klein','Für dein eingestelltes Ziel ist der Preis noch zu knapp.']);
      if(!evidence)a.push(['Markt noch nicht geprüft','Vergleiche echte Preise, bevor du kaufst.']);
      if(evidence&&(parseInt($('quality')?.textContent||'0',10)||0)<45)a.push(['Zu wenig Vergleiche','Mehr passende Vergleichspreise machen die Einschätzung besser.']);
      if(!a.length)a.push(['Keine große Warnung','Zustand, Echtheit, Gebühren und echte Verkaufspreise trotzdem prüfen.']);
      counter.innerHTML=a.slice(0,2).map(x=>'<div class="counter"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('');
    }
  }

  document.querySelectorAll('#check input').forEach(el=>el.addEventListener('input',()=>setTimeout(updateSimple,0)));
  setTimeout(updateSimple,0);
})();