/* ============================================================
   BTY Ders · Pekiştirme İstasyonu Motoru
   Konuyu anlamak için 7 istasyon: Bilim Dedektifi, Doğru mu Yanlış mı,
   Test, Eşleştirme, Boşluk Doldurma, Sıralama, Klasik Sorular.
   Her yazılı klasöründeki istasyon.js içindeki IST nesnesini çizer:
     IST.vaka   [{b,v,i:[ipucu..],q,c:[seçenek..],d:doğruİndeks,a,o?}]
     IST.dy     [{i,d:true|false,a,o?}]
     IST.test   [{s,q,c:[4 seçenek],d:doğruİndeks,a,o?}]
     IST.esles  [{b,c:[[kavram,tanım]..]}]
     IST.bosluk [{b,h:[kelime..],s:[{m:"... ___ ...",d:"kelime"}..]}]
     IST.sira   [{b,y,s:[doğru sırayla adımlar..]}]
     IST.klasik [{q,ornek,k:[ölçüt..],o?}]
   Yıldızlar tarayıcıda saklanır (localStorage). PDF yoktur.
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
(function(){
"use strict";
const CSS=`
.ihead{display:flex;align-items:center;gap:12px;margin-bottom:8px;flex:none}
.ipill{font:700 18px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--ok);border:2px solid var(--ok);background:#2ee6a614;padding:6px 14px;border-radius:12px;white-space:nowrap}
.ihead .sm{padding:8px 18px;font-size:17px}
.ipg{margin-left:auto;font-weight:800;font-size:18px;color:var(--mut)}
.ibar{height:6px;border-radius:6px;background:#ffffff1a;margin-bottom:12px;overflow:hidden;flex:none}
.ibar i{display:block;height:100%;background:linear-gradient(90deg,var(--ac),var(--ac2));transition:width .3s}
.ihub{flex:1;display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:12px;min-height:0}
.ik{display:flex;flex-direction:column;gap:6px;text-align:left;color:var(--tx);background:var(--card);border:2px solid #ffffff14;border-radius:20px;padding:14px 16px;cursor:pointer;font-family:inherit;overflow:hidden;animation:up .4s both}
.ik.nx{background:#e9ecfb;color:#161a38;border-color:#fff}
.ik .ii{width:52px;height:52px;border-radius:14px;background:#2ee6a626;display:flex;align-items:center;justify-content:center;font-size:28px;flex:none}
.ik.nx .ii{background:#2ee6a6}
.ik b{font-size:22px}
.ik p{font-size:16px;line-height:1.35;color:var(--mut)}.ik.nx p{color:#3a3f66}
.ik .im{margin-top:auto;display:flex;justify-content:space-between;align-items:center;font:600 14px ui-monospace,Menlo,Consolas,monospace}
.ik .is{font-size:20px;color:var(--ok);letter-spacing:2px}
.ibody{flex:1;min-height:0;display:flex;flex-direction:column;gap:10px}
.itag{font-size:13px;font-weight:800;letter-spacing:.5px;color:var(--ac2);background:#4cc9f01a;border-radius:20px;padding:3px 12px;align-self:flex-start}
.iyon{font-size:17px;color:var(--mut)}
.iq{font-size:25px;font-weight:700;line-height:1.3;text-wrap:balance}
.iust{font-size:20px;line-height:1.4;background:var(--card);border:2px solid #ffffff14;border-radius:16px;padding:12px 16px}
.iust h3{font-size:22px;color:var(--ac2);margin-bottom:4px}
.iopt{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.iopt.i2{grid-template-columns:1fr 1fr}
.io{display:flex;align-items:center;gap:12px;text-align:left;font:600 20px/1.3 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--tx);background:#ffffff14;border:2px solid #ffffff1f;border-radius:16px;padding:12px 16px;cursor:pointer}
.io .il{flex:none;width:36px;height:36px;border-radius:50%;background:#ffffff22;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px}
.io.ok{background:#2ee6a633;border-color:var(--ok)}.io.ok .il{background:var(--ok);color:#0f1226}
.io.no{background:#ff5c7a2e;border-color:#ff5c7a;opacity:.75}.io.no .il{background:#ff5c7a;color:#0f1226}
.io:disabled{cursor:default}
.ifb{font-size:19px;line-height:1.4;border-radius:14px;padding:10px 14px;background:#ffd16622;border-left:5px solid var(--hint)}
.ifb.ok{background:#2ee6a61f;border-left-color:var(--ok)}.ifb.no{background:#ff5c7a1f;border-left-color:#ff5c7a}
.iact{display:flex;justify-content:flex-end;gap:12px;margin-top:auto}
.iact .go{padding:12px 28px;font-size:20px}
.ivk{display:grid;grid-template-columns:1.1fr 1fr;gap:14px;flex:1;min-height:0}
.ivk>div{display:flex;flex-direction:column;gap:10px;min-width:0}
.icl{display:flex;flex-direction:column;gap:8px}
.icb{font:700 18px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--hint);background:#ffd16614;border:2px dashed #ffd16688;border-radius:14px;padding:10px 14px;cursor:pointer;text-align:left}
.ict{font-size:18px;line-height:1.35;background:#ffd16622;border-left:5px solid var(--hint);border-radius:12px;padding:10px 14px}
.iem{display:grid;grid-template-columns:1fr 1.3fr;gap:16px;flex:1;min-height:0}
.ic{display:flex;flex-direction:column;gap:8px;min-width:0}
.ie{flex:1;display:flex;align-items:center;text-align:left;font:600 18px/1.25 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--tx);background:#ffffff14;border:2px solid #ffffff22;border-radius:14px;padding:6px 12px;cursor:pointer;min-height:44px}
.ie.sel{border-color:var(--hint);background:#ffd1662e}
.ie.m{cursor:default;color:#0f1226;border-color:transparent}
.ie.bad,.ibl.bad,.isc.bad{animation:sk .35s}
@keyframes sk{25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}
.ihv{display:flex;flex-wrap:wrap;gap:8px}
.ich{font:700 19px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--tx);background:#4cc9f024;border:2px solid #4cc9f088;border-radius:30px;padding:8px 18px;cursor:pointer}
.ich.sel{background:#ffd16638;border-color:var(--hint)}.ich.u{opacity:.25;pointer-events:none}
.ibs{display:flex;flex-direction:column;gap:8px;flex:1;min-height:0;justify-content:space-around}
.ibr{font-size:21px;line-height:1.55;background:var(--card);border-radius:14px;padding:6px 14px;display:flex;align-items:center;gap:10px}
.ibr .n{flex:none;font-weight:800;color:var(--ac2)}
.ibl{display:inline-block;min-width:120px;vertical-align:middle;font:700 19px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--hint);background:#ffffff10;border:2px dashed #ffd16699;border-radius:10px;padding:2px 12px;cursor:pointer;margin:0 4px}
.ibl.sel{background:#ffd16638;border-style:solid}.ibl.m{color:#0f1226;background:var(--ok);border:2px solid var(--ok);cursor:default}
.isr{display:grid;grid-template-columns:1fr 1fr;gap:16px;flex:1;min-height:0}
.isr>div{display:flex;flex-direction:column;gap:8px;min-width:0}
.isl{font-size:15px;font-weight:800;letter-spacing:1px;color:var(--mut);text-transform:uppercase}
.isp{display:flex;align-items:center;gap:10px;min-height:46px;border:2px dashed #ffffff33;border-radius:14px;padding:5px 12px;font-size:18px;color:#ffffff66}
.isp .n{flex:none;width:30px;height:30px;border-radius:50%;background:#ffffff1f;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--mut)}
.isp.f{border:2px solid var(--ok);background:#2ee6a61f;color:var(--tx)}.isp.f .n{background:var(--ok);color:#0f1226}
.isc{font:600 18px/1.25 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:left;color:var(--tx);background:#4cc9f024;border:2px solid #4cc9f088;border-radius:14px;padding:9px 14px;cursor:pointer;min-height:46px}
.ikl{display:flex;flex-direction:column;gap:10px;flex:1;min-height:0}
.ikl textarea{width:100%;flex:1;min-height:90px;resize:none;font:19px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--tx);background:#ffffff10;border:2px solid #ffffff2a;border-radius:14px;padding:10px 14px;-webkit-user-select:text;user-select:text}
.iok{display:grid;grid-template-columns:1.2fr 1fr;gap:14px}
.iok>div{background:var(--card);border-radius:14px;padding:10px 14px;font-size:18px;line-height:1.4}
.iok b{color:var(--ok);display:block;margin-bottom:4px}
.iok label{display:flex;gap:10px;align-items:flex-start;margin:6px 0;cursor:pointer}
.iok input{width:22px;height:22px;flex:none;accent-color:#2ee6a6}
.isonuc{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px}
.ibig{font-size:90px}.isonuc h2{font-size:42px}.istar{font-size:54px;color:var(--ok);letter-spacing:8px}
.isonuc p{font-size:22px;color:var(--mut);max-width:760px;line-height:1.4}
.isonuc .row{margin-top:8px}
.port .ihub{grid-template-columns:1fr;grid-auto-rows:auto;flex:none}
.port .ik{padding:14px}.port .ik b{font-size:21px}.port .ik p{font-size:15.5px}
.port .ihead{flex-wrap:wrap}.port .ipill{font-size:15px;padding:5px 10px}.port .ihead .sm{font-size:15px;padding:7px 14px}
.port .ipg{font-size:15px}
.port .iq{font-size:21px}.port .iust{font-size:17px}.port .iust h3{font-size:19px}
.port .iopt,.port .iopt.i2{grid-template-columns:1fr}.port .io{font-size:18px;padding:11px 14px}
.port .ifb{font-size:17px}
.port .ivk,.port .iem,.port .isr,.port .iok{grid-template-columns:1fr}
.port .iem{flex:none}.port .ie{font-size:16.5px;min-height:48px}
.port .ibody{flex:none}.port .ibs{flex:none;gap:8px}
.port .ibr{font-size:18px;flex-wrap:wrap}.port .ibl{min-width:96px;font-size:17px}
.port .ich{font-size:17px;padding:8px 14px}
.port .isc{font-size:16.5px}.port .isp{font-size:16px}
.port .ikl textarea{flex:none;height:130px;font-size:17px}.port .iok>div{font-size:16px}
.port .ibig{font-size:70px}.port .isonuc h2{font-size:30px}.port .istar{font-size:44px}.port .isonuc p{font-size:18px}
.port .iact{margin-top:6px}.port .iact .go{width:100%}
.port .isonuc .row{width:100%}
`;
const TUR=[
 {k:"vaka",ad:"Bilim Dedektifi",ik:"🔍",ac:"Vaka dosyasını aç, ipuçlarını topla, doğru sonuca ulaş. Gerçek olaylardan ve günlük hayattan vakalar.",say:v=>v.length+" vaka"},
 {k:"dy",ad:"Doğru mu, Yanlış mı?",ik:"✅",ac:"Hızlı karar ver, her sorudan sonra açıklamayı oku.",say:v=>v.length+" soru"},
 {k:"test",ad:"Test",ik:"📝",ac:"Senaryolu, dört seçenekli Maarif tarzı sorular.",say:v=>v.length+" soru"},
 {k:"esles",ad:"Eşleştirme",ik:"🔗",ac:"Kavramı tanımıyla buluştur. Soldan bir kavram, sağdan tanımını seç.",say:v=>v.reduce((s,x)=>s+x.c.length,0)+" eşleşme"},
 {k:"bosluk",ad:"Boşluk Doldurma",ik:"✏️",ac:"Kelime havuzundan doğru kavramı seç, cümleyi tamamla.",say:v=>v.reduce((s,x)=>s+x.s.length,0)+" soru"},
 {k:"sira",ad:"Sıralama",ik:"🔢",ac:"Adımları doğru sıraya koy. Sıradaki adımı seç.",say:v=>v.length+" görev"},
 {k:"klasik",ad:"Klasik Sorular",ik:"🖊️",ac:"Kendi cümlelerinle yaz, örnek cevap ve kontrol listesiyle değerlendir.",say:v=>v.length+" soru"}
];
const RENK=["#7ee8c4","#ffd166","#9ad7ff","#ffadc7","#c8b6ff","#ffb98a"];
let K=null,R=null;
const $=s=>R.querySelector(s),$$=s=>[...R.querySelectorAll(s)];
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const stars=n=>"★".repeat(n)+"☆".repeat(3-n);
const yo=r=>r>=.9?3:r>=.75?2:r>=.5?1:0;
const oku=()=>{try{return JSON.parse(localStorage.getItem("bty-ist:"+K.ad))||{}}catch(e){return{}}};
const yaz=o=>{try{localStorage.setItem("bty-ist:"+K.ad,JSON.stringify(o))}catch(e){}};
const tag=o=>o!=null&&K.oc[o]?`<span class="itag">${K.oc[o]} · ${K.ocn[o]||""}</span>`:"";
const tur=k=>TUR.find(t=>t.k===k);
const sal=el=>{el.classList.remove("bad");void el.offsetWidth;el.classList.add("bad")};

function ciz(Z,ctx){
 if(!document.getElementById("istcss")){const s=document.createElement("style");s.id="istcss";s.textContent=CSS;document.head.appendChild(s)}
 K=ctx;R=Z;hub()}

/* ---------- İstasyon seçimi ---------- */
function hub(){
 const b=oku(),L=TUR.filter(t=>K.veri[t.k]&&K.veri[t.k].length),top=L.length*3,got=L.reduce((s,t)=>s+(b[t.k]||0),0),nx=L.find(t=>!(b[t.k]>0));
 R.innerHTML=`<div class="ihead"><button class="go alt sm" id="ib">◀ Ana sayfa</button><span class="ipill">Toplam yıldız: ${got} / ${top}</span></div>
 <div class="ihub">`+L.map((t,i)=>`<button class="ik ${t===nx?"nx":""}" data-k="${t.k}" style="animation-delay:${i*.05}s"><span class="ii">${t.ik}</span><b>${t.ad}</b><p>${t.ac}</p><span class="im"><span>${t.say(K.veri[t.k])}</span><span class="is">${stars(b[t.k]||0)}</span></span></button>`).join("")+`</div>`;
 $("#ib").onclick=()=>K.geri();
 $$(".ik").forEach(e=>e.onclick=()=>basla(e.dataset.k))}

function basla(k){const V=K.veri[k];
 if(k==="vaka")secimli(tur(k),V,x=>({ust:`<div class="iust">${tag(x.o)}<h3>📁 ${x.b}</h3>${x.v}</div>`,ipu:x.i,q:x.q,c:x.c,d:x.d,a:x.a,shuf:1}),1);
 else if(k==="dy")secimli(tur(k),V,x=>({ust:tag(x.o),q:x.i,c:["Doğru","Yanlış"],et:["✅","❌"],d:x.d?0:1,a:x.a}),0);
 else if(k==="test")secimli(tur(k),V,x=>({ust:(x.s?`<div class="iust">${tag(x.o)}${x.s}</div>`:tag(x.o)),q:x.q,c:x.c,d:x.d,a:x.a,shuf:1}),0);
 else if(k==="esles")esles(tur(k),V);
 else if(k==="bosluk")bosluk(tur(k),V);
 else if(k==="sira")sira(tur(k),V);
 else klasik(tur(k),V)}

function cerceve(t,i,n,govde){
 if(R.parentElement)R.parentElement.scrollTop=0;
 R.innerHTML=`<div class="ihead"><button class="go alt sm" id="ib">◀ İstasyonlar</button><span class="ipill">${t.ik} ${t.ad}</span><span class="ipg">${Math.min(i+1,n)} / ${n}</span></div><div class="ibar"><i style="width:${i/n*100}%"></i></div><div class="ibody">${govde}</div>`;
 $("#ib").onclick=hub}

function bitir(t,d,n){
 const r=n?d/n:0,y=yo(r),b=oku(),on=b[t.k]||0,yeni=y>on;if(yeni){b[t.k]=y;yaz(b)}
 const msg=y==3?"Harika! Konuyu çok iyi anlamışsın.":y==2?"Çok iyi! Küçük bir tekrarla 3 yıldıza çıkabilirsin.":y==1?"İyi başlangıç. Konu özetine bir daha göz atıp tekrar dene.":"Sorun değil! Konu özetini oku ve yeniden dene.";
 R.innerHTML=`<div class="ihead"><button class="go alt sm" id="ib">◀ İstasyonlar</button><span class="ipill">${t.ik} ${t.ad}</span></div>
 <div class="isonuc"><div class="ibig">${y==3?"🏆":y==2?"🎉":y==1?"👍":"💪"}</div><h2>${t.ad} bitti!</h2><div class="istar">${stars(y)}</div>
 <p><b>${d} / ${n}</b> ${t.k==="klasik"?"ölçüt cevabında vardı":"ilk denemede doğru"}${yeni?" · 🆕 Yeni yıldız kazandın!":""}</p><p>${msg}</p>
 <div class="row"><button class="go alt" id="it">🔁 Tekrar dene</button><button class="go" id="ih">🎯 İstasyonlara dön</button></div></div>`;
 $("#ib").onclick=hub;$("#ih").onclick=hub;$("#it").onclick=()=>basla(t.k)}

/* ---------- Bilim Dedektifi, Doğru/Yanlış, Test ---------- */
function secimli(t,L,kur,coklu){
 let i=0,dg=0;
 const git=()=>{
  const x=L[i],k=kur(x),ord=k.shuf?sh(k.c.map((_,j)=>j)):k.c.map((_,j)=>j);let yan=false;
  const ipu=k.ipu?`<div class="icl">`+k.ipu.map((c,j)=>`<button class="icb" data-j="${j}">🔎 İpucu ${j+1} · aç</button>`).join("")+`</div>`:"";
  const opts=`<div class="iopt ${k.et?"i2":""}">`+ord.map((j,p)=>`<button class="io" data-j="${j}"><span class="il">${k.et?k.et[p]:"ABCD"[p]}</span><span>${k.c[j]}</span></button>`).join("")+`</div>`;
  const alt=`<div class="ifb" hidden></div><div class="iact"><button class="go" id="isn" hidden>${i==L.length-1?"Sonucu gör 🏁":"Sonraki ▶"}</button></div>`;
  cerceve(t,i,L.length,k.ipu?`<div class="ivk"><div>${k.ust}${ipu}</div><div><div class="iq">${k.q}</div>${opts.replace('class="iopt "','class="iopt" style="grid-template-columns:1fr"')}${alt}</div></div>`:`${k.ust}<div class="iq">${k.q}</div>${opts}${alt}`);
  $$(".icb").forEach(b=>b.onclick=()=>{const d=document.createElement("div");d.className="ict";d.innerHTML="🔎 "+k.ipu[+b.dataset.j];b.replaceWith(d)});
  const fb=$(".ifb"),nx=$("#isn");
  $$(".io").forEach(b=>b.onclick=()=>{const j=+b.dataset.j;
   if(j===k.d){b.classList.add("ok");$$(".io").forEach(e=>e.disabled=true);if(!yan)dg++;
    fb.className="ifb ok";fb.innerHTML=(yan?"<b>✅ Doğru cevap bu!</b> ":"<b>✅ Doğru!</b> ")+(k.a||"");fb.hidden=false;nx.hidden=false}
   else if(coklu){b.classList.add("no");b.disabled=true;yan=true;fb.className="ifb no";fb.innerHTML="<b>Henüz değil.</b> İpuçlarına tekrar bak 🔎 ve başka bir seçenek dene.";fb.hidden=false}
   else{yan=true;b.classList.add("no");const dj=$$(".io").find(e=>+e.dataset.j===k.d);if(dj)dj.classList.add("ok");$$(".io").forEach(e=>e.disabled=true);
    fb.className="ifb no";fb.innerHTML="<b>❌ Olmadı.</b> "+(k.a||"");fb.hidden=false;nx.hidden=false}
   const hd=nx.hidden?fb:nx;hd.scrollIntoView&&hd.scrollIntoView({block:"nearest",behavior:"smooth"})});
  nx.onclick=()=>{i++;i<L.length?git():bitir(t,dg,L.length)}};
 git()}

/* ---------- Eşleştirme ---------- */
function esles(t,L){
 let s=0,dg=0,top=0;
 const set=()=>{
  const x=L[s],n=x.c.length,sag=sh(x.c.map((c,j)=>({j,y:c[1]})));let a=null,b=null,es=0;const hata={};
  cerceve(t,s,L.length,`<div class="iyon">${x.b?`<b>${x.b}</b> · `:""}Soldan bir kavramı, sağdan tanımını seç. Doğruysa ikisi aynı renge boyanır.</div>
   <div class="iem"><div class="ic">`+x.c.map((c,j)=>`<button class="ie" data-s="l" data-j="${j}">${c[0]}</button>`).join("")+`</div><div class="ic">`+sag.map(e=>`<button class="ie" data-s="r" data-j="${e.j}">${e.y}</button>`).join("")+`</div></div>
   <div class="ifb ok" hidden></div><div class="iact"><button class="go" id="isn" hidden>${s==L.length-1?"Sonucu gör 🏁":"Sonraki set ▶"}</button></div>`);
  const bul=(y,j)=>$$(`.ie[data-s="${y}"]`).find(e=>+e.dataset.j===j);
  $$(".ie").forEach(e=>e.onclick=()=>{if(e.classList.contains("m"))return;const y=e.dataset.s,j=+e.dataset.j;
   if(y==="l"){if(a!=null)bul("l",a).classList.remove("sel");a=j;e.classList.add("sel")}else{if(b!=null)bul("r",b).classList.remove("sel");b=j;e.classList.add("sel")}
   if(a==null||b==null)return;
   const A=bul("l",a),B=bul("r",b);
   if(a===b){const c=RENK[es%RENK.length];[A,B].forEach(z=>{z.classList.remove("sel");z.classList.add("m");z.style.background=c});es++;
    if(es===n){dg+=n-Object.keys(hata).length;top+=n;const f=$(".ifb");f.innerHTML="<b>✅ Hepsini eşleştirdin!</b>";f.hidden=false;$("#isn").hidden=false;$("#isn").scrollIntoView&&$("#isn").scrollIntoView({block:"nearest",behavior:"smooth"})}}
   else{hata[a]=1;hata[b]=1;[A,B].forEach(z=>{z.classList.remove("sel");sal(z)})}
   a=b=null});
  $("#isn").onclick=()=>{s++;s<L.length?set():bitir(t,dg,top)}};
 set()}

/* ---------- Boşluk Doldurma ---------- */
function bosluk(t,L){
 let s=0,dg=0,top=0;
 const set=()=>{
  const x=L[s],n=x.s.length;let ch=null,bl=null,dol=0;const hata={};
  cerceve(t,s,L.length,`<div class="iyon">Bir kelime ve bir boşluk seç. Doğruysa boşluğa yerleşir.</div>
   <div class="ihv">`+sh(x.h).map(h=>`<button class="ich" data-w="${h}">${h}</button>`).join("")+`</div>
   <div class="ibs">`+x.s.map((c,i)=>`<div class="ibr"><span class="n">${i+1}.</span><span>${c.m.replace("___",`<button class="ibl" data-i="${i}">&nbsp;&nbsp;?&nbsp;&nbsp;</button>`)}</span></div>`).join("")+`</div>
   <div class="ifb ok" hidden></div><div class="iact"><button class="go" id="isn" hidden>${s==L.length-1?"Sonucu gör 🏁":"Sonraki ▶"}</button></div>`);
  const cs=w=>$$(".ich").find(e=>e.dataset.w===w),bs=i=>$$(".ibl").find(e=>+e.dataset.i===i);
  $$(".ich").forEach(e=>e.onclick=()=>{if(ch)cs(ch).classList.remove("sel");ch=e.dataset.w;e.classList.add("sel");yokla()});
  $$(".ibl").forEach(e=>e.onclick=()=>{if(e.classList.contains("m"))return;if(bl!=null)bs(bl).classList.remove("sel");bl=+e.dataset.i;e.classList.add("sel");yokla()});
  function yokla(){if(ch==null||bl==null)return;const B=bs(bl),C=cs(ch);
   if(x.s[bl].d===ch){B.textContent=ch;B.classList.remove("sel");B.classList.add("m");C.classList.remove("sel");C.classList.add("u");dol++;
    if(dol===n){dg+=n-Object.keys(hata).length;top+=n;const f=$(".ifb");f.innerHTML="<b>✅ Cümlelerin hepsi tamamlandı!</b>";f.hidden=false;$("#isn").hidden=false;$("#isn").scrollIntoView&&$("#isn").scrollIntoView({block:"nearest",behavior:"smooth"})}}
   else{hata[bl]=1;B.classList.remove("sel");C.classList.remove("sel");sal(B);sal(C)}
   ch=null;bl=null}
  $("#isn").onclick=()=>{s++;s<L.length?set():bitir(t,dg,top)}};
 set()}

/* ---------- Sıralama ---------- */
function sira(t,L){
 let g=0,dg=0,top=0;
 const gor=()=>{
  const x=L[g],n=x.s.length,kart=sh(x.s.map((c,j)=>({c,j})));let k=0;const bad={};
  cerceve(t,g,L.length,`<div class="iust"><h3>${x.b}</h3>${x.y||"Sıradaki adımı seç."}</div>
   <div class="isr"><div><div class="isl">Senin sıran</div>`+x.s.map((_,j)=>`<div class="isp" data-p="${j}"><span class="n">${j+1}</span><span class="t">…</span></div>`).join("")+`</div>
   <div><div class="isl">Adımlar · sıradaki hangisi?</div>`+kart.map(e=>`<button class="isc" data-j="${e.j}">${e.c}</button>`).join("")+`</div></div>
   <div class="ifb ok" hidden></div><div class="iact"><button class="go" id="isn" hidden>${g==L.length-1?"Sonucu gör 🏁":"Sonraki görev ▶"}</button></div>`);
  $$(".isc").forEach(e=>e.onclick=()=>{if(e.disabled)return;
   if(+e.dataset.j===k){const p=$(`.isp[data-p="${k}"]`);p.classList.add("f");p.querySelector(".t").textContent=e.textContent;e.disabled=true;e.style.display="none";k++;
    if(k===n){dg+=n-Object.keys(bad).length;top+=n;const f=$(".ifb");f.innerHTML="<b>✅ Sıralamayı tamamladın!</b>";f.hidden=false;$("#isn").hidden=false;$("#isn").scrollIntoView&&$("#isn").scrollIntoView({block:"nearest",behavior:"smooth"})}}
   else{bad[k]=1;sal(e)}});
  $("#isn").onclick=()=>{g++;g<L.length?gor():bitir(t,dg,top)}};
 gor()}

/* ---------- Klasik Sorular ---------- */
function klasik(t,L){
 let i=0,dg=0,top=0;
 const git=()=>{
  const x=L[i];
  cerceve(t,i,L.length,`<div class="ikl">${tag(x.o)}<div class="iq">${x.q}</div>
   <textarea placeholder="Cevabını buraya yazabilirsin (zorunlu değil)…" aria-label="Cevabın"></textarea>
   <button class="go alt" id="ico">💡 Örnek cevabı göster</button>
   <div class="iok" hidden><div><b>✅ Örnek cevap</b>${x.ornek}</div><div><b>☑️ Kontrol listesi</b>Cevabında bunlar var mı?`+x.k.map((c,j)=>`<label><input type="checkbox" data-j="${j}"><span>${c}</span></label>`).join("")+`</div></div>
   <div class="iact"><button class="go" id="isn" hidden>${i==L.length-1?"Sonucu gör 🏁":"Sonraki ▶"}</button></div></div>`);
  const ta=$("textarea");ta.addEventListener("keydown",e=>e.stopPropagation());
  $("#ico").onclick=()=>{$(".iok").hidden=false;$("#ico").hidden=true;$("#isn").hidden=false;$(".iok").scrollIntoView&&$(".iok").scrollIntoView({block:"nearest",behavior:"smooth"})};
  $("#isn").onclick=()=>{dg+=$$('.iok input:checked').length;top+=x.k.length;i++;i<L.length?git():bitir(t,dg,top)}};
 git()}

window.ISTASYON={ciz};
})();
