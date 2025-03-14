import React, { useState } from 'react'


import ProjectSlide from './ProjSlide'
import Biten from './Biten'
function ProjeDisplay() {

    let [selected, setselected] = useState("Biten")


    return (
        <div className='mx-30 '>
            <div className='flex flex-col justify-start text-white  '>
                <div className=' pb-10 pt-20'>
                    <div className='opacity-70 py-2'>Galeri</div>
                    <div className=' text-4xl  '>
                        Projelerimiz
                    </div>


                </div>

                <div className='flex gap-10 '>
                    <div onClick={() => setselected("Biten")} className={` cursor-pointer px-4 py-2 rounded ${selected == "Biten" ? "border-2 border-white " : " border-0 "} `}>
                        Biten Projeler
                    </div>
                    <div onClick={() => setselected("Devam")} className={` cursor-pointer px-4 py-2 rounded ${selected == "Devam" ? "border-2 border-white " : " border-0 "} `}>
                        Devam Eden Projeler
                    </div>
                    <div onClick={() => setselected("Gelecek")} className={` cursor-pointer px-4 py-2 rounded ${selected == "Gelecek" ? "border-2 border-white " : " border-0 "} `}>
                        Gelecek Projeler
                    </div>


                </div>

                <div className='my-20  '>

                    <ProjectSlide selected={selected} />
                    <div className=' overflow-hidden relative flex gap-5'>



                    </div>




                </div>


            </div>




        </div>
    )
}

export default ProjeDisplay