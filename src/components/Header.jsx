import React from 'react'
import Logo from "../assets/EkipLogo.png"
import { useNavigate } from 'react-router-dom'

function Header() {

    let navigate = useNavigate()

    let handlenavigate = (path) => {

        navigate(path)

    }


    return (
        <div className='h-[70px] w-[98%] bg-transparent  absolute  z-20'>
            <div className='w-full h-full flex '>
                <div className='h-[120%] flex justify-center  px-20'>
                    <img src={Logo} onClick={() => handlenavigate("/")} className='h-full w-[90px] object-cover cursor-pointer ' />
                </div>
                <div className='relative  right-10 w-full '>
                    <div className='flex w-full justify-end items-center h-full text-white opacity-90 gap-10'>

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