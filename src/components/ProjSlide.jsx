import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PCard from "./PCard";
import Biten from "./Biten";
import Devam from "./Devam";
import Gelecek from "./Gelecek";

const ProjectSlide = ({ selected }) => {
    const [slides, setSlides] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        let selectedSlides = [];

        switch (selected) {
            case "Biten":
                selectedSlides = Biten;
                break;
            case "Devam":
                selectedSlides = Devam;
                break;
            case "Gelecek":
                selectedSlides = Gelecek;
                break;
            default:
                selectedSlides = [];
        }

        // Fotoğrafları önceden yükle
        const preloadImages = async () => {
            const imagePromises = selectedSlides.map(slide => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = slide.img;
                });
            });

            try {
                await Promise.all(imagePromises);
                setSlides(selectedSlides);
            } finally {
                setIsLoading(false);
            }
        };

        preloadImages();
    }, [selected]);

    if (isLoading) {
        return (
            <div className="w-full h-[35rem] flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-400"></div>
            </div>
        );
    }
    if (slides.length === 1) {
        return (
            <div className="w-full h-[35rem] flex flex-col items-center justify-center gap-6 bg-[#0E1117] rounded-lg shadow-md p-8">
                <div className="text-2xl text-white font-semibold text-center">
                    Şu an proje bulunmamaktadır
                </div>
                <div className="w-12 h-1 bg-[#EE1B24]"></div>
                <button
                    onClick={() => navigate("/BitenProjeler")}
                    className='bg-[#EE1B24] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer'
                >
                    <span>Biten Projeleri Görüntüle</span>
                    <FaArrowRight className="h-5 w-5" />
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                speed={800}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    504: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 80
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 110
                    }
                }}
                className="w-full h-full"
            >
                {slides && slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <PCard slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-prev !-left-16 !text-white !w-10 !h-10 hover:!text-amber-400 transition-all duration-300 max-lg:!-left-4"></div>
            <div className="swiper-button-next !-right-16 !text-white !w-10 !h-10 hover:!text-amber-400 transition-all duration-300 max-lg:!-right-4"></div>
        </div>
    );
};

export default ProjectSlide;