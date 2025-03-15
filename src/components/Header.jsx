import React, { useState } from 'react'
import Logo from "../assets/EkipLogo.png"
import { useNavigate } from 'react-router-dom'

function Header() {

    const [isHovered, setIsHovered] = useState(false);
    const projects = [
        { id: 1, title: 'Biten Projeler' },
        { id: 2, title: 'Devam Eden Projeler' },
        { id: 3, title: 'Gelecek Projeler' },
    ];


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
                        <div
                            className={`cursor-pointer   `}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Projeler
                        </div>
                        <div
                            className={` flex flex-col  items-center justify-start   gap-5 transition-all  relative py-1   ${isHovered ? "w-auto h-52 " : " w-0 h-0 overflow-hidden"}`}

                        >

                            <div className={` transition-all duration-300  delay-300 relative py-1   ${isHovered ? "bg-white rounded mt-8 text-black  w-32  text-center left-0 " : " h-0 opacity-0 left-30 mt-8 w-0 "}`}>
                                Biten Projeler
                            </div>
                            <div className={` transition-all duration-300  delay-300 relative py-1   ${isHovered ? "bg-white rounded text-black  w-32  text-center left-0 " : " h-0 opacity-0 left-30 w-0 "}`}>
                                Devam Eden Projeler
                            </div>
                            <div className={`  transition-all duration-300  delay-300 relative py-1   ${isHovered ? "bg-white rounded text-black  w-32  text-center left-0 " : " h-0 opacity-0 left-30 w-0 "}`}>
                                Gelecek Projeler
                            </div>

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

                        <div className='cursor-pointer hover:relative hover:top-1 hover:h-10 h-5'>
                            Anasayfa
                        </div>

                        <div
                            className={`cursor-pointer   px-16 flex flex-col  items-center justify-start  gap-5 w-16 ${isHovered ? 'h-60 top-[106px] relative ' : 'h-5'
                                }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='max-xl:hidden'>Projeler</div>
                            <div onClick={() => navigate("/BitenProjeler")} className={` max-xl:hidden transition-all duration-300 relative py-1   ${isHovered ? "bg-white rounded mt-8 text-black  w-32  text-center left-0 " : " h-0 opacity-0 left-30 mt-8 "}`}>
                                Biten Projeler
                            </div>
                            <div onClick={() => navigate("/DevamEdenProjeler")} className={`max-xl:hidden  transition-all duration-300 relative py-1   ${isHovered ? "bg-white rounded text-black  w-32  text-center left-0 " : " h-0 opacity-0 left-30 "}`}>
                                Devam Eden Projeler
                            </div>
                            <div onClick={() => navigate("/GelecekProjeler")} className={`max-xl:hidden  transition-all duration-300 relative py-1   ${isHovered ? "bg-white rounded text-black  w-32  text-center left-0 " : " h-0 opacity-0 left-30 "}`}>
                                Gelecek Projeler
                            </div>
                        </div>

                        <div className='cursor-pointer hover:relative hover:top-1 hover:h-10 h-5'>
                            İletişim
                        </div>
                        <div className='cursor-pointer hover:relative hover:top-1 hover:h-10 h-5'>
                            Hakkımızda
                        </div>
                    </div>


                </div>



            </div>




        </div>
    )
}

export default Header