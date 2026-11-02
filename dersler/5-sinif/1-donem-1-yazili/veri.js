/* ============================================================
   BTY 5. Sınıf · 1. Dönem 1. Yazılı
   Bu dosya yalnızca İÇERİK içerir (özet, sözlük, sorular).
   Tasarım ve kod: /motor/motor.js + /motor/motor.css
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
const BILGI={
 ders:"BTY 5. Sınıf",           // üst çubukta ve PDF başlığında
 sinav:"1. Dönem 1. Yazılı",
 emoji:"💻",
 baslik:"Bilişim Teknolojileri ve Yazılım",         // açılış ekranındaki büyük başlık
 pdfBaslik:"Bilişim Teknolojileri ve Yazılım 5",      // PDF üst bilgisindeki ders adı
 dosya:"BTY5_1D1Y"         // PDF dosya adı ön eki
};

const OC=["BTY.5.1.1","BTY.5.1.2","BTY.5.1.3","BTY.5.1.4","BTY.5.1.5","BTY.5.1.6"];
const OCN=["Bilişim teknolojilerini sınıflandırma","Birey ve topluma etkileri","Dijital vatandaşlık","Yapay zekâ temel kavramlar","Bilgisayar sistemleri","Dosya ve klasör yönetimi"];
const SEN=[2,1,2,1,3,1]; /* Senaryo 1 soru sayıları, toplam 10 */

/* ---------- KONU ÖZETİ ---------- */
// [başlık, giriş, kartlar, kazanım no, karşılaştırma etiketleri]
// kart: [emoji, başlık, açıklama, örnek] ya da karşılaştırma: [emoji, başlık, null, null, sol, sağ]
const S=[
["Bilişim Teknolojisi Nedir? 💻","Bilişim teknolojisi kelimesini oluşturan kavramları tanıyalım.",[
["📘","Bilgi","Araştırma, gözlem ve deneyimle öğrendiğimiz gerçeklerdir.","Suyun 100 °C’ta kaynadığını öğrenmek."],
["💬","İletişim","Duygu, düşünce ve bilgilerin başkalarına aktarılmasıdır.","Arkadaşına mesaj göndermek, telefonla konuşmak."],
["🛠️","Teknoloji","İnsanların işini kolaylaştıran araç, gereç ve yöntemlerdir.","Çamaşır makinesi, bilgisayar."],
["🖥️","Bilişim Teknolojisi","Bilginin toplanmasını, işlenmesini, saklanmasını ve iletilmesini sağlayan teknolojilerdir.","Akıllı telefon, bilgisayar, tablet, akıllı tahta."]],0],
["Bilişim Teknolojilerini Sınıflandıralım 🗂️","Bilişim teknolojilerini kullanıldıkları alanlara göre gruplandırabiliriz.",[
["🎓","Eğitim","Ders anlatmaya ve öğrenmeye yardım eder.","Akıllı tahta, EBA, e-Okul."],
["🏥","Sağlık","Hastalıkların teşhisine ve takibine yardım eder.","MR cihazı, röntgen, e-Nabız."],
["🚗","Ulaşım","Yol bulmayı ve yolculuğu kolaylaştırır.","Navigasyon, elektronik bilet, akıllı trafik ışıkları."],
["📱","İletişim","Uzaktaki insanlarla hızlıca haberleşmemizi sağlar.","Akıllı telefon, e-posta, görüntülü konuşma."],
["🎬","Sinema ve Televizyon","Film ve program hazırlamada kullanılır.","Dijital kamera, kurgu programı, yeşil ekran."],
["🏠","Ev","Evdeki işleri kolaylaştırır.","Akıllı TV, robot süpürge, akıllı buzdolabı."]],0],
["Dün ve Bugün ⏳","Bilişim teknolojileri zamanla gelişti; eskiden tek iş yapan araçların yerini çok işlevli cihazlar aldı.",[
["✉️","Haberleşme",null,null,"Mektup yazılır, postayla günlerce sonra ulaşırdı.","Mesaj ve e-posta saniyeler içinde ulaşır."],
["⌨️","Yazı Yazma",null,null,"Daktiloda hata düzeltmek zordu.","Bilgisayarda yazı kolayca düzeltilir ve kaydedilir."],
["☎️","Telefon",null,null,"Ankesörlü telefon sabitti, sadece konuşulurdu.","Akıllı telefon taşınır, fotoğraf çeker."],
["🎵","Müzik",null,null,"Teyp ve kasetle dinlenirdi.","Müzik uygulamalarıyla her yerde dinlenir."],
["🗺️","Yol Bulma",null,null,"Kâğıt haritalar kullanılırdı.","Navigasyon sesli yol tarifi verir."],
["🎞️","Film Çekimi",null,null,"Sahneler gerçek mekânda çekilirdi.","Yeşil ekranla arka plan bilgisayarda değiştirilir."]],0,["🕰️ GEÇMİŞ","📲 BUGÜN"]],
["Bireye ve Topluma Etkileri ⚖️","Bilişim teknolojilerinin hayatımıza olumlu etkileri de olumsuz etkileri de vardır. Önemli olan bilinçli kullanmaktır.",[
["👍","Olumlu Etkiler","İşleri hızlandırır, bilgiye kolay ulaştırır, uzaktaki insanlarla iletişimi kolaylaştırır.","Başka ülkedeki kuzeninle görüntülü konuşmak."],
["🪑","Beden Sağlığı ve Ergonomi","Yanlış oturmak bel, boyun ve göz ağrısı yapabilir. Sırt dik, ekran göz hizasında ve 50–70 cm uzakta olmalı; ara verilmeli.","Kambur oturunca akşam sırtın ağrır."],
["😴","Uyku ve Dikkat","Gece uzun süre ekrana bakmak uyku düzenini bozar, derste dikkat dağılır.","Yatmadan en az 1 saat önce ekranı kapat."],
["🎮","Dijital Bağımlılık","Teknolojiyi kontrolsüz ve aşırı kullanıp ondan uzak kalamamaktır.","Oyun kapanınca çok sinirlenmek, dışarı çıkmak istememek."],
["🏛️","Topluma Etkisi","Pek çok işlem evden yapılabilir hale geldi; ama yüz yüze sohbet azalabilir.","Sıraya girmeden internetten randevu almak."],
["⏱️","Bilinçli Kullanım","Ekran süresini sınırla; spor, kitap ve oyun gibi etkinliklere zaman ayır.","Günlük ekran süresi belirlemek."]],1],
["Dijital Vatandaşlık 🌐","Dijital vatandaş; internette kurallara uyan, kendini ve başkalarını koruyan, saygılı kişidir.",[
["🪪","Dijital Kimlik","İnternetteki varlığımızı gösteren bilgilerdir: kullanıcı adı, profil fotoğrafı, paylaşımlar.","Oyun hesabında takma ad kullanmak."],
["👣","Dijital Ayak İzi","İnternette bıraktığımız izlerdir. Silsek bile başkaları kopyalamış olabilir.","Paylaşımlar, yorumlar, beğeniler, arama geçmişi."],
["🔐","Kişisel Bilgiler","Ev adresi, telefon, okul adı ve şifre gibi bilgiler internette paylaşılmamalıdır.","Güçlü şifre kullanmak ve kimseye söylememek."],
["🤝","Saygı","Başkalarının fotoğrafını izinsiz paylaşmak mahremiyetini ihlal eder.","Paylaşmadan önce arkadaşına sormak."]],2],
["Dijital Vatandaşlık Uygulamaları 🏛️","Devlet hizmetlerinin bir kısmını internetten kullanabiliriz. Ayrıca internette karşılaştığımız sorunlarda ne yapacağımızı bilmeliyiz.",[
["🇹🇷","e-Devlet","Kamu hizmetlerine internetten tek yerden ulaşmamızı sağlar.","Belge almak için sıraya girmemek."],
["🎓","e-Okul ve EBA","e-Okul’da notlar ve devamsızlık görülür; EBA’da dersler ve içerikler vardır.","Velinin notları evden görmesi."],
["🏥","e-Nabız ve MHRS","e-Nabız sağlık bilgilerini gösterir; MHRS ile hastaneden randevu alınır.","Evden doktor randevusu almak."],
["🛑","Siber Zorbalık","İnternette birini kırıcı, tehdit eden mesajlarla rahatsız etmektir. Cevap verme; mesajı kaydet, engelle, bildir ve ailene, öğretmenine anlat.","Oyunda sürekli hakaret eden birini bildirmek."]],2],
["Yapay Zekâ 🤖","Yapay zekâ; makinelerin insan gibi düşünme, öğrenme ve karar verme yeteneği kazanmasıdır.",[
["🎙️","Günlük Hayatta","Sesli asistanlar, yüz tanıma, robot süpürge ve film/müzik önerileri yapay zekâ ile çalışır.","Telefonun yüzünü tanıyıp kilidi açması."],
["🗂️","Veri ile Öğrenir","Yapay zekâ çok sayıda örnekten (veriden) öğrenir. Hiç görmediği şeyleri tanımakta zorlanabilir.","Sadece kedi resmi gören, tavşanı kedi sanabilir."],
["❤️","Doğal Zekâ ve Yapay Zekâ",null,null,"Duygu, sezgi ve yaratıcılığı vardır; yaşayarak öğrenir.","Duygusu yoktur; verilerle çalışır, çok hızlı işlem yapar."],
["🇹🇷","Cahit Arf","Türk matematikçi Cahit Arf, 1959’da “Makine Düşünebilir mi ve Nasıl Düşünebilir?” adlı konferansı verdi.","Yapay zekâ tarihinde önemli bir Türk bilim insanı."]],3,["🧠 DOĞAL ZEKÂ","🤖 YAPAY ZEKÂ"]],
["Bilgisayar Sistemi 🖥️","Bilgisayar sistemi; donanım, yazılım ve kullanıcının birlikte çalışmasıyla oluşur.",[
["🖱️","Donanım","Bilgisayarın elle tutulabilen, gözle görülebilen fiziksel parçalarıdır.","Klavye, fare, monitör, işlemci."],
["💿","Yazılım","Donanımı çalıştıran, elle tutulamayan programlardır.","Resim programı, kelime işlemci, oyunlar."],
["🧑‍💻","Kullanıcı","Bilgisayarı kullanan ve ona komut veren kişidir.","Ödevini yazan öğrenci."],
["⌨️","Giriş Birimleri","Bilgisayara bilgi ve komut vermemizi sağlar.","Klavye, fare, mikrofon, tarayıcı."],
["🖨️","Çıkış Birimleri","Bilgisayarın işlediği sonucu bize gösterir veya verir.","Monitör, yazıcı, hoparlör."],
["👆","Hem Giriş Hem Çıkış","Dokunmatik ekranda dokunarak komut veririz (giriş), görüntüyü de aynı ekranda görürüz (çıkış).","Tablet ve akıllı tahta ekranı."]],4],
["Bilgisayarın Parçaları ⚙️","Bilgisayarın içinde de dışında da önemli görevleri olan parçalar vardır.",[
["🧠","İşlemci (CPU)","Komutları işler, hesaplamaları yapar. “Bilgisayarın beyni” olarak bilinir.","Oyundaki her hareketin hesaplanması."],
["⚡","RAM Bellek","Çalışan programları geçici olarak tutar. Bilgisayar kapanınca içindekiler silinir.","Açık olan oyun ve tarayıcı."],
["🔌","Anakart","Bilgisayarın tüm parçalarını birbirine bağlar.","İşlemci ve RAM anakarta takılır."],
["🪟","İşletim Sistemi","Donanım ile kullanıcı arasında köprü kuran temel yazılımdır.","Windows, Pardus, Android."]],4],
["Veri Birimleri ve Depolama 💾","Bilgisayar her şeyi 0 ve 1’lerle saklar. Dosyalarımızı farklı yerlerde depolayabiliriz.",[
["0️⃣","Bit ve Byte","Bit, yalnızca 0 ya da 1 değerini alan en küçük veri (bellek) ölçü birimidir. 8 bit bir araya gelince 1 byte olur.","Bir harf yaklaşık 1 byte yer kaplar."],
["📏","Büyüklük Sırası","Byte < KB < MB < GB < TB. Her biri bir öncekinin yaklaşık 1024 katıdır.","4 GB, 4 MB’den çok daha büyüktür."],
["🔋","Sabit Disk ve USB Bellek","Sabit disk bilgisayarda kalıcı saklar; USB bellek dosyaları taşımamızı sağlar.","Ödevi USB bellekle okula götürmek."],
["☁️","Bulut Depolama","Dosyaları internetteki bir alanda saklayıp her yerden açmaktır.","Evde kaydettiğin ödevi okulda açmak."],
["🔧","Basit Sorun Çözme","Bilgisayar açılmıyorsa önce kabloyu, fişi ve prizi kontrol et; çözemezsen öğretmene haber ver.","Fişin prizden çıkmış olması."]],4],
["Dosya ve Klasör Yönetimi 📁","Dosyalarımızı klasörlerde düzenli tutarsak aradığımızı kolayca buluruz.",[
["📄","Dosya","Yazı, resim, ses gibi bilgileri içeren birimdir.","Fen ödevi belgesi, tatil fotoğrafı."],
["📂","Klasör","Dosyaları bir arada, düzenli tutmaya yarar.","“Ödevler”, “Resimler”, “Müzik” klasörleri."],
["🏷️","Dosya Uzantısı","Dosya adının sonundaki nokta ve harfler dosyanın türünü gösterir.",".docx belge, .jpg resim, .mp3 ses, .pptx sunu."],
["✂️","Taşıma ve Kopyalama","Taşımada dosya eski yerinden kalkar; kopyalamada iki yerde de olur.","Ctrl+X kes, Ctrl+C kopyala, Ctrl+V yapıştır."],
["✏️","Diğer İşlemler","Yeni klasör oluşturma, yeniden adlandırma ve silme.","Sağ tık > Yeni > Klasör."],
["🗜️","Sıkıştırma","Dosyaları daha az yer kaplayacak şekilde tek dosyada toplamaktır (.zip, .rar).","20 fotoğrafı e-postayla tek dosya olarak göndermek."]],5]];

/* ---------- SÖZLÜK ---------- */
const W=[
["Bilgi","Araştırma, gözlem ve deneyimle öğrendiğimiz gerçekler.","Dünya’nın Güneş’in etrafında döndüğünü bilmek."],
["Bilişim Teknolojisi","Bilgiyi toplayan, işleyen, saklayan ve ileten teknolojiler.","Bilgisayar, akıllı telefon."],
["Bit / Byte","Bit en küçük veri birimidir (0 ya da 1). 8 bit 1 byte eder.","Bir harf yaklaşık 1 byte."],
["Bulut Depolama","Dosyaları internetteki bir alanda saklamak.","Ödevi her yerden açabilmek."],
["Dijital Ayak İzi","İnternette bıraktığımız, kolay silinmeyen izler.","Paylaşım, yorum, beğeni."],
["Dijital Bağımlılık","Teknolojiden uzak kalamamak, aşırı kullanmak.","Oyunu hiç bırakamamak."],
["Dijital Kimlik","İnternette bizi tanıtan bilgiler.","Kullanıcı adı, profil fotoğrafı."],
["Dijital Vatandaş","İnternette kurallara uyan, saygılı ve dikkatli kişi.","İzin almadan fotoğraf paylaşmamak."],
["Donanım","Bilgisayarın elle tutulabilen parçaları.","Klavye, fare, işlemci."],
["Dosya Uzantısı","Dosyanın türünü gösteren, adın sonundaki kısım.",".jpg resim, .mp3 ses."],
["e-Devlet","Devlet hizmetlerine internetten ulaşma sistemi.","Belgeyi evden almak."],
["Ergonomi","Araçları sağlığımıza uygun şekilde kullanma.","Dik oturmak, ekranı göz hizasına koymak."],
["İletişim","Duygu, düşünce ve bilgiyi başkasına aktarmak.","Telefonla konuşmak."],
["İşlemci","Komutları işleyen, bilgisayarın beyni olan parça.","Oyundaki hesaplamaları yapar."],
["İşletim Sistemi","Donanım ile kullanıcı arasında köprü kuran temel yazılım.","Windows, Pardus, Android."],
["Klasör","Dosyaları bir arada tutan düzenleme alanı.","“Ödevler” klasörü."],
["Mahremiyet","Kişinin başkalarıyla paylaşmak istemediği özel hayatı.","Arkadaşının fotoğrafı onun izniyle paylaşılır."],
["Navigasyon","Yol tarifi veren, konum bulan teknoloji.","“200 metre sonra sağa dönün.”"],
["Siber Zorbalık","İnternette birini kırıcı, tehdit eden mesajlarla rahatsız etmek.","Oyunda sürekli hakaret etmek."],
["Sıkıştırma","Dosyaların daha az yer kaplamasını sağlamak.",".zip dosyası yapmak."],
["Teknoloji","İşimizi kolaylaştıran araç, gereç ve yöntemler.","Bulaşık makinesi."],
["Yapay Zekâ","Makinelerin insan gibi düşünme, öğrenme ve karar verme yeteneği.","Sesli asistan, yüz tanıma."],
["Yazılım","Donanımı çalıştıran, elle tutulamayan programlar.","Resim programı, oyun."],
["Yeşil Ekran","Arka planı bilgisayarda değiştirmeye yarayan çekim tekniği.","Oyuncu uçuyormuş gibi görünür."]];
const WP=12,WN=Math.ceil(W.length/WP);

/* ---------- SORULAR (açık uçlu / kısa cevaplı) ---------- */
// o: öğrenme çıktısı (0–5), d: 1 basit, 2 orta, 3 zor
const Q=[
/* BTY.5.1.1 (4) */
{o:0,d:1,s:"e-Okul ve bilişim",g:{tur:"telefon",baslik:"Mesajlar",ogeler:[{tip:"sol",kim:"OKUL",t:"Sayın veli, öğrenciniz bugün okula gelmedi."}]},t:"Kavram",q:"Öğretmen derse girince yoklamayı e-Okul’a işliyor. Bilgisayar bu bilgiyi saklıyor ve velilerin telefonuna görseldeki gibi bir mesaj olarak iletiyor. Bilgiyi toplayan, işleyen, saklayan ve ileten bu tür teknolojilere ne ad verilir?",h:"<em>Bilgi</em> + <em>iletişim</em> teknolojileri…",a:"<em>Bilişim teknolojileri</em>"},
{o:0,d:1,s:"Hastanedeki MR cihazı",g:{tur:"cizim",liste:[{ad:"mr",yazi:"MR cihazı"}]},t:"Sınıflandırma",q:"Ayşe’nin dedesi bel ağrısı yüzünden hastaneye gidiyor. Doktor, vücudunun içini görmek için onu görseldeki büyük MR cihazına yatırıyor ve görüntüler bilgisayar ekranına geliyor. Bu bilişim teknolojisi hangi alanda kullanılmaktadır?",h:"Hastane, doktor, hastalık…",a:"<em>Sağlık</em> alanında."},
{o:0,d:2,s:"Mektup ve mesaj",g:{tur:"cizim",liste:[{ad:"mektup",yazi:"Dün: mektup"},{ad:"akillitel",yazi:"Bugün: mesaj"}]},t:"Dün ve Bugün",q:"Dedemin gençliğinde insanlar mektup yazar, postaneye götürür ve cevabı günlerce beklerdi. Bugün ise telefondan gönderdiğimiz bir mesaj hemen karşı tarafa ulaşıyor. Mektup ile mesajlaşma uygulamaları arasındaki bir farkı yazınız.",h:"Ne kadar <em>sürede</em> ulaşıyor?",a:"Mektup <em>günlerce</em> sonra ulaşır; mesaj <em>saniyeler içinde</em> ulaşır. (Mesaja resim, ses de eklenebilir.)"},
{o:0,d:3,s:"Ejderhanın sırtında uçan oyuncu",g:{tur:"cizim",liste:[{ad:"yesilekran",yazi:"Stüdyoda çekim"},{ad:"gokyuzu",yazi:"Filmde görünen"}]},t:"Sinema",q:"Bir filmde oyuncu, bir ejderhanın sırtında gökyüzünde uçuyormuş gibi görünüyor. Aslında bu sahne, görseldeki gibi stüdyoda yeşil bir perdenin önünde çekilmiştir. Yeşil ekran teknolojisi bu sahnede ne işe yaramıştır?",h:"Oyuncunun <em>arkasındaki</em> görüntü…",a:"Oyuncunun <em>arka planı bilgisayarda değiştirilmiş</em>, yeşil perdenin yerine gökyüzü ve ejderha görüntüsü konmuştur."},
/* BTY.5.1.2 (2 + fikir) */
{o:1,d:2,s:"Kambur oturan Mert",g:{tur:"cizim",liste:[{ad:"kambur",yazi:"Mert’in oturuşu"}]},t:"Ergonomi",q:"Mert ödevini yaparken görseldeki gibi bilgisayar başında kambur oturuyor ve yüzünü ekrana çok yaklaştırıyor. Akşam olunca sırtı ve gözleri ağrıyor. Mert’e doğru oturuş için bir öneri yazınız.",h:"Sırt, ekran, mesafe…",a:"<em>Sırtını dik</em> tutmalı; ekranı <em>göz hizasında ve 50–70 cm uzakta</em> tutmalı; arada <em>mola</em> vermelidir."},
{o:1,d:2,s:"Gece video izleyen Zeynep",g:{tur:"cizim",liste:[{ad:"gece",yazi:"Gece saat 02.30"}]},t:"Sağlık",q:"Zeynep her gece yatağında saatlerce telefondan video izliyor. Sabahları uyanmakta zorlanıyor, derste de uykusu geliyor. Bu alışkanlık Zeynep’in sağlığını nasıl etkiliyor?",h:"Uyku, dikkat, gözler…",a:"<em>Uyku düzeni bozulur</em>, gözleri yorulur ve derste <em>dikkati dağılır</em>."},
{o:1,d:2,f:1,s:"Telefonlar yakınlaştırır mı?",t:"Fikir Sorusu",q:"Bazı insanlar akıllı telefonların uzaktaki insanları birbirine yakınlaştırdığını söylüyor. Bazıları ise aynı masadaki insanların bile telefona baktığını, yüz yüze sohbetin azaldığını düşünüyor. Sizce akıllı telefonlar insanları birbirine yakınlaştırıyor mu, uzaklaştırıyor mu? Nedenini yazınız.",h:"<em>Görüntülü konuşma</em>… Aynı masada <em>telefona bakmak</em>…",p:"Öğrencinin kendi ifadeleri.",a:"<em>Öğrencinin kendi ifadeleri.</em>"},
/* BTY.5.1.3 (4) */
{o:2,d:1,s:"Silinen fotoğraf",t:"Kavram",q:"Selin geçen yıl internette bir fotoğrafını paylaşmış, sonra da silmişti. Bir gün aynı fotoğrafın ekran görüntüsünü arkadaşının telefonunda gördü. İnternette bıraktığımız ve kolay kolay silinmeyen bu izlere ne ad verilir?",h:"Kumda bıraktığımız <em>ayak izleri</em> gibi…",a:"<em>Dijital ayak izi</em>"},
{o:2,d:1,s:"İzinsiz fotoğraf paylaşımı",g:{tur:"telefon",baslik:"Sosyal Medya",ogeler:[{tip:"gonderi",kisi:"elif_gezide",t:"Defne’nin komik hâli :D",alt:"124 beğeni · 37 yorum"}]},t:"Saygı",q:"Elif sınıf gezisinde arkadaşı Defne’nin komik bir fotoğrafını çekiyor. Defne’ye sormadan bu fotoğrafı görseldeki gibi sosyal medyada paylaşıyor. Elif’in davranışı doğru mudur? Nedenini yazınız.",h:"Defne’nin <em>izni</em>…",a:"<em>Doğru değildir.</em> Başkasının fotoğrafını <em>izinsiz paylaşmak</em> onun mahremiyetine saygısızlıktır."},
{o:2,d:2,s:"Oyun hesabı açan Emre",g:{tur:"telefon",baslik:"Yeni Hesap Oluştur",ogeler:[{tip:"alan",ad:"Kullanıcı adı"},{tip:"alan",ad:"Ad Soyad"},{tip:"alan",ad:"Ev adresi",uyari:1},{tip:"alan",ad:"Okulun adı",uyari:1},{tip:"alan",ad:"Şifre"},{tip:"buton",t:"Kayıt Ol"}]},t:"Dijital Kimlik",q:"Emre yeni bir oyun hesabı açıyor. Görseldeki kayıt ekranında kullanıcı adı, ev adresi ve okul bilgisi yazabileceği yerler var. Dijital kimliğini korumak için Emre ne yapmalıdır?",h:"Hangi bilgiler <em>özeldir</em>?",a:"Gerçek adını, <em>adresini ve okulunu yazmamalı</em>; <em>takma bir kullanıcı adı</em> ve <em>güçlü bir şifre</em> kullanmalıdır."},
{o:2,d:2,s:"Rahatsız edici mesajlar",g:{tur:"telefon",baslik:"Oyun Sohbeti",ogeler:[{tip:"sol",kim:"Bilinmeyen_42",t:"Sen çok kötü oynuyorsun, bu oyunu bırak!",renk:"#ffe3e3"},{tip:"sol",kim:"Bilinmeyen_42",t:"Yarın da seni rahat bırakmayacağım.",renk:"#ffe3e3"},{tip:"sol",kim:"Bilinmeyen_42",t:"Herkese senin hakkında yazacağım!",renk:"#ffe3e3"}]},t:"Siber Zorbalık",q:"Oyunda tanımadığı bir kullanıcı, Kerem’e her gün görseldeki gibi kırıcı ve tehdit eden mesajlar gönderiyor. Kerem çok üzülüyor ama bunu kimseye anlatmıyor. Kerem bu durumda ne yapmalıdır?",h:"Cevap verme, <em>engelle</em>, birine <em>anlat</em>…",a:"Mesajlara <em>cevap vermemeli</em>; mesajları kaydedip kişiyi <em>engellemeli ve bildirmeli</em>; durumu <em>ailesine veya öğretmenine anlatmalıdır</em>."},
/* BTY.5.1.4 (2 + fikir) */
{o:3,d:2,s:"Ağlayan Ayşe ve robot süpürge",g:{tur:"cizim",liste:[{ad:"robotsupurge",yazi:"Ayşe ve robot süpürge"}]},t:"Karşılaştırma",q:"Ödevini yapamadığı için ağlayan Ayşe’yi annesi hemen fark ediyor ve ona sarılıyor. Aynı odadaki robot süpürge ise hiçbir şey olmamış gibi çalışmaya devam ediyor. Annede olup yapay zekâda olmayan bu özellik nedir?",h:"Üzülmek, sevinmek, <em>hissetmek</em>…",a:"<em>Duygular</em> (empati). Yapay zekânın duyguları yoktur."},
{o:3,d:3,s:"Tavşanı kedi sanan YZ",g:{tur:"veriseti",egitim:[["kedi",10]],test:"tavsan",cevap:"Bu bir kedi."},t:"Veri",q:"Görseldeki yapay zekâ yalnızca binlerce kedi resmiyle eğitilmiş. Ona bir tavşan resmi gösterildiğinde “Bu bir kedi.” cevabını veriyor. Sizce yapay zekâ neden yanılmış olabilir?",h:"Yapay zekâ <em>gördüğü örneklerden</em> öğrenir…",a:"<em>Hiç tavşan resmi görmediği</em> için. Yapay zekâ <em>öğrendiği verilere bağlıdır</em>; görmediği şeyleri tanımakta zorlanır."},
{o:3,d:2,f:1,s:"Ödevi YZ yapsa?",t:"Fikir Sorusu",q:"Artık bazı yapay zekâ uygulamaları bir ödevi birkaç saniyede hazırlayabiliyor. Selin’in arkadaşı, “Ödevlerimizi yapay zekâya yaptıralım, hem zaman kazanırız.” diyor. Sizce ödevleri yapay zekâya yaptırmak doğru olur mu? Nedenini yazınız.",h:"Zaman <em>kazanmak</em>… Konuyu <em>öğrenmek</em>…",p:"Öğrencinin kendi ifadeleri.",a:"<em>Öğrencinin kendi ifadeleri.</em>"},
/* BTY.5.1.5 (7) */
{o:4,d:1,s:"Fare ve resim programı",g:{tur:"cizim",liste:[{ad:"fare",yazi:"Fare"},{ad:"program",yazi:"Resim programı"}]},t:"Donanım–Yazılım",q:"Ali’nin babası eve yeni bir fare aldı ve bilgisayara taktı. Ali de aynı gün bilgisayara bir resim programı yükledi. Fare ve resim programından hangisi donanım, hangisi yazılımdır?",h:"Hangisi <em>elle tutulabilir</em>?",a:"Fare <em>donanımdır</em> (elle tutulur); resim programı <em>yazılımdır</em> (elle tutulamaz)."},
{o:4,d:1,s:"Bilgisayarın beyni",g:{tur:"cizim",liste:[{ad:"islemci",yazi:"?"}]},t:"Parçalar",q:"Kerem bilgisayarda oyun oynarken oyundaki her hareket için hızlı hesaplamalar yapılıyor. Görseldeki, bu komutları işleyen ve “bilgisayarın beyni” olarak bilinen parça hangisidir?",h:"Kısaca <em>CPU</em> denir…",a:"<em>İşlemci</em> (CPU)"},
{o:4,d:2,s:"Pardus ve Windows",g:{tur:"cizim",liste:[{ad:"monitor",metin:"Pardus",renk:"#2b8a3e",yazi:"Okuldaki bilgisayar"},{ad:"monitor",metin:"Windows",renk:"#1c7ed6",yazi:"Evdeki bilgisayar"}]},t:"İşletim Sistemi",q:"Okuldaki bilgisayar açılırken ekrana Pardus, evdeki bilgisayar açılırken Windows yazısı geliyor. Donanım ile kullanıcı arasında köprü kuran bu temel yazılımlara ne ad verilir?",h:"Bilgisayarı <em>işletir</em>…",a:"<em>İşletim sistemi</em>"},
{o:4,d:1,s:"Fotoğraftaki 0 ve 1’ler",g:{tur:"cizim",liste:[{ad:"ikili",yazi:"Bilgisayarda 0 ve 1’ler"}]},t:"Veri Birimi",q:"Zeynep telefonundaki bir fotoğrafın boyutuna baktığında 2 MB yazdığını görüyor. Öğretmeni ona, bu fotoğrafın bile bilgisayarda aslında milyonlarca 0 ve 1 ile saklandığını söylüyor. Yalnızca 0 ya da 1 değerini alabilen bu en küçük veri ölçü birimine ne ad verilir?",h:"8 tanesi bir araya gelince 1 <em>byte</em> eder…",a:"<em>Bit</em>"},
{o:4,d:2,s:"4 GB mı, 4 MB mı?",g:{tur:"cizim",liste:[{ad:"akillitel",metin:"4 GB boş",yazi:"Telefon"},{ad:"tablet",metin:"4 MB boş",yazi:"Tablet"}]},t:"Veri Birimi",q:"Selin’in telefonunda 4 GB, tabletinde ise 4 MB boş yer var. Selin büyük bir oyun yüklemek istiyor ama hangi cihazı seçeceğine karar veremiyor. Hangi cihazda daha çok boş yer vardır?",h:"Sıralama: KB &lt; <em>MB</em> &lt; <em>GB</em>…",a:"<em>Telefonda.</em> Çünkü <em>GB, MB’den büyüktür</em> (1 GB ≈ 1024 MB)."},
{o:4,d:2,s:"Unutulan USB bellek",g:{tur:"cizim",liste:[{ad:"usb",yazi:"Evde unutuldu"},{ad:"bulut",yazi:"İnternetteki depolama"}]},t:"Depolama",q:"Emir ödevini evdeki bilgisayarda hazırladı ama okula USB belleğini getirmeyi unuttu. Neyse ki ödevini internetteki bir depolama alanına da kaydetmişti ve okulda oradan açtı. Emir’in kullandığı bu depolama yöntemine ne ad verilir?",h:"Adı, gökyüzündeki <em>pamuk gibi beyaz</em> şeylerden gelir…",a:"<em>Bulut depolama</em>"},
{o:4,d:3,s:"Tablette oyun",g:{tur:"cizim",liste:[{ad:"tablet",el:1,yazi:"Dokunmatik ekran"}]},t:"Birimler",q:"Tablette bir oyunu parmağınızla ekrana dokunarak oynuyorsunuz. Oyunun görüntüsünü de aynı ekranda görüyorsunuz. Dokunmatik ekran neden hem giriş hem çıkış birimidir?",h:"<em>Dokunmak</em> ne işe yarar, <em>görmek</em> ne işe yarar?",a:"Dokunarak <em>komut veririz (giriş)</em>; görüntüyü de aynı ekranda <em>görürüz (çıkış)</em>."},
/* BTY.5.1.6 (2) */
{o:5,d:1,s:"Dağınık masaüstü",g:{tur:"klasor",genislik:330,paneller:[{baslik:"Masaüstü",sutun:6,ogeler:["tatil1.jpg","fen_odevi.docx","sarki.mp3","doga.jpg","sunum.pptx","ritim.mp3","kedi.jpg","tarih.docx","dans.mp3","deniz.jpg","proje.pptx",{ad:"Ödev.docx",vurgu:1}]}]},t:"Klasör",q:"Defne’nin bilgisayarının masaüstü görseldeki gibi onlarca resim, ödev ve şarkı dosyasıyla dolu. Öğretmenine göndereceği ödevi bu kalabalığın içinde bir türlü bulamıyor. Defne dosyalarını daha kolay bulmak için ne yapmalıdır?",h:"“Ödevler”, “Resimler”…",a:"<em>Klasörler oluşturup</em> dosyalarını türlerine göre (Ödevler, Resimler, Müzik) <em>bu klasörlere yerleştirmelidir</em>."},
{o:5,d:3,s:"Taşınan dosya nerede?",g:{tur:"klasor",ok:"kes–yapıştır",paneller:[{baslik:"Ödevler",ogeler:["tarih.docx",{ad:"fen.docx",vurgu:1,soluk:1},"mat.xlsx"]},{baslik:"Fen",ogeler:["deney.jpg",{ad:"fen.docx",vurgu:1}]}]},t:"İşlemler",q:"Ali, görseldeki gibi “Ödevler” klasöründeki bir dosyayı kes–yapıştır yaparak “Fen” klasörüne taşıdı. Sonra “Ödevler” klasörünü yeniden açtı. Taşıdığı dosya hâlâ “Ödevler” klasöründe durur mu? Nedenini yazınız.",h:"<em>Kes</em> mi, <em>kopyala</em> mı?",a:"<em>Durmaz.</em> Taşımada dosya <em>eski yerinden kalkar</em>, yeni yere gider. (Kopyalasaydı iki klasörde de olurdu.)"}];
/* 20 soru sınav dağılımının iki katı (4-2-4-2-6-2) + 1 ek 5.1.5 sorusu + 2 fikir sorusu (5.1.2 ve 5.1.4) */
