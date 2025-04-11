import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PCard from "./PCard";
import Biten from "./Biten";
import Devam from "./Devam";
import Gelecek from "./Gelecek";

const ProjectSlide = ({ selected }) => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        switch (selected) {
            case "Biten":
                setSlides(Biten);
                break;
            case "Devam":
                setSlides(Devam);
                break;
            case "Gelecek":
                setSlides(Gelecek);
                break;
            default:
                setSlides([]);
        }
    }, [selected]);

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

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !-left-16 !text-white !w-10 !h-10 hover:!text-amber-400 transition-all duration-300 max-lg:!-left-4"></div>
            <div className="swiper-button-next !-right-16 !text-white !w-10 !h-10 hover:!text-amber-400 transition-all duration-300 max-lg:!-right-4"></div>
        </div>
    );
};

export default ProjectSlide;