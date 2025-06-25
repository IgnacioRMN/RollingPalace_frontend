import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "../styles/CarruselComponent.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/59/f3/c3/img-20201121-142543-largejpg.jpg?w=900&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c3/9c/02/caption.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/4c/e8/e8/caption.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/a7/caption.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/ab/caption.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/ab/caption.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/69/45/ac/caption.jpg?w=1100&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/db/0b/98/caption.jpg?w=1100&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/12/64/bf/caption.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/57/24/02/detalle-de-la-habitacion.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/59/f3/c0/img-20201122-094601-largejpg.jpg?w=900&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9d/db/ec/la-puesta-de-sol-no-esta.jpg?w=1400&h=-1&s=1" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9d/db/ee/escalera.jpg?w=1400&h=-1&s=1" alt="slide_image" />
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