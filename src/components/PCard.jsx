import React from 'react';
import { useNavigate } from "react-router";

function PCard({ slide }) { // Destructure the slide prop
    let navigate = useNavigate()
    let { kategori, İsim, Açıklama, img, link } = slide

    let handlenav = () => {

        navigate(link)

    };


    return (
        <div className='w-[20rem] h-[35rem] flex flex-col gap-3 items-start relative'>
            <div className='w-[20rem] h-[20rem] overflow-hidden  transition  transform duration-300 ease-linear hover:scale-105'> {/* overflow-hidden ekledik */}
                <div onClick={handlenav} className="overflow-hidden transition h-full w-full transform duration-300 ease-linear hover:scale-105"> {/* Yeni eklenen div */}
                    <img
                        src={img}

                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' /* Tailwind CSS ile hover efekti */
                    />
                </div>
            </div>
            <div className='text-altin'>
                {kategori}
            </div>

            <div className='text-xl'>
                {İsim}
            </div>
            <div className='opacity-80'>
                {Açıklama}
            </div>
        </div>
    );
}

export default PCard;
