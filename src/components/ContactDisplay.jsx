import React from 'react'
import CBg from "../assets/CBg.jpg"

function ContactDisplay() {
    return (
        <div className='bg-black px-10 pt-30'>
            <div className='bg-yellow-50 h-[30rem] relative w-full '>

                <span className='absolute h-full w-full bg-black top-0 z-10 opacity-30 pointer-events-none '></span>
                <div className='absolute w-full h-full flex items-center justify-center text-white z-10'>
                    <div className='flex flex-col gap-5 items-start w-[60%]'>
                        <div className='text-4xl'>
                            Bize ulaşın ve vakit kaybetmeden fikrinizi gerçeğe çevirelim.
                        </div>
                        <div className='bg-lacivert px-10 py-2 w-fit text-lg rounded text-white '>
                            İletişim
                        </div>
                    </div>
                </div>
                <img src={CBg} className='h-full w-full object-cover ' />


            </div>





        </div>
    )
}

export default ContactDisplay