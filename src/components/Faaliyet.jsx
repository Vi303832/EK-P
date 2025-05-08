import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import men from "../assets/men.jpg"
import { useNavigate } from 'react-router-dom';

function Faaliyet() {

    let navigate = useNavigate()

    const [openIndex, setOpenIndex] = useState(null);

    const sections = [
        {
            title: "Konut Projeleri",
            options: [
                "Lüks Konut Projeleri",
                "Toplu Konut Projeleri",
                "Villa ve Müstakil Ev Projeleri"
            ]
        },
        {
            title: "Ticari Yapılar",
            options: [
                "İş Merkezleri",
                "Alışveriş Merkezleri",
                "Ofis Binaları"
            ]
        },
        {
            title: "Endüstriyel Tesisler",
            options: [
                "Fabrika Binaları",
                "Depo ve Lojistik Merkezleri",
                "Üretim Tesisleri"
            ]
        },
        {
            title: "Kentsel Dönüşüm",
            options: [
                "Riskli Bina Dönüşümleri",
                "Toplu Kentsel Dönüşüm Projeleri",
                "Ada Bazlı Dönüşüm"
            ]
        },
        {
            title: "Özel Projeler",
            options: [
                "Eğitim Yapıları",
                "Sağlık Tesisleri",
                "Spor Kompleksleri"
            ]
        }
    ];

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='my-10 md:my-20 px-4 md:px-8 lg:px-0 flex flex-col md:flex-row md:justify-center md:gap-10 lg:gap-20 w-full overflow-hidden'>
            {/*Sol*/}
            <div className='w-full md:w-[50%] flex flex-col gap-6 md:gap-10'>
                <div>
                    <div className='opacity-40 font-bold py-2 text-sm md:text-base'>
                        Uzmanlık Alanlarımız
                    </div>
                    <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold break-words'>
                        Faaliyet Alanlarımız
                    </div>
                </div>

                <div className='w-full md:w-[95%] lg:w-full text-base md:text-lg opacity-60'>
                    Ekip Grup İnşaat, 2012 yılından bu yana Türkiye genelinde, özellikle Bursa'da hayata geçirdiği nitelikli konut projeleriyle güvenilir bir marka haline gelmiştir. Kaliteli yaşam alanları üretme vizyonuyla yola çıkan firmamız; zamanında teslimat, müşteri memnuniyeti ve ekonomik çözümler sunma prensiplerini benimsemiştir.
                </div>

                <div onClick={() => navigate("/Hakkımızda")} className='bg-lacivert px-6 md:px-10 py-2 w-fit text-base md:text-lg rounded cursor-pointer text-white hover:bg-opacity-90 transition-all'>
                    Detaylı Bilgi
                </div>

                <div className='mt-2 md:mt-4'>
                    <img
                        className='h-[200px] sm:h-[250px] md:h-[300px] object-cover w-full rounded-md shadow-md'
                        src="https://img.freepik.com/free-photo/handyman-construction-site-process-drilling-wall-with-perforator_169016-12109.jpg?t=st=1741698747~exp=1741702347~hmac=c020a5d735a833eb96322cd08755180baac73a65d1e920b9140ebe7bdc1cb4ce&w=1800"
                        alt="İnşaat Çalışması"
                    />
                </div>
            </div>

            {/*Sağ*/}
            <div className='w-[40%] max-md:w-full max-md:mx-5'>
                <div className="">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div
                                onClick={() => toggleSection(index)}
                                className="w-full text-left flex justify-between overflow-hidden py-10 rounded cursor-pointer hover:text-amber-400 transition-colors duration-300"
                            >
                                <div className='text-xl font-bold'>{section.title}</div>
                                <div className='flex relative'>
                                    <div className={`absolute px-20 text-3xl transition-all delay-500 duration-700 ease-in-out ${openIndex === index ? 'opacity-100 -top-0' : 'opacity-0 -top-100'}`}>
                                        <FaAngleUp />
                                    </div>
                                    <div className={`px-20 text-3xl relative transition-all delay-100 duration-700 ease-in-out ${openIndex === index ? 'top-100 opacity-0' : 'top-0 opacity-100'}`}>
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-60' : 'max-h-0'}`}>
                                <div className="p-2 bg-gray-100">
                                    {section.options.map((option, i) => (
                                        <div key={i} className="p-2 md:p-3 hover:bg-gray-200 cursor-pointer transition-colors duration-300 text-sm md:text-base">
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <hr className='opacity-20'></hr>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faaliyet