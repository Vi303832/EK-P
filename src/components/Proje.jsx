import { useParams, useNavigate } from "react-router-dom";
import Biten from "./Biten";
import Devam from "./Devam";
import Gelecek from "./Gelecek";
import { useEffect, useState, useRef } from "react";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import NotFound from "./NotFound";
import SEO from './SEO';

const Proje = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const navigate = useNavigate();
    const sliderRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Biten, Devam ve Gelecek dizilerini birleştir
    const tumProjeler = [...Biten, ...Devam, ...Gelecek];

    // Geçerli proje ID formatlarını kontrol et
    const validIdPattern = /^(B|D|G)\d+$/; // B, D veya G ile başlayan ve sayı ile devam eden ID'ler
    const isValidIdFormat = validIdPattern.test(id);

    // id'yi kullanarak ilgili projeyi bul
    const p = tumProjeler.find(item => item.id === id);

    // Eğer proje bulunamazsa veya ID formatı geçersizse 404 sayfasına yönlendir
    if (!p || !isValidIdFormat) {
        return <NotFound />;
    }

    const handleContactClick = () => {
        navigate("/iletişim");
    };

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Projenin türünü belirle (Biten, Devam Eden, Gelecek)
    const projeType = id.startsWith('B') ? 'Biten' : id.startsWith('D') ? 'Devam Eden' : 'Gelecek';

    // SEO için proje özet bilgisi oluştur
    const projeDescription = `${p.isim} - ${projeType} projesi. ${p.konum || ''}. ${p.bilgi || 'Ekip İnşaat kalitesiyle tamamlanan projemiz hakkında detaylı bilgi alın.'}`

    return (
        <div className="min-h-screen font-Poppins">
            <SEO
                title={`Ekip İnşaat | ${p.isim}`}
                description={projeDescription}
                keywords={`${p.isim}, ${p.kategori || 'inşaat projesi'}, ${p.konum || ''}, Ekip İnşaat, ${projeType} proje`}
                canonicalUrl={`/${id}`}
                ogImage={p.images ? p.images[0] : p.img}
            />
            {/* Üst kısım - Proje başlığı - Büyütülmüş */}
            <div className="py-20 bg-[#0E1117] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-start">
                        <div className="mb-3">
                            <a href="/" className="inline-block px-3 py-1  bg-opacity-20 text-white/80 rounded-md text-sm font-medium hover:bg-opacity-30 transition-all">
                                {p.kategori || "Proje"}
                            </a>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{p.isim}</h1>
                        <div className="flex flex-wrap gap-4 text-sm md:text-base">
                            {p.konum && (
                                <div className="flex items-center bg-gray-800 bg-opacity-50 px-3 py-1 rounded-full">
                                    <FaMapMarkerAlt className="mr-2 text-[#EE1B24]" />
                                    <span>{p.konum}</span>
                                </div>
                            )}
                            {p.tarih && (
                                <div className="flex items-center bg-gray-800 bg-opacity-50 px-3 py-1 rounded-full">
                                    <FaCalendarAlt className="mr-2 text-[#EE1B24]" />
                                    <span>{p.tarih}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sol taraf - Resim Galerisi - Büyütülmüş */}
                    <div className="w-full lg:w-3/5">
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img
                                    src={p.images ? p.images[selectedImage] : p.img}
                                    alt={p.isim}
                                    className="w-full h-60 md:h-[500px] lg:h-[550px] object-cover cursor-pointer transition-all duration-200"
                                    onClick={() => setIsModalOpen(true)}
                                />

                            </div>

                            {/* Küçük resimler - Slider - Minimalist tasarım */}
                            {p.images && p.images.length > 1 && (
                                <div className="relative py-4 px-8 mt-2">
                                    <button
                                        onClick={scrollLeft}
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-700 p-2 bg-transparent hover:text-[#EE1B24] transition-colors"
                                    >
                                        <FaChevronLeft size={20} />
                                    </button>

                                    <div
                                        ref={sliderRef}
                                        className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                    >
                                        {p.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 w-[calc(25%-6px)]"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${p.isim} - ${index + 1}`}
                                                    className={`w-full h-20 object-cover cursor-pointer rounded transition-all
                                                    ${selectedImage === index ? 'ring-2 ring-[#EE1B24]' : 'opacity-80 hover:opacity-100'}`}
                                                    onClick={() => setSelectedImage(index)}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={scrollRight}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-700 p-2 bg-transparent hover:text-[#EE1B24] transition-colors"
                                    >
                                        <FaChevronRight size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sağ taraf - Proje Detayları */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                <span className="w-2 h-6 bg-[#EE1B24] mr-2 rounded"></span>
                                Proje Bilgisi
                            </h2>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 mb-6">
                                    {p.bilgi || p.isim}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 bg-[#EE1B24] text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-center">Hayalinizdeki Projeyi Birlikte Gerçekleştirelim</h3>
                            <p className="text-center mb-6">Ekip İnşaat olarak, 20 yılı aşkın tecrübemiz ve uzman kadromuzla projelerinizi hayata geçiriyoruz.</p>
                            <button
                                onClick={handleContactClick}
                                className="w-full bg-white text-[#EE1B24] py-3 px-4 rounded font-medium 
                                hover:bg-[#EE1B24] hover:text-white border-2 border-white
                                transition-all duration-300 active:scale-95 focus:outline-none"
                            >
                                Bizimle İletişime Geçin
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="relative max-w-full max-h-full flex items-center justify-center">
                        <button
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 z-10"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Kapat"
                        >
                            <FaTimes size={24} />
                        </button>
                        <img
                            src={p.images ? p.images[selectedImage] : p.img}
                            alt={p.isim}
                            className="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Proje;