// src/components/CarruselComponent.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../assets/Images/img_1.jpg";
import slide2 from "../assets/Images/img_2.jpg";
import slide3 from "../assets/Images/img_3.jpg";

const CarruselComponent = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Galería</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        style={{ padding: "2rem 0" }}
      >
        <SwiperSlide style={{ width: "300px", height: "400px" }}>
          <img
            src={slide1}
            alt="slide 1"
            style={{ width: "100%", height: "100%", borderRadius: "1rem", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px", height: "400px" }}>
          <img
            src={slide2}
            alt="slide 2"
            style={{ width: "100%", height: "100%", borderRadius: "1rem", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "300px", height: "400px" }}>
          <img
            src={slide3}
            alt="slide 3"
            style={{ width: "100%", height: "100%", borderRadius: "1rem", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarruselComponent;
