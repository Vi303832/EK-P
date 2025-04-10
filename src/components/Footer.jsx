import React from 'react'
import Logo from "../assets/EkipLogo.png"
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-neutral-900 text-white px-4 sm:px-8 md:px-16 lg:px-30 py-10 sm:py-20 w-full overflow-hidden'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4'>
                <div className='flex flex-col items-center gap-3 w-full md:w-[300px]'>
                    <img src={Logo} className='w-[120px] sm:w-[150px]' alt="Logo" />
                    <div className='text-2xl sm:text-3xl text-center'>Kaliteli Yaşam Alanları</div>
                    <div className='underline underline-offset-1 text-center'>
                        Güvenilir İnşaat Çözümleri
                    </div>
                </div>
                <div className='text-center md:text-left flex flex-col gap-2'>
                    <div className='flex items-center  gap-2'>
                        <FaMapMarkerAlt className="text-[#EE1B24] self-start my-auto " />
                        <div className='flex flex-col items-start'>
                            <span>Camiikebir Mahallesi,</span>
                            <span>Kasımpaşa Tabakhane Cd.</span>
                            <span>No:17A, 34440 Beyoğlu/İstanbul</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhone className="text-[#EE1B24]" />
                        0212 361 12 81
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEnvelope className="text-[#EE1B24]" />
                        info@isasinsaat.com
                    </div>
                </div>
                <div className='w-full md:w-[150px] flex justify-center'>
                    <div className='w-fit text-center md:text-left flex flex-col gap-4'>
                        <div className='flex items-center gap-2 hover:text-[#EE1B24] cursor-pointer transition-colors'>
                            <FaInstagram /> Instagram
                        </div>
                        <div className='flex items-center gap-2 hover:text-[#EE1B24] cursor-pointer transition-colors'>
                            <FaFacebookF /> Facebook
                        </div>
                        <div className='flex items-center gap-2 hover:text-[#EE1B24] cursor-pointer transition-colors'>
                            <FaWhatsapp /> WhatsApp
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer