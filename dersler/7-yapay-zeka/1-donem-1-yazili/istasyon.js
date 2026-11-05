/* ============================================================
   7. Sınıf Yapay Zekâ · 1. Dönem 1. Yazılı · Pekiştirme İstasyonu içeriği
   Çizici: /motor/istasyon.js · Konu: veri.js'teki konu özeti
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
const IST={

/* ---------- 🔍 BİLİM DEDEKTİFİ ---------- */
vaka:[
{b:"Doktorun Yardımcısı",
 v:"Bir hastanede röntgen filmlerini inceleyen bir yapay zekâ programı kullanılıyor. Program, bir hastanın görüntüsünde doktorun ilk bakışta gözünden kaçabilecek küçük bir belirti fark edip doktoru uyarıyor.",
 i:["Program, görüntüleri inceleyen bir yapay zekâ uygulaması.","Yapay zekâ insanın yerine geçmez, ona yardımcı olur.","Sağlıkta amaç, hastalığı erkenden bulmaya yardım etmektir."],
 q:"Bu örnek yapay zekânın sağlıkta ne işe yaradığını gösterir?",
 c:["Hastalığı erkenden bulmaya yardım eder; kararı yine doktor verir.","Doktorun yerine geçer; artık doktora gerek kalmaz.","Hastaya ilaç içirir."],d:0,
 a:"Yapay zekâ röntgen ve MR gibi görüntüleri inceleyip hastalığın erken fark edilmesine yardım eder; insanın yerine geçmez."},
{b:"Hiç Zürafa Görmeyen Program",
 v:"Bir sınıf, hayvan resmi çizen bir yapay zekâ programını kedi, köpek ve at resimleriyle eğitti. Programdan zürafa çizmesi istenince ortaya tuhaf, hatalı bir resim çıktı.",
 i:["Program yalnızca kedi, köpek ve at resimlerini görmüş.","Yapay zekâ, öğrendiği veri kadar akıllıdır.","Zürafa verisi olmayınca program zürafayı tanıyamıyor."],
 q:"Programın zürafayı hatalı çizmesinin nedeni nedir?",
 c:["Zürafa ile ilgili veriyle eğitilmediği için.","Programın yorulması.","Programın zürafadan korkması."],d:0,
 a:"Yapay zekâ veriye bağımlıdır. Hiç görmediği şeyleri tanımakta ve üretmekte zorlanır."},
{b:"Gece Yarısı Alışverişi",
 v:"Cansu’nun banka kartıyla, o hiç gitmediği başka bir şehirde gece yarısı pahalı bir alışveriş yapılmaya çalışıldı. Banka işlemi hemen durdurdu ve Cansu’ya uyarı gönderdi.",
 i:["Bu işlem Cansu’nun alışkanlıklarına hiç uymuyor.","Banka, milyonlarca işlemi inceleyen bir sistem kullanıyor.","Alışkanlığa uymayan işlemi fark eden bu sistem yapay zekâdır."],
 q:"Bu örnekte yapay zekâ hangi alanda kullanılmıştır?",
 c:["Finans ve bankacılık","Tarım","Eğitim"],d:0,
 a:"Yapay zekâ, alışkanlıklara uymayan şüpheli işlemi fark eder ve durdurur."},
{b:"Hiç Söylemediği Sözler",
 v:"İnternette bir futbolcunun, hiç söylemediği sözleri söylediği bir video hızla yayılıyor. Videodaki yüz ve ses futbolcuya çok benziyor ama bazı hareketler garip duruyor.",
 i:["Birinin yüzü ya da sesiyle sahte video yapılabiliyor.","Bu tür videolara deepfake denir.","Gerçek olmayan içerik yanlış bilginin yayılmasına yol açar."],
 q:"Bu videoyla karşılaşan bir öğrenci ne yapmalıdır?",
 c:["Paylaşmadan önce doğruluğunu güvenilir kaynaklarda kontrol etmeli.","Hemen herkese göndermeli.","Gerçek olduğunu varsaymalı."],d:0,
 a:"Deepfake sahte içerik üretir. Paylaşmadan önce doğruluğu kontrol edilmelidir."},
{b:"Aracın Gözü",
 v:"Sürücüsüz bir araç, yolda yürüyen yayayı ve trafik işaretlerini kameralarıyla fark edip durması gereken yerde duruyor.",
 i:["Araç, kamerasındaki görüntüleri inceliyor.","Fotoğraf ve videolardaki nesneleri tanımaya yarayan alt boyutu düşün.","Görüntüyü piksellere ayırarak inceler."],
 q:"Aracın yayayı ve işareti görmesini hangi alt boyut sağlar?",
 c:["Görüntü işleme","Doğal dil işleme","Veri ihlali"],d:0,
 a:"Görüntü işleme, fotoğraf ve videolardaki nesneleri, yüzleri ve yazıları tanır."}
],

/* ---------- ✅ DOĞRU MU, YANLIŞ MI? ---------- */
dy:[
{i:"Yapay zekâ, insan zekâsını taklit eden bilgisayar sistemleridir.",d:true,a:"Öğrenir, problem çözer ve karar verir."},
{i:"Makine öğrenmesinde her şey bilgisayara tek tek anlatılır.",d:false,a:"Makine öğrenmesinde bilgisayar örneklerden (verilerden) kendi kendine öğrenir."},
{i:"Yapay zekâ öğrenmek için veriye ihtiyaç duymaz.",d:false,a:"Yapay zekânın en çok ihtiyacı veridir. Ne kadar çok ve doğru veri, o kadar doğru karar."},
{i:"Yapay zekânın duyguları vardır; üzülür, sevinir.",d:false,a:"Yapay zekâ duygu hissetmez. Doğal zekâ ise sevinir, üzülür, empati kurar."},
{i:"Doğal zekâ doğuştan gelir, yapay zekâ ise insanlar tarafından yapılır.",d:true,a:"Doğal ve yapay zekânın kaynağı farklıdır."},
{i:"Yapay zekâ, insan gibi hayal gücüne ve yaratıcılığa sahiptir.",d:false,a:"Yapay zekâ öğrendiği verilere dayanarak üretir; insan gibi hayal gücü yoktur."},
{i:"Doğal dil işleme, bilgisayarın insan dilini anlamasını sağlar.",d:true,a:"Sesli asistanlar ve çeviri uygulamaları buna örnektir."},
{i:"Yapay sinir ağları, insan beynindeki sinir hücrelerinden ilham alır.",d:true,a:"Birbirine bağlı yapay hücrelerle öğrenirler."},
{i:"Görüntü işleme, bilgisayarın dilleri çevirmesini sağlar.",d:false,a:"Diller doğal dil işlemeyle çevrilir. Görüntü işleme fotoğraf ve videodaki nesneleri tanır."},
{i:"Yapay zekâ röntgen ve MR görüntülerini inceleyerek hastalığın erken bulunmasına yardım edebilir.",d:true,a:"Karar yine doktora aittir."},
{i:"Yapay zekâ eksik ya da yanlış veriyle öğrenirse yanlış sonuç verebilir.",d:true,a:"Yapay zekâ, öğrendiği veri kadar akıllıdır."},
{i:"Deepfake, birinin yüzü ya da sesiyle sahte video yapılmasıdır.",d:true,a:"Bu yüzden internetteki videoların doğruluğunu kontrol etmeliyiz."},
{i:"Bilmediğimiz her uygulamaya fotoğrafımızı yüklemek güvenlidir.",d:false,a:"Kişisel bilgi ve fotoğraflarımızı her uygulamaya vermemeli, izinlere dikkat etmeliyiz."}
],

/* ---------- 📝 TEST ---------- */
test:[
{s:"Selma’nın telefonu, kamerasına bakınca onun yüzünü tanıyıp kilidi açıyor.",
 q:"Bu özellik yapay zekânın hangi alt boyutuyla çalışır?",
 c:["Görüntü işleme","Doğal dil işleme","Büyük veri","Siber güvenlik"],d:0,a:"Görüntü işleme, yüzleri ve nesneleri tanır."},
{s:"Kerem telefonuna “Yarın hava nasıl olacak?” diye sorunca telefon ona sesli cevap veriyor.",
 q:"Bu uygulamayı mümkün kılan alt boyut hangisidir?",
 c:["Doğal dil işleme","Görüntü işleme","Yapay sinir ağları","Algoritma"],d:0,a:"Doğal dil işleme, bilgisayarın insan dilini anlayıp cevap vermesini sağlar."},
{s:"Bir sınıf, kedi tanıyan bir program hazırlıyor ve ona binlerce kedi resmi gösteriyor.",
 q:"Programın iyi öğrenmesi için en çok neye ihtiyacı vardır?",
 c:["Çok sayıda doğru veriye","Duygulara","Hayal gücüne","Dinlenmeye"],d:0,a:"Yapay zekânın yakıtı veridir."},
{s:"Ali, arkadaşının üzgün olduğunu fark ediyor ve onu teselli etmek için yanına gidiyor.",
 q:"Ali’nin bu davranışı doğal zekânın hangi özelliğine örnektir?",
 c:["Empati ve duygu","Çok hızlı işlem yapma","Veriyle eğitilme","Algoritmayla çalışma"],d:0,a:"Doğal zekâ sevinir, üzülür, empati kurar; yapay zekânın duygusu yoktur."},
{s:"Bir hastanede röntgen görüntülerini inceleyen bir yapay zekâ programı kullanılıyor.",
 q:"Bu program hangi konuda yardımcı olur?",
 c:["Hastalığı erkenden fark etmeye","Doktorun yerine geçmeye","Hasta yakınlarıyla sohbet etmeye","İlaç üretmeye"],d:0,a:"Yapay zekâ teşhise yardım eder; insanın yerine geçmez."},
{s:"Bir çiftçi, bitki hastalıklarını tanıyan ve tarlayı gerektiği kadar sulayan akıllı bir sistem kullanıyor.",
 q:"Bu sistem hangi alanda kullanılmaktadır?",
 c:["Tarım ve hayvancılık","Finans","Eğitim","Siber güvenlik"],d:0,a:"Yapay zekâ tarımda hastalıkları tanır ve akıllı sulama yapar."},
{s:"Kartıyla alışkanlıklarına hiç uymayan bir alışveriş yapılınca banka işlemi durduruyor.",
 q:"Yapay zekânın bu görevi aşağıdakilerden hangisidir?",
 c:["Şüpheli işlemi fark etmek","Hesabı otomatik boşaltmak","Müşteriyi uyutmak","Şifreyi herkesle paylaşmak"],d:0,a:"Finansta yapay zekâ şüpheli işlemleri fark eder ve durdurur."},
{s:"Hiç zürafa görmemiş bir yapay zekâ programı, zürafa çizerken çok hata yapıyor.",
 q:"Bu durum yapay zekânın hangi sınırlılığını gösterir?",
 c:["Veriye bağımlı olmasını","Çok hızlı çalışmasını","Duygularının olmasını","Yorulmasını"],d:0,a:"Yapay zekâ, öğrendiği veri kadar akıllıdır."},
{s:"Bir şirketin iş başvurularını inceleyen yapay zekâ sistemi, her seferinde belli bir grup insanı eliyor.",
 q:"Bu duruma ne ad verilir?",
 c:["Ayrımcılık","Verimlilik","Makine öğrenmesi","Navigasyon"],d:0,a:"Tek taraflı verilerle öğrenen sistem bazı insanlara haksızlık yapabilir."},
{s:"Bir ünlünün hiç söylemediği sözleri söylediği sahte bir video yayılıyor.",
 q:"Bu tür sahte videolara ne ad verilir?",
 c:["Deepfake","Algoritma","Büyük veri","Nöron"],d:0,a:"Deepfake, birinin yüzü veya sesiyle yapılan sahte videodur."},
{s:"Türkiye’de kişisel verilerin korunması için çıkarılmış bir kanun vardır.",
 q:"Bu kanunun kısa adı nedir?",
 c:["KVKK","KDV","KPSS","KYK"],d:0,a:"Kişisel Verilerin Korunması Kanunu (KVKK) bilgilerimizi korur."}
],

/* ---------- 🔗 EŞLEŞTİRME ---------- */
esles:[
{b:"Set 1 · Temel kavramlar",c:[
 ["Yapay zekâ","Bilgisayarın insan gibi düşünmesini, öğrenmesini ve karar vermesini sağlayan teknoloji"],
 ["Makine öğrenmesi","Bilgisayarın örneklerden kendi kendine öğrenmesi"],
 ["Veri","Yazı, sayı, resim, ses gibi bilgisayarın kullandığı bilgiler"],
 ["Doğal zekâ","İnsanın doğuştan sahip olduğu düşünme ve öğrenme yeteneği"],
 ["Algoritma","Bir işi yapmak için sırayla izlenen adımlar"]]},
{b:"Set 2 · Alt boyutlar ve araçlar",c:[
 ["Doğal dil işleme","Bilgisayarın insan dilini anlayıp cevap vermesi"],
 ["Görüntü işleme","Fotoğraf ve videolardaki nesneleri, yüzleri tanıma"],
 ["Yapay sinir ağları","Beyindeki nöronları taklit eden yapay hücre ağı"],
 ["Sesli asistan","Sesimizi anlayıp bize cevap veren uygulama"],
 ["Büyük veri","Çok fazla ve sürekli büyüyen bilgi yığını"]]},
{b:"Set 3 · Etik ve güvenlik",c:[
 ["Deepfake","Birinin yüzü ya da sesiyle yapılan sahte video veya ses"],
 ["KVKK","Türkiye’de kişisel verilerimizi koruyan kanun"],
 ["Ayrımcılık","Bazı insanlara haksız ve eşit olmayan davranmak"],
 ["Siber güvenlik","Bilgisayarları ve hesapları saldırılara karşı korumak"],
 ["Veri ihlali","Bilgilerimizin izinsiz alınması veya paylaşılması"]]}
],

/* ---------- ✏️ BOŞLUK DOLDURMA ---------- */
bosluk:[
{b:"Yapay zekâ kavramları",h:["veri","makine","nöronlardan","dil","deepfake","KVKK","algoritma","görüntü"],
 s:[
 {m:"Yapay zekânın öğrenmesi için en çok ___ gerekir.",d:"veri"},
 {m:"Bilgisayarın örneklerden kendi kendine öğrenmesine ___ öğrenmesi denir.",d:"makine"},
 {m:"Yapay sinir ağları, insan beynindeki sinir hücrelerinden, yani ___ ilham alır.",d:"nöronlardan"},
 {m:"Bilgisayarın insan dilini anlamasını sağlayan alt boyuta doğal ___ işleme denir.",d:"dil"},
 {m:"Birinin yüzü ya da sesiyle yapılan sahte videoya ___ denir.",d:"deepfake"},
 {m:"Türkiye’de kişisel verilerimizi ___ korur.",d:"KVKK"}]}
],

/* ---------- 🔢 SIRALAMA ---------- */
sira:[
{b:"Yapay zekâ nasıl öğrenir?",y:"Yapay zekânın bir şeyi öğrenme adımlarını sırasıyla seç.",
 s:["Çok sayıda örnek (veri) görür","Örneklerdeki benzerlikleri bulur","Yeni bir şey görünce tahmin eder"]},
{b:"Sahte haberle karşılaşırsan",y:"İnternette şüpheli bir haber ya da video gördün. Doğru davranış sırasını seç.",
 s:["Hemen paylaşma, dur","Haberin kaynağına bak","Başka güvenilir kaynaklarda ara","Yanlışsa paylaşma ve bildir"]}
],

/* ---------- 🖊️ KLASİK SORULAR ---------- */
klasik:[
{q:"Doğal zekâ ile yapay zekâ arasında üç fark yaz.",
 ornek:"Doğal zekâ doğuştan gelir, yapay zekâ insanlar tarafından yapılır. Doğal zekâ sevinir, üzülür, empati kurar; yapay zekânın duygusu yoktur. Doğal zekâ özgün fikirler üretir; yapay zekâ öğrendiği verilere dayanarak üretir ve çok hızlı işlem yapar.",
 k:["En az üç fark yazdım","Farklar doğal ve yapay zekâyı karşılaştırıyor","Duygu veya yaratıcılıktan söz ettim"]},
{q:"Yapay zekâ nasıl öğrenir? Üç adımda açıkla.",
 ornek:"Önce çok sayıda örnek (veri) görür. Sonra örneklerdeki benzerlikleri bulur. Yeni bir şey görünce öğrendiklerine göre tahmin eder.",
 k:["Üç adımı yazdım","Adımların sırası doğru","Veriden söz ettim"]},
{q:"Günlük hayattan yapay zekâ kullanılan iki örnek ver ve her birinin ne iş yaptığını yaz.",
 ornek:"Sesli asistan sesimizi anlayıp cevap verir. Yüz tanıma, telefonun yüzümüzü tanıyıp kilidi açmasını sağlar. (Öneri sistemi, navigasyon, robot süpürge de olabilir.)",
 k:["İki örnek verdim","Örnekler gerçekten yapay zekâ kullanıyor","Her birinin işini açıkladım"]},
{q:"Yapay zekânın sağlık alanına katkısını bir örnekle açıkla.",
 ornek:"Yapay zekâ röntgen ve MR gibi görüntüleri inceleyip hastalığın erken fark edilmesine yardım eder. Örneğin bir belirtiyi doktordan önce fark edebilir. Ancak karar yine doktora aittir.",
 k:["Sağlıkta ne işe yaradığını yazdım","Bir örnek verdim","İnsanın yerine geçmediğini belirttim"]},
{q:"Yapay zekânın iki sınırlılığını örnekle yaz.",
 ornek:"Yapay zekâ veriye bağımlıdır: hiç zürafa görmediyse zürafayı tanımakta zorlanır. Duygu hissetmez, sadece yüz ifadesine ya da kelimelere bakarak tahmin eder; gülerek ağlayan birini anlayamayabilir. Eksik veriyle öğrenirse hata yapar.",
 k:["İki sınırlılık yazdım","Her biri için örnek verdim","Yazdıklarım yapay zekâya ait"]},
{q:"Deepfake nedir? Sahte içeriklerden ve verilerimizin kötüye kullanılmasından nasıl korunuruz?",
 ornek:"Deepfake, birinin yüzü ya da sesiyle yapılan sahte videodur. Paylaşmadan önce doğruluğu kontrol etmeli; kişisel bilgi ve fotoğrafımızı her uygulamaya vermemeli, güçlü şifre kullanmalı ve izinlere dikkat etmeliyiz.",
 k:["Deepfake’i doğru tanımladım","En az bir korunma yolu yazdım","Kişisel verilerin korunmasından söz ettim"]}
]

};
