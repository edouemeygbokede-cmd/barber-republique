/* Retour en haut de page à chaque chargement (utile dans l'aperçu artefact) */
(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual'}catch(e){}
function toTop(){if(location.hash)return;window.scrollTo(0,0);try{document.body.scrollIntoView({block:'start'})}catch(e){}}
toTop();window.addEventListener('load',toTop);window.addEventListener('pageshow',toTop);})();
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menu?.addEventListener('click',()=>{let o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o));menu.textContent=o?'✕':'☰'});const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));document.querySelectorAll('.contact-form form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;const d=new FormData(f);const note=document.querySelector('#form-note');
const msg=`Bonjour Barber République, je suis ${d.get('nom')} (${d.get('telephone')}${d.get('email')?', '+d.get('email'):''}). Prestation : ${d.get('service')}. ${d.get('message')}`;
const mobile=window.matchMedia('(pointer:coarse)').matches;
if(mobile){window.location.href='sms:+33626668169?&body='+encodeURIComponent(msg);note.textContent='Votre application SMS va s’ouvrir avec le message prêt : il ne reste plus qu’à appuyer sur Envoyer.';}
else{try{navigator.clipboard&&navigator.clipboard.writeText(msg).catch(()=>{})}catch(err){}note.innerHTML='Message copié. Envoyez-le par SMS au <a href="tel:+33626668169">06 26 66 81 69</a>, ou appelez directement le salon.';}
}));
