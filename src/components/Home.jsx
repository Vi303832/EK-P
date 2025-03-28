import React from 'react'
import bg from "../assets/bG.png"
import SliderBg from './SliderBg'
import Faaliyet from './Faaliyet'
import ProjeDisplay from './ProjeDisplay'
import NedenBiz from './NedenBiz'
import ContactDisplay from './ContactDisplay'
import { useNavigate } from 'react-router-dom'


function Home() {

    let navigate = useNavigate()




    return (
        <div className='min-h-screen w-full overflow-hidden font-Poppins   '>
            <div className='h-screen w-full relative    '>
                <div className=' h-full -z-10 w-full  relative'>

                    <span className='absolute h-full w-full bg-black top-0 z-10 opacity-45 pointer-events-none overflow-hidden'></span>


                    <SliderBg className="h-full w-full pointer-events-auto " />
                    <hr className='absolute z-10 right-0 top-20 text-white opacity-90 h-20 w-[500px] max-xl:hidden '></hr>
                    <div className='absolute  z-10 bottom-20 max-md:bottom-0 max-sm:bottom-30  '>
                        <div className='p-20 max-md:p-10  flex flex-col gap-6  '>
                            <div className='text-6xl  text-white '>GLOBAL EXPERTİSE,<br />
                                LOCAL COMMİTMENT
                            </div>
                            <div className='text-xl text-white '>
                                Laying in groundwork for a sustainable future
                            </div>
                            <div onClick={() => navigate("/iletişim")} className='bg-[#EE1B24] cursor-pointer px-15 py-4 w-fit text-lg rounded text-white '>
                                Bize ulaş!
                            </div>

                        </div>



                    </div>
                </div>
            </div>


            <div className=''>
                <Faaliyet />
            </div>
            <div className=''>
                <NedenBiz />
            </div>
            <div className='bg-black '>
                <ProjeDisplay />
            </div>
            <div className=''>
                <ContactDisplay />
            </div>




        </div>
    )
}

export default Home