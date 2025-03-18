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
            title: "Construction of single-family houses",
            options: ["Option 1", "Option 2", "Option 3"]
        },
        {
            title: "Construction of multi-family houses",
            options: ["Option A", "Option B", "Option C"]
        },
        {
            title: "Construction of energy-saving houses",
            options: ["Option X", "Option Y", "Option Z"]
        },
        {
            title: "Construction of wooden houses",
            options: ["Option W1", "Option W2", "Option W3"]
        },
        {
            title: "Construction of modular houses",
            options: ["Option M1", "Option M2", "Option M3"]
        }
    ];

    const toggleSection = (index) => {

        setOpenIndex(openIndex === index ? null : index);


    };


    return (
        <div className='my-20 mx-30 flex gap-30 max-md:flex-col max-md:mx-0 w-full overflow-hidden   '>
            {/*Sol*/}
            <div className='w-[50%] flex flex-col  gap-10 '>
                <div>
                    <div className=' opacity-40 font-bold py-2'>
                        Hizmetlerimiz nelerdir?
                    </div>
                    <div className='text-6xl'>
                        Faaliyet Alanlarımız
                    </div>
                </div>

                <div className='w-full text-lg opacity-60 '>
                    Gayrimenkul de dahil olmak üzere çok çeşitli inşaat hizmetleri sunuyoruz.
                    inşaat, kamu kurumları ve diğerleri. İnşaat projelerinizi mükemmel kalite ve detaylara gösterilen özenle yürütmek için deneyimimize ve profesyonelliğimize güvenin.
                </div>
                <div onClick={() => navigate("/Hakkımızda")} className='bg-lacivert px-10 py-2 w-fit text-lg rounded cursor-pointer text-white '>
                    Dahası için
                </div>
                <div className=' '>


                    <img className='relative h-[300px] object-cover w-[100%]' src="https://img.freepik.com/free-photo/handyman-construction-site-process-drilling-wall-with-perforator_169016-12109.jpg?t=st=1741698747~exp=1741702347~hmac=c020a5d735a833eb96322cd08755180baac73a65d1e920b9140ebe7bdc1cb4ce&w=1800 " />
                </div>
            </div>

            {/*Sağ*/}
            <div className=' w-[40%] '>

                <div className="">
                    {sections.map((section, index) => (
                        <div key={index}>

                            <div
                                onClick={() => toggleSection(index)}
                                className="w-full text-left flex justify-between  overflow-hidden  py-10 rounded"
                            >

                                <div className='text-xl font-bold'>{section.title}</div>
                                <div className='flex relative '>

                                    <div className={`absolute px-20 text-3xl transition-all delay-500 duration-700 ease-in-out ${openIndex === index ? 'opacity-100 -top-0' : 'opacity-0 -top-100'
                                        }`}><FaAngleUp /></div>
                                    <div className={`px-20 text-3xl relative transition-all delay-100 duration-700 ease-in-out ${openIndex === index ? 'top-100 opacity-0  ' : ' top-0 opacity-100'
                                        }`}><FaAngleDown /></div>

                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 delay-300 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-2 bg-gray-100">
                                    {section.options.map((option, i) => (
                                        <div key={i} className="p-2 hover:bg-gray-200">
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