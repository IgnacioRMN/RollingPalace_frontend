import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./CarruselComponent.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../assets/Images/img_1.jpg"
import slide_image_2 from "../assets/Images/img_2.jpg"
import slide_image_3 from "../assets/Images/img_3.jpg"
import slide_image_4 from "../assets/Images/img_4.jpg"
import slide_image_5 from "../assets/Images/img_5.jpg"
import slide_image_6 from "../assets/Images/img_6.jpg"
import slide_image_7 from "../assets/Images/img_7.jpg"
import slide_image_8 from "../assets/Images/img_8.jpg"
import slide_image_9 from "../assets/Images/img_9.jpg"
import slide_image_10 from "../assets/Images/img_10.jpg"
import slide_image_11 from "../assets/Images/img_11.jpg"
import slide_image_12 from "../assets/Images/img_12.jpg"
import slide_image_13 from "../assets/Images/img_13.jpg"
import slide_image_14 from "../assets/Images/img_14.jpg"
import slide_image_15 from "../assets/Images/img_15.jpg"
import slide_image_16 from "../assets/Images/img_16.jpg"
import slide_image_17 from "../assets/Images/img_17.jpg"
import slide_image_18 from "../assets/Images/img_18.jpg"


export const CarruselComponent = () => {
    return (
        <div className='container'>
            <h1 className='heading'>Galeria</h1>
            <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                loop
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={{ clickable: true }} // Cambio aquí
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_8} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_9} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_10} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_11} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_12} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_13} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_14} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_15} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_16} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_17} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_18} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default CarruselComponent;