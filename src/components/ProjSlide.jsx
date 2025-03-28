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
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
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
                // when window width is >= 1280px (xl)
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
    );
};

export default ProjectSlide;