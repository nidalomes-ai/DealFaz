'use strict';
(()=>{
  const simple=document.createElement('script');
  simple.src='/simple-ui.js';
  simple.defer=true;
  document.head.appendChild(simple);

  const PIXEL='https://iosghttnctdaociwltos.supabase.co/functions/v1/dealfaz-pixel';
  const qs=new URLSearchParams(location.search);
  const source=(qs.get('utm_source')||'direct').slice(0,80);
  const campaign=(qs.get('utm_campaign')||'organic').slice(0,80);
  function hit(event,content){
    try{
      const u=new URL(PIXEL);
      u.searchParams.set('event',event);
      u.searchParams.set('content',content);
      u.searchParams.set('utm_source',source);
      u.searchParams.set('utm_campaign',campaign);
      const img=new Image();
      img.referrerPolicy='no-referrer';
      img.src=u.toString();
    }catch{}
  }
  function syncPausedAffiliateState(){
    const links=[...document.querySelectorAll('#marketLinks a')];
    const amazon=links.find(a=>(a.textContent||'').toLowerCase().includes('amazon'));
    if(amazon){
      const strong=amazon.querySelector('strong');
      if(strong)strong.textContent='Amazon';
      amazon.rel='nofollow noopener noreferrer';
    }
    const markets=document.getElementById('markets');
    const notice=markets?.querySelector('.mini');
    if(notice)notice.innerHTML='<strong>Hinweis:</strong> Affiliate-Monetarisierung ist derzeit deaktiviert. Die Marktlinks dienen ausschließlich der eigenen Recherche.';
    const legal=document.getElementById('recht');
    const affiliate=[...legal?.querySelectorAll('p')||[]].find(p=>(p.textContent||'').includes('Affiliate-Transparenz'));
    if(affiliate)affiliate.innerHTML='<strong>Affiliate-Status:</strong> Affiliate-Monetarisierung ist derzeit deaktiviert. Plattformnamen werden nur beschreibend verwendet; eine Partnerschaft wird nur behauptet, wenn sie tatsächlich besteht.';
  }
  hit('direct_pageview','home');
  requestAnimationFrame(syncPausedAffiliateState);
  setTimeout(syncPausedAffiliateState,100);
  document.addEventListener('click',e=>{
    const a=e.target.closest?.('#marketLinks a');
    if(!a)return;
    const t=(a.textContent||'').toLowerCase();
    let content='';
    if(t.includes('amazon'))content='amazon';
    else if(t.includes('kleinanzeigen'))content='kleinanzeigen';
    else if(t.includes('idealo'))content='idealo';
    else if(t.includes('google'))content='google_shopping';
    else if(t.includes('ebay'))content='ebay';
    if(content)hit('marketplace_click',content);
  },{capture:true});
})();
