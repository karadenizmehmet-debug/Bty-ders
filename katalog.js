/* ============================================================
   BTY Ders · Ders ve Yazılı Kataloğu
   Giriş sayfası bu listeye göre çizilir.
   Yeni bir yazılı eklemek için:
     1) dersler/<ders>/<yazılı>/ klasörünü oluştur
        (aynı dersin başka bir yazılısından index.html'i kopyala, veri.js'i yaz)
     2) Aşağıda o yazılının "hazir" değerini true yap
   © Mehmet Karadeniz, 2026-2027
   ============================================================ */
const YAZILILAR=[
 {id:"1-donem-1-yazili",ad:"1. Dönem 1. Yazılı"},
 {id:"1-donem-2-yazili",ad:"1. Dönem 2. Yazılı"},
 {id:"2-donem-1-yazili",ad:"2. Dönem 1. Yazılı"},
 {id:"2-donem-2-yazili",ad:"2. Dönem 2. Yazılı"}
];
const DERSLER=[
 {id:"5-sinif",emoji:"💻",ad:"5. Sınıf",alt:"Bilişim Teknolojileri ve Yazılım",
  hazir:{"1-donem-1-yazili":true}},
 {id:"6-sinif",emoji:"📊",ad:"6. Sınıf",alt:"Bilişim Teknolojileri ve Yazılım",
  hazir:{"1-donem-1-yazili":true}},
 {id:"7-yapay-zeka",emoji:"🤖",ad:"7. Sınıf",alt:"Yapay Zekâ Uygulamaları",
  hazir:{"1-donem-1-yazili":true}}
];
