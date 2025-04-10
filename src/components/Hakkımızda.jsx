import React from 'react'
import { FaBuilding, FaUsers, FaHistory, FaLightbulb } from 'react-icons/fa'
import { useEffect } from 'react';
function Hakkımızda() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='font-Poppins'>
            <div className='py-30 bg-gradient-to-r from-gray-600 to-gray-500 text-white justify-center flex text-4xl items-center'>
                <FaBuilding className="mr-4" /> Hakkımızda
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Sol Taraf - Şirket Tanıtımı */}
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-gray-800'>Ekip Grup İnşaat</h2>
                        <p className='text-gray-600 leading-relaxed'>
                            20XX yılından bu yana inşaat sektöründe faaliyet gösteren firmamız,
                            müşteri memnuniyetini ön planda tutarak kaliteli ve güvenilir hizmet
                            sunmayı ilke edinmiştir. Modern yapı teknolojilerini kullanarak,
                            sürdürülebilir ve yenilikçi projeler geliştiriyoruz.
                        </p>

                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <FaHistory className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>X+ Yıllık Deneyim</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaUsers className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>Uzman Ekip</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaLightbulb className='text-[#EE1B24] text-xl' />
                                <span className='font-medium'>Yenilikçi Çözümler</span>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Misyon & Vizyon */}
                    <div className='space-y-8'>
                        <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Misyonumuz</h3>
                            <p className='text-gray-600'>
                                Müşterilerimize en yüksek kalitede hizmet sunarak, güvenilir ve
                                sürdürülebilir projeler geliştirmek. İnşaat sektöründe öncü ve
                                yenilikçi yaklaşımlarla değer yaratmak.
                            </p>
                        </div>

                        <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Vizyonumuz</h3>
                            <p className='text-gray-600'>
                                Türkiye'nin önde gelen inşaat şirketlerinden biri olmak ve global
                                pazarda söz sahibi bir marka haline gelmek. Çevreye duyarlı,
                                yenilikçi ve sürdürülebilir projelerle sektöre yön vermek.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hakkımızda