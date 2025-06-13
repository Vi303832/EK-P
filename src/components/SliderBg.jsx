import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

const SliderBg = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const swiperRef = useRef(null);

    // Optimize edilmiş slider verisi - WebP format desteği ve farklı boyutlar
    const slideData = [
        {
            src: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_auto,q_auto,w_1920,h_1080/v1746959141/slide2_bnemt7.png",
            srcWebP: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_webp,q_auto,w_1920,h_1080/v1746959141/slide2_bnemt7.png",
            srcMobile: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_auto,q_auto,w_768,h_432/v1746959141/slide2_bnemt7.png",
            alt: "Slide 1",
            priority: "high" // İlk görsel için yüksek öncelik
        },
        {
            src: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_auto,q_auto,w_1920,h_1080/v1746959139/slide1_czoaq2.png",
            srcWebP: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_webp,q_auto,w_1920,h_1080/v1746959139/slide1_czoaq2.png",
            srcMobile: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_auto,q_auto,w_768,h_432/v1746959139/slide1_czoaq2.png",
            alt: "Slide 2",
            priority: "medium"
        },
        {
            src: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_auto,q_auto,w_1920,h_1080/v1746959138/slide3_dfkqkr.jpg",
            srcWebP: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_webp,q_auto,w_1920,h_1080/v1746959138/slide3_dfkqkr.jpg",
            srcMobile: "https://res.cloudinary.com/dwruhrrkm/image/upload/f_auto,q_auto,w_768,h_432/v1746959138/slide3_dfkqkr.jpg",
            alt: "Slide 3",
            priority: "medium"
        }
    ];

    // WebP desteğini kontrol et
    const supportsWebP = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Mobil cihaz kontrolü
    const isMobile = () => {
        return window.innerWidth <= 768;
    };

    // Görsel URL'sini optimize et
    const getOptimizedImageUrl = (slide) => {
        if (supportsWebP()) {
            return isMobile() ? slide.srcMobile : slide.srcWebP;
        }
        return isMobile() ? slide.srcMobile : slide.src;
    };

    // Preload stratejisi
    useEffect(() => {
        let isMounted = true;
        let loadedImages = 0;
        const totalImages = slideData.length;

        // İlk görseli hemen yükle (yüksek öncelik)
        const preloadFirstImage = () => {
            const firstSlide = slideData[0];
            const img = new Image();

            // İlk görsel için yüksek öncelik ayarları
            img.fetchPriority = "high";
            img.loading = "eager";
            img.decoding = "sync";

            img.onload = () => {
                if (isMounted) {
                    loadedImages++;
                    setLoadedCount(loadedImages);

                    // İlk görsel yüklendiğinde slider'ı başlat
                    if (loadedImages >= 1) {
                        setImagesLoaded(true);
                    }
                }
            };

            img.onerror = () => {
                if (isMounted) {
                    loadedImages++;
                    setLoadedCount(loadedImages);
                    if (loadedImages >= 1) {
                        setImagesLoaded(true);
                    }
                }
            };

            img.src = getOptimizedImageUrl(firstSlide);
        };

        // Diğer görselleri paralel olarak yükle
        const preloadRemainingImages = () => {
            slideData.slice(1).forEach((slide, index) => {
                const img = new Image();

                // Diğer görseller için optimize edilmiş ayarlar
                img.fetchPriority = "auto";
                img.loading = "lazy";
                img.decoding = "async";

                img.onload = () => {
                    if (isMounted) {
                        loadedImages++;
                        setLoadedCount(loadedImages);

                        // Tüm görseller yüklendiğinde
                        if (loadedImages >= totalImages) {
                            setImagesLoaded(true);
                        }
                    }
                };

                img.onerror = () => {
                    if (isMounted) {
                        loadedImages++;
                        setLoadedCount(loadedImages);
                        if (loadedImages >= totalImages) {
                            setImagesLoaded(true);
                        }
                    }
                };

                img.src = getOptimizedImageUrl(slide);
            });
        };

        // Preload işlemini başlat
        preloadFirstImage();

        // Kısa bir gecikme ile diğer görselleri yükle
        const timer = setTimeout(() => {
            preloadRemainingImages();
        }, 100);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    // Swiper'ın hazır olduğunda güncellenmesi
    const handleSwiperReady = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.update();
        }
    };

    // Yükleme ekranı - optimize edilmiş
    if (!imagesLoaded) {
        return (
            <div className="h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center">
                <div className="relative w-16 h-16 mb-4">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#EE1B24] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-r-transparent border-b-[#EE1B24] border-l-transparent rounded-full animate-spin animation-delay-500"></div>
                </div>
                <div className="text-white font-medium text-sm">
                    <span className="inline-block animate-pulse">Yükleniyor</span>
                    <span className="inline-block animate-pulse animation-delay-300">.</span>
                    <span className="inline-block animate-pulse animation-delay-600">.</span>
                    <span className="inline-block animate-pulse animation-delay-900">.</span>
                </div>
                <div className="mt-2 text-gray-400 text-xs">
                    {loadedCount}/{slideData.length} görsel yüklendi
                </div>
            </div>
        );
    }

    return (
        <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3
            }}
            spaceBetween={0}
            loop={true}
            speed={800}
            effect="fade"
            fadeEffect={{
                crossFade: true
            }}
            className="h-full w-full"
            onSwiper={handleSwiperReady}
            onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
            preloadImages={false}
            updateOnImagesReady={true}
            observer={true}
            observeParents={true}
        >
            {slideData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <picture>
                        {/* WebP formatı için source */}
                        <source
                            srcSet={slide.srcWebP}
                            type="image/webp"
                            media="(min-width: 769px)"
                        />
                        {/* Mobil için optimize edilmiş görsel */}
                        <source
                            srcSet={slide.srcMobile}
                            media="(max-width: 768px)"
                        />
                        {/* Fallback görsel */}
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding={index === 0 ? "sync" : "async"}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            onLoad={() => {
                                // Görsel yüklendiğinde Swiper'ı güncelle
                                if (swiperRef.current?.swiper) {
                                    swiperRef.current.swiper.update();
                                }
                            }}
                            onError={(e) => {
                                console.error(`Görsel yüklenemedi: ${slide.src}`);
                                // Fallback görsel yükleme hatası durumunda
                                e.target.style.display = 'none';
                            }}
                        />
                    </picture>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderBg; 