import React from 'react'
import { useNavigate } from "react-router";

function P2Card({ props }) {
    let { kategori, isim, aciklama, img, link } = props
    let navigate = useNavigate()

    let handlenav = () => {
        navigate(link)
    };

    return (
        <div className='h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col'>
            <div className='relative group cursor-pointer h-[300px]' onClick={handlenav}>
                <div className='w-full h-full overflow-hidden'>
                    <img
                        src={img}
                        alt={isim}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 '
                        loading="lazy"
                    />
                </div>

            </div>

            <div className='p-6 flex-1 flex flex-col justify-between'>
                <div className='space-y-3'>
                    <div className='text-sm font-medium text-[#EE1B24] tracking-wider uppercase'>
                        {kategori}
                    </div>

                    <h3 className='text-xl font-semibold text-gray-800 hover:text-[#EE1B24] transition-colors duration-300 line-clamp-2'>
                        {isim}
                    </h3>

                    <p className='text-gray-600 text-sm leading-relaxed line-clamp-3'>
                        {aciklama}
                    </p>
                </div>

                <button
                    onClick={handlenav}
                    className='mt-4 text-[#EE1B24] font-medium hover:text-red-700 transition-colors duration-300 flex items-center'
                >
                    Detayları Gör
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default P2Card