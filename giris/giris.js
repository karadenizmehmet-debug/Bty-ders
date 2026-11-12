/* Giriş sayfası · ders ve yazılı seçimi. © Mehmet Karadeniz, 2026-2027 */
document.body.insertAdjacentHTML("afterbegin",`<header><h1>💻 BTY Yazılıya Hazırlık</h1><span class="ver" id="ver"></span><button class="btn" id="geri" hidden>◀ Dersler</button><button class="btn" id="paylas"></button><button class="btn" id="tema"></button><button class="btn" id="fs" title="Tam ekran" aria-label="Tam ekran">⛶</button></header>
<main id="ana"></main>
<footer>© Mehmet Karadeniz, 2026-2027</footer>`);
(function(){
try{btyTemaDugme(document.getElementById("tema"));btyPaylasDugme(document.getElementById("paylas"))}catch(e){}
try{document.getElementById("ver").textContent=SURUM}catch(e){}
const ana=document.getElementById("ana"),geri=document.getElementById("geri");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
function dersler(){
 geri.hidden=true;document.title="BTY Yazılıya Hazırlık";
 ana.innerHTML=`<h2>Hangi ders?</h2><p class="sub">Dersini seç, sonra hazırlanacağın yazılıyı seç.</p><div class="grid">`+
 DERSLER.map(d=>`<a class="card" href="#${esc(d.id)}"><div class="em">${d.emoji}</div><b>${esc(d.ad)}</b><span>${esc(d.alt)}</span><div class="st">Konu özeti, örnek sorular</div></a>`).join("")+`</div>`}
function yazililar(d){
 geri.hidden=false;document.title=d.ad+" · "+d.alt;
 ana.innerHTML=`<h2>${d.emoji} ${esc(d.ad)} · ${esc(d.alt)}</h2><p class="sub">Hangi yazılıya hazırlanıyorsun?</p><div class="grid yz">`+
 YAZILILAR.map(y=>d.hazir[y.id]
  ?`<a class="card" href="dersler/${esc(d.id)}/${esc(y.id)}/"><div class="em">📝</div><b>${esc(y.ad)}</b><span>Konu özeti, sözlük ve sorular</span><div class="st">▶ Başla</div></a>`
  :`<div class="card off" aria-disabled="true"><div class="em">⏳</div><b>${esc(y.ad)}</b><span>Henüz hazır değil</span><div class="st">Yakında</div></div>`).join("")+`</div>`}
function goster(){const id=decodeURIComponent(location.hash.slice(1)),d=DERSLER.find(x=>x.id===id);d?yazililar(d):dersler();scrollTo(0,0)}
geri.onclick=()=>{location.hash=""};
addEventListener("hashchange",goster);goster();
document.getElementById("fs").onclick=()=>{const d=document,e=d.documentElement;try{const on=d.fullscreenElement||d.webkitFullscreenElement;const p=on?(d.exitFullscreen||d.webkitExitFullscreen).call(d):(e.requestFullscreen||e.webkitRequestFullscreen).call(e);if(p&&p.catch)p.catch(()=>{})}catch(x){}};
})();
