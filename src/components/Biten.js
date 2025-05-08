import slide1 from "../assets/Slider1/slide1.png";
import Yunuseli3 from "../BitenFoto/Yunuseli 3.jpg";
import Bitenpng from "./Biten.png";

const Biten = [
    {
        isim: "Bütün Biten Projeler",
        kategori: "Tümü",
        aciklama: "Tüm Biten Projeler",
        bilgi: "Tüm biten projelerimizi burada görebilirsiniz.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746736675/ChatGPT_Image_May_8_2025_11_26_35_PM_4_u2r33r.png",
        tarih: 2024,
        konum: "Tümü",
        link: "/BitenProjeler",
        id: "all",
    },
    {
        isim: "Şehit Tunahan Yavuz İlkokulu",
        kategori: "Eğitim Tesisi",
        aciklama: "Okul Projesi",
        bilgi: "Şehit Tunahan Yavuz İlkokulu, modern eğitim standartlarına uygun olarak tasarlanmış, öğrencilerin fiziksel ve zihinsel gelişimlerini destekleyecek tüm olanaklara sahip bir eğitim kurumudur. Geniş ve aydınlık sınıfları, laboratuvarları, spor salonu ve yeşil alanlarıyla çocuklara kaliteli bir eğitim ortamı sunmaktadır.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692272/IMG-20250506-WA0035_i895yn.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692272/IMG-20250506-WA0035_i895yn.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692272/IMG-20250506-WA0007_jostsp.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692272/IMG-20250506-WA0007_jostsp.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692273/IMG-20250506-WA0037_bcfebt.jpg",
        ],
        tarih: 2023,
        konum: "Mudanya/Bursa",
        link: "/B01",
        id: "B01",
    },
    {
        isim: "6 Nisan Anadolu Lisesi",
        kategori: "Eğitim Tesisi",
        aciklama: "Okul Projesi",
        bilgi: "6 Nisan Anadolu Lisesi, modern eğitim anlayışı ve çağdaş mimarisiyle öğrencilerine kaliteli bir eğitim ortamı sunmaktadır. Okul, öğrencilerin akademik başarılarının yanı sıra sosyal ve kültürel gelişimlerine de önem vermektedir.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692264/IMG-20250506-WA0019_mm2kqz.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692264/IMG-20250506-WA0019_mm2kqz.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692263/IMG-20250506-WA0017_bdrcww.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692263/IMG-20250506-WA0018_agi2y4.jpg"
        ],
        tarih: 2016,
        konum: "Yıldırım/Bursa",
        link: "/B02",
        id: "B02",
    },
    {
        isim: "Harmancık Millet Bahçesi",
        kategori: "Rekreasyon Alanı",
        aciklama: "Millet Bahçesi",
        bilgi: "Harmancık Millet Bahçesi, vatandaşların doğayla iç içe vakit geçirebilecekleri, spor yapabilecekleri ve sosyal aktivitelere katılabilecekleri modern bir rekreasyon alanıdır. Bahçe, yeşil alanları, yürüyüş yolları ve çeşitli aktivite alanlarıyla halkın hizmetine sunulmuştur.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692257/IMG-20250506-WA0016_oymvrx.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692257/IMG-20250506-WA0016_oymvrx.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692257/IMG-20250506-WA0015_iic7dr.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692257/IMG-20250506-WA0011_cfh6bc.jpg"
        ],
        tarih: 2021,
        konum: "Osmangazi/Bursa",
        link: "/B03",
        id: "B03",
    },
    {
        isim: "Bandırma Mandacılık Ahırı",
        kategori: "Özel Proje",
        aciklama: "Tarım Projesi",
        bilgi: "Bandırma Mandacılık Ahırı, modern hayvancılık standartlarına uygun olarak tasarlanmış bir tarım projesidir. Bu tesis, manda yetiştiriciliği için özel olarak inşa edilmiş olup, sürdürülebilir tarım uygulamalarını desteklemektedir.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739358/IMG-20250506-WA0004_yrwpog.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739358/IMG-20250506-WA0004_yrwpog.jpg"
        ],
        tarih: 2022,
        konum: "Bandırma/Balıkesir",
        link: "/B04",
        id: "B04",
    },
    {
        isim: "Elmasbahçeler Halı Saha",
        kategori: "Spor Tesisi",
        aciklama: "Spor Tesisi",
        bilgi: "Elmasbahçeler Halı Saha, sporseverlere yüksek kaliteli bir futbol deneyimi sunmak için tasarlanmış modern bir spor tesisidir. Tesis, son teknoloji sentetik çim ve aydınlatma sistemleriyle donatılmış olup, her yaştan futbolseverin kullanımına uygundur.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739360/IMG-20250506-WA0028_v9oc2h.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739360/IMG-20250506-WA0028_v9oc2h.jpg"
        ],
        tarih: 2020,
        konum: "Osmangazi/Bursa",
        link: "/B05",
        id: "B05",
    },
    {
        isim: "Jandarma Uludağ Sosyal Tesisleri",
        kategori: "Sosyal Tesis",
        aciklama: "Sosyal Tesis Projesi",
        bilgi: "Jandarma Uludağ Sosyal Tesisleri, personel ve ailelerinin dinlenme ve rekreasyon ihtiyaçlarını karşılamak amacıyla inşa edilmiş modern bir sosyal tesistir. Tesis, konaklama birimleri, yemek salonu ve çeşitli aktivite alanlarıyla hizmet vermektedir.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739365/IMG-20250506-WA0013_cebsxq.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739365/IMG-20250506-WA0013_cebsxq.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739365/IMG-20250506-WA0012_rirdjc.jpg"
        ],
        tarih: 2019,
        konum: "Uludağ/Bursa",
        link: "/B06",
        id: "B06",
    },
    {
        isim: "Kırlangıç Evleri",
        kategori: "Konut Projesi",
        aciklama: "Konut Projesi",
        bilgi: "Kırlangıç Evleri, modern yaşamın ihtiyaçlarını karşılarken geleneksel mimari unsurları da içinde barındıran özgün bir konut projesidir. Proje, yeşil alanları, sosyal tesisleri ve çağdaş tasarımıyla sakinlerine konforlu bir yaşam alanı sunmaktadır.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739368/IMG-20250506-WA0008_atkkfs.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739368/IMG-20250506-WA0008_atkkfs.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739367/IMG-20250506-WA0009_cwsavy.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739367/IMG-20250506-WA0010_zw86bd.jpg"
        ],
        tarih: 2021,
        konum: "Nilüfer/Bursa",
        link: "/B07",
        id: "B07",
    },
    {
        isim: "Kırşehir Boztepe Kültür Merkezi",
        kategori: "Kültür Merkezi",
        aciklama: "Kültür Merkezi Projesi",
        bilgi: "Kırşehir Boztepe Kültür Merkezi, toplumun kültürel ve sanatsal etkinliklere aktif katılımını sağlamak amacıyla tasarlanmış modern bir kültür kompleksidir. Merkez, sergi alanları, konferans salonları ve çok amaçlı etkinlik mekanlarıyla bölge halkına hizmet vermektedir.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739369/IMG-20250506-WA0033_r95cxm.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739369/IMG-20250506-WA0033_r95cxm.jpg"
        ],
        tarih: 2015,
        konum: "Boztepe/Kırşehir",
        link: "/B08",
        id: "B08",
    },
    {
        isim: "Orhangazi Kapalı Yüzme Havuzu",
        kategori: "Spor Tesisi",
        aciklama: "Yüzme Havuzu Projesi",
        bilgi: "Orhangazi Kapalı Yüzme Havuzu, yüzme sporuna ilgi duyan her yaştan vatandaşa hizmet vermek amacıyla inşa edilmiş modern bir spor tesisidir. Olimpik standartlardaki havuz, soyunma odaları, duş alanları ve seyirci tribünleriyle donatılmış olan tesis, yıl boyunca kullanıma açıktır.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739371/IMG-20250506-WA0029_fpte3r.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739371/IMG-20250506-WA0029_fpte3r.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739370/IMG-20250506-WA0014_nspwrg.jpg"
        ],
        tarih: 2018,
        konum: "Orhangazi/Bursa",
        link: "/B09",
        id: "B09",
    },
    {
        isim: "Osmangazi Altınova Spor Tesisleri",
        kategori: "Spor Tesisi",
        aciklama: "Spor Kompleksi",
        bilgi: "Osmangazi Altınova Spor Tesisleri, bölge halkının spor ihtiyaçlarını karşılamak amacıyla tasarlanmış kapsamlı bir spor kompleksidir. Futbol sahaları, basketbol ve voleybol kortları, fitness alanları ve sosyal alanlarıyla donatılmış olan tesis, her yaştan sporseverin kullanımına uygun modern bir yapıya sahiptir.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739375/IMG-20250506-WA0040_enj7fl.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739375/IMG-20250506-WA0040_enj7fl.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739375/IMG-20250506-WA0001_petkxw.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739374/IMG-20250506-WA0039_hvrdez.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739373/IMG-20250506-WA0003_zvgjou.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739373/IMG-20250506-WA0002_hpabi9.jpg"
        ],
        tarih: 2019,
        konum: "Osmangazi/Bursa",
        link: "/B10",
        id: "B10",
    },
    {
        isim: "Osmangazi Hüdavendigar Bilgi Evi",
        kategori: "Eğitim Tesisi",
        aciklama: "Bilgi Evi Projesi",
        bilgi: "Osmangazi Hüdavendigar Bilgi Evi, gençlerin ve çocukların eğitim ve kültürel gelişimlerini desteklemek amacıyla tasarlanmış modern bir eğitim merkezidir. İçerisinde kütüphane, bilgisayar laboratuvarı, çalışma alanları ve etkinlik salonları bulunan merkez, öğrencilere ücretsiz eğitim ve destek hizmetleri sunmaktadır.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739379/IMG-20250506-WA0027_mvk7ug.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739379/IMG-20250506-WA0027_mvk7ug.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739379/IMG-20250506-WA0026_sajo1a.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739378/IMG-20250506-WA0025_uiyb6a.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739378/IMG-20250506-WA0024_ebgqh0.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739378/IMG-20250506-WA0023_pgsrlw.jpg"
        ],
        tarih: 2020,
        konum: "Osmangazi/Bursa",
        link: "/B11",
        id: "B11",
    },
    {
        isim: "Yalova Fıstıklı İlköğretim Okulu",
        kategori: "Eğitim Tesisi",
        aciklama: "Okul Projesi",
        bilgi: "Yalova Fıstıklı İlköğretim Okulu, modern eğitim anlayışıyla tasarlanmış, öğrencilerin fiziksel ve zihinsel gelişimlerini destekleyecek donanıma sahip bir eğitim kurumudur. Derslikler, laboratuvarlar, spor salonu ve sosyal alanlarıyla öğrencilere kaliteli bir eğitim ortamı sunmaktadır.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739386/IMG-20250506-WA0021_moqkuv.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739386/IMG-20250506-WA0021_moqkuv.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739387/IMG-20250506-WA0022_p0c3n1.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739385/IMG-20250506-WA0020_eo5uo1.jpg"
        ],
        tarih: 2018,
        konum: "Fıstıklı/Yalova",
        link: "/B12",
        id: "B12",
    },
    {
        isim: "Yenişehir Atölye Binaları",
        kategori: "Endüstriyel Tesis",
        aciklama: "Atölye Projesi",
        bilgi: "Yenişehir Atölye Binaları, modern üretim ihtiyaçlarına cevap verecek şekilde tasarlanmış endüstriyel yapılardır. Yüksek tavanlı, geniş iç hacimli ve esnek kullanım alanları sunan binalar, çeşitli üretim faaliyetleri için uygun çalışma ortamı sağlamaktadır.",
        img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739393/IMG-20250506-WA0032_bmfrmu.jpg",
        images: [
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739393/IMG-20250506-WA0032_bmfrmu.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739393/IMG-20250506-WA0034_vds8v2.jpg",
            "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746739392/IMG-20250506-WA0005_a3xmpc.jpg"
        ],
        tarih: 2017,
        konum: "Yenişehir/Bursa",
        link: "/B13",
        id: "B13",
    }
];

export default Biten;
