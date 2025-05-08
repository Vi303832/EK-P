import React, { useState, useEffect } from 'react'
import Logo from "../assets/WEkipLogo.png"
import { useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Header() {

    const [display, setdisplay] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const projects = [
        { id: 1, title: 'Biten Projeler', path: '/BitenProjeler' },
        { id: 2, title: 'Devam Eden Projeler', path: '/DevamEdenProjeler' },
        { id: 3, title: 'Gelecek Projeler', path: '/GelecekProjeler' },
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
        setActiveDropdown(false)
        navigate(path)
    }

    const toggleDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    return (
        <div className='h-[70px] w-[99%] bg-transparent max-md:w-[95%]  absolute  z-50 font-Poppins '>
            <div className={`w-[105%]  absolute  duration-700 transition-all hidden max-md:block  bg-white ${bar ? " h-[80vh]" : "h-0"}
            
            ${display ? " h-[100vh]" : "h-0"}
            
            `}>

                <div className={` flex  items-center top-30 relative h-full transition-all duration-700 delay-100  text-black gap-10 flex-col ${bar ? "opacity-90" : "opacity-0 pointer-events-none"} `}>
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
                        <div className={`flex  items-center overflow-hidden transition-all duration-300 delay-100 cursor-pointer ${display ? "h-20 mt-5 " : "h-0 mt-0"}`}
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


                    <div onClick={() => handlenavigate("/iletişim")} className='cursor-pointer'>
                        İletişim
                    </div>
                    <div onClick={() => handlenavigate("/Hakkımızda")} className='cursor-pointer'>
                        Hakkımızda
                    </div>
                </div>

            </div>
            {/*Maxmd*/}

            <div className='w-full h-full flex '>
                <div className='h-[120%] flex justify-center mx-20 max-md:mx-10'>
                    <img src={Logo} onClick={() => handlenavigate("/")} className='h-full object-cover cursor-pointer w-[100px]' />
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
                    {/*Maxlg*/}
                    <div className={`w-full items-end h-full ${window.location.pathname === '/' ? 'text-white' : '!hidden'} opacity-90 gap-10 flex-col max-md:hidden hidden max-xl:flex`}>
                        <div onClick={() => handlenavigate("/")} className='cursor-pointer'>
                            Anasayfa
                        </div>
                        <div className='flex items-end flex-col justify-center'>
                            <a
                                onClick={() => setdisplay(!display)}
                                className='cursor-pointer'
                            >
                                Projeler
                            </a>
                            <div className={`flex items-center overflow-hidden transition-all duration-300 delay-100 cursor-pointer ${display ? "h-15 " : "h-0"}`}
                                onClick={() => handlenavigate("/BitenProjeler")}
                            >
                                Biten Projeler
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 delay-300 cursor-pointer ${display ? "h-10" : "h-0"}`}
                                onClick={() => handlenavigate("/DevamEdenProjeler")}
                            >
                                Devam Eden Projeler
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 delay-500 cursor-pointer ${display ? "h-10" : "h-0"}`}
                                onClick={() => handlenavigate("/GelecekProjeler")}
                            >
                                Gelecek Projeler
                            </div>
                        </div>


                        <div onClick={() => handlenavigate("/iletişim")} className='cursor-pointer'>
                            İletişim
                        </div>
                        <div onClick={() => handlenavigate("/Hakkımızda")} className='cursor-pointer'>
                            Hakkımızda
                        </div>
                    </div>

                    <div className={`flex w-full justify-end items-center h-full text-white opacity-90 gap-15 max-xl:hidden relative top-1 ${window.location.pathname === '/' ? 'max-xl:hidden' : 'min-md:flex'}`}>

                        <div onClick={() => handlenavigate("/")} className='cursor-pointer hover:relative hover:top-[-4px] w-16 hover:h-5 h-5 transition-all duration-200 py-10 flex justify-center items-center'>
                            Anasayfa
                        </div>

                        <div className="relative w-16 group">
                            <button
                                className="cursor-pointer w-full text-center hover:relative hover:top-[-4px] hover:h-5 h-5 transition-all duration-200  py-10 flex justify-center items-center"
                            >
                                Projeler
                            </button>

                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out overflow-hidden opacity-0 max-h-0 group-hover:max-h-[300px] group-hover:opacity-100"
                            >
                                {projects.map((project, index) => (
                                    <React.Fragment key={project.id}>
                                        <div
                                            onClick={() => handlenavigate(project.path)}
                                            className="py-3 px-4 text-black text-center cursor-pointer hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                            style={{
                                                transitionDelay: `${index * 100}ms`
                                            }}
                                        >
                                            {project.title}
                                        </div>
                                        {index !== projects.length - 1 && (
                                            <hr className="border-gray-200" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div onClick={() => handlenavigate("/iletişim")} className='cursor-pointer hover:relative hover:top-[-4px] w-16 hover:h-5 h-5 transition-all duration-200 py-10 flex justify-center items-center'>
                            İletişim
                        </div>
                        <div onClick={() => handlenavigate("/Hakkımızda")} className='cursor-pointer hover:relative hover:top-[-4px] hover:h-5 w-16 h-5 transition-all duration-200 py-10 flex justify-center items-center'>
                            Hakkımızda
                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}

export default Header