/* ============================================================
   BTY 6. Sınıf · 1. Dönem 1. Yazılı
   Bu dosya yalnızca İÇERİK içerir (özet, sözlük, sorular).
   Tasarım ve kod: /motor/motor.js + /motor/motor.css
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
const BILGI={
 ders:"BTY 6. Sınıf",           // üst çubukta ve PDF başlığında
 sinav:"1. Dönem 1. Yazılı",
 emoji:"💻",
 baslik:"Bilişim Teknolojileri ve Yazılım",         // açılış ekranındaki büyük başlık
 pdfBaslik:"Bilişim Teknolojileri ve Yazılım 6",      // PDF üst bilgisindeki ders adı
 dosya:"BTY6_1D1Y"         // PDF dosya adı ön eki
};

/* ---------- ÖĞRENME ÇIKTILARI (1. Dönem 1. Sınav) ---------- */
const OC=["BTY.6.1.1","BTY.6.1.2","BTY.6.2.1","BTY.6.2.2","BTY.6.2.3","BTY.6.2.4","BTY.6.2.5","BTY.6.2.6"];
const OCN=["Yenilikçi bilişim teknolojileri","Bilişim teknolojisinin geleceği","Tablolama programları","Tablolama sorunları","Veri toplama ve düzenleme","Bulgulara ulaşma","Ses düzenleme programları","Ses kurgusu"];
const SEN=[2,1,2,1,1,1,1,1]; /* 10 soruluk sınav dağılımı */

/* ---------- KONU ÖZETİ ---------- */
// [başlık, giriş, kartlar, kazanım no, karşılaştırma etiketleri]
// kart: [emoji, başlık, açıklama, örnek] ya da karşılaştırma: [emoji, başlık, null, null, sol, sağ]
const S=[
["Yenilikçi Bilişim Teknolojileri 🚀","Yenilikçi bilişim teknolojileri; son yıllarda ortaya çıkan ya da hızla gelişen, hayatımızı değiştiren yeni teknolojilerdir.",[
["🤖","Yapay Zekâ","Makinelerin verilerden öğrenip tahmin yapması ve karar vermesidir.","Sesli asistanlar, yüz tanıma, çeviri uygulamaları."],
["🌐","Nesnelerin İnterneti","Eşyaların internete bağlanıp birbirleriyle ve bizimle veri paylaşmasıdır.","Telefondan açılan kombi, süt bitince uyaran buzdolabı."],
["⌚","Giyilebilir Teknolojiler","Üzerimize takıp giydiğimiz akıllı cihazlardır. Adım, nabız, uyku gibi bilgileri ölçebilir.","Akıllı saat, akıllı bileklik."],
["🖨️","3B Yazıcı","Bilgisayarda çizilen bir modeli katman katman basarak gerçek, üç boyutlu bir nesneye dönüştürür.","Kırılan bir oyuncak parçasını yeniden basmak."],
["🦾","Robotik","Belirli işleri insanların yerine ya da onlara yardım ederek yapan makinelerin tasarlanmasıdır.","Fabrikada araba parçası takan robot kol."],
["☁️","Bulut Bilişim","Dosyaları ve programları internetteki sunucularda saklayıp her yerden kullanmaktır.","Evde kaydedilen ödevi okulda açmak."]],0],
["Gerçeklik Teknolojileri ve Araçlar 🥽","Bazı yenilikçi teknolojiler gördüğümüz dünyayı değiştirir, bazıları ise kendi kendine hareket eder.",[
["🥽","Sanal Gerçeklik","Özel bir gözlükle kişiyi tamamen bilgisayarda oluşturulmuş bir ortama götürür.","VR gözlüğüyle sınıftan çıkmadan bir müzeyi gezmek."],
["📱","Artırılmış Gerçeklik","Gerçek ortamın görüntüsünün üzerine sanal nesneler ekler. Gerçek dünya görünmeye devam eder.","Telefon kamerasında odaya sanal bir koltuk yerleştirmek."],
["🚗","Otonom (Sürücüsüz) Araç","Kamera ve sensörlerle yolu algılayıp sürücü olmadan ilerleyebilen araçtır.","Bazı şehirlerde denenen sürücüsüz taksiler."],
["🚁","İnsansız Hava Aracı (Dron)","İçinde pilot olmadan, uzaktan kumandayla ya da kendi kendine uçan araçtır.","Tarlayı ilaçlayan, yangını havadan izleyen dronlar."],
["🏠","Akıllı Ev","Evdeki ışık, ısıtma, kilit gibi sistemlerin telefonla ya da otomatik yönetilmesidir.","Eve girince ışıkların kendiliğinden yanması."],
["🗣️","Sesli Asistan","Sesli komutları anlayıp cevap veren yapay zekâ uygulamasıdır.","“Yarın hava nasıl olacak?” diye sormak."]],0],
["Yenilikçi Teknolojileri Sınıflandıralım 🗂️","Yenilikçi teknolojileri kullanıldıkları alanlara göre gruplandırabiliriz. Bir teknoloji birden fazla alanda kullanılabilir.",[
["🏥","Sağlık","Hastalıkların erken fark edilmesine ve takibine yardım eder.","Nabzı ölçen akıllı saat, 3B yazıcıyla basılan protez."],
["🎓","Eğitim","Konuları görerek ve yaşayarak öğrenmeyi sağlar.","Sanal gerçeklikle uzaya yolculuk, artırılmış gerçeklikle 3B kalp modeli."],
["🚦","Ulaşım","Yolculuğu daha güvenli ve kolay hâle getirir.","Sürücüsüz araçlar, akıllı trafik ışıkları."],
["🌾","Tarım","Çiftçinin işini kolaylaştırır, verimi artırır.","Tarlayı ilaçlayan dron, toprağın nemini ölçen sensör."],
["🏭","Sanayi","Üretimi hızlandırır, tehlikeli işlerde insanı korur.","Fabrikadaki robot kollar."],
["🛋️","Ev ve Günlük Hayat","Evdeki işleri kolaylaştırır, enerji tasarrufu sağlar.","Robot süpürge, akıllı priz, akıllı termostat."]],0],
["Bilişim Teknolojisinin Geleceği 🔭","Bugünkü gelişmelere bakarak gelecekte neler olabileceğine dair çıkarım yapabiliriz. Bu çıkarımlar tahmindir, kesin değildir.",[
["🚗","Ulaşım","Sürücüsüz araçlar yaygınlaşabilir; yaşlı ve engelli bireyler daha kolay yolculuk yapabilir.","Bugün denenen sürücüsüz taksiler."],
["🩺","Sağlık","Uzaktan muayene ve giyilebilir cihazlarla sağlık takibi artabilir.","Akıllı saatin düzensiz kalp atışını fark etmesi."],
["📚","Eğitim","Sanal ve artırılmış gerçeklikle dersler daha çok yaşayarak öğrenmeye dönüşebilir.","Tarih dersinde sanal olarak eski bir şehri gezmek."],
["💼","Meslekler","Bazı meslekler değişebilir, bazı işleri makineler yapabilir; yeni meslekler de ortaya çıkabilir.","Dron pilotu, veri analisti, robot teknisyeni."],
["🔐","Dikkat Edilmesi Gerekenler","Teknoloji arttıkça kişisel verilerin korunması ve güvenlik daha önemli hâle gelir.","Akıllı ev cihazlarında güçlü şifre kullanmak."],
["🧭","Nasıl Çıkarım Yaparız?","Bir teknolojinin bugün ne işe yaradığına bakar, yaygınlaşırsa hayatımızı nasıl değiştireceğini düşünürüz.","“Dronlar kargo taşırsa paketler daha hızlı gelebilir.”"]],1],
["Tablolama Programları 📊","Tablolama programları; verileri satır ve sütunlardan oluşan tablolarda düzenlememizi, hesaplama yapmamızı ve grafik çizmemizi sağlar.",[
["💻","Örnek Programlar","LibreOffice Calc, Microsoft Excel ve Google E-Tablolar tablolama programlarıdır.","Pardus’ta LibreOffice Calc kullanılır."],
["➡️","Satır","Tabloda yatay sıralardır. 1, 2, 3 gibi sayılarla gösterilir.","3. satır: Ayşe’nin bilgileri."],
["⬇️","Sütun","Tabloda dikey sıralardır. A, B, C gibi harflerle gösterilir.","B sütunu: öğrencilerin notları."],
["🔲","Hücre","Satır ile sütunun kesiştiği kutucuktur. Veriler hücrelere yazılır.","Bir öğrencinin bir sınav notu bir hücreye yazılır."],
["📍","Hücre Adresi","Hücrenin yerini gösterir: önce sütun harfi, sonra satır numarası yazılır.","B3 = B sütunu ile 3. satırın kesiştiği hücre."],
["📒","Çalışma Kitabı ve Sayfası","Tablolama dosyasına çalışma kitabı denir; içinde birden fazla çalışma sayfası bulunabilir.","“1. Dönem” ve “2. Dönem” adlı iki sayfa."]],2],
["Formüller ve Fonksiyonlar 🧮","Tablolama programları hesaplamaları bizim yerimize yapar. Her formül eşittir (=) işaretiyle başlar.",[
["➕","Dört İşlem","Toplama +, çıkarma −, çarpma *, bölme / işaretleriyle yapılır.","=B2+C2 &nbsp;·&nbsp; =B2*3"],
["Σ","TOPLA","Seçilen hücrelerdeki sayıların toplamını bulur.","=TOPLA(B2:B8) haftalık harçlığın toplamı"],
["➗","ORTALAMA","Seçilen sayıların ortalamasını bulur.","=ORTALAMA(C2:C5) sınav notlarının ortalaması"],
["🔝","MAK ve MİN","MAK en büyük, MİN en küçük değeri bulur.","=MAK(D2:D30) sınıftaki en uzun boy"],
["📐","Hücre Aralığı","İki nokta (:) arasındaki tüm hücreleri gösterir.","B2:B8 → B2’den B8’e kadar olan 7 hücre"],
["🔄","Otomatik Güncelleme","Formüldeki bir sayı değişince sonuç kendiliğinden yeniden hesaplanır.","Bir not düzeltilince ortalama hemen değişir."]],2],
["Tablolamada Sık Karşılaşılan Sorunlar 🛠️","Tablolama programı kullanırken bazı sorunlarla karşılaşabiliriz. Sorunun nedenini bilirsek kolayca çözeriz.",[
["#️⃣","##### Görünmesi","Sayı hücreye sığmıyordur; sütun dardır.","Çözüm: Sütun genişliğini artır."],
["🟰","= Unutulması","Formülün başına = yazılmazsa program onu hesaplamaz, yazı gibi gösterir.","TOPLA(B2:B5) yerine =TOPLA(B2:B5) yazılmalı."],
["0️⃣","Sıfıra Bölme Hatası","Bir sayı 0’a ya da boş hücreye bölünürse #SAYI/0! (bazı programlarda #DIV/0!) hatası çıkar.","Bölünen hücrenin boş olup olmadığını kontrol et."],
["📍","Yanlış Hücre Adresi","Formülde yanlış hücre yazılırsa sonuç da yanlış çıkar.","B5 yerine B6 yazmak."],
["🔤","Sayıyı Yazıyla Yazmak","“on beş” gibi yazıyla girilen değerler hesaplamaya katılmaz.","15 şeklinde rakamla yazılmalı."],
["💾","Kaydetmeyi Unutmak","Elektrik kesilirse kaydedilmemiş çalışma kaybolabilir.","Sık sık Ctrl+S ile kaydet."]],3],
["Veri Toplama ve Düzenleme 📋","Tablolama dosyasına yazacağımız verileri önce toplarız, sonra düzenli ve anlaşılır bir tabloya dönüştürürüz.",[
["🔢","Veri","Bir konu hakkında topladığımız sayı, ad, ölçüm gibi bilgilerdir.","Sınıftaki öğrencilerin boy uzunlukları."],
["📝","Anket","Kişilere sorular sorarak veri toplamaktır.","Sınıfa “En sevdiğin meyve hangisi?” diye sormak."],
["👀","Gözlem ve Ölçüm","Bir olayı izleyerek ya da cetvel, termometre gibi araçlarla ölçerek veri toplamaktır.","Bir hafta boyunca hava sıcaklığını not etmek."],
["🏷️","Sütun Başlıkları","Her sütunun en üstüne o sütunda ne olduğunu yazarız.","Ad Soyad · Boy (cm) · Yaş"],
["📏","Tutarlı Yazım","Aynı sütundaki veriler aynı birimle ve aynı biçimde, rakamla yazılmalıdır.","Hepsi cm olarak: 145, 150, 138"],
["🔃","Sıralama","Verileri küçükten büyüğe, büyükten küçüğe ya da alfabetik dizmektir.","Sınıf listesini A’dan Z’ye sıralamak."]],4],
["Bulgulara Ulaşma 🔍","Tablodaki verileri sıralayarak, hesaplayarak ve grafiğe dönüştürerek sonuçlar (bulgular) çıkarırız.",[
["📊","Sütun Grafiği","Değerleri karşılaştırmak için kullanılır. En uzun sütun en büyük değeri gösterir.","Hangi meyvenin daha çok oy aldığını görmek."],
["📈","Çizgi Grafiği","Bir değerin zamanla nasıl değiştiğini gösterir.","Bir hafta boyunca hava sıcaklığının değişimi."],
["🥧","Pasta Grafiği","Bütünün parçalarını ve oranlarını gösterir.","Harçlığın ne kadarının kitaba ayrıldığı."],
["🔃","Sıralayarak Bulmak","Büyükten küçüğe sıralayınca en çok ve en az olan hemen görünür.","Kantinde en çok satılan ürünü bulmak."],
["🔎","Filtreleme","Yalnızca istediğimiz şarta uyan satırları gösterir.","Sadece 6/A sınıfındaki öğrencileri görmek."],
["💡","Yorumlama","Grafik ve sonuçlara bakarak “en çok, en az, arttı, azaldı” gibi çıkarımlar yaparız.","“Öğrenciler en çok cuma günü kitap okumuş.”"]],5],
["Ses Düzenleme Programları 🎧","Ses düzenleme programlarıyla ses kaydı yapabilir, kayıttaki hataları düzeltebilir ve ses dosyası oluşturabiliriz.",[
["🎙️","Kayıt","Mikrofonla konuşma, şarkı ya da çevre sesleri kaydedilir.","Audacity ücretsiz bir ses düzenleme programıdır."],
["✂️","Kesme ve Silme","İstenmeyen bölüm seçilip silinir.","Kayıttaki öksürük sesini çıkarmak."],
["🔊","Ses Yüksekliği","Çok kısık ya da çok yüksek sesler ayarlanır.","Kısık çıkan konuşmayı yükseltmek."],
["📶","Yavaşça Açılma / Kısılma","Ses aniden başlamak ya da bitmek yerine yavaş yavaş yükselir veya azalır.","Müziğin sonunda sesin yavaşça kısılması."],
["🌫️","Gürültü Azaltma","Arka plandaki uğultu ve hışırtı azaltılır.","Kayıttaki buzdolabı uğultusunu azaltmak."],
["📤","Dışa Aktarma","Çalışma, her cihazda açılabilen MP3 ya da WAV gibi bir ses dosyasına dönüştürülür.","Kaydı arkadaşına MP3 olarak göndermek."]],6],
["Ses Kurgusu 🎬","Kurgu; konuşma, müzik ve efekt seslerini bir plan doğrultusunda uygun sırayla bir araya getirmektir.",[
["🗒️","Senaryo (Plan)","Kayda başlamadan önce ne anlatılacağı ve hangi sesin nerede kullanılacağı yazılır.","Okul radyosu için kısa bir metin hazırlamak."],
["📖","Giriş – Gelişme – Sonuç","Ses dosyası anlamlı bir sırayla ilerlemelidir.","Önce kendini tanıt, sonra konuyu anlat, sonunda vedalaş."],
["🎚️","İzler (Katmanlar)","Konuşma, müzik ve efekt sesleri ayrı izlere yerleştirilip birlikte çalınabilir.","Bir izde konuşma, altındaki izde müzik."],
["⚖️","Ses Dengesi","Arka plan müziği, konuşmayı bastırmayacak kadar kısık olmalıdır.","Konuşma başlayınca müziğin sesini kısmak."],
["🌧️","Efekt Sesleri","Anlatılan olayı canlandırmak için kullanılır.","Yağmur anlatılırken yağmur sesi eklemek."],
["©️","Telif Hakkı","Başkasına ait müzik izinsiz kullanılmamalıdır. Telifsiz ya da kullanım izni verilen sesler seçilmelidir.","Telifsiz müzik arşivinden şarkı seçmek."]],7]];

/* ---------- SÖZLÜK ---------- */
const W=[
["3B Yazıcı","Modeli katman katman basarak gerçek nesne üreten yazıcı.","Kırılan oyuncak parçasını basmak."],
["Artırılmış Gerçeklik","Gerçek görüntünün üzerine sanal nesneler ekleyen teknoloji.","Kamerada odaya sanal koltuk koymak."],
["Bulut Bilişim","Dosya ve programları internetteki sunucularda kullanmak.","Ödevi her yerden açabilmek."],
["Çalışma Kitabı","Tablolama programında oluşturulan dosyanın tamamı.","“Not Çizelgesi” dosyası."],
["Dışa Aktarma","Çalışmayı başka cihazlarda açılabilen bir dosyaya dönüştürmek.","Kaydı MP3 olarak kaydetmek."],
["Dron (İHA)","Pilotsuz, uzaktan ya da kendi kendine uçan araç.","Tarlayı ilaçlayan dron."],
["Filtreleme","Tabloda yalnızca istenen şarta uyan satırları göstermek.","Sadece 6/A öğrencilerini görmek."],
["Fonksiyon","Hazır hesaplama komutu.","TOPLA, ORTALAMA, MAK."],
["Formül","= ile başlayan hesaplama ifadesi.","=B2+C2"],
["Giyilebilir Teknoloji","Üzerimize takıp giydiğimiz akıllı cihazlar.","Akıllı saat, akıllı bileklik."],
["Grafik","Verileri çizimle gösteren şekil.","Sütun, çizgi, pasta grafiği."],
["Hücre","Satır ile sütunun kesiştiği kutucuk.","Bir öğrencinin notu yazılan kutu."],
["Hücre Adresi","Hücrenin sütun harfi ve satır numarasından oluşan adı.","B3, C10"],
["İz (Kanal)","Ses programında bir sesin yerleştirildiği şerit.","Konuşma izi, müzik izi."],
["Kurgu","Sesleri bir plana göre uygun sırayla birleştirmek.","Konuşma + müzik + efekt."],
["Nesnelerin İnterneti","Eşyaların internete bağlanıp veri paylaşması.","Telefondan açılan kombi."],
["Otonom","Kendi kendine, insan yönetmeden çalışan.","Sürücüsüz araç."],
["Robotik","Belirli işleri yapan robotların tasarlanması.","Fabrikadaki robot kol."],
["Sanal Gerçeklik","Kişiyi tamamen bilgisayarda oluşturulmuş bir ortama götüren teknoloji.","VR gözlüğüyle müze gezmek."],
["Satır / Sütun","Tabloda yatay sıra satır, dikey sıra sütundur.","3. satır, B sütunu."],
["Senaryo","Yapılacak kaydın önceden yazılmış planı.","Okul radyosu metni."],
["Sıralama","Verileri belli bir düzene göre dizmek.","Notları büyükten küçüğe dizmek."],
["Tablolama Programı","Verileri tabloda düzenleyip hesaplayan program.","LibreOffice Calc, Excel."],
["Telif Hakkı","Bir eserin sahibine ait olan kullanım hakkı.","Şarkıyı izinsiz kullanmamak."],
["Veri","Toplanan sayı, ad, ölçüm gibi bilgiler.","Öğrencilerin boy uzunlukları."],
["Yenilikçi","Yeni ortaya çıkan, eskisinden farklı ve gelişmiş.","Yenilikçi teknoloji: akıllı saat."]];
const WP=12,WN=Math.ceil(W.length/WP);

/* ---------- SORULAR (açık uçlu / kısa cevaplı) ---------- */
// o: öğrenme çıktısı (0–7), d: 1 basit, 2 orta, 3 zor
const Q=[
/* BTY.6.1.1 (4) */
{o:0,d:1,s:"Annenin akıllı saati",t:"Sınıflandırma",q:"Elif’in annesi her sabah bileğine küçük bir saat takıyor. Bu saat, gün boyunca attığı adımları ve kalp atışlarını ölçüyor, gelen mesajları da ekranında gösteriyor. Üzerimize takıp giydiğimiz bu tür yenilikçi bilişim teknolojilerine ne ad verilir?",h:"Kıyafet gibi <em>giyiyoruz</em>…",a:"<em>Giyilebilir teknolojiler</em>"},
{o:0,d:1,s:"Kırılan oyuncak parçası",t:"Kavram",q:"Kerem’in oyuncak arabasının küçük bir parçası kırıldı. Bilişim öğretmeni parçanın modelini bilgisayarda çizdi ve bir makine bu parçayı katman katman üst üste basarak yeniden üretti. Gerçek, üç boyutlu nesneler üreten bu teknoloji hangisidir?",h:"Kâğıda değil, <em>üç boyutlu</em> basar…",a:"<em>3B (üç boyutlu) yazıcı</em>"},
{o:0,d:2,s:"Telefondan açılan kombi",t:"Kavram",q:"Burak’ın babası işten çıkınca telefonundan evdeki kombiyi açıyor, eve geldiğinde ev sıcak oluyor. Evdeki buzdolabı da süt bitince telefona uyarı gönderiyor. Eşyaların internete bağlanıp birbirleriyle ve bizimle veri paylaşmasına ne ad verilir?",h:"<em>Eşyalar</em> da internete bağlanıyor…",a:"<em>Nesnelerin interneti</em>"},
{o:0,d:3,s:"VR müze ve AR koltuk",t:"Karşılaştırma",q:"Zeynep okulda özel bir gözlük takıp kendini tamamen bir müzenin içinde gibi hissetti. Annesi ise telefon kamerasıyla salonlarına bakıp sanal bir koltuğun odada nasıl duracağını gördü. Sanal gerçeklik ile artırılmış gerçeklik arasındaki bir farkı yazınız.",h:"Hangisinde <em>gerçek oda</em> görünmeye devam ediyor?",a:"Sanal gerçeklikte kişi <em>tamamen sanal bir ortama</em> girer; artırılmış gerçeklikte <em>gerçek ortamın üzerine sanal nesneler eklenir</em>."},
/* BTY.6.1.2 (1 + fikir) */
{o:1,d:2,s:"Sürücüsüz araçlar",t:"Çıkarım",q:"Bazı şehirlerde, kamera ve sensörlerle yolu algılayıp sürücü olmadan ilerleyen araçlar deneniyor. Bu araçlar yolcuyu istediği yere kendi kendine götürebiliyor. Bu teknoloji yaygınlaşırsa gelecekte ulaşımda nasıl bir değişiklik olabilir? Bir örnek yazınız.",h:"Araç <em>kendi kendine</em> giderse kimler kolay yolculuk eder?",a:"Örneğin: <em>Araç kullanamayan yaşlı ve engelli bireyler</em> kolayca yolculuk edebilir; <em>sürücü hatalarından doğan kazalar azalabilir</em>."},
{o:1,d:2,f:1,s:"Robotlar ve meslekler",t:"Fikir Sorusu",q:"Bugün bazı fabrikalarda robotlar insanların yaptığı işleri yapıyor. Bazı insanlar gelecekte pek çok mesleğin ortadan kalkacağını, bazıları ise yeni mesleklerin ortaya çıkacağını düşünüyor. Sizce gelecekte robotlar ve yapay zekâ insanların mesleklerini elinden alır mı? Nedenini yazınız.",h:"Robotu kim <em>yapacak</em>, kim <em>tamir edecek</em>?",p:"Öğrencinin kendi ifadeleri.",a:"<em>Öğrencinin kendi ifadeleri.</em>"},
/* BTY.6.2.1 (4) */
{o:2,d:1,s:"Kutucuğun adı",t:"Kavram",q:"Öğretmen sınıf listesini tablolama programına yazıyor. Her öğrencinin adı bir satırda, notları da sütunlarda yer alıyor. Satır ile sütunun kesiştiği bu küçük kutucuklara ne ad verilir?",h:"Arı peteğindeki <em>gözler</em> gibi…",a:"<em>Hücre</em>"},
{o:2,d:1,s:"B3 hücresi",t:"Hücre Adresi",q:"Bilişim öğretmeni Ali’ye, “Ayşe’nin notunu B3’e yaz.” diyor. Ali tabloya bakıyor ama B3’ün neresi olduğunu bulamıyor. B3 adresi tabloda hangi hücreyi gösterir?",h:"Önce <em>harf</em>, sonra <em>sayı</em>…",a:"<em>B sütunu</em> ile <em>3. satırın</em> kesiştiği hücreyi."},
{o:2,d:2,s:"Haftalık harçlık",t:"Fonksiyon",q:"Zeynep bir hafta boyunca her gün aldığı harçlığı B2’den B8’e kadar olan hücrelere yazdı. Şimdi haftada toplam ne kadar harçlık aldığını öğrenmek istiyor. Zeynep toplamı bulmak için hangi formülü yazmalıdır?",h:"<em>=</em> ile başlar, <em>TOPLA</em> kullanılır…",a:"<em>=TOPLA(B2:B8)</em>"},
{o:2,d:3,s:"Hesap makinesi mi, formül mü?",t:"Formül",q:"Mert sınıfın not ortalamasını önce hesap makinesiyle bulup tabloya yazdı. Sonra bir öğrencinin notu yanlış girildiği için düzeltildi ve Mert her şeyi yeniden hesaplamak zorunda kaldı. Hesap makinesi yerine tablolama programında formül kullanmanın bir faydasını yazınız.",h:"Not <em>değişince</em> sonuç ne olur?",a:"Bir sayı değişince sonuç <em>kendiliğinden yeniden hesaplanır</em>; zaman kazanılır ve <em>hata azalır</em>."},
/* BTY.6.2.2 (2) */
{o:3,d:1,s:"Hesaplamayan formül",t:"Sorun",q:"Ayşe bir hücreye TOPLA(B2:B5) yazıp Enter tuşuna bastı. Hücrede sonuç yerine yazdığı ifade olduğu gibi göründü. Ayşe’nin yaptığı hata nedir?",h:"Her formül hangi <em>işaretle</em> başlar?",a:"Formülün başına <em>eşittir (=) işaretini</em> yazmamış. Doğrusu: =TOPLA(B2:B5)"},
{o:3,d:2,s:"##### işaretleri",t:"Sorun",q:"Emre, kantinin yıllık satış tutarını tabloya yazdı. Ancak hücrede sayı yerine ##### işaretleri göründü. Bu sorunun nedeni nedir ve nasıl çözülür?",h:"Sayı hücreye <em>sığıyor mu</em>?",a:"Sayı hücreye sığmıyordur, <em>sütun dardır</em>. <em>Sütun genişliği artırılmalıdır</em>."},
/* BTY.6.2.3 (2) */
{o:4,d:1,s:"En sevilen meyve",t:"Veri Toplama",q:"Defne, sınıf arkadaşlarının en çok hangi meyveyi sevdiğini öğrenmek istiyor. Bulduğu sonuçları daha sonra tablolama programına yazıp grafik yapacak. Defne bu verileri toplamak için ne yapabilir?",h:"Arkadaşlarına <em>soru sormak</em>…",a:"Arkadaşlarına <em>anket yapabilir</em> (“En sevdiğin meyve hangisi?” diye sorup cevapları not eder)."},
{o:4,d:3,s:"Karışık boy tablosu",t:"Veri Düzenleme",q:"Emre sınıftaki öğrencilerin boylarını tabloya yazdı. Bazı hücrelere “1,45 m”, bazılarına “150”, birine de “yüz kırk” yazdı; sütunların üstüne başlık da koymadı. Emre bu verileri düzenlemek için ne yapmalıdır?",h:"<em>Başlık</em>, aynı <em>birim</em>, <em>rakam</em>…",a:"Sütunlara <em>başlık</em> (Ad Soyad, Boy (cm)) eklemeli; tüm boyları <em>aynı birimle ve rakamla</em> yazmalıdır (145, 150, 140)."},
/* BTY.6.2.4 (2) */
{o:5,d:1,s:"En uzun sütun",t:"Grafik",q:"Ela, bir hafta boyunca her gün kaç sayfa kitap okuduğunu tabloya yazdı ve sütun grafiğine dönüştürdü. Grafikteki en uzun sütun cuma gününe ait. Bu grafiğe göre Ela’nın kitap okumasıyla ilgili hangi sonuca ulaşırız?",h:"<em>En uzun</em> sütun = <em>en çok</em>…",a:"Ela en çok sayfayı <em>cuma günü</em> okumuştur."},
{o:5,d:2,s:"Kantinin en çok satanı",t:"Bulgu",q:"Okul kantininde bir ay boyunca satılan 30 farklı ürünün satış sayıları tabloya yazılmış. Müdür yardımcısı en çok satılan ürünü hızlıca öğrenmek istiyor. Tablolama programında bunu bulmak için ne yapılabilir?",h:"Verileri bir <em>düzene</em> göre dizmek…",a:"Satış sayıları <em>büyükten küçüğe sıralanabilir</em> (en üstteki en çok satandır) ya da <em>MAK</em> fonksiyonu veya grafik kullanılabilir."},
/* BTY.6.2.5 (2) */
{o:6,d:1,s:"Kayıttaki öksürük",t:"Düzenleme",q:"Selin okul radyosu için bir şiir okuyup kaydetti. Kaydı dinlediğinde ortasında bir öksürük sesi olduğunu fark etti. Selin bu istenmeyen sesi kayıttan nasıl çıkarabilir?",h:"O bölümü <em>seç</em>…",a:"Ses düzenleme programında öksürük olan <em>bölümü seçip silmelidir (kesmelidir)</em>."},
{o:6,d:3,s:"Açılmayan ses dosyası",t:"Dışa Aktarma",q:"Ali, ses düzenleme programında hazırladığı çalışmayı programın kendi proje dosyası olarak kaydetti. Bu dosyayı arkadaşına gönderdi ama arkadaşı telefonunda dosyayı açamadı. Ali’nin çalışmasını her cihazda dinlenebilecek hâle getirmek için ne yapması gerekir?",h:"<em>MP3</em> gibi bir dosya…",a:"Çalışmasını <em>MP3 ya da WAV</em> gibi bir ses dosyası olarak <em>dışa aktarmalıdır</em>."},
/* BTY.6.2.6 (2) */
{o:7,d:1,s:"Duyulmayan konuşma",t:"Ses Dengesi",q:"Emir, okul radyosu için bir duyuru kaydı hazırladı ve arkasına bir müzik ekledi. Ancak müzik o kadar yüksek ki Emir’in konuşması anlaşılmıyor. Emir kurgusunu düzeltmek için ne yapmalıdır?",h:"Hangisinin sesi <em>daha kısık</em> olmalı?",a:"Arka plan <em>müziğinin sesini kısmalıdır</em>; konuşma müzikten daha yüksek duyulmalıdır."},
{o:7,d:2,s:"Karışan hikâye",t:"Kurgu",q:"Zeynep sesli bir hikâye hazırladı. Ancak kurgu yaparken parçaları karıştırdı; hikâye, kahramanın sorunu çözdüğü bölümle başlıyor ve kahramanın tanıtıldığı bölümle bitiyor. Dinleyenlerin hikâyeyi anlayabilmesi için bölümler hangi sırayla olmalıdır?",h:"Önce <em>tanıtım</em>, en sonda <em>çözüm</em>…",a:"<em>Giriş</em> (kahramanın tanıtılması) → <em>gelişme</em> (olaylar) → <em>sonuç</em> (sorunun çözülmesi)."}];
/* 20 soru = 10 soruluk dağılımın iki katı (4-2-4-2-2-2-2-2); fikir sorusu 6.1.2’nin payından sayılır */


