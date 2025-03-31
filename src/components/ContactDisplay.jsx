import React from 'react'
import CBg from "../assets/CBg.jpg"
import { useNavigate } from 'react-router-dom';

function ContactDisplay() {
    let navigate = useNavigate()

    return (
        <div className='bg-black px-10 max-sm:px-0 pt-30'>
            <div className='bg-yellow-50 h-[30rem] relative w-full '>

                <span className='absolute h-full w-full bg-black top-0 z-10 opacity-30 pointer-events-none '></span>
                <div className='absolute w-full h-full flex items-center justify-center text-start text-white z-10'>
                    <div className='flex flex-col gap-5 items-start relative min-lg:left-15 w-[50%] max-sm:!w-[80%]'>
                        <div className='text-4xl max-sm:text-2xl'>
                            Bize ulaşın ve vakit kaybetmeden fikrinizi gerçeğe çevirelim.
                        </div>
                        <div onClick={() => navigate("/iletişim")} className='bg-lacivert px-10 py-2 w-fit text-lg rounded text-white cursor-pointer '>
                            İletişim
                        </div>
                    </div>
                </div>
                <img src={CBg} className='h-full w-full object-contain max-lg:object-cover  bg-lacivert' />


            </div>





        </div>
    )
}

export default ContactDisplay