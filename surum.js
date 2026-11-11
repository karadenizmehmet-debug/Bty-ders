/* Sürüm etiketi: düzeltmede +0.0.1, yeni içerikte +0.1 artırılır (giriş sayfasında ve uygulamaların altında görünür). */
const SURUM="v1.15";
/* Koyu/açık tema: varsayılan koyu. Seçim bu cihazda "bty-tema" anahtarında tutulur. © Mehmet Karadeniz, 2026-2027 */
(function(){var K="bty-tema",R=document.documentElement;
function oku(){try{return localStorage.getItem(K)}catch(e){return null}}
function uygula(t){if(t==="light")R.setAttribute("data-theme","light");else R.removeAttribute("data-theme")}
uygula(oku());
window.btyTemaDugme=function(b){if(!b)return;
 function ciz(){var a=R.getAttribute("data-theme")==="light",m=a?"Koyu moda geç":"Açık moda geç";b.textContent=a?"🌙":"☀️";b.title=m;b.setAttribute("aria-label",m)}
 b.onclick=function(){var yeni=R.getAttribute("data-theme")==="light"?"dark":"light";uygula(yeni);try{localStorage.setItem(K,yeni)}catch(e){}ciz()};ciz()}
})();
