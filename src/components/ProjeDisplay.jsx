import React from 'react'
import slide1 from "../assets/Slider1/slide1.png"

function ProjeDisplay() {
    return (
        <div className='mx-30 pl-20 '>
            <div className='flex flex-col justify-start text-white  px-10'>
                <div className=' text-4xl  pt-10 relative top-5 left-10'>
                    Projelerimiz
                </div>

                <div className=' p-20 flex flex-col gap-10'>


                    <div className='w-full h-full flex items-center  justify-center gap-2 '>
                        <div>{"<"}</div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div>{">"}</div>
                    </div>
                    <div className='w-full h-full flex items-center  justify-center gap-2 '>
                        <div>{"<"}</div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div className='p-25 bg-red-500 relative    '>
                            <img src={slide1} className='w-full h-full z-10 top-0 left-0  absolute' />
                        </div>
                        <div>{">"}</div>
                    </div>




                </div>



            </div>




        </div>
    )
}

export default ProjeDisplay