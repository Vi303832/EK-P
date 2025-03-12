import React, { useState } from 'react'


import ProjectSlide from './ProjSlide'
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
                    <div onClick={() => setselected("Biten")} className='border-2 border-white px-4 py-2 rounded '>
                        Biten Projeler
                    </div>
                    <div onClick={() => setselected("Devam")} className='border-2 border-white px-4 py-2 rounded '>
                        Devam Eden Projeler
                    </div>
                    <div onClick={() => setselected("Gelecek")} className=' px-4 py-2 rounded '>
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