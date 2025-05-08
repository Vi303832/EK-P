import React, { useEffect } from 'react';
import { useNavigate } from "react-router";

function PCard({ slide }) { // Destructure the slide prop
    let navigate = useNavigate()
    let { kategori, isim, aciklama, img, link } = slide

    useEffect(() => {
        // Fotoğrafı önceden yükle
        const preloadImage = new Image();
        preloadImage.src = img;
    }, [img]);

    let handlenav = () => {
        navigate(link)
    };

    return (
        <div className='w-[20rem] h-[35rem]  max-[1100px]:w-[15rem] max-md:w-[12rem] max-sm:w-[15rem] max-[504px]:!w-full   flex flex-col gap-3 items-start relative'>
            <div className='w-[20rem] h-[20rem] max-[1100px]:w-[15rem] max-[1100px]:h-[15rem] max-md:w-[12rem] max-sm:w-[15rem] max-[504px]:!h-[20rem]  max-sm:h-[15rem] max-md:h-[12rem] max-[504px]:!w-full overflow-hidden  transition  transform duration-300 ease-linear hover:scale-105'> {/* overflow-hidden ekledik */}
                <div onClick={handlenav} className="overflow-hidden transition h-full w-full transform duration-300 ease-linear hover:scale-105"> {/* Yeni eklenen div */}
                    <img
                        src={img}
                        loading="eager"
                        decoding="async"
                        alt={isim}
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' /* Tailwind CSS ile hover efekti */
                    />
                </div>
            </div>
            <div className='text-altin'>
                {kategori}
            </div>

            <div className='text-xl'>
                {isim}
            </div>
            <div className='opacity-80'>
                {aciklama}
            </div>
        </div>
    );
}

export default PCard;
