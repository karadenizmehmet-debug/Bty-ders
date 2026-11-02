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
<ellipse cx="30" cy="38" rx="20" ry="4" fill="#adb5bd"/><ellipse cx="130" cy="38" rx="20" ry="4" fill="#adb5bd"/><ellipse cx="30" cy="84" rx="20" ry="4" fill="#adb5bd"/><ellipse cx="130" cy="84" rx="20" ry="4" fill="#adb5bd"/>`,
mr:`<rect x="10" y="20" width="96" height="84" rx="40" fill="#e9ecef" stroke="#868e96" stroke-width="2"/><circle cx="58" cy="62" r="24" fill="#343a40"/><circle cx="58" cy="62" r="18" fill="#495057"/>
<rect x="58" y="70" width="92" height="10" rx="3" fill="#adb5bd"/><rect x="70" y="80" width="6" height="26" fill="#868e96"/><rect x="134" y="80" width="6" height="26" fill="#868e96"/>
<circle cx="140" cy="64" r="6" fill="#ffc9a0"/><rect x="92" y="62" width="44" height="9" rx="4" fill="#4c9be8"/>
<rect x="112" y="8" width="44" height="30" rx="3" fill="#212529"/><path d="M122 30c4-14 20-14 24 0" fill="none" stroke="#e9ecef" stroke-width="2"/><circle cx="134" cy="20" r="5" fill="none" stroke="#e9ecef" stroke-width="2"/>`,
mektup:`<rect x="22" y="30" width="116" height="70" rx="4" fill="#fff4d6" stroke="#c9a227" stroke-width="2"/><path d="M22 32l58 40 58-40" fill="none" stroke="#c9a227" stroke-width="2"/>
<rect x="110" y="38" width="20" height="24" fill="#ff8787" stroke="#e03131"/><circle cx="120" cy="50" r="5" fill="#fff"/>
<text x="56" y="92" font-family="Roboto, sans-serif" font-size="10" fill="#7a5c00">günler sürer…</text>`,
akillitel:e=>`<rect x="52" y="6" width="56" height="108" rx="10" fill="#212529"/><rect x="57" y="16" width="46" height="86" rx="3" fill="#e7f5ff"/>
<rect x="61" y="24" width="34" height="14" rx="6" fill="#4c9be8"/><rect x="65" y="44" width="34" height="14" rx="6" fill="#dee2e6"/><rect x="61" y="64" width="30" height="14" rx="6" fill="#4c9be8"/>
${e.metin?`<rect x="57" y="84" width="46" height="16" fill="#fff"/><text x="80" y="96" font-family="Roboto, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#c2255c">${e.metin}</text>`:""}`,
tablet:e=>`<rect x="18" y="14" width="124" height="92" rx="10" fill="#212529"/><rect x="26" y="22" width="108" height="76" rx="3" fill="#e7f5ff"/>
<circle cx="56" cy="62" r="12" fill="#ffd43b"/><path d="M80 80l14-24 14 24z" fill="#51cf66"/><rect x="100" y="34" width="22" height="10" rx="3" fill="#4c9be8"/>
${e.el?`<path d="M96 120c-6-14-8-24-2-30 3-3 7-2 8 2l2-18c1-5 8-5 8 0v16c4-2 8 0 8 4 4-2 8 0 8 4 5 0 7 4 6 10-1 8-4 12-6 12" fill="#ffc9a0" stroke="#d9480f" stroke-width="1.5"/><circle cx="108" cy="72" r="9" fill="none" stroke="#e03131" stroke-width="2"/>`:""}
${e.metin?`<rect x="30" y="76" width="100" height="18" rx="3" fill="#fff"/><text x="80" y="89" font-family="Roboto, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#c2255c">${e.metin}</text>`:""}`,
monitor:e=>`<rect x="16" y="10" width="128" height="84" rx="6" fill="#343a40"/><rect x="22" y="16" width="116" height="70" rx="2" fill="${e.renk||"#1c7ed6"}"/>
<rect x="70" y="94" width="20" height="12" fill="#868e96"/><rect x="52" y="104" width="56" height="7" rx="3" fill="#495057"/>
<text x="80" y="56" font-family="Roboto, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#fff">${e.metin||""}</text><text x="80" y="74" font-family="Roboto, sans-serif" font-size="9" text-anchor="middle" fill="#fff" opacity=".8">açılıyor…</text>`,
yesilekran:`<rect x="10" y="10" width="140" height="96" fill="#2f9e44"/><rect x="10" y="98" width="140" height="10" fill="#2b8a3e"/>
<circle cx="80" cy="40" r="10" fill="#ffc9a0"/><path d="M68 54h24l4 34H64z" fill="#e8590c"/><path d="M64 60l-14 12M96 60l14 12" stroke="#e8590c" stroke-width="6" stroke-linecap="round"/><path d="M70 88v14M90 88v14" stroke="#343a40" stroke-width="6"/>
<rect x="128" y="74" width="22" height="16" rx="3" fill="#212529"/><circle cx="134" cy="82" r="4" fill="#868e96"/>`,
gokyuzu:`<rect x="10" y="10" width="140" height="100" fill="#74c0fc"/><ellipse cx="40" cy="30" rx="18" ry="8" fill="#fff"/><ellipse cx="118" cy="24" rx="22" ry="9" fill="#fff"/>
<path d="M10 110l30-30 26 22 24-28 30 22 30-20v34z" fill="#8ce99a"/>
<path d="M40 74c20-16 50-16 78-6l12-10-4 16c-28 10-58 12-86 0z" fill="#c92a2a"/><path d="M70 66l10-16 10 14" fill="#e03131"/>
<circle cx="80" cy="46" r="8" fill="#ffc9a0"/><path d="M72 56h16l2 12H70z" fill="#e8590c"/>`,
kambur:`<rect x="96" y="38" width="44" height="34" rx="3" fill="#343a40"/><rect x="100" y="42" width="36" height="26" fill="#74c0fc"/><rect x="114" y="72" width="8" height="10" fill="#868e96"/>
<rect x="84" y="82" width="70" height="6" fill="#a9744f"/><rect x="146" y="88" width="5" height="26" fill="#8a5a3b"/>
<circle cx="86" cy="50" r="10" fill="#ffc9a0"/><path d="M80 58c-18 4-28 14-30 34" fill="none" stroke="#4c6ef5" stroke-width="12" stroke-linecap="round"/><path d="M84 66l14 14" stroke="#4c6ef5" stroke-width="6" stroke-linecap="round"/>
<rect x="34" y="94" width="34" height="6" fill="#868e96"/><rect x="48" y="100" width="5" height="14" fill="#868e96"/><path d="M50 92h22v22" fill="none" stroke="#343a40" stroke-width="6"/>
<path d="M96 48l-4 -2M96 54l-4 2" stroke="#e03131" stroke-width="2"/><text x="40" y="30" font-family="Roboto, sans-serif" font-size="11" font-weight="bold" fill="#e03131">çok yakın!</text>`,
gece:`<rect x="0" y="0" width="160" height="120" rx="12" fill="#1b1f3b"/><circle cx="128" cy="26" r="12" fill="#ffe066"/><circle cx="134" cy="22" r="11" fill="#1b1f3b"/>
<circle cx="30" cy="20" r="1.5" fill="#fff"/><circle cx="60" cy="14" r="1.5" fill="#fff"/><circle cx="96" cy="24" r="1.5" fill="#fff"/>
<rect x="14" y="76" width="132" height="22" rx="4" fill="#748ffc"/><rect x="14" y="96" width="8" height="14" fill="#5c7cfa"/><rect x="138" y="96" width="8" height="14" fill="#5c7cfa"/><rect x="18" y="66" width="34" height="14" rx="6" fill="#edf2ff"/>
<circle cx="44" cy="62" r="9" fill="#ffc9a0"/><rect x="70" y="50" width="16" height="26" rx="3" fill="#212529"/><rect x="72" y="53" width="12" height="18" fill="#a5d8ff"/><path d="M52 62l18-4M52 64l18 6" stroke="#a5d8ff" stroke-width="1.5" opacity=".7"/>
<text x="112" y="62" font-family="Roboto, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#ffe066">02:30</text>`,
robotsupurge:`<ellipse cx="80" cy="84" rx="58" ry="18" fill="#adb5bd"/><ellipse cx="80" cy="78" rx="58" ry="18" fill="#495057"/><ellipse cx="80" cy="74" rx="46" ry="12" fill="#343a40"/><circle cx="80" cy="72" r="5" fill="#51cf66"/>
<path d="M20 90l-10 6M140 90l10 6" stroke="#868e96" stroke-width="2"/><circle cx="34" cy="30" r="10" fill="#ffc9a0"/><path d="M28 42h12l3 20H25z" fill="#f783ac"/><path d="M30 28l-2 6M38 28l2 6" stroke="#1c7ed6" stroke-width="2"/>`,
fare:`<path d="M80 28c-24 0-34 18-34 42s14 40 34 40 34-16 34-40-10-42-34-42z" fill="#dee2e6" stroke="#495057" stroke-width="2.5"/><path d="M80 28v34M48 62h64" stroke="#495057" stroke-width="2"/><rect x="76" y="40" width="8" height="14" rx="4" fill="#495057"/>
<path d="M80 28c0-12 10-16 18-20" fill="none" stroke="#495057" stroke-width="2.5"/>`,
program:`<rect x="12" y="14" width="136" height="94" rx="6" fill="#fff" stroke="#495057" stroke-width="2"/><rect x="12" y="14" width="136" height="16" rx="6" fill="#4c9be8"/><circle cx="136" cy="22" r="4" fill="#ff8787"/>
<rect x="18" y="36" width="20" height="66" fill="#f1f3f5"/><rect x="22" y="40" width="12" height="10" fill="#ff6b6b"/><rect x="22" y="54" width="12" height="10" fill="#51cf66"/><rect x="22" y="68" width="12" height="10" fill="#339af0"/>
<circle cx="80" cy="70" r="18" fill="#ffd43b"/><path d="M100 96l20-30 18 30z" fill="#51cf66"/><text x="80" y="27" font-family="Roboto, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#fff">Resim Programı</text>`,
islemci:`<rect x="40" y="20" width="80" height="80" rx="6" fill="#495057"/><rect x="54" y="34" width="52" height="52" rx="3" fill="#adb5bd"/><text x="80" y="64" font-family="Roboto, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#212529">CPU</text>
<path d="M50 20v-10M62 20v-10M74 20v-10M86 20v-10M98 20v-10M110 20v-10M50 100v10M62 100v10M74 100v10M86 100v10M98 100v10M110 100v10M40 30h-10M40 42h-10M40 54h-10M40 66h-10M40 78h-10M40 90h-10M120 30h10M120 42h10M120 54h10M120 66h10M120 78h10M120 90h10" stroke="#c9a227" stroke-width="3"/>`,
ikili:`<rect x="34" y="8" width="92" height="104" rx="4" fill="#fff" stroke="#495057" stroke-width="2"/>
<text font-family="Roboto, monospace" font-size="11" fill="#1c7ed6"><tspan x="42" y="26">0 1 1 0 1 0 0 1</tspan><tspan x="42" y="42">1 0 0 1 1 1 0 1</tspan><tspan x="42" y="58">0 1 0 1 0 0 1 1</tspan><tspan x="42" y="74">1 1 0 0 1 0 1 0</tspan><tspan x="42" y="90">0 0 1 1 0 1 1 0</tspan><tspan x="42" y="106">1 0 1 0 0 1 0 1</tspan></text>
<rect x="82" y="47" width="11" height="15" fill="none" stroke="#e03131" stroke-width="2"/>`,
usb:`<rect x="50" y="40" width="72" height="34" rx="6" fill="#4c6ef5"/><rect x="24" y="46" width="28" height="22" fill="#ced4da" stroke="#868e96"/><rect x="30" y="51" width="6" height="5" fill="#495057"/><rect x="40" y="51" width="6" height="5" fill="#495057"/>
<text x="86" y="62" font-family="Roboto, sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#fff">USB</text><path d="M30 92l100-70" stroke="#e03131" stroke-width="5" opacity=".8"/>`,
bulut:`<path d="M44 86h76a22 22 0 0 0 0-44 30 30 0 0 0-56-8 24 24 0 0 0-20 52z" fill="#d0ebff" stroke="#1c7ed6" stroke-width="2.5"/>
<path d="M80 92v20M70 104l10 10 10-10" stroke="#1c7ed6" stroke-width="3" fill="none"/><rect x="66" y="50" width="28" height="22" rx="2" fill="#fff" stroke="#1c7ed6"/><path d="M71 57h18M71 63h18" stroke="#1c7ed6"/>`,
rontgen:`<rect x="20" y="8" width="120" height="104" rx="6" fill="#1b1f3b"/><path d="M60 104V70l-14-36M70 104V64l-6-44M82 104V62l2-46M92 104V66l10-40M102 104V76l22-26" stroke="#e9ecef" stroke-width="7" stroke-linecap="round" fill="none"/>
<circle cx="64" cy="98" r="14" fill="#e9ecef" opacity=".35"/><path d="M84 40l6 6" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="86" cy="42" r="10" fill="none" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="3 2"/>`,
yayagecidi:`<rect x="0" y="62" width="160" height="58" fill="#868e96"/><path d="M96 62h10v58H96zM114 62h10v58h-10zM132 62h10v58h-10zM150 62h10v58h-10z" fill="#fff"/>
<rect x="6" y="66" width="70" height="34" rx="10" fill="#f1f3f5" stroke="#495057" stroke-width="2"/><rect x="48" y="70" width="22" height="14" rx="3" fill="#74c0fc"/><circle cx="22" cy="102" r="8" fill="#343a40"/><circle cx="60" cy="102" r="8" fill="#343a40"/>
<rect x="34" y="58" width="16" height="8" rx="3" fill="#495057"/><path d="M50 62l70-24v52z" fill="#ffd43b" opacity=".35"/>
<circle cx="126" cy="60" r="6" fill="#ffc9a0"/><path d="M120 68h12l2 18h-16z" fill="#f03e3e"/><path d="M122 86l-4 14M130 86l4 14" stroke="#343a40" stroke-width="4"/>
<rect x="104" y="40" width="44" height="14" rx="3" fill="none" stroke="#e03131" stroke-width="2"/><text x="126" y="36" font-family="Roboto, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#e03131">yaya algılandı</text>`,
kamera:`<rect x="0" y="0" width="160" height="120" rx="12" fill="#f8f9fa"/><path d="M10 10h34l6 10-6 6H18z" fill="#495057"/><circle cx="40" cy="18" r="4" fill="#ff6b6b"/>
${[30,52,74,96,118,140,41,63,85,107,129].map((x,i)=>`<circle cx="${x}" cy="${i<6?62:92}" r="9" fill="#ffc9a0"/><rect x="${x-8}" y="${i<6?72:102}" width="16" height="12" rx="4" fill="${["#74c0fc","#ffa8a8","#b2f2bb","#ffe066","#d0bfff","#ffc078"][i%6]}"/>`).join("")}
<rect x="74" y="78" width="22" height="26" fill="none" stroke="#2f9e44" stroke-width="2.5"/><text x="85" y="118" font-family="Roboto, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#2f9e44">eşleşti</text>`,
tarla:`<rect x="0" y="0" width="160" height="120" rx="12" fill="#e7f5ff"/><path d="M0 60h160v60H0z" fill="#a9744f"/>
${[14,38,62,86,110,134].map(x=>`<path d="M${x} 104v-24" stroke="#2f9e44" stroke-width="3"/><circle cx="${x}" cy="76" r="6" fill="#e03131"/><circle cx="${x+5}" cy="86" r="4" fill="#e03131"/>`).join("")}
<rect x="44" y="40" width="4" height="40" fill="#495057"/><rect x="36" y="30" width="20" height="12" rx="2" fill="#ffd43b"/><path d="M46 28a10 10 0 0 1 10-10M46 24a16 16 0 0 1 16-16" stroke="#1c7ed6" stroke-width="2" fill="none"/>
<circle cx="110" cy="78" r="12" fill="none" stroke="#e03131" stroke-width="2" stroke-dasharray="3 2"/><text x="120" y="30" font-family="Roboto, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#495057">nem sensörü</text>`,
beyin:`<path d="M80 22c-10-12-34-10-38 6-16 2-22 20-14 32-8 14 2 32 18 32 4 12 22 14 34 4 12 10 30 8 34-4 16 0 26-18 18-32 8-12 2-30-14-32-4-16-28-18-38-6z" fill="#ffc9de" stroke="#d6336c" stroke-width="2.5"/>
<path d="M80 22v74M56 40c8 4 10 12 4 18M104 40c-8 4-10 12-4 18M50 70c10-2 16 4 16 12M110 70c-10-2-16 4-16 12" fill="none" stroke="#d6336c" stroke-width="2"/>`,
ag:`${(()=>{const L=[[30,[30,60,90]],[80,[22,48,74,100]],[130,[45,75]]];let o="";L.slice(0,2).forEach((k,i)=>k[1].forEach(a=>L[i+1][1].forEach(b=>{o+=`<path d="M${k[0]} ${a}L${L[i+1][0]} ${b}" stroke="#adb5bd" stroke-width="1.5"/>`})));
L.forEach((k,i)=>k[1].forEach(y=>{o+=`<circle cx="${k[0]}" cy="${y}" r="9" fill="${["#4c9be8","#8a5cff","#2eb886"][i]}"/>`}));return o})()}`
};
function cizim(g){
 const L=g.liste,cw=160,ch=120,gap=16,yz=L.some(e=>e.yazi)?22:0,w=L.length*cw+(L.length-1)*gap,h=ch+yz;
 let o=`<rect width="${w}" height="${h}" fill="#fff"/>`;
 L.forEach((e,i)=>{const x=i*(cw+gap);o+=`<rect x="${x}" y="0" width="${cw}" height="${ch}" rx="12" fill="#f4f7ff" stroke="#d0d7ec"/><g transform="translate(${x},0)">${typeof CIZIM[e.ad]=="function"?CIZIM[e.ad](e):(CIZIM[e.ad]||"")}</g>`;
  if(e.yazi)o+=`<text x="${x+cw/2}" y="${ch+16}" ${F} font-size="13" font-weight="bold" text-anchor="middle" fill="#333">${esc(e.yazi)}</text>`});
 return svg(w,h,o)}

/* ---------- TELEFON EKRANI ---------- */
function sar(t,n){const k=String(t).split(" "),o=[];let s="";k.forEach(w=>{if((s+" "+w).trim().length>n){if(s)o.push(s);s=w}else s=(s+" "+w).trim()});if(s)o.push(s);return o}
function telefon(g){
 const W=250,P=12,iw=W-2*P;let y=58,o="";
 const satir=(x,yy,t,ek)=>`<text x="${x}" y="${yy}" ${F} font-size="12" ${ek||""}>${esc(t)}</text>`;
 (g.ogeler||[]).forEach(e=>{
  if(e.tip=="sol"||e.tip=="sag"){const L=sar(e.t,26),bh=L.length*16+12,bw=Math.min(iw-30,Math.max(...L.map(l=>l.length))*6.6+20),x=e.tip=="sol"?P:W-P-bw;
   if(e.kim)o+=`<text x="${x+4}" y="${y+10}" ${F} font-size="10" font-weight="bold" fill="#868e96" ${e.tip=="sag"?`text-anchor="end" dx="${bw-8}"`:""}>${esc(e.kim)}</text>`,y+=14;
   o+=`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="12" fill="${e.tip=="sol"?(e.renk||"#e9ecef"):"#4c9be8"}"/>`;
   L.forEach((l,i)=>o+=satir(x+10,y+20+i*16,l,`fill="${e.tip=="sol"?"#212529":"#fff"}"`));y+=bh+10}
  else if(e.tip=="alan"){o+=satir(P,y+10,e.ad,'font-size="11" fill="#495057" font-weight="bold"')+`<rect x="${P}" y="${y+16}" width="${iw}" height="26" rx="6" fill="#fff" stroke="${e.uyari?"#e03131":"#ced4da"}" stroke-width="${e.uyari?2:1}"/>`+satir(P+8,y+33,e.deger||"",'fill="#adb5bd"');y+=50}
  else if(e.tip=="buton"){o+=`<rect x="${P}" y="${y}" width="${iw}" height="30" rx="8" fill="${e.renk||"#2eb886"}"/>`+satir(W/2,y+20,e.t,'text-anchor="middle" font-weight="bold" fill="#fff"');y+=40}
  else if(e.tip=="sekme"){const sw=iw/e.liste.length;e.liste.forEach((t,i)=>{o+=`<rect x="${P+i*sw}" y="${y}" width="${sw-4}" height="24" rx="6" fill="${i==e.aktif?"#e03131":"#e9ecef"}"/>`+satir(P+i*sw+(sw-4)/2,y+16,t,`text-anchor="middle" font-size="11" font-weight="bold" fill="${i==e.aktif?"#fff":"#495057"}"`)});y+=32}
  else if(e.tip=="mail"){o+=`<rect x="${P}" y="${y}" width="${iw}" height="${e.t?62:44}" rx="8" fill="${e.renk||"#fff"}" stroke="#dee2e6"/><circle cx="${P+18}" cy="${y+22}" r="11" fill="${e.ikon||"#ffa8a8"}"/>`+
   satir(P+36,y+18,e.kimden,'font-weight="bold" font-size="11.5" fill="#212529"')+satir(P+36,y+34,e.konu,'font-size="11" fill="#495057"');
   if(e.t)sar(e.t,32).slice(0,1).forEach(l=>o+=satir(P+36,y+50,l,'font-size="10.5" fill="#868e96"'));y+=(e.t?62:44)+8}
  else if(e.tip=="video"){o+=`<rect x="${P}" y="${y}" width="74" height="44" rx="6" fill="${e.renk||"#2f9e44"}"/><path d="M${P+31} ${y+14}l14 8-14 8z" fill="#fff"/>`;
   sar(e.t,20).slice(0,2).forEach((l,i)=>o+=satir(P+84,y+16+i*15,l,'font-size="11.5" font-weight="bold" fill="#212529"'));y+=54}
  else if(e.tip=="gonderi"){o+=`<circle cx="${P+12}" cy="${y+12}" r="11" fill="#ffd8a8"/>`+satir(P+30,y+16,e.kisi,'font-weight="bold" fill="#212529"');y+=30;
   o+=`<rect x="${P}" y="${y}" width="${iw}" height="100" rx="6" fill="${e.resim=="sel"?"#a5d8ff":"#fff3bf"}"/>`;
   if(e.resim=="sel")o+=`<path d="M${P+20} ${y+70}v-26l20-14 20 14v26zM${P+90} ${y+70}v-30l22-16 22 16v30zM${P+160} ${y+70}v-22l18-12 18 12v22z" fill="#e8590c"/><path d="M${P} ${y+60}q20-8 40 0t40 0 40 0 40 0 40 0 26 0V${y+100}H${P}z" fill="#1c7ed6" opacity=".85"/>`;
   else o+=`<circle cx="${W/2}" cy="${y+44}" r="22" fill="#ffc9a0"/><path d="M${W/2-10} ${y+52}q10 10 20 0" stroke="#212529" stroke-width="2.5" fill="none"/><circle cx="${W/2-8}" cy="${y+40}" r="3" fill="#212529"/><circle cx="${W/2+8}" cy="${y+40}" r="3" fill="#212529"/><path d="M${W/2-30} ${y+100}q30-34 60 0" fill="#f783ac"/>`;
   y+=108;sar(e.t,32).forEach(l=>{o+=satir(P,y+12,l,'font-weight="bold" fill="#212529"');y+=16});
   if(e.alt)o+=satir(P,y+12,e.alt,'font-size="11" fill="#e03131"'),y+=16;y+=8}
  else if(e.tip=="not"){sar(e.t,34).forEach(l=>{o+=satir(P,y+12,l,'font-size="11" fill="#495057"');y+=15});y+=6}
 });
 const H=Math.max(y+20,200);
 return svg(W,H,`<rect width="${W}" height="${H}" rx="22" fill="#212529"/><rect x="5" y="5" width="${W-10}" height="${H-10}" rx="18" fill="#f8f9fa"/>
<rect x="5" y="5" width="${W-10}" height="40" rx="18" fill="${g.renk||"#343a40"}"/><rect x="5" y="30" width="${W-10}" height="15" fill="${g.renk||"#343a40"}"/>
<text x="${W/2}" y="31" ${F} font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">${esc(g.baslik||"")}</text>${o}`)}

/* ---------- DOSYA GEZGİNİ ---------- */
function dosyaIkon(ad,x,y){const e=(ad.match(/\.(\w+)$/)||[])[1],r={docx:"#1c7ed6",jpg:"#2f9e44",png:"#2f9e44",mp3:"#7048e8",pptx:"#e8590c",xlsx:"#2b8a3e",pdf:"#e03131"}[e];
 if(!e)return `<path d="M${x} ${y+8}h14l4 5h22v25H${x}z" fill="#ffd43b" stroke="#f08c00"/>`;
 return `<path d="M${x+6} ${y}h20l8 8v30H${x+6}z" fill="#fff" stroke="#868e96"/><rect x="${x+9}" y="${y+22}" width="22" height="11" rx="2" fill="${r||"#868e96"}"/><text x="${x+20}" y="${y+31}" ${F} font-size="7.5" font-weight="bold" text-anchor="middle" fill="#fff">${e.toUpperCase()}</text>`}
function klasor(g){
 const PW=g.genislik||200,gap=44,n=g.paneller.length,W=n*PW+(n-1)*gap;let H=0,o="";
 g.paneller.forEach((p,k)=>{const x0=k*(PW+gap),sut=p.sutun||3,cw=PW/sut,rows=Math.ceil(p.ogeler.length/sut),h=34+rows*70+8;H=Math.max(H,h);
  o+=`<rect x="${x0}" y="0" width="${PW}" height="${h}" rx="8" fill="${p.renk||"#fff"}" stroke="#adb5bd"/><rect x="${x0}" y="0" width="${PW}" height="26" rx="8" fill="#e9ecef"/>`+
   `<path d="M${x0+10} ${10}h8l3 3h10v9H${x0+10}z" fill="#ffd43b" stroke="#f08c00"/><text x="${x0+38}" y="18" ${F} font-size="12" font-weight="bold" fill="#343a40">${esc(p.baslik)}</text>`;
  p.ogeler.forEach((it,i)=>{const ad=typeof it=="string"?it:it.ad,cx=x0+(i%sut)*cw+cw/2,cy=34+Math.floor(i/sut)*70;
   if(it.vurgu)o+=`<rect x="${cx-cw/2+4}" y="${cy-2}" width="${cw-8}" height="64" rx="6" fill="#fff3bf" stroke="#f08c00" stroke-dasharray="${it.soluk?"4 3":"0"}"/>`;
   o+=`<g opacity="${it.soluk?.35:1}">${dosyaIkon(ad,cx-20,cy+4)}<text x="${cx}" y="${cy+56}" ${F} font-size="10" text-anchor="middle" fill="#212529">${esc(ad.length>16?ad.slice(0,15)+"…":ad)}</text></g>`})});
 if(g.ok&&n>1){const y=H/2;o+=`<path d="M${PW+6} ${y}h${gap-14}" stroke="#e03131" stroke-width="3"/><path d="M${PW+gap-10} ${y-6}l6 6-6 6" fill="none" stroke="#e03131" stroke-width="3"/><text x="${PW+gap/2}" y="${y-10}" ${F} font-size="9.5" font-weight="bold" text-anchor="middle" fill="#e03131">${esc(g.ok)}</text>`}
 return svg(W,H,`<rect width="${W}" height="${H}" fill="#fff"/>`+o)}

/* ---------- YAPAY ZEKÂ EĞİTİM VERİSİ ---------- */
const HAYVAN={
kedi:(x,y)=>`<path d="M${x+8} ${y+14}l2-12 9 8M${x+32} ${y+14}l-2-12-9 8" fill="#ffa94d"/><circle cx="${x+20}" cy="${y+22}" r="13" fill="#ffa94d"/><circle cx="${x+15}" cy="${y+20}" r="2" fill="#212529"/><circle cx="${x+25}" cy="${y+20}" r="2" fill="#212529"/><path d="M${x+20} ${y+25}v2M${x+6} ${y+25}h8M${x+26} ${y+25}h8" stroke="#212529" stroke-width="1"/>`,
kopek:(x,y)=>`<circle cx="${x+20}" cy="${y+22}" r="13" fill="#c9a27a"/><ellipse cx="${x+7}" cy="${y+20}" rx="5" ry="10" fill="#8a5a3b"/><ellipse cx="${x+33}" cy="${y+20}" rx="5" ry="10" fill="#8a5a3b"/><circle cx="${x+15}" cy="${y+19}" r="2" fill="#212529"/><circle cx="${x+25}" cy="${y+19}" r="2" fill="#212529"/><ellipse cx="${x+20}" cy="${y+27}" rx="4" ry="3" fill="#212529"/>`,
kus:(x,y)=>`<ellipse cx="${x+20}" cy="${y+24}" rx="14" ry="10" fill="#74c0fc"/><circle cx="${x+30}" cy="${y+15}" r="7" fill="#74c0fc"/><path d="M${x+36} ${y+14}l6 2-6 2z" fill="#f08c00"/><circle cx="${x+31}" cy="${y+13}" r="1.6" fill="#212529"/><path d="M${x+12} ${y+22}q8 8 16 0" stroke="#1c7ed6" stroke-width="2" fill="none"/>`,
tavsan:(x,y)=>`<ellipse cx="${x+15}" cy="${y+8}" rx="4" ry="11" fill="#dee2e6" stroke="#adb5bd"/><ellipse cx="${x+25}" cy="${y+8}" rx="4" ry="11" fill="#dee2e6" stroke="#adb5bd"/><circle cx="${x+20}" cy="${y+26}" r="12" fill="#f1f3f5" stroke="#adb5bd"/><circle cx="${x+16}" cy="${y+24}" r="2" fill="#212529"/><circle cx="${x+24}" cy="${y+24}" r="2" fill="#212529"/><circle cx="${x+20}" cy="${y+29}" r="2" fill="#f783ac"/>`,
zurafa:(x,y)=>`<rect x="${x+16}" y="${y+4}" width="7" height="30" fill="#ffd43b"/><ellipse cx="${x+22}" cy="${y+6}" rx="8" ry="5" fill="#ffd43b"/><circle cx="${x+19}" cy="${y+14}" r="2" fill="#c9a227"/><circle cx="${x+20}" cy="${y+26}" r="2" fill="#c9a227"/><ellipse cx="${x+20}" cy="${y+36}" rx="12" ry="5" fill="#ffd43b"/>`,
soru:(x,y)=>`<circle cx="${x+20}" cy="${y+20}" r="16" fill="#f1f3f5" stroke="#adb5bd" stroke-dasharray="3 2"/><text x="${x+20}" y="${y+27}" ${F} font-size="20" font-weight="bold" text-anchor="middle" fill="#868e96">?</text>`};
function veriseti(g){
 const E=[];(g.egitim||[]).forEach(([t,n])=>{for(let i=0;i<n;i++)E.push(t)});
 const sut=g.sutun||5,rows=Math.ceil(E.length/sut),bw=sut*44+16,bh=rows*44+34,H=Math.max(bh,150)+24,W=bw+250;
 let o=`<rect width="${W}" height="${H}" fill="#fff"/><rect x="0" y="0" width="${bw}" height="${bh}" rx="10" fill="#f4f7ff" stroke="#adb5bd"/><text x="${bw/2}" y="18" ${F} font-size="12" font-weight="bold" text-anchor="middle" fill="#343a40">Eğitim verisi</text>`;
 E.forEach((t,i)=>{o+=HAYVAN[t](8+(i%sut)*44,26+Math.floor(i/sut)*44)});
 const cx=bw+70,cy=60;
 o+=`<path d="M${bw+6} ${cy}h28" stroke="#495057" stroke-width="3"/><path d="M${bw+30} ${cy-6}l6 6-6 6" fill="none" stroke="#495057" stroke-width="3"/>`+
  `<rect x="${cx-26}" y="${cy-24}" width="52" height="44" rx="10" fill="#4c9be8"/><rect x="${cx-4}" y="${cy-34}" width="8" height="10" fill="#4c9be8"/><circle cx="${cx}" cy="${cy-36}" r="4" fill="#ff6b9d"/>`+
  `<circle cx="${cx-11}" cy="${cy-4}" r="6" fill="#fff"/><circle cx="${cx+11}" cy="${cy-4}" r="6" fill="#fff"/><rect x="${cx-12}" y="${cy+8}" width="24" height="4" rx="2" fill="#fff"/>`+
  `<text x="${cx}" y="${cy+40}" ${F} font-size="11" font-weight="bold" text-anchor="middle" fill="#343a40">Yapay zekâ</text>`;
 if(g.test){const tx=cx+44;o+=`<rect x="${tx}" y="${cy-30}" width="56" height="56" rx="8" fill="#fff" stroke="#495057" stroke-width="2"/>${HAYVAN[g.test](tx+8,cy-24)}<text x="${tx+28}" y="${cy+40}" ${F} font-size="11" text-anchor="middle" fill="#495057">${esc(g.testYazi||"Yeni resim")}</text>`;
  o+=`<path d="M${cx+30} ${cy-2}h12" stroke="#495057" stroke-width="2" stroke-dasharray="3 2"/>`}
 if(g.cevap){const L=sar(g.cevap,26),bx=bw+30,by=cy+56;o+=`<rect x="${bx}" y="${by}" width="${W-bx-6}" height="${L.length*16+14}" rx="10" fill="#fff3bf" stroke="#f08c00"/><path d="M${cx-6} ${by}l6-8 6 8" fill="#fff3bf" stroke="#f08c00"/>`+
  L.map((l,i)=>`<text x="${bx+10}" y="${by+20+i*16}" ${F} font-size="12.5" font-weight="bold" fill="#212529">${esc(l)}</text>`).join("")}
 return svg(W,H,o)}

window.GORSEL=function(g){if(!g)return"";return({tablo,grafik,ses,sira,cizim,telefon,klasor,veriseti})[g.tur](g)};
})();
