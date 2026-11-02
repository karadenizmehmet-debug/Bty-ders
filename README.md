# BTY Yazılıya Hazırlık

5. sınıf ve 6. sınıf Bilişim Teknolojileri ve Yazılım ile 7. sınıf Yapay Zekâ dersleri için yazılıya hazırlık uygulaması: konu özeti, sözlük, ipuçlu soru-cevap ve PDF çıktısı. Akıllı tahtaya (16:9), bilgisayara ve telefona uyumludur.

**Adres:** https://karadenizmehmet-debug.github.io/Bty-ders/

## Klasör yapısı

```
index.html            Giriş: ders seçimi → yazılı seçimi
katalog.js            Dersler ve hangi yazılıların hazır olduğu
motor/
  motor.js            Ortak kod (tüm uygulamalar bunu kullanır)
  motor.css           Ortak tasarım
dersler/
  5-sinif/1-donem-1-yazili/      index.html + veri.js
  6-sinif/1-donem-1-yazili/      index.html + veri.js
  7-yapay-zeka/1-donem-1-yazili/ index.html + veri.js
```

Her yazılı klasörü yalnızca **içerik** taşır (`veri.js`). Tasarımdaki ya da koddaki bir düzeltme `motor/` içinde yapılır ve tüm derslere aynı anda yansır.

## Yeni yazılı eklemek

Yazılı klasör adları: `1-donem-1-yazili`, `1-donem-2-yazili`, `2-donem-1-yazili`, `2-donem-2-yazili`.

1. `dersler/<ders>/<yazılı>/` klasörünü oluştur.
2. Aynı dersin başka bir yazılısından `index.html` dosyasını olduğu gibi kopyala.
3. `veri.js` dosyasını yaz (var olan bir `veri.js` örnek alınabilir):
   - `BILGI` – ders adı, yazılı adı, emoji, PDF başlığı, PDF dosya adı ön eki
   - `S` – konu özeti sayfaları, `W` – sözlük, `Q` – sorular
   - `OC`, `OCN`, `SEN` (isteğe bağlı) – öğrenme çıktıları ve 10 soruluk sınav dağılımı. Tanımlanırsa Basit / Orta / Zor PDF'leri bu dağılıma birebir uyar.
4. `katalog.js` içinde o dersin `hazir` listesine yazılıyı ekle: `"1-donem-2-yazili":true`

## Soru alanları

| Alan | Anlamı |
|---|---|
| `o` | Öğrenme çıktısı sırası (`OC` dizisindeki yeri) |
| `d` | Zorluk: 1 basit, 2 orta, 3 zor |
| `f` / `p` | Fikir sorusu; `p` cevap anahtarında yazılacak metin ("Öğrencinin kendi ifadeleri.") |
| `s` | Menüde görünen kısa başlık |
| `t` | Soru türü etiketi |
| `q`, `h`, `a` | Soru, ipucu, cevap |

## PDF şifresi

PDF bölümü şifreyle açılır. Şifre kodda açık yazılmaz, yalnızca özeti saklanır (`motor/motor.js` → `PWH`). Bu yalnızca meraklı gözlerden gizler; gerçek bir güvenlik değildir.

Şifreyi değiştirmek için tarayıcı konsolunda şunu çalıştırıp çıkan değeri `PWH` alanına yaz:

```js
(s=>{let x=0x811c9dc5;for(const c of s){x^=c.codePointAt(0);x=Math.imul(x,0x01000193)>>>0}return x.toString(16)})("bty-ders:YENİŞİFRE")
```

---
© Mehmet Karadeniz, 2026-2027
