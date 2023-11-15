"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";

const CarouselComp = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="w-full h-[400px] overflow-hidden">
            <img src="/images/banners/banner1.png" alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-[400px] overflow-hidden">
            <img src="/images/banners/banner2.png" alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-full h-[400px] overflow-hidden">
            <img src="/images/banners/banner3.png" alt="" className="w-full h-full object-cover"/>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
