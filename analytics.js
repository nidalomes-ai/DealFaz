'use strict';
(()=>{
  const simple=document.createElement('script');
  simple.src='/simple-ui.js';
  simple.defer=true;
  document.head.appendChild(simple);

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
  }

  requestAnimationFrame(syncPausedAffiliateState);
  setTimeout(syncPausedAffiliateState,100);
})();
