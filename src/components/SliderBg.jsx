import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import slide1 from "../assets/Slider1/slide1.png";
import slide2 from "../assets/Slider1/slide2.png";
import slide3 from "../assets/Slider1/slide3.jpeg";

const SliderBg = () => {
    return (
        <Swiper
            modules={[Autoplay,]}
            autoplay={{ delay: 5000 }}

            spaceBetween={0}
            loop={true}
            className="h-full w-full"
        >

            <SwiperSlide>
                <img src={slide1} alt="Slide 1" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="Slide 2" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="Slide 3" className="h-full w-full object-cover" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderBg;