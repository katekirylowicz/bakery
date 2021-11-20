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

      <div className="container-photo">
        <Swiper navigation loop loopedSlides={1}>
          {slides.map((imgSrc) => (
            <SwiperSlide>
              <img src={imgSrc} alt="pic1" className="photo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );

};
export default Hero;