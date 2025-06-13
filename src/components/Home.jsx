import React from 'react'
import SliderBg from './SliderBg'
import Faaliyet from './Faaliyet'
import ProjeDisplay from './ProjeDisplay'
import NedenBiz from './NedenBiz'
import ContactDisplay from './ContactDisplay'
import { useNavigate } from 'react-router-dom'
import SEO from './SEO'

function Home() {
    const navigate = useNavigate()

    const handleContactClick = () => {
        navigate("/iletişim");

    }

    return (
        <div className='min-h-screen w-full overflow-hidden' style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
            <SEO
                title="Ekip Boya İnşaat | Profesyonel Boya ve İnşaat Hizmetleri"
                description="Ekip Boya ve Ekip İnşaat ile profesyonel boya, tadilat ve inşaat hizmetleri. Kaliteli işçilik, uygun fiyat ve müşteri memnuniyeti."
                canonicalUrl="/"
            />
            {/*Landing*/}
            <div className='h-screen w-full relative'>
                <div className='h-full w-full relative'>
                    {/* Black overlay */}
                    <div className='absolute h-full w-full bg-black top-0 z-10 opacity-35'></div>

                    {/* Slider background */}
                    <div className='absolute top-0 left-0 h-full w-full'>
                        <SliderBg />
                    </div>

                    {/* Content */}
                    <div className='absolute z-30 h-full w-full flex items-center'>
                        <div className='p-20 max-md:p-10 flex flex-col gap-6 relative'>
                            <h1 className='text-6xl max-md:text-5xl max-[380px]:!text-4xl  text-white' style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
                                GÜVEN VE KALİTE,<br />
                                BAŞARININ TEMELİ
                            </h1>
                            <h2 className='text-xl max-[380px]:!text-lg text-white' style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
                                Ekip İnşaat güvencesiyle geleceğe yön veren projelerle yanınızdayız.
                            </h2>
                            <button
                                onClick={handleContactClick}
                                className='bg-[#EE1B24] cursor-pointer z-40 px-6 py-4 w-fit text-lg rounded text-white hover:bg-red-700 transition-colors mt-4 relative'
                                style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}
                            >
                                Bize ulaş!
                            </button>
                        </div>
                    </div>

                    <hr className='absolute z-10 right-0 top-20 text-white opacity-90 h-20 w-[500px] max-xl:hidden'></hr>
                </div>
            </div>

            <div>
                <Faaliyet />
            </div>
            <div>
                <NedenBiz />
            </div>
            <div className='bg-neutral-900'>
                <ProjeDisplay />
            </div>
            <div className=''>
                <ContactDisplay />
            </div>
        </div>
    )
}

export default Home