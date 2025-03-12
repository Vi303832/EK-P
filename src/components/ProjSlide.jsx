import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PCard from "./PCard";
import slide1 from "../assets/Slider1/slide1.png";
import slide2 from "../assets/Slider1/slide2.png";
import slide3 from "../assets/Slider1/slide3.jpeg";
import Biten from "./Biten"
import Devam from "./Devam"
import Gelecek from "./Gelecek"





const ProjectSlide = ({ selected }) => {


    const [Slides, setSlides] = useState([]);

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
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={4}
            spaceBetween={110}
            className="h-full w-full "
        >

            {Slides && Slides.map((slide, index) => (


                <SwiperSlide key={index}>

                    <PCard slide={slide} />
                </SwiperSlide>



            ))}



        </Swiper>
    );
};

export default ProjectSlide;
