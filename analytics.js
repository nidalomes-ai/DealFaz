'use strict';
(()=>{
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
  hit('direct_pageview','home');
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
