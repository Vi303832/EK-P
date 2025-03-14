import React from 'react'
import { useNavigate } from "react-router";


function P2Card({ props }) {

    let { kategori, İsim, Açıklama, img, link } = props

    let navigate = useNavigate()


    let handlenav = () => {

        navigate(link)

    };

    return (
        <div className='px-5 py-10 bg-white'>

            <div className='w-[20rem] h-[20rem] overflow-hidden  transition  transform duration-300 ease-linear hover:scale-105'> {/* overflow-hidden ekledik */}
                <div onClick={handlenav} className="overflow-hidden transition h-full w-full     transform duration-300 ease-linear hover:scale-105"> {/* Yeni eklenen div */}
                    <img
                        src={img}

                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' /* Tailwind CSS ile hover efekti */
                    />
                </div>
            </div>
            <div className='text-altin w-[20rem]  '>
                {kategori}
            </div>

            <div className='text-xl w-[20rem]'>
                {İsim}
            </div>
            <div className='opacity-80 w-[20rem]'>
                {Açıklama}
            </div>
        </div>
    )
}

export default P2Card