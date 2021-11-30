import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import getAssetPath from '../utils/getAssetPath';

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const slides = [
  getAssetPath('img1.jpg'),
  getAssetPath('img2.jpg'),
  getAssetPath('img3.jpg'),
  getAssetPath('img4.jpg'),
];

const Hero = () => {



  return (

    <>
      <h1 className="hero_header">
        <span><img className="logo"
          src={getAssetPath('icons8-food-as-resources-50.svg')}
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