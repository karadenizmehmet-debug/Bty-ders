/* ============================================================
   BTY Ders · Soru Görselleri
   Bir sorunun g alanı bu dosyadaki çizicilerle SVG'ye dönüşür.
   Aynı SVG hem tahtada hem PDF'te kullanılır.

   Türler:
   {tur:"tablo", veri:[[...],[...]], vurgu:{"B3":"#ffd166"}, formul:"=..", ad:"B6", gen:[80,60], basla:1}
       Hesap tablosu: sütun harfleri, satır numaraları, istenen hücreler renkli.
   {tur:"grafik", baslik:"..", etiket:[..], deger:[..], birim:"sayfa"}
       Sütun grafiği.
   {tur:"ses", izler:[{ad:"Konuşma",g:.35},{ad:"Müzik",g:.95}], isaret:{bas:.45,son:.55,yazi:"öksürük"}}
       Ses düzenleme programındaki izler (dalga biçimi).
   {tur:"sira", bloklar:["..",".."], baslik:".."}
       Zaman çizelgesinde sıralı parçalar.
   {tur:"cizim", liste:[{ad:"vr",yazi:"Zeynep"},...]}
       Kütüphanedeki çizimler (CIZIM nesnesi), altlarında kısa yazıyla.
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
(function(){
"use strict";
const F='font-family="Roboto, Inter, system-ui, sans-serif"';
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const harf=i=>String.fromCharCode(65+i);
const svg=(w,h,ic)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${ic}</svg>`;

/* ---------- HESAP TABLOSU ---------- */
function tablo(g){
 const V=g.veri,R=V.length,C=Math.max(...V.map(r=>r.length)),RH=26,HW=30,HH=22,FH=g.formul!=null?30:0;
 const W=g.gen||Array(C).fill(78),bas=g.basla||1;
 const tw=HW+W.reduce((a,b)=>a+b,0),th=FH+HH+R*RH;
 let o=`<rect x="0" y="0" width="${tw}" height="${th}" fill="#ffffff"/>`;
 if(FH){o+=`<rect x="0" y="0" width="${tw}" height="${FH-6}" fill="#f4f6fb" stroke="#b8bfd0"/>`+
  `<rect x="4" y="4" width="46" height="${FH-14}" fill="#fff" stroke="#b8bfd0"/><text x="27" y="${FH-14}" ${F} font-size="12" text-anchor="middle" fill="#333">${esc(g.ad||"")}</text>`+
  `<text x="60" y="${FH-14}" ${F} font-size="13" font-style="italic" fill="#555">fx</text><text x="80" y="${FH-14}" ${F} font-size="13" fill="#111">${esc(g.formul)}</text>`}
 let x=HW;o+=`<rect x="0" y="${FH}" width="${tw}" height="${HH}" fill="#e9ecf3"/>`;
 W.forEach((w,c)=>{o+=`<text x="${x+w/2}" y="${FH+15}" ${F} font-size="12" font-weight="bold" text-anchor="middle" fill="#555">${harf(c)}</text>`;x+=w});
 for(let r=0;r<R;r++){const y=FH+HH+r*RH;
  o+=`<rect x="0" y="${y}" width="${HW}" height="${RH}" fill="#e9ecf3"/><text x="${HW/2}" y="${y+17}" ${F} font-size="12" font-weight="bold" text-anchor="middle" fill="#555">${r+bas}</text>`;
  x=HW;for(let c=0;c<C;c++){const v=V[r][c]==null?"":String(V[r][c]),ad=harf(c)+(r+bas),fill=(g.vurgu&&g.vurgu[ad])||(r==0&&g.baslikSatiri!==false?"#dfe9ff":"#ffffff");
   o+=`<rect x="${x}" y="${y}" width="${W[c]}" height="${RH}" fill="${fill}" stroke="#c3c9d8" stroke-width="1"/>`;
   const num=/^-?[\d.,]+$/.test(v)||v.startsWith("#");
   if(v)o+=`<text x="${num?x+W[c]-6:x+6}" y="${y+17}" ${F} font-size="13" ${r==0&&g.baslikSatiri!==false?'font-weight="bold"':""} text-anchor="${num?"end":"start"}" fill="#111">${esc(v)}</text>`;
   x+=W[c]}}
 if(g.vurgu)Object.keys(g.vurgu).forEach(ad=>{const c=ad.charCodeAt(0)-65,r=+ad.slice(1)-bas,xx=HW+W.slice(0,c).reduce((a,b)=>a+b,0),yy=FH+HH+r*RH;
  o+=`<rect x="${xx}" y="${yy}" width="${W[c]}" height="${RH}" fill="none" stroke="#e8590c" stroke-width="2.5"/>`});
 o+=`<rect x=".5" y="${FH+.5}" width="${tw-1}" height="${th-FH-1}" fill="none" stroke="#9aa3b8"/>`;
 return svg(tw,th,o)}

/* ---------- SÜTUN GRAFİĞİ ---------- */
function grafik(g){
 const n=g.deger.length,bw=44,gap=22,L=40,T=g.baslik?30:12,H=150,w=L+n*(bw+gap)+gap,h=T+H+28,mx=Math.max(...g.deger)*1.15;
 const renk=["#4cc9f0","#ff6b9d","#2ee6a6","#ffd166","#8a5cff","#f4a261","#4895ef"];
 let o=`<rect width="${w}" height="${h}" fill="#fff"/>`;
 if(g.baslik)o+=`<text x="${w/2}" y="20" ${F} font-size="14" font-weight="bold" text-anchor="middle" fill="#222">${esc(g.baslik)}</text>`;
 const st=Math.ceil(mx/4/5)*5||1;
 for(let v=0;v<=mx;v+=st){const y=T+H-v/mx*H;o+=`<line x1="${L}" y1="${y}" x2="${w-6}" y2="${y}" stroke="#e3e6ee"/><text x="${L-6}" y="${y+4}" ${F} font-size="11" text-anchor="end" fill="#666">${v}</text>`}
 g.deger.forEach((v,i)=>{const x=L+gap+i*(bw+gap),bh=v/mx*H;
  o+=`<rect x="${x}" y="${T+H-bh}" width="${bw}" height="${bh}" rx="4" fill="${g.renk||renk[i%renk.length]}"/>`+
   (g.degerGoster===false?"":`<text x="${x+bw/2}" y="${T+H-bh-5}" ${F} font-size="12" font-weight="bold" text-anchor="middle" fill="#333">${v}</text>`)+
   `<text x="${x+bw/2}" y="${T+H+18}" ${F} font-size="12" text-anchor="middle" fill="#333">${esc(g.etiket[i])}</text>`});
 o+=`<line x1="${L}" y1="${T}" x2="${L}" y2="${T+H}" stroke="#888"/><line x1="${L}" y1="${T+H}" x2="${w-6}" y2="${T+H}" stroke="#888"/>`;
 return svg(w,h,o)}

/* ---------- SES İZLERİ ---------- */
function ses(g){
 const w=420,LW=78,IH=58,T=26,h=T+g.izler.length*(IH+8)+(g.isaret?18:4);
 let o=`<rect width="${w}" height="${h}" fill="#fff"/><rect width="${w}" height="20" fill="#e9ecf3"/>`;
 for(let s=0;s<=10;s+=2){const x=LW+(w-LW-8)*s/10;o+=`<text x="${x}" y="14" ${F} font-size="10" text-anchor="middle" fill="#666">0:${String(s).padStart(2,"0")}</text>`}
 g.izler.forEach((iz,k)=>{const y=T+k*(IH+8),cy=y+IH/2,amp=IH/2*Math.min(1,iz.g);
  o+=`<rect x="0" y="${y}" width="${LW-6}" height="${IH}" rx="6" fill="#f1f3f8" stroke="#d0d5e2"/><text x="${(LW-6)/2}" y="${cy+4}" ${F} font-size="12" font-weight="bold" text-anchor="middle" fill="#333">${esc(iz.ad)}</text>`+
   `<rect x="${LW}" y="${y}" width="${w-LW-8}" height="${IH}" rx="6" fill="#f7f9ff" stroke="#d0d5e2"/>`;
  let d="";const N=150;for(let i=0;i<=N;i++){const t=i/N,x=LW+4+(w-LW-16)*t;
   let a=amp*(0.45+0.55*Math.abs(Math.sin(i*0.37+k)*Math.sin(i*0.11+k*2)));
   if(g.isaret&&k==(g.isaret.iz||0)&&t>g.isaret.bas&&t<g.isaret.son)a=IH/2*0.95;
   if(iz.sessiz&&t>iz.sessiz[0]&&t<iz.sessiz[1])a=1.5;
   d+=`M${x.toFixed(1)} ${(cy-a).toFixed(1)}V${(cy+a).toFixed(1)}`}
  o+=`<path d="${d}" stroke="${iz.renk||(k?"#8a5cff":"#1c7ed6")}" stroke-width="1.6"/>`});
 if(g.isaret){const i=g.isaret,y=T+(i.iz||0)*(IH+8),x1=LW+4+(w-LW-16)*i.bas,x2=LW+4+(w-LW-16)*i.son;
  o+=`<rect x="${x1-3}" y="${y}" width="${x2-x1+6}" height="${IH}" fill="#ff6b9d" fill-opacity=".22" stroke="#e03131" stroke-width="2" stroke-dasharray="4 3"/>`+
   `<text x="${(x1+x2)/2}" y="${h-4}" ${F} font-size="12" font-weight="bold" text-anchor="middle" fill="#e03131">${esc(i.yazi)}</text>`}
 return svg(w,h,o)}

/* ---------- SIRALI PARÇALAR ---------- */
function sira(g){
 const n=g.bloklar.length,bw=128,gap=12,w=n*bw+(n-1)*gap,T=g.baslik?24:0,h=T+70;
 const renk=["#ffe3ec","#e3f2ff","#e6fcf2","#fff4d6"],kenar=["#ff6b9d","#4c9be8","#2eb886","#e0a800"];
 let o=`<rect width="${w}" height="${h}" fill="#fff"/>`;
 if(g.baslik)o+=`<text x="0" y="16" ${F} font-size="13" font-weight="bold" fill="#333">${esc(g.baslik)}</text>`;
 g.bloklar.forEach((b,i)=>{const x=i*(bw+gap);
  o+=`<rect x="${x}" y="${T}" width="${bw}" height="52" rx="8" fill="${renk[i%4]}" stroke="${kenar[i%4]}" stroke-width="2"/>`;
  const sat=String(b).split("\n");sat.forEach((s,k)=>{o+=`<text x="${x+bw/2}" y="${T+26-(sat.length-1)*8+k*16+4}" ${F} font-size="12.5" font-weight="${k?"normal":"bold"}" text-anchor="middle" fill="#222">${esc(s)}</text>`});
  o+=`<text x="${x+bw/2}" y="${T+68}" ${F} font-size="11" text-anchor="middle" fill="#777">${i+1}. parça</text>`;
  if(i<n-1)o+=`<path d="M${x+bw+2} ${T+26}h${gap-4}" stroke="#999" stroke-width="2"/>`});
 return svg(w,h,o)}

/* ---------- ÇİZİM KÜTÜPHANESİ (160x120) ---------- */
const CIZIM={
saat:`<rect x="62" y="6" width="36" height="22" rx="6" fill="#6c757d"/><rect x="62" y="92" width="36" height="22" rx="6" fill="#6c757d"/>
<rect x="46" y="22" width="68" height="76" rx="18" fill="#343a40"/><rect x="53" y="29" width="54" height="62" rx="12" fill="#0b1e3a"/>
<path d="M60 64h9l4-10 6 20 5-14 3 4h13" fill="none" stroke="#ff6b9d" stroke-width="3" stroke-linejoin="round"/>
<text x="80" y="47" font-family="Roboto, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#fff">10:24</text>
<text x="80" y="85" font-family="Roboto, sans-serif" font-size="9" text-anchor="middle" fill="#4cc9f0">8.452 adım</text><rect x="114" y="50" width="5" height="14" rx="2" fill="#6c757d"/>`,
yazici3b:`<rect x="30" y="10" width="100" height="100" rx="6" fill="#dee2e6" stroke="#868e96" stroke-width="2"/><rect x="40" y="20" width="80" height="74" rx="3" fill="#f8f9fa"/>
<rect x="40" y="26" width="80" height="6" fill="#495057"/><rect x="70" y="24" width="20" height="16" rx="2" fill="#f08c00"/><path d="M76 40h8l-4 7z" fill="#495057"/>
<path d="M62 86h36l-4-8H66z M66 78h28l-3-8H69z M69 70h22l-3-7H72z" fill="#4cc9f0" stroke="#1c7ed6" stroke-width="1"/>
<rect x="48" y="86" width="64" height="5" fill="#868e96"/><text x="113" y="104" font-family="Roboto, sans-serif" font-size="11" font-weight="bold" text-anchor="end" fill="#495057">3B</text>`,
akilliev:`<path d="M80 18 128 56H116V106H44V56H32Z" fill="#ffe8cc" stroke="#e8590c" stroke-width="3" stroke-linejoin="round"/>
<rect x="70" y="76" width="20" height="30" fill="#e8590c"/><rect x="52" y="64" width="14" height="12" fill="#a5d8ff" stroke="#1c7ed6"/><rect x="94" y="64" width="14" height="12" fill="#a5d8ff" stroke="#1c7ed6"/>
<path d="M66 40a20 20 0 0 1 28 0M71 46a12 12 0 0 1 18 0" fill="none" stroke="#1c7ed6" stroke-width="3" stroke-linecap="round"/><circle cx="80" cy="51" r="3" fill="#1c7ed6"/>
<circle cx="18" cy="40" r="11" fill="#fff3bf" stroke="#f08c00" stroke-width="2"/><path d="M14 48h8v6h-8z" fill="#868e96"/>
<rect x="136" y="70" width="18" height="30" rx="3" fill="#212529"/><rect x="139" y="74" width="12" height="20" fill="#4cc9f0"/>
<path d="M29 40h14M131 85h-14" stroke="#1c7ed6" stroke-width="2" stroke-dasharray="3 3"/>`,
vr:`<rect x="18" y="38" width="124" height="54" rx="20" fill="#5f3dc4"/><rect x="26" y="46" width="108" height="38" rx="14" fill="#7950f2"/>
<rect x="34" y="52" width="40" height="26" rx="10" fill="#1b1f3b"/><rect x="86" y="52" width="40" height="26" rx="10" fill="#1b1f3b"/>
<path d="M18 60H8M142 60h10" stroke="#5f3dc4" stroke-width="8" stroke-linecap="round"/><path d="M68 92q12 10 24 0" fill="#5f3dc4"/>
<text x="80" y="30" font-family="Roboto, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#5f3dc4">VR</text>`,
ar:`<rect x="40" y="10" width="80" height="102" rx="12" fill="#212529"/><rect x="46" y="20" width="68" height="82" rx="4" fill="#d0ebff"/>
<rect x="46" y="72" width="68" height="30" fill="#e9c46a"/><path d="M46 72l14-14h40l14 14" fill="#c9a227" opacity=".5"/>
<rect x="60" y="54" width="40" height="20" rx="5" fill="#e64980"/><rect x="56" y="48" width="48" height="10" rx="5" fill="#c2255c"/><rect x="62" y="74" width="4" height="8" fill="#862e9c"/><rect x="94" y="74" width="4" height="8" fill="#862e9c"/>
<path d="M58 46 52 38M102 46l6-8" stroke="#2f9e44" stroke-width="2" stroke-dasharray="3 2"/>
<text x="80" y="34" font-family="Roboto, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#1c7ed6">AR</text>`,
otonom:`<rect x="14" y="40" width="132" height="52" rx="14" fill="#f1f3f5" stroke="#495057" stroke-width="2.5"/><rect x="24" y="48" width="30" height="20" rx="4" fill="#74c0fc"/><rect x="60" y="48" width="30" height="20" rx="4" fill="#74c0fc"/><rect x="96" y="48" width="38" height="20" rx="4" fill="#74c0fc"/>
<circle cx="42" cy="94" r="11" fill="#343a40"/><circle cx="118" cy="94" r="11" fill="#343a40"/><circle cx="42" cy="94" r="4" fill="#adb5bd"/><circle cx="118" cy="94" r="4" fill="#adb5bd"/>
<rect x="66" y="30" width="28" height="10" rx="4" fill="#495057"/><path d="M56 22a32 32 0 0 1 48 0M63 28a20 20 0 0 1 34 0" fill="none" stroke="#2f9e44" stroke-width="2.5" stroke-linecap="round"/>
<text x="80" y="84" font-family="Roboto, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#495057">SÜRÜCÜSÜZ</text>`,
robotkol:`<rect x="20" y="100" width="56" height="12" rx="3" fill="#495057"/><rect x="38" y="86" width="20" height="16" fill="#868e96"/>
<path d="M48 86 70 46 112 34" fill="none" stroke="#f08c00" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="48" cy="86" r="8" fill="#343a40"/><circle cx="70" cy="46" r="8" fill="#343a40"/><circle cx="112" cy="34" r="7" fill="#343a40"/>
<path d="M116 30l14-6M118 38l14 6" stroke="#343a40" stroke-width="5" stroke-linecap="round"/><rect x="118" y="88" width="26" height="22" rx="2" fill="#a5d8ff" stroke="#1c7ed6" stroke-width="2"/><rect x="104" y="108" width="54" height="5" fill="#adb5bd"/>`,
dron:`<rect x="58" y="50" width="44" height="22" rx="8" fill="#495057"/><circle cx="80" cy="76" r="7" fill="#212529"/><circle cx="80" cy="76" r="3" fill="#4cc9f0"/>
<path d="M58 56 30 42M102 56l28-14M58 66 30 80M102 66l28 14" stroke="#495057" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="30" cy="38" rx="20" ry="4" fill="#adb5bd"/><ellipse cx="130" cy="38" rx="20" ry="4" fill="#adb5bd"/><ellipse cx="30" cy="84" rx="20" ry="4" fill="#adb5bd"/><ellipse cx="130" cy="84" rx="20" ry="4" fill="#adb5bd"/>`
};
function cizim(g){
 const L=g.liste,cw=160,ch=120,gap=16,yz=L.some(e=>e.yazi)?22:0,w=L.length*cw+(L.length-1)*gap,h=ch+yz;
 let o=`<rect width="${w}" height="${h}" fill="#fff"/>`;
 L.forEach((e,i)=>{const x=i*(cw+gap);o+=`<rect x="${x}" y="0" width="${cw}" height="${ch}" rx="12" fill="#f4f7ff" stroke="#d0d7ec"/><g transform="translate(${x},0)">${CIZIM[e.ad]||""}</g>`;
  if(e.yazi)o+=`<text x="${x+cw/2}" y="${ch+16}" ${F} font-size="13" font-weight="bold" text-anchor="middle" fill="#333">${esc(e.yazi)}</text>`});
 return svg(w,h,o)}

window.GORSEL=function(g){if(!g)return"";return({tablo,grafik,ses,sira,cizim})[g.tur](g)};
})();
