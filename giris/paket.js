/* ============================================================
   BTY Ders · Çevrimdışı paket (tek HTML dosyası)
   Giriş sayfasının altındaki "HTML indir" düğmesi şifre sorar, sitedeki
   tüm dosyaları toplayıp internetsiz açılabilen tek bir .html üretir.
   Ders sayfalarındaki PDF bölümü de aynı paketi window.BTY_PAKET_INDIR(kök)
   ile indirir (PDF bölümü zaten şifreyle açıldığı için orada ayrıca sorulmaz).
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
(function(){
"use strict";
if(window.BTY_PAKET)return;              /* indirilen dosyanın içinde düğme gösterilmez */
const PWH="cf93af25";
const hash=s=>{let x=0x811c9dc5;for(const c of s){x^=c.codePointAt(0);x=Math.imul(x,0x01000193)>>>0}return x.toString(16)};
const $=s=>document.querySelector(s);
/* <script> içine gömülen metin, etiketi erken kapatmasın */
const guvenli=t=>t.replace(/<\/(script)/gi,"<\\/$1").replace(/<!--/g,"<\\!--");
const dize=t=>guvenli(JSON.stringify(t));

/* ---------- düğme ve şifre penceresi ---------- */
const st=document.createElement("style");
st.textContent=`.pk{display:inline-block;margin-top:10px;border:1px solid #ffffff33;background:none;color:inherit;border-radius:20px;padding:6px 14px;font:inherit;font-size:12px;cursor:pointer}
.pk:hover{background:#ffffff14}
#pkw{position:fixed;inset:0;background:#000a;display:grid;place-items:center;z-index:50;padding:16px}
#pkw .b{background:#1b1f3b;border:2px solid #ffffff26;border-radius:20px;padding:22px 24px;display:flex;flex-direction:column;gap:12px;width:min(420px,100%);color:#f3f4ff}
#pkw .t{font-size:20px;font-weight:800}#pkw .a{font-size:14px;color:#c7c9e8;line-height:1.4}
#pkw input{font-size:26px;letter-spacing:8px;text-align:center;padding:8px;border-radius:12px;border:2px solid #ffffff33;background:#262b52;color:#f3f4ff}
#pkw .e{color:#ff6b9d;font-weight:700;font-size:14px}
#pkw .r{display:flex;gap:10px;justify-content:flex-end}
#pkw button{border:0;border-radius:30px;padding:10px 18px;font-size:16px;font-weight:800;color:#fff;background:linear-gradient(90deg,#ff6b9d,#8a5cff);cursor:pointer}
#pkw button.v{background:#ffffff1c}#pkw button:disabled{opacity:.5}`;
document.head.appendChild(st);
window.BTY_PAKET_INDIR=indir;
const ft=document.querySelector("footer");
if(ft&&typeof DERSLER!=="undefined"){const b=document.createElement("button");b.className="pk";b.textContent="⬇ HTML indir (internetsiz açmak için)";b.onclick=ac;ft.appendChild(document.createElement("br"));ft.appendChild(b)}

function ac(){
 const w=document.createElement("div");w.id="pkw";
 w.innerHTML=`<div class="b"><div class="t">⬇ HTML olarak indir</div><div class="a">Tüm dersler tek bir dosyada iner. İnternet olmadan, dosyaya çift tıklayarak açılır.</div>
 <input type="password" inputmode="numeric" autocomplete="off" aria-label="Şifre" placeholder="Şifre"><div class="e" hidden>Şifre yanlış, tekrar deneyin.</div>
 <div class="r"><button class="v" data-k="0">Vazgeç</button><button data-k="1">İndir</button></div></div>`;
 document.body.appendChild(w);const i=w.querySelector("input"),e=w.querySelector(".e"),ok=w.querySelector('[data-k="1"]');setTimeout(()=>i.focus(),50);
 const kapat=()=>w.remove();
 const dene=async()=>{if(hash("bty-ders:"+i.value.trim())!==PWH){e.hidden=false;e.textContent="Şifre yanlış, tekrar deneyin.";i.value="";i.focus();return}
  ok.disabled=true;ok.textContent="Hazırlanıyor…";e.hidden=true;
  try{await indir("");kapat()}catch(x){e.hidden=false;e.textContent="Hazırlanamadı. İnternet bağlantısını kontrol edip tekrar deneyin.";ok.disabled=false;ok.textContent="İndir"}};
 ok.onclick=dene;w.querySelector('[data-k="0"]').onclick=kapat;i.onkeydown=k=>{if(k.key=="Enter")dene();if(k.key=="Escape")kapat()};
 w.onclick=k=>{if(k.target===w)kapat()}}

/* ---------- paketleme ---------- */
async function indir(kok){
 kok=kok||"";
 const al=async yol=>{const r=await fetch(kok+yol+"?t="+Date.now(),{cache:"no-store"});if(!r.ok)throw new Error(yol);return r.text()};
 const ad=["surum.js","katalog.js","giris/giris.css","giris/giris.js","motor/motor.css","motor/motor.js","motor/gorsel.js","motor/istasyon.js","motor/lib/pdfmake.min.js","motor/lib/vfs_fonts.js"];
 const F={};await Promise.all(ad.map(async a=>F[a]=await al(a)));
 const V={},IS={};
 for(const d of DERSLER)for(const y of YAZILILAR)if(d.hazir[y.id]){const k=d.id+"/"+y.id;V[k]=await al("dersler/"+k+"/veri.js");try{IS[k]=await al("dersler/"+k+"/istasyon.js")}catch(x){}}
 const surum=(F["surum.js"].match(/SURUM\s*=\s*"([^"]+)"/)||[])[1]||"";
 const html=`<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="author" content="Mehmet Karadeniz, 2026-2027"><meta name="copyright" content="Mehmet Karadeniz, 2026-2027">
<title>BTY Yazılıya Hazırlık (${surum})</title>
<style>${F["giris/giris.css"]}
#ders{position:fixed;inset:0;width:100%;height:100%;border:0;z-index:40;background:#0f1226}</style>
</head><body style="background:#0f1226;color:#f3f4ff">
<!-- Çevrimdışı paket: ${new Date().toLocaleString("tr-TR")} · ${surum} · © Mehmet Karadeniz, 2026-2027 -->
<script>window.BTY_PAKET=1;${guvenli(F["surum.js"])}</script>
<script>${guvenli(F["katalog.js"])}</script>
<script>${guvenli(F["motor/lib/pdfmake.min.js"])}</script>
<script>${guvenli(F["motor/lib/vfs_fonts.js"])}</script>
<script>
var PAKET={css:${dize(F["motor/motor.css"])},surum:${dize(F["surum.js"])},gorsel:${dize(F["motor/gorsel.js"])},istasyon:${dize(F["motor/istasyon.js"])},ist:{${Object.keys(IS).map(k=>JSON.stringify(k)+":"+dize(IS[k])).join(",")}},motor:${dize(F["motor/motor.js"])},veri:{${Object.keys(V).map(k=>JSON.stringify(k)+":"+dize(V[k])).join(",")}}};
</script>
<script>${guvenli(F["giris/giris.js"])}</script>
<script>
/* Ders sayfaları bu dosyanın içinde, tam ekran bir çerçevede açılır */
(function(){
 var E="<"+"/script>",fr=null;
 function sayfa(k){return "<!doctype html><html lang=\\"tr\\"><head><meta charset=\\"utf-8\\"><meta name=\\"viewport\\" content=\\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\\"><style>"+PAKET.css+"</style></head><body style=\\"background:#0f1226;color:#f3f4ff\\">"+
  "<script>try{window.pdfMake=parent.pdfMake}catch(e){}"+E+"<script>"+guv(PAKET.surum)+E+"<script>"+guv(PAKET.veri[k])+E+"<script>"+guv(PAKET.gorsel)+E+"<script>"+guv(PAKET.istasyon)+E+(PAKET.ist[k]?"<script>"+guv(PAKET.ist[k])+E:"")+"<script>"+guv(PAKET.motor)+E+"</body></html>"}
 function guv(t){return t.replace(/<\\/(script)/gi,"<\\\\/$1")}
 function ac(k){kapat();fr=document.createElement("iframe");fr.id="ders";fr.setAttribute("allow","fullscreen");fr.setAttribute("allowfullscreen","");
  fr.srcdoc=sayfa(k);document.body.appendChild(fr);try{fr.focus()}catch(e){}}
 function kapat(){if(fr){fr.remove();fr=null}}
 window.BTY_EV=function(){kapat()};
 document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href^="dersler/"]');if(!a)return;e.preventDefault();
  var k=a.getAttribute("href").replace(/^dersler\\//,"").replace(/\\/$/,"");if(PAKET.veri[k])ac(k)},true);
})();
</script>
</body></html>`;
 const blob=new Blob([html],{type:"text/html;charset=utf-8"}),u=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=u;a.download="BTY_Yazili_Hazirlik_"+surum+".html";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),5000)}
})();
