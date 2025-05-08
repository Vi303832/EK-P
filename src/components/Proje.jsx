import { useParams } from "react-router-dom";
import Biten from "./Biten";
import Devam from "./Devam";
import Gelecek from "./Gelecek";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Proje = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Biten, Devam ve Gelecek dizilerini birleştir
    const tumProjeler = [...Biten, ...Devam, ...Gelecek];

    // id'yi kullanarak ilgili projeyi bul
    const p = tumProjeler.find(item => item.id === id);

    if (!p) {
        return <div className="min-h-screen flex items-center justify-center text-2xl">Proje bulunamadı</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-32 md:py-20 lg:py-24 flex justify-center items-center text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold">
                {p.kategori}
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Sol taraf - Resim Galerisi */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={p.images ? p.images[selectedImage] : p.img}
                                alt={p.İsim}
                                className="w-full h-[400px] object-cover"
                            />

                            {/* Küçük resimler */}
                            {p.images && (
                                <div className="grid grid-cols-4 gap-2 p-4">
                                    {p.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${p.İsim} - ${index + 1}`}
                                            className={`w-full h-20 object-cover cursor-pointer rounded-lg transition-all ${selectedImage === index ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
                                                }`}
                                            onClick={() => setSelectedImage(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sağ taraf - Proje Detayları */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                                {p.isim}
                            </h1>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <FaBuilding className="mr-2" />
                                    <span>{p.aciklama}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <span>{p.konum}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <FaCalendarAlt className="mr-2" />
                                    <span>{p.tarih}</span>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Proje Hakkında</h2>
                                <div className="text-gray-600 leading-relaxed">
                                    {p.bilgi}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proje;