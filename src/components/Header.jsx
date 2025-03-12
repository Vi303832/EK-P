import React from 'react'
import Logo from "../assets/EkipLogo.png"

function Header() {
    return (
        <div className='h-[70px] w-[98%] bg-transparent  absolute  z-20'>
            <div className='w-full h-full flex '>
                <div className='h-[120%] flex justify-center  px-20'>
                    <img src={Logo} className='h-full w-[90px] object-cover ' />
                </div>
                <div className='relative  right-10 w-full '>
                    <div className='flex w-full justify-end items-center h-full text-white opacity-90 gap-10'>

                        <div>
                            Projeler
                        </div>
                        <div>
                            Projeler
                        </div>
                        <div>
                            Projeler
                        </div>
                        <div>
                            Projeler
                        </div>
                        <div>
                            Projeler
                        </div>
                    </div>


                </div>



            </div>




        </div>
    )
}

export default Header