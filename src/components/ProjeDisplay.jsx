import React, { useState } from 'react'


import ProjectSlide from './ProjSlide'
import Biten from './Biten'
function ProjeDisplay() {

    let [selected, setselected] = useState("Biten")


    return (
        <div className='mx-30 max-[1440px]:mx-20  max-lg:mx-10 max-md:mx-5'>
            <div className='flex flex-col justify-start text-white  '>
                <div className=' pb-10 pt-20 max-md:flex max-md:flex-col max-md:items-center'>
                    <div className='opacity-70 py-2'>Galeri</div>
                    <div id='proje' className=' text-4xl  '>
                        Projelerimiz
                    </div>


                </div>

                <div className='flex gap-10 max-md:gap-5 max-md:flex-col max-md:items-center'>
                    <div
                        onClick={() => setselected("Biten")}
                        className={`cursor-pointer px-6 py-3 rounded-lg transition-all duration-300
                            hover:bg-white hover:text-black
                            flex items-center justify-center
                            ${selected == "Biten" ? "border-2 border-white bg-white/10" : "border-2 border-transparent"}`}
                    >
                        Biten Projeler
                    </div>
                    <div
                        onClick={() => setselected("Devam")}
                        className={`cursor-pointer px-6 py-3 rounded-lg transition-all duration-300
                            hover:bg-white hover:text-black
                            flex items-center justify-center
                            ${selected == "Devam" ? "border-2 border-white bg-white/10" : "border-2 border-transparent"}`}
                    >
                        Devam Eden Projeler
                    </div>
                    <div
                        onClick={() => setselected("Gelecek")}
                        className={`cursor-pointer px-6 py-3 rounded-lg transition-all duration-300
                            hover:bg-white hover:text-black
                            flex items-center justify-center
                            ${selected == "Gelecek" ? "border-2 border-white bg-white/10" : "border-2 border-transparent"}`}
                    >
                        Gelecek Projeler
                    </div>
                </div>

                <div className='my-20   '>

                    <ProjectSlide selected={selected} />
                    <div className=' overflow-hidden relative flex gap-5'>



                    </div>




                </div>


            </div>




        </div>
    )
}

export default ProjeDisplay