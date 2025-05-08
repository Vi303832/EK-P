import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import slide1 from "../assets/Slider1/slide1.png";
import slide2 from "../assets/Slider1/slide2.png";
import slide3 from "../assets/Slider1/slide3.jpeg";

const SliderBg = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [images, setImages] = useState([]);
    const swiperRef = useRef(null);

    // Slider için görsel yapılandırması
    const slideData = [
        {
            src: slide1,
            alt: "Slide 1",
            preload: true  // İlk görsel için preload özelliği
        },
        {
            src: slide2,
            alt: "Slide 2"
        },
        {
            src: slide3,
            alt: "Slide 3"
        }
    ];

    useEffect(() => {
        // Önce tarayıcı önbelleğini kontrol et
        const cachedImages = slideData.map(slide => {
            // Tarayıcı önbelleğini kontrol et
            const cachedImage = sessionStorage.getItem(`slider_${slide.src}`);
            return cachedImage ? slide.src : null;
        }).filter(Boolean);

        // Eğer tüm görseller önbellekte varsa, hemen yükle
        if (cachedImages.length === slideData.length) {
            setImages(slideData.map(slide => slide.src));
            setImagesLoaded(true);
            return;
        }

        // En önemli görseli en önce yükle ve diğerlerini paralel olarak yükle
        const preloadMainImage = () => {
            const mainSlide = slideData.find(slide => slide.preload);
            if (mainSlide) {
                const img = new Image();
                img.src = mainSlide.src;

                // Ana görselin yüklenme olaylarını izle
                img.onload = () => {
                    // Ana görsel yüklendiğinde onu göster
                    setImages([mainSlide.src]);
                    setLoadedCount(1);

                    // Ana görsel için önbelleğe alma
                    try {
                        sessionStorage.setItem(`slider_${mainSlide.src}`, 'cached');
                    } catch (e) {
                        console.warn("Önbelleğe alma başarısız oldu:", e);
                    }

                    // Geri kalan görselleri yükle
                    loadRemainingImages();
                };

                img.onerror = () => {
                    console.error(`Ana görsel yüklenemedi: ${mainSlide.src}`);
                    loadRemainingImages();
                };
            } else {
                // Ana görsel yoksa, tüm görselleri yükle
                loadRemainingImages();
            }
        };

        const loadRemainingImages = () => {
            // Yüklenmemiş görselleri filtrele
            const remainingSlides = slideData.filter(slide => !slide.preload);

            // Her bir görseli paralel olarak yükle
            remainingSlides.forEach(slide => {
                const img = new Image();

                // Performans için görsel yükleme önceliğini ayarla
                img.loading = "lazy";
                img.decoding = "async";
                img.src = slide.src;

                img.onload = () => {
                    setLoadedCount(prevCount => {
                        const newCount = prevCount + 1;

                        // Tüm görseller tamamen yüklendiğinde
                        if (newCount >= slideData.length) {
                            setImagesLoaded(true);
                        }

                        // Önbelleğe alma
                        try {
                            sessionStorage.setItem(`slider_${slide.src}`, 'cached');
                        } catch (e) {
                            console.warn("Önbelleğe alma başarısız oldu:", e);
                        }

                        // Mevcut görsellere ekleme yap
                        setImages(prevImages => [...prevImages, slide.src]);

                        return newCount;
                    });
                };

                img.onerror = () => {
                    console.error(`Görsel yüklenemedi: ${slide.src}`);
                    setLoadedCount(prevCount => prevCount + 1);
                };
            });
        };

        // Ana görsel yükleme işlemini başlat
        preloadMainImage();

        // Komponent unmount olduğunda temizlik yap
        return () => {
            // Yükleme işlemleri iptal edilemez, ancak referansları temizleyebiliriz
            setImages([]);
            setImagesLoaded(false);
            setLoadedCount(0);
        };
    }, []);

    // Yükleme ekranı
    if (!images.length) {
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
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            loop={true}
            className="h-full w-full"
            preloadImages={false}
            updateOnImagesReady={true}
        >
            {images.map((image, index) => {
                const slideInfo = slideData.find(slide => slide.src === image) || {};

                return (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={slideInfo.alt || `Slide ${index + 1}`}
                            className="h-full w-full object-cover"
                            loading="eager"
                            decoding="async"
                            fetchpriority={index === 0 ? "high" : "auto"}
                            onLoad={() => {
                                // Görsel yüklendiğinde Swiper'ı güncelle
                                if (swiperRef.current?.swiper) {
                                    swiperRef.current.swiper.update();
                                }
                            }}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default SliderBg;