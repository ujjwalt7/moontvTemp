"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CarouselCard from "./CarouselCard";
import CarouselCardSkeleton from "../Skeleton/CarouselCardSkeleton";

export default function Carousel({ data, status }) {
  const tempArr = [{}, {}, {}, {}, {}];
  // console.log(data)

  const [swiperRef, setSwiperRef] = useState(null);
  // const swiper = useSwiper();
  return (
    <div className="w-full py-6 overflow-hidden relative justify-center items-center">
      <div
        className="h-full absolute top-0 text-gray-400 rounded-r-lg left-0 z-[2] px-5 flex items-center justify-center cursor-pointer"
        onClick={() => {
          swiperRef.slidePrev();
        }}
      >
        <div className="text-4xl">
          <FiArrowLeft />
        </div>
      </div>
      <div
        className="h-full absolute top-0 text-gray-400 rounded-r-lg right-0 z-[2] px-5 flex items-center justify-center cursor-pointer"
        onClick={() => {
          swiperRef.slideNext();
        }}
      >
        <div className="text-4xl">
          <FiArrowRight />
        </div>
      </div>

      {/* <div className='w-full grid grid-cols-[1fr_2.2fr_1fr] p-4 overflow-hidden relative justify-center items-center'> */}
      {/* 
        <div className="w-full aspect-video col-start-2 relative">
        
            <div className="absolute w-full h-full top-0 left-[-204%] rounded-lg bg-red-400 scale-90 "></div>
            <div className="absolute w-full h-full top-0 left-[-102%] rounded-lg bg-white scale-90 "></div>
            <div className="absolute w-full h-full top-0 left-0 rounded-lg bg-white "></div>
            <div className="absolute w-full h-full top-0 left-[102%] rounded-lg bg-white scale-90 "></div>
            <div className="absolute w-full h-full top-0 left-[204%] rounded-lg bg-yellow-600 scale-90 "></div>
        </div> */}
      <Swiper
        spaceBetween={1}
        onSwiper={setSwiperRef}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1.25}
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
        }}
        centeredSlides={true}
        // onSlideChange={() => console.log("slide change")}
        className="w-full max-h-fit"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        {status === "success" &&
          data?.map((e, i) => {
            return (
              <SwiperSlide
                // className="w-full lg:aspect-[3/1.3] md:aspect-[2/1] aspect-[1/1.4]"
                key={i}
              >
                {({ isActive }) => (
                  <CarouselCard data={e} isActive={isActive} />
                )}
              </SwiperSlide>
            );
          })}
        {status === "loading" &&
          tempArr.map((e, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => <CarouselCardSkeleton isActive={isActive} />}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
