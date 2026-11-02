/* ============================================================
   7. Sınıf Yapay Zekâ · 1. Dönem 1. Yazılı
   Bu dosya yalnızca İÇERİK içerir (özet, sözlük, sorular).
   Tasarım ve kod: /motor/motor.js + /motor/motor.css
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
const BILGI={
 ders:"7. Sınıf Yapay Zekâ",           // üst çubukta ve PDF başlığında
 sinav:"1. Dönem 1. Yazılı",
 emoji:"🤖",
 baslik:"Yapay Zekâ",         // açılış ekranındaki büyük başlık
 pdfBaslik:"Yapay Zekâ",      // PDF üst bilgisindeki ders adı
 dosya:"YZ7_1D1Y",         // PDF dosya adı ön eki
 karsilastirma:["🧠 DOĞAL ZEKÂ","🤖 YAPAY ZEKÂ"] // karşılaştırma kartlarının sol/sağ etiketi
};

/* ---------- KONU ÖZETİ ---------- */
// [başlık, giriş, kartlar] kart: [emoji, başlık, açıklama, örnek] ya da karşılaştırma: [emoji, başlık, null, null, doğal, yapay]
const S=[
["Yapay Zekâ Nedir? 🤖","Yapay zekâ; bilgisayarların insan gibi düşünmesini, öğrenmesini ve karar vermesini sağlayan teknolojidir.",[
["🤖","Yapay Zekâ","İnsan zekâsını taklit eden bilgisayar sistemleridir. Öğrenir, problem çözer, karar verir.","Telefonun yüzünü tanıyıp kilidi açması."],
["📈","Makine Öğrenmesi","Bilgisayarın her şeyin tek tek anlatılmasına gerek kalmadan örneklerden (verilerden) kendi kendine öğrenmesidir.","Sık dinlediğin şarkılara göre yeni şarkı önermesi."],
["🗂️","Veri = Yakıt","Yapay zekânın öğrenmesi için en çok VERİYE ihtiyacı vardır. Ne kadar çok ve doğru veri, o kadar doğru karar.","Binlerce kedi resmi görürse kediyi tanır."],
["🔁","Nasıl öğrenir?","1) Çok sayıda örnek görür. 2) Örneklerdeki benzerlikleri bulur. 3) Yeni bir şey görünce tahmin eder.","Spam e-postaları görüp yenisini tanımak."]]],
["Doğal Zekâ ve Yapay Zekâ ⚖️","İkisi de öğrenir, problem çözer ve karar verir. Ama aralarında önemli farklar var:",[
["🌱","Kaynağı",null,null,"Doğuştan gelir.","İnsanlar tarafından yapılır."],
["❤️","Duygu",null,null,"Sevinir, üzülür, empati kurar.","Duygusu yoktur, hissetmez."],
["💡","Yaratıcılık",null,null,"Özgün, yepyeni fikirler üretir.","Öğrendiği verilere dayanarak üretir; hayal gücü yoktur."],
["📖","Öğrenme",null,null,"Deneyim ve sezgiyle öğrenir.","Veri ve algoritmalarla öğrenir."],
["⚡","Hız",null,null,"Daha yavaş işlem yapar.","Çok hızlı işlem yapar."],
["😅","Hata",null,null,"Yorulur, dikkati dağılır.","Doğru veriyle az hata yapar."]]],
["Günlük Hayatta Yapay Zekâ 🏠","Farkında olmasak da yapay zekâyı her gün kullanıyoruz!",[
["🎙️","Sesli Asistanlar","Siri, Google Asistan sesimizi anlar ve cevap verir.","“Yarın hava nasıl?” diye sormak."],
["🎬","Öneri Sistemleri","İzlediklerimize göre yeni içerik önerir.","YouTube’un sana video önermesi."],
["🔓","Yüz Tanıma","Yüzümüzü tanıyıp telefonu açar.","Telefonun yüzle kilit açması."],
["🌐","Çeviri ve Yazım","Dilleri çevirir, yazım hatalarını düzeltir.","Google Çeviri, klavyenin otomatik düzeltmesi."],
["🗺️","Navigasyon","Trafiğe bakıp en kısa yolu bulur.","Harita uygulamasının yol tarifi."],
["🧹","Akıllı Cihazlar","Çevresini algılayıp kendi karar verir.","Engellere çarpmadan dolaşan robot süpürge."]]],
["Yapay Zekânın Alt Boyutları 🧩","Yapay zekâ, farklı işleri yapan alt teknolojilerden oluşur.",[
["💬","Doğal Dil İşleme","Bilgisayarın insan dilini (Türkçe, İngilizce…) anlamasını ve cevap vermesini sağlar.","Sesli asistanlar, çeviri, sohbet robotları."],
["👁️","Görüntü İşleme","Fotoğraf ve videolardaki nesneleri, yüzleri, yazıları tanır. Görüntüyü piksellere ayırarak inceler.","Sürücüsüz aracın yayayı ve trafik işaretini görmesi."],
["🕸️","Yapay Sinir Ağları","İnsan BEYNİNDEKİ sinir hücrelerinden (nöronlardan) ilham alır. Birbirine bağlı yapay hücrelerle öğrenir.","Beyindeki nöronlar gibi çalışan ağ."],
["📈","Makine Öğrenmesi","Verilerden öğrenip zamanla daha iyi tahmin yapar.","Kullandıkça seni daha iyi tanıyan klavye."]]],
["Kullanım Alanları (1) 🌍","Yapay zekâ insanlara birçok alanda yardımcı olur.",[
["🏥","Sağlık","Röntgen, MR gibi görüntüleri inceleyip hastalığı erkenden bulmaya yardım eder.","Kanser belirtisini doktordan önce fark etmek."],
["🎓","Eğitim","Öğrencinin eksik konularını bulur, ona özel çalışma önerir.","Akıllı ödev ve soru uygulamaları, konu anlatan sohbet robotları."],
["🌾","Tarım ve Hayvancılık","Bitki hastalıklarını tanır, gerektiği kadar sular, hayvanların sağlığını izler.","Drone ile tarlanın taranması, akıllı sulama."],
["🚗","Ulaşım","Sürücüsüz araçlar, akıllı trafik ışıkları ve navigasyon.","Kendi kendine giden otomobil."]]],
["Kullanım Alanları (2) 🛡️","Büyük veri ve güvenlik alanında yapay zekâ çok önemli bir görev üstlenir.",[
["📊","Büyük Veri","Milyonlarca kişinin ne izlediğini inceleyip anlam çıkarır.","YouTube’un sana göre video önermesi."],
["📷","Görüntü İşleme ve Güvenlik","Kameralar yüzleri ve şüpheli durumları tanır.","Havalimanında yüz tanıma, plaka okuyan trafik kameraları."],
["🏦","Finans ve Bankacılık","Alışkanlıklarına uymayan şüpheli işlemi fark eder ve durdurur.","Kartınla başka şehirde gece alışveriş yapılınca uyarı."],
["🔐","Siber Güvenlik","Bilgisayar saldırılarını, virüsleri ve sahte e-postaları erkenden yakalar.","Şifrene yabancı biri girmeye çalışınca hesabı kilitlemek."]]],
["Yapay Zekânın Sınırlılıkları 🚧","Yapay zekâ güçlüdür ama her şeyi yapamaz. İnsanın yerine geçemez, ona yardımcı olur.",[
["🎨","Yaratıcılık","Ürettikleri öğrendiği verilere dayanır; insan gibi hayal gücü ve deneyimi yoktur.","Hiç zürafa görmediyse zürafayı hatalı çizebilir."],
["😶","Duyguları Anlama","Duygu hissetmez, sadece yüz ifadesine veya kelimelere bakarak tahmin eder.","Gülerek ağlayan birini anlayamayabilir."],
["❌","Hata Yapabilir","Eksik ya da yanlış veriyle öğrenirse yanlış sonuç verir.","Köpek resmini kedi sanması."],
["📉","Veriye Bağımlı","Öğrendiği veri kadar akıllıdır.","Hiç zürafa görmediyse zürafayı tanımakta zorlanır."]]],
["Etik ve Veri Güvenliği 🔒","Yanlış kullanılan yapay zekâ insanlara zarar verebilir. Kişisel verilerimizi korumalıyız.",[
["🚷","Ayrımcılık","Tek taraflı verilerle öğrenen sistem bazı insanlara haksızlık yapabilir.","İş başvurusunda bazı kişileri hep elemek."],
["📰","Yanlış Bilgi","Gerçek olmayan haber, resim ve video üretilebilir.","Sahte bir haberin hızla yayılması."],
["🎭","Deepfake","Birinin yüzü veya sesiyle sahte video yapılmasıdır.","Bir ünlüye hiç söylemediği sözleri söyletmek."],
["🛡️","Nasıl Korunuruz?","Kişisel bilgi ve fotoğrafını her uygulamaya yükleme, güçlü şifre kullan, izinlere dikkat et. Türkiye’de verilerimizi KVKK korur.","Bilmediğin uygulamaya fotoğrafını verme."]]]];

/* ---------- SÖZLÜK ---------- */
const W=[
["Algoritma","Bir işi yapmak için sırayla izlenen adımlar.","Kek tarifi de bir algoritmadır."],
["Alt Boyut","Yapay zekânın farklı işler yapan bölümleri, dalları.","Görüntü işleme bir alt boyuttur."],
["Ayrımcılık","Bazı insanlara haksız ve eşit olmayan davranmak.","Sistemin hep aynı kişileri elemesi."],
["Büyük Veri","Çok fazla ve sürekli büyüyen bilgi yığını.","YouTube’da her gün izlenen milyonlarca video."],
["Deepfake","Birinin yüzü veya sesiyle yapılan sahte video ya da ses.","Bir ünlüye söylemediği sözleri söyletmek."],
["Doğal Dil İşleme","Bilgisayarın insan dilini anlamasını ve cevap vermesini sağlar.","Sesli asistanlar, çeviri uygulamaları."],
["Doğal Zekâ","İnsanın doğuştan sahip olduğu düşünme ve öğrenme yeteneği.","Yeni bir oyunu kendi kendine öğrenmek."],
["Etik","Doğru ve yanlış davranışları belirleyen kurallar.","İzin almadan fotoğraf paylaşmamak."],
["Etik İhlal","Bu doğru davranış kurallarına uymamak.","Sahte haber yaymak."],
["Görüntü İşleme","Bilgisayarın fotoğraf ve videolardaki nesneleri tanıması.","Telefonun yüzle kilit açması."],
["Kişisel Veri","Bir kişiyi tanıtan bilgiler.","Ad-soyad, adres, telefon, fotoğraf."],
["KVKK","Kişisel Verilerin Korunması Kanunu. Türkiye’de bilgilerimizi korur.","Okul, izin almadan bilgini paylaşamaz."],
["Makine Öğrenmesi","Bilgisayarın örneklerden (verilerden) kendi kendine öğrenmesi.","Sevdiğin şarkılara göre şarkı önerisi."],
["Nöron","Beyindeki sinir hücresi. Bilgiyi taşır.","Yapay sinir ağları nöronları taklit eder."],
["Otonom","Kendi kendine çalışan, insan yönetmeden hareket eden.","Sürücüsüz otomobil."],
["Sesli Asistan","Sesimizi anlayıp bize cevap veren uygulama.","Siri, Google Asistan."],
["Siber Güvenlik","Bilgisayarları ve hesapları saldırılara karşı korumak.","Virüs programı, güçlü şifre."],
["Tedavi","Hastayı iyileştirmek için yapılanlar.","İlaç vermek, ameliyat yapmak."],
["Teşhis","Hastalığın ne olduğunu bulmak.","Doktorun röntgene bakıp kırığı bulması."],
["Veri","Bilgisayarın kullandığı bilgiler: yazı, sayı, resim, ses.","Binlerce kedi fotoğrafı."],
["Veri İhlali","Bilgilerimizin izinsiz alınması veya paylaşılması.","Şifrelerin çalınması."],
["Verimlilik","Daha az emekle daha çok ürün veya iş elde etmek.","Az suyla daha çok ürün yetiştirmek."],
["Yapay Sinir Ağları","İnsan beynindeki sinir hücrelerini taklit eden yapay zekâ.","Birbirine bağlı yapay hücrelerle öğrenme."],
["Yapay Zekâ","Bilgisayarın insan gibi düşünmesini, öğrenmesini, karar vermesini sağlayan teknoloji.","Robot süpürge, sohbet robotu."]];
const WP=12,WN=Math.ceil(W.length/WP);

/* ---------- SORULAR (açık uçlu / kısa cevaplı) ---------- */
const Q=[
{s:"Yapay zekâ nedir?",t:"Tanım",q:"Yapay zekâ nedir? Kendi cümlelerinizle kısaca tanımlayınız.",h:"<em>Bilgisayar</em> + insan gibi <em>düşünmek</em>…",a:"Bilgisayarların insan gibi <em>düşünmesini, öğrenmesini ve karar vermesini</em> sağlayan teknolojidir."},
{s:"Kullandığın bir YZ uygulaması",t:"Günlük Hayat",q:"Günlük hayatta kullandığınız bir yapay zekâ uygulamasını yazınız. Bu uygulamanın size nasıl yardımcı olduğunu açıklayınız.",h:"Telefonundaki <em>konuşan, öneren, yüz tanıyan</em> uygulamalar…",a:"Örnek: <em>YouTube</em> bana sevdiğim videoları önerir. (Sesli asistan, Google Çeviri, yüzle kilit açma da olur.)"},
{s:"Üzgün arkadaşı fark etmek",t:"Karşılaştırma",q:"Sınıf arkadaşınız Ali bugün derste hiç konuşmuyor, başını önüne eğmiş oturuyor. Siz onun üzgün olduğunu hemen fark ediyor, yanına gidip onu teselli ediyorsunuz. Sizde olan ama yapay zekâda olmayan bu özellik nedir?",h:"Sevinmek, üzülmek, <em>hissetmek</em>…",a:"<em>Duygular</em> (empati). İnsan hisseder; yapay zekânın duyguları yoktur."},
{s:"Şarkı önerisi ve öğrenme",t:"Kavram",q:"Zeynep her akşam müzik uygulamasında en sevdiği şarkıcının şarkılarını dinliyor. Bir hafta sonra uygulama, Zeynep’e daha önce hiç dinlemediği ama çok beğendiği benzer şarkılar önermeye başlıyor. Bilgisayarın örneklerden bu şekilde öğrenmesine ne ad verilir?",h:"<em>Makine</em> … …",a:"<em>Makine Öğrenmesi</em>"},
{s:"Kedileri tanıyan yapay zekâ",t:"Kavram",q:"Bir şirket, fotoğraflardaki kedileri tanıyan bir yapay zekâ yapmak istiyor. Ancak bu yapay zekâ henüz kedinin neye benzediğini bilmiyor. Ona kedileri tanımayı öğretmek için en çok neye ihtiyaç vardır? Nedenini yazınız.",h:"Yapay zekâ <em>örnek görerek</em> öğrenir…",a:"Çok sayıda kedi fotoğrafına, yani <em>veriye</em> ihtiyaç vardır. Çünkü yapay zekâ ne kadar çok örnek görürse kediyi o kadar doğru tanır."},
{s:"Röntgen ve doktor",t:"Sağlık",q:"Futbol oynarken düşen Can’ın bileği şişiyor ve hastanede röntgeni çekiliyor. O gün doktorun incelemesi gereken yüzlerce röntgen filmi var. Yapay zekâ bu doktora nasıl yardımcı olabilir?",h:"Hızlıca <em>inceler</em>, hastalığı erkenden…",a:"Röntgenleri hızlıca inceleyip <em>kırık gibi sorunları erkenden bulmasına (teşhis)</em> yardım eder."},
{s:"Sesli asistan nasıl anlar?",t:"Alt Boyut",q:"Elif okula gitmeden önce telefonuna “Yarın yağmur yağacak mı?” diye soruyor. Telefon hemen “Evet, yarın yağmur bekleniyor. Şemsiyeni almayı unutma!” diye cevap veriyor. Telefon, Elif’in söylediklerini hangi yapay zekâ teknolojisi sayesinde anlıyor?",h:"İnsanın konuştuğu <em>dil</em> ile ilgili…",a:"<em>Doğal Dil İşleme</em>"},
{s:"Sürücüsüz araç yayayı görür",t:"Alt Boyut",q:"Sürücüsüz (otonom) bir araç şehirde ilerlerken yaya geçidine yaklaşıyor. Tam o sırada bir çocuk karşıdan karşıya geçmeye başlıyor ve araç kendiliğinden yavaşlayıp duruyor. Araç, çocuğu hangi yapay zekâ teknolojisi sayesinde fark etmiştir?",h:"Kameralar ile <em>görmek</em>…",a:"<em>Görüntü İşleme</em>"},
{s:"Ders çalışırken YZ",t:"Eğitim",q:"Mert, matematikte kesirler konusunu bir türlü anlayamıyor ve sınavı yaklaşıyor. Ders çalışırken yapay zekâ Mert’e nasıl yardım edebilir? Bir örnek yazınız.",h:"Eksik konular, yeni sorular…",a:"Mert’in <em>eksik olduğu yerleri bulup</em> ona uygun sorular önerebilir veya kesirleri <em>basit örneklerle anlatabilir.</em>"},
{s:"İzleme geçmişi ve öneriler",t:"Büyük Veri",q:"Burak son bir haftadır YouTube’da hep futbol maçlarının özetlerini izledi. Bugün uygulamayı açtığında ana sayfasının futbol videolarıyla dolu olduğunu gördü. Sizce bunun nedeni nedir?",h:"YouTube <em>izleme geçmişine</em> bakar…",a:"YouTube Burak’ın <em>izleme geçmişini</em> inceler, futbolu sevdiğini anlar ve ona <em>benzer videolar önerir.</em> (Büyük veri analizi)"},
{s:"Kalabalıkta kayıp çocuk",t:"Güvenlik",q:"Havalimanında binlerce yolcu bir oraya bir buraya yürüyor. Güvenlik kamerası, ailesini kaybeden bir çocuğu bu kalabalığın içinde birkaç saniyede buluyor. Kamera bu çocuğu nasıl tanımış olabilir?",h:"Her insanın <em>yüzü</em> farklıdır…",a:"<em>Yüz tanıma</em> ile. Kamera, insanların yüzlerini kayıp çocuğun fotoğrafındaki yüzle karşılaştırır. Yüz tanıma, <em>görüntü işleme</em> teknolojisinin bir uygulamasıdır."},
{s:"Banka şüpheli işlemi yakalar",t:"Finans",q:"Ayşe Hanım alışverişlerini hep kendi şehrinde ve gündüz yapar. Bir gece yarısı, onun kartıyla başka bir ülkedeki bir mağazadan alışveriş yapılıyor. Banka hemen Ayşe Hanım’a “Bu işlemi siz mi yaptınız?” diye mesaj gönderiyor. Banka bu durumu nasıl fark etmiş olabilir?",h:"Ayşe Hanım’ın <em>alışkanlıklarına</em> uymuyor…",a:"Yapay zekâ Ayşe Hanım’ın alışveriş alışkanlıklarını bilir; <em>bunlara uymayan şüpheli işlemi fark edip</em> uyarır."},
{s:"Sahte e-posta spama düştü",t:"Siber Güvenlik",q:"Ahmet’e “Tebrikler! Yeni bir telefon kazandınız. Hediyenizi almak için şifrenizi yazın!” diye bir e-posta geliyor. Ancak bu e-posta gelen kutusuna değil, kendiliğinden spam (istenmeyen) kutusuna düşüyor. Burada yapay zekâ Ahmet’e nasıl yardım etmiştir?",h:"E-postanın <em>sahte</em> olduğunu…",a:"E-postanın <em>sahte (dolandırıcı)</em> olduğunu anlayıp ayırmış, böylece <em>Ahmet’in şifresinin çalınmasını önlemiştir.</em> (Siber güvenlik)"},
{s:"Hiç zürafa görmemiş YZ",t:"Sınırlılık",q:"Bir yapay zekâ binlerce kedi, köpek ve kuş resmiyle eğitilmiş ama hiç zürafa resmi görmemiş. Bu yapay zekâdan bir zürafa çizmesi isteniyor. Sizce çizim nasıl olur? Nedenini yazınız.",h:"Yapay zekâ <em>gördüklerinden</em> öğrenir…",a:"Zürafayı <em>eksik veya hatalı</em> çizebilir. Çünkü yapay zekâ <em>öğrendiği verilere bağlıdır</em>; bir şeyden ne kadar az örnek görmüşse onu o kadar zor çizer."},
{s:"Köpeği kedi sandı",t:"Sınırlılık",q:"Bir okul projesinde öğrenciler, hayvan resimlerini tanıyan bir yapay zekâ kullanıyor. Yapay zekâ, bir köpek resmine bakıp “Bu bir kedi.” diyor. Sizce yapay zekâ neden yanılmış olabilir?",h:"Ne ile <em>öğrenmişti</em>?",a:"<em>Yeterince köpek resmi görmemiş</em> ya da <em>yanlış verilerle</em> öğrenmiş olabilir."},
{s:"Şifresini paylaşan arkadaş",t:"Veri Güvenliği",q:"Arkadaşınız Selin, oyun hesabına giremeyince yardım istemek için şifresini sınıfın mesaj grubuna yazıyor. Grupta 30 kişi var. Veri güvenliğini düşünerek Selin’e ne söylersiniz?",h:"Şifre <em>kimseyle</em>…",a:"“Şifreni <em>kimseyle paylaşma</em>, hemen değiştir. Yoksa hesabın <em>çalınabilir</em>.” derim."},
{s:"Sahte fotoğraf paylaşımı",t:"Etik",q:"Bir kişi yapay zekâ ile hiç yaşanmamış bir sel felaketinin fotoğrafını hazırlıyor ve “Şehrimizi sel bastı!” diye internette paylaşıyor. Fotoğraf kısa sürede binlerce kişiye ulaşıyor ve insanlar korkuya kapılıyor. Bu hangi etik ihlale örnektir?",h:"Doğru olmayan <em>bilgi</em>…",a:"<em>Yanlış bilgi yayma</em>"},
{s:"Çiftçi ve yapay zekâ",t:"Tarım",q:"Hasan Amca’nın domates tarlası çok büyük. Hangi bölgenin suya ihtiyacı olduğunu ve hangi bitkilerin hastalandığını tek tek kontrol etmeye vakti yetmiyor. Hasan Amca verimi artırmak için yapay zekâdan nasıl yardım alabilir? Bir örnek veriniz.",h:"<em>Sulama</em>, hasta bitki…",a:"<em>Akıllı sulama</em> ile her bölgeye gerektiği kadar su verilir; kameralar <em>hasta bitkileri</em> erkenden bulur."},
{s:"Yapay sinir ağlarının ilhamı",t:"Alt Boyut",q:"Bilim insanları, bilgisayarların insanlar gibi öğrenebilmesi için birbirine bağlı yapay hücrelerden oluşan “yapay sinir ağları”nı geliştirdi. Bu teknoloji insan vücudundaki neyi taklit eder?",h:"Düşünmemizi sağlayan <em>organdaki</em> hücreler…",a:"İnsan <em>beynindeki sinir hücrelerini (nöronları)</em>."},
{s:"Fotoğraf yükleme riski",t:"Veri Güvenliği",q:"Zehra, fotoğrafını çizgi film karakterine dönüştüren yeni bir uygulama buluyor. Uygulamanın kime ait olduğunu ve fotoğraflarla ne yaptığını bilmiyor. Zehra fotoğrafını bu uygulamaya yüklerse başına ne gelebilir? Bir risk yazınız.",h:"Yüzünle <em>sahte video</em>…",a:"Fotoğrafı <em>izinsiz kullanılabilir</em>; yüzüyle <em>sahte video (deepfake)</em> yapılabilir veya bilgileri çalınabilir (<em>veri ihlali</em>)."},
{s:"YZ öğretmenin yerini alır mı?",t:"Fikir Sorusu",q:"Yapay zekâ artık soruları cevaplayabiliyor, konu anlatabiliyor ve ödevleri kontrol edebiliyor. Sizce yapay zekâ ileride öğretmenin yerini alabilir mi? Nedenini yazınız.",h:"Öğretmen <em>üzüldüğünü</em> anlar, seni <em>cesaretlendirir</em>… Yapay zekâ ise çok <em>hızlıdır</em>…",p:"Öğrencinin kendi ifadeleri.",a:"<em>Öğrencinin kendi ifadeleri.</em>"}];
/* Zorluk: 1 basit, 2 orta, 3 zor (7 / 9 / 5) */
[1,1,1,1,2,2,1,1,2,2,2,3,2,3,3,1,2,2,2,3,3].forEach((d,i)=>Q[i].d=d);
