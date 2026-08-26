'use strict';
(()=>{
  const PIXEL='https://iosghttnctdaociwltos.supabase.co/functions/v1/dealfaz-pixel';
  const AMAZON_TAG='dealfaz-21';
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
  function directAmazonUrl(){
    const u=new URL('https://www.amazon.de/s');
    const q=(document.getElementById('product')?.value||'').trim().slice(0,120);
    if(q)u.searchParams.set('k',q);
    u.searchParams.set('tag',AMAZON_TAG);
    return u.toString();
  }
  hit('direct_pageview','home');
  document.addEventListener('click',e=>{
    const a=e.target.closest?.('#marketLinks a');
    if(!a)return;
    const t=(a.textContent||'').toLowerCase();
    let content='';
    if(t.includes('amazon')){
      content='amazon';
      a.href=directAmazonUrl();
      a.rel='nofollow sponsored noopener noreferrer';
    }
    else if(t.includes('kleinanzeigen'))content='kleinanzeigen';
    else if(t.includes('idealo'))content='idealo';
    else if(t.includes('google'))content='google_shopping';
    else if(t.includes('ebay'))content='ebay';
    if(content)hit('marketplace_click',content);
  },{capture:true});
})();
