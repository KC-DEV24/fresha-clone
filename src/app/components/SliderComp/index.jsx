'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const SliderComp = ({ children, ...rest}) => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                {...rest}
            >
                {children}
            </Swiper>
        </>
    )
}

export default SliderComp
