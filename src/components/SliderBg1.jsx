import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

const slideData = [
    {
        src: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746959141/slide2_bnemt7.png",
        alt: "Slide 1"
    },
    {
        src: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746959139/slide1_czoaq2.png",
        alt: "Slide 2"
    },
    {
        src: "https://res.cloudinary.com/dwruhrrkm/image/upload/v1746959138/slide3_dfkqkr.jpg",
        alt: "Slide 3"
    }
];

const SliderBg = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let count = 0;
        slideData.forEach(slide => {
            const img = new window.Image();
            img.src = slide.src;
            img.onload = () => {
                count += 1;
                if (isMounted && count === slideData.length) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                count += 1;
                if (isMounted && count === slideData.length) {
                    setImagesLoaded(true);
                }
            };
        });
        return () => { isMounted = false; };
    }, []);

    if (!imagesLoaded) {
        return (
            <div className="h-full w-full bg-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#EE1B24] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-r-transparent border-b-[#EE1B24] border-l-transparent rounded-full animate-spin animation-delay-500"></div>
                </div>
                <div className="mt-4 text-white font-medium">
                    <span className="inline-block animate-bounce">Y</span>
                    <span className="inline-block animate-bounce animation-delay-100">ü</span>
                    <span className="inline-block animate-bounce animation-delay-200">k</span>
                    <span className="inline-block animate-bounce animation-delay-300">l</span>
                    <span className="inline-block animate-bounce animation-delay-400">e</span>
                    <span className="inline-block animate-bounce animation-delay-500">n</span>
                    <span className="inline-block animate-bounce animation-delay-600">i</span>
                    <span className="inline-block animate-bounce animation-delay-700">y</span>
                    <span className="inline-block animate-bounce animation-delay-800">o</span>
                    <span className="inline-block animate-bounce animation-delay-900">r</span>
                    <span className="inline-block animate-bounce animation-delay-1000">.</span>
                    <span className="inline-block animate-bounce animation-delay-1100">.</span>
                    <span className="inline-block animate-bounce animation-delay-1200">.</span>
                </div>
            </div>
        );
    }

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            loop={true}
            className="h-full w-full"
        >
            {slideData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="h-full w-full object-cover"
                        loading="eager"
                        decoding="async"
                        fetchpriority={index === 0 ? "high" : "auto"}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderBg;