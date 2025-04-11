import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import men from "../assets/men.jpg"
import { useNavigate } from 'react-router-dom';

function NedenBiz() {

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
        <div className='my-20 justify-center flex gap-20 max-md:flex-col max-md:mx-0 w-full overflow-hidden'>
            {/*Sol*/}
            <div className='w-[50%] flex flex-col gap-10 max-md:w-full max-md:mx-5'>
                <div>
                    <div className='opacity-40 font-bold py-2'>
                        Uzmanlık Alanlarımız
                    </div>
                    <div className='text-6xl max-md:text-5xl'>
                        Faaliyet Alanlarımız
                    </div>
                </div>

                <div className='w-full text-lg opacity-60 max-md:w-[80%] max-md:text-[16px]'>
                    40 yılı aşkın deneyimimizle, modern mimari ve yenilikçi inşaat teknolojilerini kullanarak,
                    yaşam alanlarınızı ve ticari projelerinizi en yüksek kalite standartlarında hayata geçiriyoruz.
                    Sürdürülebilir yapılar ve çevre dostu çözümlerle, geleceğin yaşam alanlarını bugünden inşa ediyoruz.
                </div>

                <div onClick={() => navigate("/Hakkımızda")} className='bg-lacivert px-10 py-2 w-fit text-lg rounded cursor-pointer text-white'>
                    Detaylı Bilgi
                </div>

                <div className=''>
                    <img
                        className='relative h-[300px] object-cover w-[100%] max-md:w-[90%]'
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
                            <div className={`overflow-hidden transition-all duration-500 delay-300 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                                <div className="p-2 bg-gray-100">
                                    {section.options.map((option, i) => (
                                        <div key={i} className="p-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300">
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

export default NedenBiz