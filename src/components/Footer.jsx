import React from 'react'
import Logo from "../assets/EkipLogo.png"

function Footer() {
    return (
        <div className='bg-neutral-900 text-white px-30 py-20 w-full overflow-hidden'>
            <div className='flex justify-between'>
                <div className='flex flex-col items-center gap-3 w-[300px]'>
                    <img src={Logo} className='w-[150px]' />
                    <div className='text-3xl text-center'>Zaart zuurt zart</div>
                    <div className='underline underline-offset- 1'>
                        zartzurtzartzurtzart
                    </div>
                </div>
                <div>
                    Camiikebir Mahallesi,<br />
                    Kasımpaşa Tabakhane Cd.<br />
                    No:17A, 34440 Beyoğlu/İstanbul<br />
                    0212 361 12 81<br />
                    info@isasinsaat.com
                </div>
                <div className='w-[150px]  flex justify-center'>
                    <div className=' w-fit'>
                        İNSTA<br />
                        FACE<br />
                        WHATSAPP

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer