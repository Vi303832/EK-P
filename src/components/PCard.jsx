import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import { FaArrowRight } from 'react-icons/fa';

function PCard({ slide }) { // Destructure the slide prop
    let navigate = useNavigate()
    let { isim, aciklama, img, link } = slide

    useEffect(() => {
        // Fotoğrafı önceden yükle
        const preloadImage = new Image();
        preloadImage.src = img;
    }, [img]);

    let handlenav = () => {
        navigate(link)
    };

    return (
        <div className='w-[20rem] h-[35rem] max-[1100px]:w-[15rem] max-md:w-[12rem] max-sm:w-[15rem] max-[504px]:!w-full flex flex-col gap-3 items-start relative group'>
            <div className='w-[20rem] h-[20rem] max-[1100px]:w-[15rem] max-[1100px]:h-[15rem] max-md:w-[12rem] max-sm:w-[15rem] max-[504px]:!h-[20rem] max-sm:h-[15rem] max-md:h-[12rem] max-[504px]:!w-full overflow-hidden rounded-lg shadow-md'>
                <div onClick={handlenav} className="overflow-hidden h-full w-full relative cursor-pointer">
                    <img
                        src={img}
                        loading="eager"
                        decoding="async"
                        alt={isim}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />

                </div>
            </div>

            <div className='mt-2'>
                <h3 className='text-xl font-semibold mb-1 group-hover:text-[#EE1B24] transition-colors duration-300'>
                    {isim}
                </h3>
                <p className='text-gray-600 text-sm'>
                    {aciklama}
                </p>
            </div>
        </div>
    );
}

export default PCard;
