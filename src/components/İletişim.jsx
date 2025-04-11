import React, { useState } from 'react'
import Map from "../assets/Map.png"
import { FaEnvelope, FaPhone, FaComment, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { useEffect } from 'react';

function İletişim() {
    const [status, setStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mblgqnbl', {
                method: 'POST',
                body: new FormData(e.target),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className='font-Poppins'>
            <div className='py-32 bg-gradient-to-r from-gray-600 to-gray-500 text-white justify-center flex text-4xl font-semibold'>
                <FaEnvelope className="mr-4 text-4xl" /> İletişim
            </div>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row'>
                {/*LeftSide*/}
                <div className='md:w-[50%] p-10 md:border-r-2 border-gray-300 my-5'>
                    <div className='py-10 text-2xl font-semibold text-gray-800 flex items-center'>
                        <FaComment className="mr-3 text-[#EE1B24]" /> BİZE ULAŞIN
                    </div>

                    {/* Form Success Message */}
                    {status === 'success' && (
                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                            <FaCheckCircle className="mr-2" />
                            Mesajınız başarıyla gönderildi!
                        </div>
                    )}

                    {/* Form Error Message */}
                    {status === 'error' && (
                        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                            Bir hata oluştu. Lütfen tekrar deneyin.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-6'>
                        <div className='flex flex-col'>
                            <label className='py-2 text-sm font-medium text-gray-700'>
                                AD SOYAD
                            </label>
                            <input
                                type='text'
                                name="name"
                                required
                                className='w-full border-2 px-6 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent transition-all bg-gray-50'
                                placeholder='Adınız Soyadınız'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='py-2 text-sm font-medium text-gray-700'>
                                E-POSTA
                            </label>
                            <input
                                type='email'
                                name="email"
                                required
                                className='w-full border-2 px-6 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent transition-all bg-gray-50'
                                placeholder='ornek@email.com'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='py-2 text-sm font-medium text-gray-700'>
                                TELEFON
                            </label>
                            <input
                                type='tel'
                                name="phone"
                                required
                                className='w-full border-2 px-6 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent transition-all bg-gray-50'
                                placeholder='5XX XXX XX XX'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='py-2 text-sm font-medium text-gray-700'>
                                ŞİRKET
                            </label>
                            <input
                                type='text'
                                name="company"
                                className='w-full border-2 px-6 py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent transition-all bg-gray-50'
                                placeholder='Şirket Adı'
                            />
                        </div>
                        <div className='flex flex-col w-full py-10 col-span-2'>
                            <label className='py-2 text-sm font-medium text-gray-700'>
                                MESAJINIZ
                            </label>
                            <textarea
                                name="message"
                                required
                                className='w-full border-2 px-6 h-36 py-4 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#EE1B24] focus:border-transparent transition-all resize-none bg-gray-50'
                                placeholder='Mesajınızı buraya yazın...'
                            ></textarea>
                        </div>
                        <div className='col-span-2'>
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className='bg-[#EE1B24] text-white px-8 py-3 rounded-3xl hover:bg-red-700 transition-colors font-medium flex items-center disabled:opacity-50'
                            >
                                <FaPaperPlane className="mr-2" />
                                {status === 'submitting' ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
                            </button>
                        </div>
                    </form>
                </div>

                {/*RightSide*/}
                <div className='md:w-[50%]'>
                    <div className='p-10 my-5 border-b-2 border-gray-300'>
                        <div className='py-5 text-2xl font-semibold text-gray-800 flex items-center'>
                            <FaMapMarkerAlt className="mr-3 text-[#EE1B24]" /> İLETİŞİM
                        </div>
                        <div className='space-y-4'>
                            <div className='flex gap-2 py-1 items-center'>
                                <FaPhone className="text-[#EE1B24]" />
                                <span className='font-medium'>TELEFON:</span>
                                <span className='text-gray-600'>5xxxxxxxxx</span>
                            </div>
                            <div className='flex gap-2 py-1 items-center'>
                                <FaEnvelope className="text-[#EE1B24]" />
                                <span className='font-medium'>MAİL:</span>
                                <span className='text-gray-600'>ekipgrup@hotmail.com</span>
                            </div>
                            <div className='flex gap-2 py-1 items-start'>
                                <FaMapMarkerAlt className="text-[#EE1B24] mt-1" />
                                <span className='font-medium'>ADRES:</span>
                                <span className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dignissimos voluptatibus.</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-10 my-5'>
                        <img src={Map} alt="Location Map" className='w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default İletişim