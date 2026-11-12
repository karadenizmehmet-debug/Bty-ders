/* Sürüm etiketi: düzeltmede +0.0.1, yeni içerikte +0.1 artırılır (giriş sayfasında ve uygulamaların altında görünür). */
const SURUM="v1.16";
/* Koyu/açık tema: varsayılan koyu. Seçim bu cihazda "bty-tema" anahtarında tutulur. © Mehmet Karadeniz, 2026-2027 */
(function(){var K="bty-tema",R=document.documentElement;
function oku(){try{return localStorage.getItem(K)}catch(e){return null}}
function uygula(t){if(t==="light")R.setAttribute("data-theme","light");else R.removeAttribute("data-theme")}
uygula(oku());
window.btyTemaDugme=function(b){if(!b)return;
 function ciz(){var a=R.getAttribute("data-theme")==="light",m=a?"Koyu moda geç":"Açık moda geç";b.textContent=a?"🌙":"☀️";b.title=m;b.setAttribute("aria-label",m)}
 b.onclick=function(){var yeni=R.getAttribute("data-theme")==="light"?"dark":"light";uygula(yeni);try{localStorage.setItem(K,yeni)}catch(e){}ciz()};ciz()}
/* Adres paylaş düğmesi: önce sistem paylaşımı, olmazsa adresi panoya kopyalar. */
window.btyPaylasDugme=function(b){if(!b)return;var P="📤";
 function kopya(u){try{var t=document.createElement("textarea");t.value=u;t.style.cssText="position:fixed;opacity:0;top:0;left:0";document.body.appendChild(t);t.select();var ok=document.execCommand("copy");document.body.removeChild(t);return ok}catch(e){return false}}
 function tamam(){b.textContent="✔";b.title="Adres kopyalandı";setTimeout(function(){b.textContent=P;b.title="Adresi paylaş"},1800)}
 b.textContent=P;b.title="Adresi paylaş";b.setAttribute("aria-label","Adresi paylaş");
 b.onclick=function(){var u=location.href.split(/[?#]/)[0];
  if(navigator.share){navigator.share({title:document.title,url:u}).catch(function(){});return}
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(u).then(tamam,function(){if(kopya(u))tamam()});else if(kopya(u))tamam()}};
})();
