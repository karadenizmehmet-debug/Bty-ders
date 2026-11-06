/* ============================================================
   BTY Ders · Ortak Soru-Cevap Motoru
   Her yazılı klasöründeki veri.js şu değişkenleri tanımlar:
     BILGI  : ders adı, sınav adı, emoji, PDF başlığı, dosya adı
     S      : konu özeti sayfaları
     W      : sözlük
     Q      : sorular  {o?, d, f?, s, t, q, h, a, p?}
     OC, OCN, SEN (isteğe bağlı): öğrenme çıktıları ve 10 soruluk
              sınav dağılımı. Varsa Basit/Orta/Zor PDF'leri bu
              dağılıma birebir uyar; yoksa zorluk karışımı kullanılır.
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
(function(){
"use strict";
const B=typeof BILGI!=="undefined"?BILGI:{},HAS_OC=typeof OC!=="undefined"&&typeof SEN!=="undefined";
const KOK=document.currentScript.src.replace(/motor\/motor\.js.*$/,"");
const isF=x=>!!(x.f||x.p);

/* ---------- İSKELET ---------- */
document.title=`${B.ders} · ${B.sinav}`;
document.body.insertAdjacentHTML("afterbegin",`<div id="stage">
<div id="top"><button class="tab zb" id="hm" title="Ders seçimine dön" aria-label="Ana sayfa"><i>🏠</i><span>Dersler</span></button><h1>${B.emoji} ${B.ders} · ${B.sinav}</h1>
<button class="tab" id="tl"><i>📖</i> <span>Özet</span></button>
<button class="tab" id="tg"><i>📚</i> <span>Sözlük</span></button>
<button class="tab" id="tm"><i>📋</i> <span>Menü</span></button>
<button class="tab" id="tq"><i>❓</i> <span>Sorular</span></button>
<button class="tab" id="ti"><i>🎯</i> <span>İstasyon</span></button>
<button class="tab" id="tp"><i>📄</i> <span>PDF</span></button>
<button class="tab zb" id="zm" title="Uzaklaştır">🔍−</button><button class="tab zb" id="zl" title="Yakınlaştırmayı sıfırla">100%</button><button class="tab zb" id="zp" title="Yakınlaştır">🔍+</button><button class="tab zb" id="fs" title="Tam ekran"><i>⛶</i><span>Ekran</span></button></div>
<div id="main"><div id="zin"></div></div>
<div id="nav"><button id="pv">◀ Geri</button><div id="dots"></div><button id="nx">İleri ▶</button></div>
<div id="cr">© Mehmet Karadeniz, 2026-2027${typeof SURUM!=="undefined"?" · "+SURUM:""}</div>
<div id="toast" hidden></div>
<div id="pw" hidden><div class="pwb"><div class="pwt">🔒 PDF bölümü için şifre girin</div>
<input id="pwi" type="password" inputmode="numeric" autocomplete="off" aria-label="Şifre">
<div id="pwe" class="pwe" hidden>Şifre yanlış, tekrar deneyin.</div>
<div class="pwr"><button class="go alt" id="pwno">Vazgeç</button><button class="go" id="pwok">Aç</button></div></div></div>
</div>`);

const WP=12,WN=Math.ceil(W.length/WP),LVN={1:"Basit",2:"Orta",3:"Zor"};
let sel=Q.map(()=>true);

/* ---------- DURUM ---------- */
const $=s=>document.querySelector(s),Z=$("#zin"),D=$("#dots");
let mode="home",si=0,qi=0,gi=0,st=Q.map(()=>0);
let z=1,tx=0,ty=0,lk="";
/* Ekran dikeyse (telefon) 480 px genişlikte dikey düzen, yataysa 1280x720 tahta düzeni */
let PORT=false;
function fit(){const sg=$("#stage"),de=document.documentElement,w=de.clientWidth||innerWidth,h=de.clientHeight||innerHeight,p=h>w;
 if(p!==PORT){PORT=p;document.body.classList.toggle("port",p);z=1;tx=ty=0;ap()}
 if(p){const k=w/480;sg.style.width="480px";sg.style.height=(h/k)+"px";sg.style.transform=`translate(-50%,-50%) scale(${k})`}
 else{const k=Math.min(w/1280,h/720)*.98;sg.style.width="1280px";sg.style.height="720px";sg.style.transform=`translate(-50%,-50%) scale(${k})`}}
function toast(m){const t=$("#toast");t.textContent=m;t.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>t.hidden=true,4000)}
function dots(n,cur,cls,go){D.innerHTML="";for(let i=0;i<n;i++){const b=document.createElement("button");b.className="d "+(i==cur?"cur ":"")+cls(i);b.title=i+1;b.setAttribute("aria-label",(i+1)+". sayfa");b.onclick=()=>go(i);D.appendChild(b)}}
const ocTag=o=>HAS_OC&&o!=null?OC[o]:"";

function home(){
Z.innerHTML=`<div class="hero"><div class="big">${B.emoji}</div><h2>${B.baslik}</h2><p>${B.ders.replace(/^BTY /,"")} · ${B.sinav}ya Hazırlık. Önce konu özetini oku, bilmediğin kelimelere sözlükten bak, sonra soruları çöz. Her soruda önce 💡 ipucuna, sonra ✅ cevaba bak.</p>
<div class="row"><button class="go" id="g1">📖 Konu Özeti</button><button class="go alt" id="g5">🎯 Pekiştirme İstasyonu</button><button class="go alt" id="g4">📚 Sözlük</button><button class="go alt" id="g2">📋 Soru Menüsü</button><button class="go alt" id="g3">❓ 1. Soru</button></div></div>`;
$("#g1").onclick=()=>{mode="learn";si=0;draw()};$("#g5").onclick=()=>{mode="ist";draw()};$("#g4").onclick=()=>{mode="gloss";gi=0;draw()};$("#g2").onclick=()=>{mode="menu";draw()};$("#g3").onclick=()=>{mode="quiz";qi=0;draw()};
$("#pv").disabled=true;$("#nx").disabled=false;D.innerHTML="";}

function learn(){
const [h,intro,cs,o,lb]=S[si];const n=cs.length,c=n<=4?n:3,L=lb||B.karsilastirma||["",""],oc=ocTag(o);
Z.innerHTML=`<h2>${h}${oc?`<span class="oc">${oc}</span>`:""}</h2><p class="intro">${intro}</p><div class="grid" style="--c:${c}">`+cs.map(k=>k[2]===null?
`<div class="card"><div class="em">${k[0]}</div><b>${k[1]}</b><div class="cmp"><div class="n"><small>${L[0]}</small>${k[4]}</div><div class="y"><small>${L[1]}</small>${k[5]}</div></div></div>`:
`<div class="card"><div class="em">${k[0]}</div><b>${k[1]}</b><p>${k[2]}</p><div class="ex">💬 ${k[3]}</div></div>`).join("")+`</div>`;
$("#pv").disabled=false;$("#nx").disabled=false;$("#nx").textContent=si==S.length-1?"Sözlüğe Geç ▶":"İleri ▶";
dots(S.length,si,()=>"",i=>{si=i;draw()});}

function gloss(){
const part=W.slice(gi*WP,gi*WP+WP);
Z.innerHTML=`<h2>📚 Sözlük <span class="pg">${gi+1} / ${WN}</span></h2><div class="wg">`+part.map(w=>`<div class="wc"><b>${w[0]}</b><p>${w[1]}</p><span>💬 ${w[2]}</span></div>`).join("")+`</div>`;
$("#pv").disabled=false;$("#nx").disabled=false;$("#nx").textContent=gi==WN-1?"Sorulara Geç ▶":"İleri ▶";
dots(WN,gi,()=>"",i=>{gi=i;draw()});}

function menu(){
const cols=Math.max(6,Math.ceil(Q.length/3));
Z.innerHTML=`<div class="mtop"><h2>📋 Soru Menüsü</h2><div class="lgd"><span><i style="background:#ffffff2a"></i>Açılmadı</span><span><i style="background:var(--hint)"></i>İpucu açıldı</span><span><i style="background:var(--ok)"></i>Cevap açıldı</span></div></div><div class="menu" style="grid-template-columns:repeat(${cols},1fr);grid-template-rows:repeat(${Math.ceil(Q.length/cols)},1fr)">`+
Q.map((x,i)=>`<button class="mi ${st[i]==2?"a":st[i]==1?"h":""}" data-i="${i}" style="animation-delay:${i*.015}s"><span class="k">${i+1}</span><span class="s">${x.s}</span>${ocTag(x.o)?`<span class="c">${ocTag(x.o).slice(4)}</span>`:""}</button>`).join("")+`</div>`;
Z.querySelectorAll(".mi").forEach(b=>b.onclick=()=>{qi=+b.dataset.i;mode="quiz";draw()});
$("#pv").disabled=false;$("#nx").disabled=false;$("#nx").textContent="1. Soru ▶";D.innerHTML="";}

function quiz(){
const x=Q[qi],s=st[qi],oc=ocTag(x.o);
Z.innerHTML=`<div class="qhead"><span class="qn">Soru ${qi+1} / ${Q.length}</span><span class="tag">${x.t}</span>${oc?`<span class="tag o">${oc} · ${OCN[x.o]}</span>`:""}</div>
${x.g&&window.GORSEL?`<div class="qtop"><div class="qq">${x.q}</div><div class="gv">${GORSEL(x.g)}</div></div>`:`<div class="qq ${x.q.length>250?"xlong":x.q.length>150?"long":""}">${x.q}</div>`}
<div class="pan">
<div class="box hb ${s>=1?"open":""}"><span class="lb">💡 İpucu</span>${s>=1?`<div class="tx">${x.h}</div>`:`<button class="rv h" id="bh">💡 İpucunu Göster</button>`}</div>
<div class="box ab ${s>=2?"open":""}"><span class="lb">✅ Cevap</span>${s>=2?`<div class="tx">${x.a}</div>`:s>=1?`<button class="rv a" id="ba">✅ Cevabı Göster</button>`:`<div class="wait">Önce ipucuna bak, biraz düşün 🤔</div>`}</div>
</div>`;
const bh=$("#bh"),ba=$("#ba");if(bh)bh.onclick=()=>{st[qi]=1;quiz()};if(ba)ba.onclick=()=>{st[qi]=2;quiz()};
$("#pv").disabled=false;$("#nx").disabled=false;$("#nx").textContent=qi==Q.length-1?"Menü ▶":"İleri ▶";
dots(Q.length,qi,i=>st[i]==2?"a":st[i]==1?"h":"",i=>{qi=i;draw()});}

/* ---------- PDF ---------- */
let pdfGv=true;/* true: görselli, false: görselsiz (2 sayfaya sığar) */
const hasG=Q.some(x=>x.g);
function pdfv(){
const n=sel.filter(Boolean).length;
const lbl=HAS_OC?`Sınav dağılımına göre 10 soru<br><small style="font-weight:600;opacity:.85">${SEN.map((k,o)=>OC[o].slice(4)+"→"+k).join(" · ")}</small>`:"Hazır 10 soru (sadece sorular)";
Z.innerHTML=`<div class="mtop"><h2>📄 PDF İndir</h2><span class="cnt">${n} soru seçili</span><button class="tab" id="pa">Tümünü Seç</button><button class="tab" id="pc">Temizle</button></div>
<div class="pl" style="grid-template-rows:repeat(${Math.max(8,Math.ceil(Q.length/2))},1fr)">`+Q.map((x,i)=>`<button class="pi ${sel[i]?"on":""}" data-i="${i}"><span class="cb">${sel[i]?"✓":""}</span><b>${i+1}.</b> <span class="pt">${x.s}</span><span class="lv l${x.d}">${isF(x)?"Fikir":LVN[x.d]}</span></button>`).join("")+`</div>
<div class="pb">${hasG?`<div class="pg2"><span class="pbl">PDF türü</span><button class="go sm ${pdfGv?"":"alt"}" id="gv1">🖼️ Görselli</button><button class="go sm ${pdfGv?"alt":""}" id="gv0">📄 Görselsiz · 2 sayfa</button></div>`:""}<div class="pg2"><span class="pbl">Seçili sorular</span><button class="go sm" id="p1" ${n?"":"disabled"}>⬇️ Sorular + Cevaplar</button><button class="go alt sm" id="p2" ${n?"":"disabled"}>⬇️ Sadece Sorular</button></div>
<div class="pg2"><span class="pbl">${lbl}</span><button class="go sm k1" data-l="1">🟢 Basit</button><button class="go sm k2" data-l="2">🟡 Orta</button><button class="go sm k3" data-l="3">🔴 Zor</button></div></div>`;
Z.querySelectorAll(".pi").forEach(b=>b.onclick=()=>{sel[+b.dataset.i]=!sel[+b.dataset.i];pdfv()});
$("#pa").onclick=()=>{sel=sel.map(()=>true);pdfv()};$("#pc").onclick=()=>{sel=sel.map(()=>false);pdfv()};
if(hasG){$("#gv1").onclick=()=>{pdfGv=true;pdfv()};$("#gv0").onclick=()=>{pdfGv=false;pdfv()}}
$("#p1").onclick=()=>askPw(()=>makePdf(true));$("#p2").onclick=()=>askPw(()=>makePdf(false));
Z.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>askPw(()=>{pickLevel(+b.dataset.l);pdfv();makePdf(false,LVN[+b.dataset.l])}));
$("#pv").disabled=false;$("#nx").disabled=true;D.innerHTML="";}

const shuf=a=>{for(let j=a.length-1;j>0;j--){const r=Math.floor(Math.random()*(j+1));[a[j],a[r]]=[a[r],a[j]]}return a};
/* Düzeye göre 10 soru.
   Dağılım (SEN) varsa: her kazanımdan tam SEN sayısı kadar soru, hiçbir kazanım atlanmaz; fikir sorusu
   varsa biri rastgele seçilip kendi kazanımının payından sayılır; kalanlar seçilen düzeye en yakın olanlardan.
   Dağılım yoksa: [basit, orta, zor] karışımı. */
const PREF={1:[1,2,3],2:[2,1,3],3:[3,2,1]},MIX={1:[7,3,0],2:[3,5,2],3:[1,4,5]};
function pickLevel(l){const pick=new Set();
 if(HAS_OC){const F=Q.map((x,i)=>isF(x)?i:-1).filter(i=>i>=0),fk=F.length?F[Math.floor(Math.random()*F.length)]:-1;
  if(fk>=0)pick.add(fk);
  SEN.forEach((need,o)=>{const left=need-(fk>=0&&Q[fk].o==o?1:0);
   const g=Q.map((x,i)=>({i,r:PREF[l].indexOf(x.d),k:Math.random()})).filter(e=>Q[e.i].o==o&&!isF(Q[e.i]));
   g.sort((a,b)=>a.r-b.r||a.k-b.k);g.slice(0,left).forEach(e=>pick.add(e.i))});
  sel=Q.map((_,i)=>pick.has(i));
  const c=SEN.map((_,o)=>Q.filter((x,i)=>sel[i]&&x.o==o).length);
  if(c.some((n,o)=>n!==SEN[o]))throw new Error("Sınav dağılımı sağlanamadı");
 }else{[1,2,3].forEach((d,k)=>shuf(Q.map((x,i)=>x.d==d?i:-1).filter(i=>i>=0)).slice(0,MIX[l][k]).forEach(i=>pick.add(i)));
  sel=Q.map((_,i)=>pick.has(i))}}

/* İndirme: claude.ai içinde açıldıysa onun indirme özelliği, değilse (GitHub Pages vb.) normal tarayıcı indirmesi */
const dlP=(window.claude&&window.claude.use)?window.claude.use("downloads").catch(()=>null):Promise.resolve(null);
async function saveFile(name,blob){const dl=await dlP;if(dl)return dl.save({filename:name,data:blob});
 const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}
function loadJs(src){return new Promise((ok,no)=>{if(document.querySelector(`script[src="${src}"]`))return ok();const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
const plain=h=>h.replace(/<br\s*\/?>/g,"\n").replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
let busy=false,unlocked=false;
/* Şifre kodda açık yazılmaz, yalnızca özeti (hash) saklanır. Değiştirmek için: README.md */
const PWH="cf93af25";
const hash=s=>{let x=0x811c9dc5;for(const c of s){x^=c.codePointAt(0);x=Math.imul(x,0x01000193)>>>0}return x.toString(16)};
function askPw(ok){if(unlocked)return ok();const w=$("#pw"),i=$("#pwi"),er=$("#pwe");w.hidden=false;i.value="";er.hidden=true;setTimeout(()=>i.focus(),50);
 const done=()=>{w.hidden=true;$("#pwok").onclick=$("#pwno").onclick=i.onkeydown=null};
 const tryIt=()=>{if(hash("bty-ders:"+i.value.trim())===PWH){unlocked=true;done();ok()}else{er.hidden=false;i.value="";i.focus()}};
 $("#pwok").onclick=tryIt;$("#pwno").onclick=done;i.onkeydown=e=>{e.stopPropagation();if(e.key=="Enter")tryIt();if(e.key=="Escape")done()}}
/* PDF: dar kenar boşlukları; 2 sayfayı geçerse yazı ve satırlar küçültülerek yeniden dizilir */
/* Sığmazsa önce görseller, sonra yazı ve satırlar küçülür */
const LV=[{fs:12.5,af:12,ln:3,lg:19,qg:12,gh:125},{fs:12,af:11.5,ln:3,lg:18,qg:10,gh:100},{fs:11.5,af:11,ln:2,lg:17,qg:9,gh:88},{fs:11,af:10.5,ln:2,lg:16,qg:8,gh:76},{fs:10.5,af:10,ln:1,lg:15,qg:7,gh:66},{fs:9.5,af:9.5,ln:1,lg:13,qg:5,gh:56}],LV_GS=[{fs:9,af:9,ln:1,lg:11,qg:4,gh:0},{fs:8.5,af:8.5,ln:1,lg:9,qg:3,gh:0}];
function buildDoc(list,withA,L,pc){const PW=539,body=[];
 /* Her soru, cevabı (ya da cevap satırları) ile tek blok: sayfa sonunda bölünmez, gerekirse bütün olarak sonraki sayfaya geçer */
 list.forEach((x,i)=>{const blk=[];
  const qt={text:[{text:(i+1)+". ",bold:true,color:"#c2185b"},plain(x.q)],fontSize:L.fs,bold:true,margin:[0,0,0,4],lineHeight:1.2};
  if(x.g&&window.GORSEL&&pdfGv){const sv=GORSEL(x.g),m=sv.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/),r=m?m[1]/m[2]:1;
   /* Geniş görsel sorunun altına, dar görsel sorunun sağına */
   if(r>1.8)blk.push(qt,{svg:sv,fit:[Math.min(PW-24,L.gh*0.8*r),L.gh*0.8],alignment:"center",margin:[12,0,0,6]});
   else{const gh=r<1?L.gh*1.6:L.gh,gw=Math.min(210,gh*r);blk.push({columns:[{width:"*",stack:[qt]},{width:gw,svg:sv,fit:[gw,gh]}],columnGap:12,margin:[0,0,0,4]})}}
  else blk.push(qt);
  if(withA)blk.push({text:[{text:"Cevap: ",bold:true,color:"#0f8a5f"},(x.p||plain(x.a))],fontSize:L.af,margin:[12,0,0,0],lineHeight:1.2});
  else for(let k=0;k<L.ln;k++)blk.push({canvas:[{type:"line",x1:12,y1:0,x2:PW,y2:0,lineWidth:.6,lineColor:"#9aa0b4",dash:{length:2}}],margin:[0,L.lg,0,0]});
  body.push({stack:blk,unbreakable:true,margin:[0,i?L.qg:0,0,0]});
 });
 return{pageSize:"A4",pageMargins:[28,28,28,32],info:{title:B.ders+" "+B.sinav+" "+(withA?"Soru ve Cevaplar":"Sorular"),author:"Mehmet Karadeniz, 2026-2027"},
  content:[{columns:[{stack:[{text:B.pdfBaslik,fontSize:15,bold:true,color:"#3b2b8f"}]},
    withA?{text:""}:{text:"Ad Soyad: ..........................   Sınıf/No: ........",fontSize:10,alignment:"right",margin:[0,4,0,0]}],columnGap:8},
   {canvas:[{type:"line",x1:0,y1:0,x2:PW,y2:0,lineWidth:1.2,lineColor:"#3b2b8f"}],margin:[0,5,0,10]},...body],
  footer:(c,t)=>{pc.n=t;return{columns:[{text:""},{text:c+" / "+t,alignment:"right",fontSize:7.5,color:"#888"}],margin:[28,12,28,0]}},
  defaultStyle:{font:"Roboto"}}}
async function makePdf(withA,lvl){
if(busy)return;busy=true;toast("PDF hazırlanıyor…");
try{
 if(!window.pdfMake||!pdfMake.vfs){const LB=document.querySelector('script[src*="motor/motor.js"]').src.replace(/motor\.js.*$/,"lib/");await loadJs(LB+"pdfmake.min.js");await loadJs(LB+"vfs_fonts.js")}
 const list=Q.filter((_,i)=>sel[i]);let blob,pc={n:0};
 for(const L of pdfGv?LV:LV.concat(LV_GS)){pc={n:0};blob=await new Promise(r=>pdfMake.createPdf(buildDoc(list,withA,L,pc)).getBlob(r));if(pc.n<=2)break}
 await saveFile(B.dosya+(withA?"_Soru_Cevap":"_Sorular"+(lvl?"_"+lvl:""))+(hasG&&!pdfGv?"_Gorselsiz":"")+".pdf",blob);
 toast(pc.n>2?"PDF indirildi (çok soru seçildiği için "+pc.n+" sayfa).":lvl&&HAS_OC?"PDF indirildi ✅ Dağılım: "+SEN.map((n,o)=>OC[o].slice(4)+"→"+n).join(" · "):"PDF indirildi ✅");
}catch(e){toast(e&&e.code=="declined"?"İndirme iptal edildi.":e&&e.code=="rate_limited"?"Biraz bekleyip tekrar deneyin.":"PDF oluşturulamadı. İnternet bağlantısını kontrol edip tekrar deneyin.")}
finally{busy=false}}

/* Pekiştirme İstasyonu: motor/istasyon.js (çizici) ve yazılı klasöründeki istasyon.js (içerik) ilk açılışta yüklenir */
let istY=false;
function istv(){
 if(window.ISTASYON&&typeof IST!=="undefined"){document.body.classList.add("ist");ISTASYON.ciz(Z,{veri:IST,ad:B.dosya||"yazili",oc:HAS_OC?OC:[],ocn:typeof OCN!=="undefined"?OCN:[],geri:()=>{mode="home";draw()}});$("#pv").disabled=true;$("#nx").disabled=true;D.innerHTML="";return}
 Z.innerHTML='<div class="hero"><div class="big">🎯</div><h2>İstasyonlar hazırlanıyor…</h2></div>';
 if(istY)return;istY=true;
 const ms=document.querySelector('script[src*="motor/motor.js"]'),q=ms?(ms.src.match(/\?.*$/)||[""])[0]:"";
 const yukle=(u,ok)=>{const sc=document.createElement("script");sc.src=u;sc.onload=()=>ok(true);sc.onerror=()=>ok(false);document.head.appendChild(sc)};
 const son=()=>{istY=false;if(window.ISTASYON&&typeof IST!=="undefined"){lk="";if(mode=="ist")draw()}else{toast("Bu yazılı için istasyon henüz hazır değil.");mode="home";draw()}};
 const veri=()=>typeof IST!=="undefined"?son():yukle(new URL("istasyon.js"+q,location.href).href,son);
 window.ISTASYON?veri():yukle(ms?ms.src.replace(/motor\.js.*$/,"istasyon.js")+q:"",ok=>ok?veri():son())}
function draw(){const key=mode+si+qi+gi;if(key!=lk){lk=key;z=1;tx=ty=0;ap();$("#main").scrollTop=0}
["tl","tg","tm","tq","ti","tp"].forEach((id,i)=>$("#"+id).classList.toggle("on",mode==["learn","gloss","menu","quiz","ist","pdf"][i]));document.body.classList.toggle("ist",mode=="ist");
$("#nx").textContent="İleri ▶";({home,learn,gloss,menu,quiz,ist:istv,pdf:pdfv})[mode]()}

$("#hm").onclick=()=>{try{if(window.parent!==window&&parent.BTY_EV)return parent.BTY_EV()}catch(e){}const m=location.pathname.match(/dersler\/([^/]+)\//);location.href=KOK+"index.html"+(m?"#"+m[1]:"")};
$("#tl").onclick=()=>{mode="learn";draw()};$("#tg").onclick=()=>{mode="gloss";draw()};$("#tq").onclick=()=>{mode="quiz";draw()};$("#ti").onclick=()=>{mode="ist";draw()};$("#tm").onclick=()=>{mode="menu";draw()};$("#tp").onclick=()=>askPw(()=>{mode="pdf";draw()});
$("#pv").onclick=()=>{if(mode=="learn"){if(si>0)si--;else mode="home"}else if(mode=="gloss"){if(gi>0)gi--;else{mode="learn";si=S.length-1}}else if(mode=="quiz"){if(qi>0)qi--;else mode="menu"}else if(mode=="menu"){mode="gloss";gi=WN-1}else if(mode=="pdf")mode="menu";draw()};
$("#nx").onclick=()=>{if(mode=="home"){mode="learn";si=0}else if(mode=="learn"){if(si<S.length-1)si++;else{mode="gloss";gi=0}}else if(mode=="gloss"){if(gi<WN-1)gi++;else mode="menu"}else if(mode=="menu"){mode="quiz";qi=0}else if(mode=="quiz"){
 if(st[qi]<2){st[qi]++}else if(qi<Q.length-1)qi++;else mode="menu"}else return;draw()};
addEventListener("keydown",e=>{if(!$("#pw").hidden)return;if(e.key=="ArrowRight"||e.key==" "||e.key=="PageDown"){e.preventDefault();$("#nx").click()}else if(e.key=="ArrowLeft"||e.key=="PageUp"){e.preventDefault();$("#pv").click()}});

/* ---------- YAKINLAŞTIRMA ---------- */
function ap(){Z.style.transform=`translate(${tx}px,${ty}px) scale(${z})`;$("#zl").textContent=Math.round(z*100)+"%"}
function K(){return $("#stage").getBoundingClientRect().width/(PORT?480:1280)}
function clamp(){const m=$("#main"),w=m.clientWidth,h=m.clientHeight;if(z<=1){z=1;tx=ty=0;return}tx=Math.min(0,Math.max(w*(1-z),tx));ty=Math.min(0,Math.max(h*(1-z),ty))}
function zoomAt(nz,px,py){nz=Math.max(1,Math.min(4,nz));tx=px-(px-tx)*nz/z;ty=py-(py-ty)*nz/z;z=nz;clamp();ap()}
function loc(x,y){const r=$("#main").getBoundingClientRect(),k=K();return[(x-r.left)/k,(y-r.top)/k]}
function ctr(f){const m=$("#main");zoomAt(z*f,m.clientWidth/2,m.clientHeight/2)}
$("#zp").onclick=()=>ctr(1.25);$("#zm").onclick=()=>ctr(1/1.25);$("#zl").onclick=()=>{z=1;tx=ty=0;ap()};
$("#fs").onclick=()=>{const d=document,e=d.documentElement;try{const on=d.fullscreenElement||d.webkitFullscreenElement;const p=on?(d.exitFullscreen||d.webkitExitFullscreen).call(d):(e.requestFullscreen||e.webkitRequestFullscreen).call(e);if(p&&p.catch)p.catch(()=>toast("Tam ekran bu pencerede engellendi. Tarayıcıda F11 tuşuna basın."))}catch(x){toast("Tam ekran için tarayıcıda F11 tuşuna basın.")}};
/* Dokunmatik: tek parmak = yakınken kaydır, iki parmak = yakınlaştır/uzaklaştır. */
const mn=$("#main");let G=null,moved=false;
function startG(pts){if(PORT){G=null;return}if(pts.length>=2){const m=[(pts[0][0]+pts[1][0])/2,(pts[0][1]+pts[1][1])/2],[mx,my]=loc(...m);
  G={t:2,z0:z,d0:Math.hypot(pts[0][0]-pts[1][0],pts[0][1]-pts[1][1])||1,cx:(mx-tx)/z,cy:(my-ty)/z};moved=true}
 else if(pts.length==1)G={t:1,x0:pts[0][0],y0:pts[0][1],tx0:tx,ty0:ty};else G=null}
function moveG(pts){if(!G)return;
 if(G.t==2&&pts.length>=2){const d=Math.hypot(pts[0][0]-pts[1][0],pts[0][1]-pts[1][1])||1,[mx,my]=loc((pts[0][0]+pts[1][0])/2,(pts[0][1]+pts[1][1])/2);
  z=Math.max(1,Math.min(4,G.z0*d/G.d0));tx=mx-G.cx*z;ty=my-G.cy*z;clamp();ap()}
 else if(G.t==1&&pts.length==1&&z>1){const k=K(),dx=(pts[0][0]-G.x0)/k,dy=(pts[0][1]-G.y0)/k;
  if(moved||Math.abs(dx)+Math.abs(dy)>12){moved=true;tx=G.tx0+dx;ty=G.ty0+dy;clamp();ap()}}}
function endG(pts){startG(pts);if(!pts.length)setTimeout(()=>moved=false,0)}
const tp=e=>[...e.touches].map(t=>[t.clientX,t.clientY]);
mn.addEventListener("touchstart",e=>{if(!PORT&&e.touches.length>1)e.preventDefault();startG(tp(e))},{passive:false});
mn.addEventListener("touchmove",e=>{if(!PORT&&(e.touches.length>1||moved))e.preventDefault();moveG(tp(e))},{passive:false});
mn.addEventListener("touchend",e=>endG(tp(e)));mn.addEventListener("touchcancel",e=>endG(tp(e)));
let mp=null;
mn.addEventListener("pointerdown",e=>{if(e.pointerType=="touch"||e.button!=0)return;mp=e.pointerId;startG([[e.clientX,e.clientY]])});
addEventListener("pointermove",e=>{if(e.pointerId!==mp)return;moveG([[e.clientX,e.clientY]])});
addEventListener("pointerup",e=>{if(e.pointerId!==mp)return;mp=null;endG([])});
mn.addEventListener("click",e=>{if(moved){e.stopPropagation();e.preventDefault()}},true);
mn.addEventListener("wheel",e=>{if(PORT)return;e.preventDefault();const[x,y]=loc(e.clientX,e.clientY);zoomAt(z*(e.deltaY<0?1.15:1/1.15),x,y)},{passive:false});
["gesturestart","gesturechange"].forEach(t=>document.addEventListener(t,e=>e.preventDefault()));
document.addEventListener("touchmove",e=>{if(e.touches.length>1)e.preventDefault()},{passive:false});
addEventListener("resize",fit);fit();
/* Soru görselleri ayrı dosyada (gorsel.js); motorla aynı sürümle yüklenir */
if(window.GORSEL||!Q.some(x=>x.g))draw();
else{const sc=document.createElement("script");sc.src=document.querySelector('script[src*="motor/motor.js"]').src.replace("motor.js","gorsel.js");sc.onload=sc.onerror=()=>{lk="";draw()};document.head.appendChild(sc);draw()}
})();
