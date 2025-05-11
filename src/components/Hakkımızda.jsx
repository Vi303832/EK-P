import React from 'react'
import { FaBuilding, FaUsers, FaHistory, FaLightbulb, FaCheckCircle, FaHome, FaRecycle, FaLeaf, FaShieldAlt, FaImages } from 'react-icons/fa'
import { useEffect } from 'react';
import SEO from './SEO'

function Hakkımızda() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sample project data from Biten.js
    const exampleProjects = [
        {
            isim: "Şehit Tunahan Yavuz İlkokulu",
            kategori: "Özel Proje",
            img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692272/IMG-20250506-WA0035_i895yn.jpg",
            konum: "Mudanya/Bursa"
        },
        {
            isim: "6 Nisan Anadolu Lisesi",
            kategori: "Özel Proje",
            img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692264/IMG-20250506-WA0019_mm2kqz.jpg",
            konum: "Yıldırım/Bursa"
        },
        {
            isim: "Harmancık Millet Bahçesi",
            kategori: "Özel Proje",
            img: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746692257/IMG-20250506-WA0016_oymvrx.jpg",
            konum: "Osmangazi/Bursa"
        }
    ];

    return (
        <div className='font-Poppins'>
            <SEO
                title="Ekip İnşaat | Hakkımızda"
                description="2012'den beri Bursa ve çevresinde kaliteli konut projeleri inşa eden Ekip İnşaat. Misyonumuz, vizyonumuz ve gerçekleştirdiğimiz projeler hakkında bilgi edinin."
                keywords="Ekip İnşaat hakkında, şirket profili, Bursa inşaat firması, kentsel dönüşüm, TOKİ işbirliği, misyon vizyon, inşaat sektörü"
                canonicalUrl="/Hakkımızda"
            />
            <div className='py-32 bg-[#EE1B24] text-white justify-center flex text-4xl items-center'>
                <FaBuilding className="mr-4" /> Hakkımızda
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Sol Taraf - Şirket Tanıtımı */}
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-gray-800'>Ekip Grup İnşaat</h2>
                        <p className='text-gray-600 leading-relaxed'>
                            Ekip Grup İnşaat, Türkiye'nin farklı bölgelerinde, özellikle Bursa'da hayata geçirdiği yüksek kaliteli konut projeleriyle sektörde güçlü bir konum edinmiştir. 2012 yılında faaliyetlerine başlayan şirketimiz; Ekip Boya, Ekip Park Geçit, Ekip Park Yunuseli 1 ve 2 ile Ekip Park Kestel gibi projelerle konut üretiminde güvenilir bir marka haline gelmiştir. Ayrıca Ekip Boya markamızla da sektörde hizmet vermekteyiz.
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                            Kuruluşumuzdan bu yana, müşteri memnuniyetini ön planda tutarak, zamanında teslimat ve ekonomik çözümler sunmayı ilke edindik. Kaliteli yaşam alanları üretme vizyonumuz, uzman kadromuz ve yenilikçi yaklaşımlarımızla sektörde fark yaratmaya devam ediyoruz.
                        </p>

                        <div className='space-y-4 mt-8'>
                            <div className='flex items-center gap-3'>
                                <FaHistory className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>2012'den Beri Deneyim</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaUsers className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>Uzman Ekip</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaLightbulb className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>Yenilikçi Çözümler</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaHome className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>Nitelikli Konut Projeleri</span>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Misyon & Vizyon */}
                    <div className='space-y-8'>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Projelerimiz</h3>
                            <p className='text-gray-600'>
                                Şirketimiz, TOKİ gibi kurumsal iş ortaklarıyla gerçekleştirdiği projelerde kalite ve güven odaklı çalışmalarıyla öne çıkmıştır. 2012 yılında Kırklareli, Kuşadası ve Yalova gibi bölgelerde 1000'in üzerinde konutun inşaatını başarıyla tamamlamış, ihtiyaç duyulan kentsel dönüşüm çözümlerine katkı sağlamıştır.
                            </p>
                        </div>

                        <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Kentsel Dönüşüm Yaklaşımımız</h3>
                            <p className='text-gray-600'>
                                Kentsel dönüşüm süreçlerinde yalıtımın, sürdürülebilir ve güvenli yaşam alanları inşa etmek için temel bir unsur olduğuna inanıyoruz. Türkiye genelinde 16 milyon konutun %85'inde yalıtım eksikliği bulunması, bu alanda ciddi bir ihtiyaç olduğunu göstermektedir. Bu nedenle, enerji tasarrufu sağlayan ve yaşam kalitesini artıran yalıtım uygulamalarını tüm projelerimizde standart haline getiriyoruz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fotoğraf Galerisi */}
                <div className='mt-16'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-8 flex items-center'>
                        <FaImages className="text-[#EE1B24] mr-3" /> Projelerimizden Görüntüler
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {exampleProjects.map((project, index) => (
                            <div key={index} className='rounded-lg shadow-md overflow-hidden group relative'>
                                <img
                                    src={project.img}
                                    alt={project.isim}
                                    className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                                    <h3 className="font-bold text-lg">{project.isim}</h3>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-sm">{project.kategori}</span>
                                        <span className="text-sm">{project.konum}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Yalıtım ve Kentsel Dönüşüm Bölümü */}
                <div className='my-16 bg-gray-50 p-8 rounded-lg shadow-sm'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-8'>Geleceği İnşa Ediyoruz</h2>

                    <div className='grid md:grid-cols-2 gap-8'>
                        <div>
                            <p className='text-gray-600 leading-relaxed mb-4'>
                                Kentsel dönüşüm projeleri, sağlıklı kent yaşamı için bir gereklilik haline gelmiştir. Ekip Grup İnşaat olarak bu sürecin öncüsü olmayı hedefliyoruz. TOKİ gibi kurumlarla yürüttüğümüz projeler, bize bu alandaki uzmanlığımızı genişletme imkanı sundu.
                            </p>

                            <p className='text-gray-600 leading-relaxed'>
                                Türkiye'de 2011 yılından itibaren zorunlu hale gelen yalıtım uygulamaları, eski binalarda hâlen yaygınlaşmamış durumda. Biz, bu boşluğu doldurmak ve yaşanabilir alanlar oluşturmak adına, yeni projelerimizde çevresel şartlara uygun, enerji tasarruflu ve konforlu çözümler sunmaya devam ediyoruz.
                            </p>
                        </div>

                        <div>
                            <div className='bg-white p-5 rounded-lg shadow-md'>
                                <h3 className='text-xl font-bold text-gray-800 mb-4'>Yalıtım İlkelerimiz</h3>
                                <ul className='space-y-2'>
                                    <li className='flex items-start gap-3'>
                                        <FaCheckCircle className='text-[#EE1B24] mt-1' />
                                        <span>Yürürlükteki yönetmeliklere ve standartlara uygun çözümler</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <FaCheckCircle className='text-[#EE1B24] mt-1' />
                                        <span>Yeterli kalınlıkta ve verimli yalıtım malzemeleri</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <FaShieldAlt className='text-[#EE1B24] mt-1' />
                                        <span>Enerji verimliliğini artıran tasarımlar</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <FaHome className='text-[#EE1B24] mt-1' />
                                        <span>Sağlık, güvenlik ve uzun ömürlü kullanım odaklı uygulamalar</span>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <FaLeaf className='text-[#EE1B24] mt-1' />
                                        <span>Sürdürülebilir, çevre dostu malzeme kullanımı</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hakkımızda