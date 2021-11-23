import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const slides = [
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img3.jpg",
  "/assets/img4.jpg",
];

const Hero = () => {



  return (

    <>
      <h1 className="hero_header">
        <span><img className="logo"
          src="/assets/icons8-food-as-resources-50.svg"
          alt="logo" />
        </span>
        Art of Bread </h1>
      <div className="container-photo">
        <Swiper navigation loop loopedSlides={1}>
          {slides.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img key={index} src={imgSrc} alt="pic1" className="photo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );

};
export default Hero;