import { useParams } from "react-router-dom";
import Biten from "./Biten";
import Devam from "./Devam";
import Gelecek from "./Gelecek";

const Proje = () => {
    const { id } = useParams();

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
                    <div className="w-full lg:w-2/3">
                        <img
                            src={p.img}
                            alt="projefotosu"
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                            {p.İsim}
                        </h1>
                        <div className="text-gray-600 leading-relaxed">
                            {p.Bilgi}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proje;