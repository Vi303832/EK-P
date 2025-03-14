import React, { useState } from 'react'
import Logo from "../assets/EkipLogo.png"
import { useNavigate } from 'react-router-dom'

function Header() {

    let [bar, setbar] = useState(false)

    let handlebar = () => {

        setbar(!bar)

    }


    let navigate = useNavigate()

    let handlenavigate = (path) => {

        navigate(path)

    }


    return (
        <div className='h-[70px] w-[98%] bg-transparent   absolute  z-20'>
            <div className={`w-[102%]  absolute  duration-700 transition-all  bg-white ${bar ? " h-[50vh]" : "h-0"} `}>
                <div className={`flex w-full items-center top-10 relative h-full transition-all duration-700 delay-100  text-black gap-10 flex-col ${bar ? "opacity-90" : "opacity-0 pointer-events-none"} `}>
                    <div className='cursor-pointer relative'>
                        Anasayfa
                    </div>
                    <div className='cursor-pointer'>
                        Projeler
                    </div>
                    <div className='cursor-pointer'>
                        E-Katalog
                    </div>
                    <div className='cursor-pointer'>
                        İletişim
                    </div>
                    <div className='cursor-pointer'>
                        Hakkımızda
                    </div>
                </div>

            </div>
            <div className='w-full h-full flex '>
                <div className='h-[120%] flex justify-center  px-20'>
                    <img src={Logo} onClick={() => handlenavigate("/")} className='h-full w-[90px] object-cover cursor-pointer ' />
                </div>
                <div className='relative  right-10 max-xl:top-5 w-full '>
                    <div className='justify-end flex'>

                        <div onClick={handlebar} className='cursor-pointer text-4xl z-20 text-black hidden max-md:block'>
                            =
                        </div>
                    </div>
                    <div className=' w-full items-end   h-full text-white opacity-90 gap-10 flex-col max-md:hidden hidden  max-xl:flex   '>
                        <div className='cursor-pointer'>
                            Anasayfa
                        </div>
                        <div className='cursor-pointer'>
                            Projeler
                        </div>
                        <div className='cursor-pointer'>
                            E-Katalog
                        </div>
                        <div className='cursor-pointer'>
                            İletişim
                        </div>
                        <div className='cursor-pointer'>
                            Hakkımızda
                        </div>
                    </div>



                    <div className='flex w-full justify-end items-center h-full text-white opacity-90 gap-10 max-xl:hidden'>

                        <div className='cursor-pointer'>
                            Anasayfa
                        </div>
                        <div className='cursor-pointer'>
                            Projeler
                        </div>
                        <div className='cursor-pointer'>
                            E-Katalog
                        </div>
                        <div className='cursor-pointer'>
                            İletişim
                        </div>
                        <div className='cursor-pointer'>
                            Hakkımızda
                        </div>
                    </div>


                </div>



            </div>




        </div>
    )
}

export default Header