import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import slide1 from "../assets/Slider1/slide1.png";
import slide2 from "../assets/Slider1/slide2.png";
import slide3 from "../assets/Slider1/slide3.jpeg";

const SliderBg = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Resimleri önceden yükle
        const imageUrls = [slide1, slide2, slide3];
        const loadImages = imageUrls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = reject;
            });
        });

        Promise.all(loadImages)
            .then(loadedImages => {
                setImages(loadedImages);
                setImagesLoaded(true);
            })
            .catch(error => console.error('Resim yüklenirken hata:', error));
    }, []);

    if (!imagesLoaded) {
        return <div className="h-full w-full bg-gray-200"></div>;
    }

    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 7000 }}
            spaceBetween={0}
            loop={true}
            className="h-full w-full"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="h-full w-full object-cover"
                        loading="eager"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderBg;