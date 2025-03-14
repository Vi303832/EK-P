import React from 'react'
import bg from "../assets/bG.png"
import SliderBg from './SliderBg'
import Faaliyet from './Faaliyet'
import ProjeDisplay from './ProjeDisplay'
import NedenBiz from './NedenBiz'
import ContactDisplay from './ContactDisplay'


function Home() {
    return (
        <div className='min-h-screen w-full   '>
            <div className='h-screen w-full '>
                <div className=' h-full -z-10 w-full  '>

                    <span className='absolute h-full w-full bg-black top-0 z-10 opacity-30 pointer-events-none '></span>


                    <SliderBg className="h-full w-full " />
                    <hr className='absolute z-10 right-0 top-20 text-white opacity-90 h-20 w-[500px] max-xl:hidden'></hr>
                    <div className='absolute  z-10 bottom-20 max-md:bottom-0 '>
                        <div className='p-20  flex flex-col gap-6'>
                            <div className='text-6xl text-white '>GLOBAL EXPERTİSE,<br />
                                LOCAL COMMİTMENT
                            </div>
                            <div className='text-xl text-white '>
                                Laying in groundwork for a sustainable future
                            </div>
                            <div className='bg-[#EE1B24] px-15 py-4 w-fit text-lg rounded text-white '>
                                Learn More
                            </div>

                        </div>



                    </div>
                </div>
            </div>


            <div>

                <Faaliyet />
            </div>
            <div>
                <NedenBiz />
            </div>
            <div className='bg-black'>
                <ProjeDisplay />
            </div>
            <div>
                <ContactDisplay />
            </div>




        </div>
    )
}

export default Home