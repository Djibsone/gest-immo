/*
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const PropertyCarousel = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}  // Change the delay as needed (3000ms = 3 seconds)
            className="mySwiper relative z-10"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Image ${index + 1}`} className="w-full max-h-[600px] object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PropertyCarousel;
*/

/*
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const PropertyCarousel = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false
            }}
            speed={5000} // Slower speed for a smoother transition
            loop={true}
            slidesPerView='auto'
            centeredSlides={true}
            className="mySwiper relative z-10"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} alt={`Image ${index + 1}`} className="w-full max-h-[600px] object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PropertyCarousel;
*/

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const PropertyCarousel = ({ images }) => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={10000}
            loop={true}
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={0}
            className="mySwiper relative z-10"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} alt={`Image ${index + 1}`} className="w-full max-h-[600px] object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PropertyCarousel;
