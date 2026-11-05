/* ============================================================
   BTY 6. Sınıf · 1. Dönem 1. Yazılı · Pekiştirme İstasyonu içeriği
   Çizici: /motor/istasyon.js · Konu: veri.js'teki konu özeti
   o: öğrenme çıktısı sırası (veri.js'teki OC dizisi)
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
const IST={

/* ---------- 🔍 BİLİM DEDEKTİFİ ---------- */
vaka:[
{o:0,b:"Odadaki Sanal Koltuk",
 v:"Selin, bir mobilya uygulamasını açıp telefonunun kamerasını odasına tuttu. Ekranda odasını olduğu gibi görüyor; üstelik odanın ortasında henüz satın almadığı yeni bir koltuk da duruyor.",
 i:["Selin odasını hâlâ görüyor; gerçek ortam kaybolmamış.","Koltuk gerçek değil, bilgisayarın eklediği sanal bir nesne.","Gerçek görüntünün üzerine sanal nesne eklenen teknolojiye ad verirken, kişinin tamamen sanal bir ortama gitmediğini unutma."],
 q:"Selin hangi teknolojiyi kullanıyor?",
 c:["Artırılmış gerçeklik","Sanal gerçeklik","3B yazıcı"],d:0,
 a:"Artırılmış gerçeklik, gerçek ortamın görüntüsüne sanal nesneler ekler. Sanal gerçeklikte ise kişi tamamen bilgisayarın oluşturduğu bir ortama gider."},
{o:1,b:"Kargo Yapan Dronlar",
 v:"Bir şirket, küçük paketleri dronlarla müşterilerin evine götürmeyi deniyor. Bilişim teknolojisi dersinde Ceren’e “Dronlar yaygınlaşırsa gelecekte ne olabilir?” diye soruldu.",
 i:["Bugün dronlar uçarak küçük paket taşıyabiliyor.","Gelecek için yaptığımız çıkarımlar tahmindir, kesin değildir.","Mantıklı çıkarım, bugünkü kullanımın yaygınlaşınca nasıl bir sonuç doğurabileceğine dayanır."],
 q:"Hangisi bugünkü gelişmeye dayanan mantıklı bir çıkarımdır?",
 c:["Küçük paketler daha hızlı teslim edilebilir.","Artık kimse evinden dışarı çıkamayacak.","Bütün kargo şirketleri bir gecede kapanacak."],d:0,
 a:"Çıkarım yaparken bugünkü kullanımın yaygınlaşınca hayatı nasıl değiştireceğini düşünürüz. Bu bir tahmindir, kesin değildir."},
{o:3,b:"Formül Neden Çalışmıyor?",
 v:"Barış, notlarını toplamak için B2 hücresine TOPLA(C2:C6) yazdı. Hücrede sonuç yerine, yazdığı yazı olduğu gibi görünüyor.",
 i:["Tablolama programı yazıyı hesaplamıyor; yazı gibi gösteriyor.","Her formül belli bir işaretle başlamak zorundadır.","Bu işaret eşittir (=) işaretidir."],
 q:"Barış’ın hatası nedir ve ne yapmalıdır?",
 c:["Başa = koymayı unutmuş; =TOPLA(C2:C6) yazmalı.","Bilgisayar bozuk; kapatıp açmalı.","Sütun genişliğini artırmalı."],d:0,
 a:"Formülün başına = yazılmazsa program onu hesaplamaz, yazı gibi gösterir."},
{o:5,b:"Hava Sıcaklığı Defteri",
 v:"Mina bir hafta boyunca her gün öğlen hava sıcaklığını tabloya yazdı. Şimdi sıcaklığın günler içinde nasıl değiştiğini herkesin kolayca görebileceği bir grafik çizmek istiyor.",
 i:["Mina’nın verisi zamana göre değişen bir değer.","Sütun grafiği değerleri karşılaştırır, pasta grafiği bütünün parçalarını gösterir.","Zamanla değişimi en iyi gösteren grafik türünü bul."],
 q:"Mina hangi grafiği seçmelidir?",
 c:["Çizgi grafiği","Pasta grafiği","Hiçbiri; tablo yeterlidir."],d:0,
 a:"Çizgi grafiği, bir değerin zamanla nasıl değiştiğini gösterir."},
{o:6,b:"Kayıttaki Öksürük",
 v:"Ahmet, tarih ödevi için sesini kaydetti. Kaydı dinleyince ortasında istemeden öksürdüğünü fark etti. Her şeyi baştan kaydetmek istemiyor.",
 i:["Sadece küçük bir bölüm bozuk; tamamı değil.","Ses düzenleme programları kayıttaki hataları düzeltebilir.","İstenmeyen bölüm seçilip silinebilir."],
 q:"Ahmet ne yapmalıdır?",
 c:["Öksürük bölümünü seçip silmeli.","Kaydı tamamen silmeli.","Bilgisayarı yeniden başlatmalı."],d:0,
 a:"Ses düzenleme programında istenmeyen bölüm seçilip silinebilir; kaydı baştan yapmak gerekmez."},
{o:7,b:"Müzik Sesi Konuşmayı Bastırıyor",
 v:"Okul radyosu için hazırlanan kaydı Deniz dinlerken konuşmaları anlayamıyor; arka plandaki müzik çok yüksek. İki sesi ayrı izlere koymuşlar.",
 i:["Konuşma ve müzik ayrı izlerde duruyor.","Asıl anlatılan şey konuşma.","İzlerden birinin ses düzeyi ayarlanabilir."],
 q:"Doğru çözüm hangisidir?",
 c:["Müzik izinin sesini kısarak konuşmayı öne çıkarmak.","Konuşmayı silmek.","Müziği daha da yükseltmek."],d:0,
 a:"Ses dengesi önemlidir: arka plan müziği, konuşmayı bastırmayacak kadar kısık olmalıdır."}
],

/* ---------- ✅ DOĞRU MU, YANLIŞ MI? ---------- */
dy:[
{o:0,i:"Sanal gerçeklikte kişi gerçek ortamı görmeye devam eder.",d:false,a:"Bu özellik artırılmış gerçekliktedir. Sanal gerçeklikte kişi tamamen bilgisayarın oluşturduğu ortama gider."},
{o:0,i:"Nesnelerin interneti, eşyaların internete bağlanıp veri paylaşmasıdır.",d:true,a:"Örneğin telefondan açılan kombi nesnelerin internetine örnektir."},
{o:0,i:"3B yazıcı, bilgisayarda çizilen modeli katman katman basarak gerçek nesneye dönüştürür.",d:true,a:"Kırılan bir oyuncak parçasını yeniden basmak buna örnektir."},
{o:1,i:"Gelecek hakkında yaptığımız çıkarımlar kesinlikle gerçekleşir.",d:false,a:"Çıkarımlar tahmindir; kesin değildir."},
{o:1,i:"Teknoloji arttıkça kişisel verilerin korunması daha önemli hâle gelir.",d:true,a:"Bu yüzden akıllı cihazlarda güçlü şifre kullanmalıyız."},
{o:2,i:"Tablolama programında satırlar harflerle, sütunlar sayılarla gösterilir.",d:false,a:"Tersi doğrudur: sütunlar A, B, C gibi harflerle; satırlar 1, 2, 3 gibi sayılarla gösterilir."},
{o:2,i:"B3, B sütunu ile 3. satırın kesiştiği hücrenin adresidir.",d:true,a:"Hücre adresinde önce sütun harfi, sonra satır numarası yazılır."},
{o:2,i:"Her formül eşittir (=) işaretiyle başlar.",d:true,a:"=TOPLA(B2:B8) gibi."},
{o:3,i:"Hücrede ##### görünmesinin nedeni, sayının hücreye sığmamasıdır.",d:true,a:"Çözüm: sütun genişliğini artırmak."},
{o:4,i:"Anket, kişilere sorular sorarak veri toplamaktır.",d:true,a:"Sınıfa “En sevdiğin meyve hangisi?” diye sormak anket örneğidir."},
{o:5,i:"Pasta grafiği, bir değerin zamanla değişimini göstermek için en uygun grafiktir.",d:false,a:"Zamanla değişimi çizgi grafiği gösterir. Pasta grafiği bütünün parçalarını gösterir."},
{o:6,i:"Ses düzenleme programında istenmeyen bölüm seçilip silinebilir.",d:true,a:"Kayıttaki öksürük sesini çıkarmak buna örnektir."},
{o:7,i:"Başkasına ait müziği izin almadan kullanmakta sakınca yoktur.",d:false,a:"Telif hakkına dikkat edilmeli; telifsiz ya da kullanım izni verilen sesler seçilmelidir."}
],

/* ---------- 📝 TEST ---------- */
test:[
{o:0,s:"Elif’in annesi her sabah bileğine bir saat takıyor. Bu saat gün boyunca adımlarını ve nabzını ölçüyor.",
 q:"Bu cihaz hangi yenilikçi teknoloji grubundadır?",
 c:["Giyilebilir teknolojiler","3B yazıcılar","Otonom araçlar","Bulut bilişim"],d:0,a:"Üzerimize takıp giydiğimiz akıllı cihazlar giyilebilir teknolojilerdir."},
{o:0,s:"Zeynep özel bir gözlük takıyor ve sınıftan çıkmadan, tamamen bilgisayarın oluşturduğu bir müzenin içinde dolaşıyor.",
 q:"Zeynep hangi teknolojiyi kullanıyor?",
 c:["Sanal gerçeklik","Artırılmış gerçeklik","Robotik","Nesnelerin interneti"],d:0,a:"Sanal gerçeklik, kişiyi tamamen bilgisayarda oluşturulmuş bir ortama götürür."},
{o:0,s:"Bir çiftçi toprağın nemini ölçen sensörler ve tarlayı ilaçlayan dronlar kullanıyor.",
 q:"Bu teknolojiler hangi alanda kullanılmaktadır?",
 c:["Tarım","Sağlık","Eğitim","Sanayi"],d:0,a:"Tarımda dron ve sensörler çiftçinin işini kolaylaştırır, verimi artırır."},
{o:1,s:"Bugün bazı şehirlerde sürücüsüz taksiler deneniyor.",
 q:"Bu gelişmeye dayanarak hangi çıkarım yapılabilir?",
 c:["Yaşlı ve engelli bireyler daha kolay yolculuk yapabilir.","Tüm yollar kapatılacak.","İnsanlar yürümeyi unutacak.","Kimse artık okula gitmeyecek."],d:0,a:"Sürücüsüz araçlar yaygınlaşırsa yaşlı ve engelli bireylerin ulaşımı kolaylaşabilir."},
{o:2,s:"Bir tabloda öğrenci notları B sütunu ile 3. satırın kesiştiği hücreye yazılmıştır.",
 q:"Bu hücrenin adresi nedir?",
 c:["B3","3B","B:3","3-B"],d:0,a:"Hücre adresi önce sütun harfi, sonra satır numarasıyla yazılır."},
{o:2,s:"Ali, haftalık harçlık miktarlarını B2’den B8’e kadar olan hücrelere yazdı ve toplamı bulmak istiyor.",
 q:"Hangi formülü yazmalıdır?",
 c:["=TOPLA(B2:B8)","TOPLA(B2:B8)","=ORTALAMA(B2:B8)","=MAK(B2:B8)"],d:0,a:"Toplam için =TOPLA kullanılır; formül = ile başlar, aralık iki nokta ile yazılır."},
{o:3,s:"Bir hücrede sayının yerine ##### görünüyor.",
 q:"Bu sorunu çözmek için ne yapılmalıdır?",
 c:["Sütun genişliğini artırmak","Bilgisayarı kapatmak","Hücreyi silmek","Formülün başına = koymak"],d:0,a:"##### sayı hücreye sığmadığında görünür; sütun genişletilir."},
{o:4,s:"Öğretmen “Boy (cm)” sütununu hazırlıyor ve verilerin tutarlı yazılmasını istiyor.",
 q:"Aşağıdakilerden hangisi bu sütuna uygun yazımdır?",
 c:["145","yüz kırk beş","1,45 metre","orta boylu"],d:0,a:"Aynı sütunda veriler aynı birimle ve rakamla yazılmalıdır."},
{o:5,s:"Sınıfta en sevilen meyve oylandı. Öğretmen, hangi meyvenin daha çok oy aldığını herkesin kolayca karşılaştırmasını istiyor.",
 q:"Hangi grafik türü bu iş için en uygundur?",
 c:["Sütun grafiği","Çizgi grafiği","Hiçbiri","Yalnızca yazı"],d:0,a:"Sütun grafiği değerleri karşılaştırmak için kullanılır; en uzun sütun en büyük değeri gösterir."},
{o:6,s:"Bir müzik kaydı aniden bitiyor. Ece müziğin sonunda sesin yavaş yavaş azalmasını istiyor.",
 q:"Ece hangi özelliği kullanmalıdır?",
 c:["Yavaşça kısılma","Gürültü azaltma","Kesme ve silme","Dışa aktarma"],d:0,a:"Ses, aniden bitmek yerine yavaş yavaş azalabilir."},
{o:7,s:"Bir öğrenci, okul radyosu için hazırladığı kayda hiçbir izin gerekmeyen müzikler eklemek istiyor.",
 q:"Hangi seçim doğrudur?",
 c:["Telifsiz müzik arşivinden bir şarkı seçmek","Sevdiği şarkıyı izin almadan koymak","Müziksiz bırakmak zorundadır","Başkasının kaydını kendi adıyla yayımlamak"],d:0,a:"Başkasına ait müzik izinsiz kullanılmamalı; telifsiz ya da izin verilen sesler seçilmelidir."}
],

/* ---------- 🔗 EŞLEŞTİRME ---------- */
esles:[
{b:"Set 1 · Yenilikçi teknolojiler",c:[
 ["Nesnelerin interneti","Eşyaların internete bağlanıp veri paylaşması"],
 ["Giyilebilir teknoloji","Üzerimize takıp giydiğimiz akıllı cihazlar"],
 ["3B yazıcı","Modeli katman katman basarak gerçek nesne üretir"],
 ["Robotik","Belirli işleri yapan makinelerin tasarlanması"],
 ["Bulut bilişim","Dosyaları internetteki sunucularda saklayıp her yerden kullanmak"]]},
{b:"Set 2 · Gerçeklik ve araçlar",c:[
 ["Sanal gerçeklik","Kişiyi tamamen bilgisayarda oluşturulmuş bir ortama götürür"],
 ["Artırılmış gerçeklik","Gerçek görüntünün üzerine sanal nesneler ekler"],
 ["Otonom araç","Sürücü olmadan ilerleyebilen araç"],
 ["Dron (İHA)","Pilotsuz, uzaktan kumandayla ya da kendi kendine uçan araç"],
 ["Akıllı ev","Işık, ısıtma, kilit gibi sistemlerin telefonla ya da otomatik yönetilmesi"]]},
{b:"Set 3 · Tablolama",c:[
 ["Satır","Tabloda yatay sıralar (1, 2, 3 …)"],
 ["Sütun","Tabloda dikey sıralar (A, B, C …)"],
 ["Hücre","Satır ile sütunun kesiştiği kutucuk"],
 ["Hücre adresi","Sütun harfi ve satır numarasından oluşan ad (B3 gibi)"],
 ["Formül","Eşittir (=) ile başlayan hesaplama ifadesi"]]}
],

/* ---------- ✏️ BOŞLUK DOLDURMA ---------- */
bosluk:[
{b:"Tablolama ve grafik",h:["satır","hücre","eşittir","TOPLA","çizgi","telifsiz","ORTALAMA","pasta"],
 s:[
 {m:"Tabloda yatay sıralara ___, dikey sıralara sütun denir.",d:"satır"},
 {m:"Satır ile sütunun kesiştiği kutucuğa ___ denir.",d:"hücre"},
 {m:"Her formül ___ (=) işaretiyle başlar.",d:"eşittir"},
 {m:"Seçilen sayıların toplamını bulmak için ___ fonksiyonu kullanılır.",d:"TOPLA"},
 {m:"Bir değerin zamanla değişimini ___ grafiği ile gösteririz.",d:"çizgi"},
 {m:"Başkasına ait müzik hakkı sorun çıkarmasın diye ___ müzik seçilmelidir.",d:"telifsiz"}]}
],

/* ---------- 🔢 SIRALAMA ---------- */
sira:[
{b:"Ses kaydı hazırla",y:"Okul radyosu için bir ses kaydı hazırlayacaksın. Adımları sırasıyla seç.",
 s:["Ne anlatacağını senaryo olarak planla","Mikrofonla kaydı yap","İstenmeyen bölümü kes, gürültüyü azalt","MP3 olarak dışa aktar"]},
{b:"Anketten sonuca",y:"Sınıfta en sevilen meyveyi bulacaksın. Adımları sırasıyla seç.",
 s:["Anketle veri topla","Verileri sütun başlıklarıyla tabloya düzenli yaz","Sıralayarak ya da hesaplayarak bulguları çıkar","Uygun bir grafik çiz","Grafiği yorumla"]}
],

/* ---------- 🖊️ KLASİK SORULAR ---------- */
klasik:[
{o:0,q:"Sanal gerçeklik ile artırılmış gerçeklik arasındaki farkı yaz. Her birine bir örnek ver.",
 ornek:"Sanal gerçeklikte kişi tamamen bilgisayarda oluşturulmuş bir ortama gider (VR gözlüğüyle müze gezmek). Artırılmış gerçeklikte gerçek ortamın görüntüsüne sanal nesneler eklenir (kamerada odaya sanal koltuk koymak).",
 k:["Sanal gerçekliği doğru açıkladım","Artırılmış gerçekliği doğru açıkladım","Her biri için örnek verdim"]},
{o:1,q:"Dronlar kargo taşımaya yaygın biçimde başlarsa hayatımız nasıl değişebilir? İki çıkarım yaz ve bunların neden tahmin olduğunu açıkla.",
 ornek:"Paketler daha hızlı teslim edilebilir; trafikteki kargo araçları azalabilir. Bunlar tahmindir çünkü gelecekte ne olacağı kesin değildir; bugünkü gelişmelere bakarak çıkarım yapıyoruz.",
 k:["İki çıkarım yazdım","Çıkarımlar bugünkü kullanıma dayanıyor","Bunların tahmin olduğunu belirttim"]},
{o:2,q:"B3 hücre adresi ne anlama gelir? =TOPLA(B2:B8) formülü ne yapar?",
 ornek:"B3, B sütunu ile 3. satırın kesiştiği hücredir. =TOPLA(B2:B8) formülü B2’den B8’e kadar olan hücrelerdeki sayıların toplamını bulur.",
 k:["B3’ü doğru açıkladım","Formülün toplam bulduğunu yazdım","B2:B8’in bir aralık olduğunu belirttim"]},
{o:3,q:"Tablolamada ##### görünmesinin nedenini ve çözümünü yaz. Bir başka sorun ve çözümünü de ekle.",
 ornek:"Sayı hücreye sığmadığında ##### görünür; sütun genişliği artırılır. Ayrıca formülün başına = konmazsa program onu hesaplamaz; başına = yazılır.",
 k:["##### nedenini yazdım","Çözümünü yazdım","İkinci bir sorun ve çözümü yazdım"]},
{o:5,q:"Sınıfta en sevilen meyveyi bulmak için nasıl veri toplarsın, tabloya nasıl düzenlersin ve hangi grafikle gösterirsin?",
 ornek:"Sınıfa anket yaparım. Verileri sütun başlıklarıyla (Meyve, Oy sayısı) tabloya düzenli yazarım. Karşılaştırma için sütun grafiği çizerim; en uzun sütun en sevilen meyveyi gösterir.",
 k:["Veri toplama yöntemini yazdım","Tabloya nasıl yazacağımı belirttim","Uygun grafik türünü seçtim"]},
{o:7,q:"Okul radyosu için ses kurgusu yaparken dikkat etmen gereken iki şeyi yaz.",
 ornek:"Önce senaryoyu planlarım ve giriş–gelişme–sonuç sırasını korurum. Arka plan müziğini konuşmayı bastırmayacak kadar kısık tutarım ve telifsiz müzik seçerim.",
 k:["İki farklı şey yazdım","Yazdıklarım ses kurgusuyla ilgili","Gerekçelerini kısaca belirttim"]}
]

};
