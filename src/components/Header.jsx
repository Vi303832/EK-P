import React, { useState } from 'react'
import Logo from "../assets/EkipLogo.png"
import { useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Header() {

    const [display, setdisplay] = useState(false)
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
        setbar(false)
        setdisplay(false)
        setIsHovered(false)

        navigate(path)

    }


    return (
        <div className='h-[70px] w-[99%] bg-transparent max-md:w-[95%]  absolute  z-20 font-Poppins '>
            <div className={`w-[105%]  absolute  duration-700 transition-all hidden max-md:block  bg-white ${bar ? " h-[80vh]" : "h-0"}
            
            ${display ? " h-[100vh]" : "h-0"}
            
            `}>

                <div className={` flex  items-center top-10 relative h-full transition-all duration-700 delay-100  text-black gap-10 flex-col ${bar ? "opacity-90" : "opacity-0 pointer-events-none"} `}>
                    <div
                        onClick={() => handlenavigate("/")}
                        className='cursor-pointer relative'>
                        Anasayfa
                    </div>

                    <div className='flex items-center flex-col  justify-center'>
                        <a
                            onClick={() => setdisplay(!display)}
                            className='cursor-pointer '
                        >
                            Projeler
                        </a>
                        <div className={`flex  items-center overflow-hidden transition-all duration-300 delay-100 cursor-pointer ${display ? "h-20 " : "h-0"}`}
                            onClick={() => handlenavigate("/BitenProjeler")}
                        >
                            Biten Projeler
                        </div>
                        <div className={`flex  items-center  overflow-hidden transition-all  duration-300 delay-300 cursor-pointer ${display ? "h-20" : "h-0"}`}
                            onClick={() => handlenavigate("/DevamEdenProjeler")}
                        >
                            Devam Eden Projeler
                        </div>
                        <div className={`flex  items-center overflow-hidden transition-all    duration-300 delay-500 cursor-pointer ${display ? "h-20" : "h-0"}`}
                            onClick={() => handlenavigate("/GelecekProjeler")}
                        >
                            Gelecek Projeler
                            <br></br>

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

            </div>
            {/*Maxmd*/}


            <div className='w-full h-full flex '>
                <div className='h-[120%] flex justify-center  px-20 max-md:px-10'>
                    <img src={Logo} onClick={() => handlenavigate("/")} className='h-full w-[90px] max-md:w-[150px] object-cover  cursor-pointer ' />
                </div>
                <div className='relative  right-10 max-xl:top-5 w-full max-md:top-8 '>
                    <div className='justify-end flex max-md:items-center '>

                        <div
                            onClick={handlebar}
                            className="cursor-pointer text-4xl z-20 text-black hidden max-md:block max-md:text-3xl"
                        >
                            <div
                                className={`transition-opacity duration-300 absolute ease-in-out ${bar ? "opacity-100" : "opacity-0"}`}

                            >
                                <IoMdClose />
                            </div>
                            <div
                                className={`transition-opacity duration-300 text-white  ease-in-out ${bar ? "opacity-0" : "opacity-90"}`}

                            >
                                <FaBars />
                            </div>
                        </div>

                    </div>
                    <div className=' w-full items-end   h-full text-white opacity-90 gap-10 flex-col max-md:hidden hidden  max-xl:flex   '>
                        <div className='cursor-pointer'>
                            Anasayfa
                        </div>
                        <div className='flex items-end flex-col justify-center'>
                            <a
                                onClick={() => setdisplay(!display)}
                                className='cursor-pointer'
                            >
                                Projeler
                            </a>
                            <div className={`flex  items-center  overflow-hidden transition-all duration-300 delay-100 cursor-pointer ${display ? "h-15 " : "h-0"}`}
                                onClick={() => handlenavigate("/BitenProjeler")}
                            >
                                Biten Projeler
                            </div>
                            <div className={`  overflow-hidden transition-all duration-300 delay-300 cursor-pointer ${display ? "h-10" : "h-0"}`}
                                onClick={() => handlenavigate("/DevamEdenProjeler")}
                            >
                                Devam Eden Projeler
                            </div>
                            <div className={` overflow-hidden transition-all duration-300 delay-500 cursor-pointer ${display ? "h-10" : "h-0"}`}
                                onClick={() => handlenavigate("/GelecekProjeler")}
                            >
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

                        <div onClick={() => navigate("/")} className='cursor-pointer hover:relative hover:top-1   w-16 hover:h-10 h-5'>
                            Anasayfa
                        </div>

                        <div
                            className={`cursor-pointer   px-16 flex flex-col  items-center justify-start  gap-5 w-16 ${isHovered ? 'h-60 top-[102px] relative ' : 'h-5'
                                }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <a
                                onClick={() => handlenavigate("/")}
                                href='#proje' className='max-xl:hidden '>Projeler</a>
                            <div onClick={() => handlenavigate("/BitenProjeler")} className={` max-xl:hidden  transition-all duration-300 relative py-1   ${isHovered ? "bg-white rounded mt-8 text-black  w-36  text-center left-0 " : " h-0 opacity-0 left-30 mt-8 "}`}>
                                Biten Projeler
                            </div>
                            <div onClick={() => handlenavigate("/DevamEdenProjeler")} className={`max-xl:hidden  transition-all duration-300 relative py-1   ${isHovered ? "bg-white rounded text-black  w-36  text-center left-0 " : " h-0 opacity-0 left-30 "}`}>
                                Devam Eden Projeler
                            </div>
                            <div onClick={() => handlenavigate("/GelecekProjeler")} className={`max-xl:hidden    transition-all duration-300 relative py-1   ${isHovered ? "bg-white rounded text-black  w-36  text-center left-0 " : " h-0 opacity-0 left-30 "}`}>
                                Gelecek Projeler
                            </div>
                        </div>

                        <div onClick={() => navigate("/iletişim")} className='cursor-pointer hover:relative hover:top-1   w-16 hover:h-10 h-5'>
                            İletişim
                        </div>
                        <div onClick={() => navigate("/Hakkımızda")} className='cursor-pointer hover:relative hover:top-1 hover:h-10 w-16 h-5'>
                            Hakkımızda
                        </div>
                    </div>


                </div>



            </div>




        </div >
    )
}

export default Header