"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Card from "./Card";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import CardSkeleton from "../../Skeleton/CardSkeleton";
import Link from "next/link";

export default function CardList({ title, data, status ,query,type}) {
  const tempArr = [{}, {}, {}, {}, {}];
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="w-full flex flex-col py-2 px-4 gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-medium">{title}</div>
        <div className="flex gap-4">
          <div className="flex items-center">
            {/* <div className="w-[10vw] h-[5px] rounded-lg bg-grey ">
              <div style={{width:(swiperRef?.progress*100).toString()+'%'}} className={`h-full bg-greyLight rounded-lg`}></div>
            </div> */}
          </div>
          <div className="flex items-center gap-2">
            <div
              className="p-2 rounded-full border border-white text-2xl flex justify-center items-center w-fit h-fit"
              onClick={() => {
                console.log(swiperRef);
                swiperRef.slidePrev();
              }}
            >
              <FiArrowLeft />
            </div>
            <div
              className="p-2 rounded-full border border-white text-2xl flex justify-center items-center w-fit h-fit"
              onClick={() => {
                swiperRef.slideNext();
              }}
            >
              <FiArrowRight />
            </div>
          </div>
          <Link href={`/${query}`} className="text-lg px-4 py-2 rounded-lg bg-grey font-medium">
            View All
          </Link>
        </div>
      </div>

      <div
        className="w-full"
        onMouseEnter={() => {
          swiperRef?.autoplay?.pause();
        }}
        onMouseLeave={() => {
          swiperRef?.autoplay?.resume();
        }}
      >
        <Swiper
          spaceBetween={2}
          onSwiper={setSwiperRef}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={2.5}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 5.5,
              spaceBetween: 2,
            },
          }}
          //   className="p-10"
        >
          {status === "success" &&
            data?.map((e, i) => (
              <SwiperSlide key={i}>
                <Card data={e} type={type} />
              </SwiperSlide>
            ))}
          {status === "loading" &&
            tempArr.map((e, i) => (
              <SwiperSlide key={i}>
                <CardSkeleton key={i} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
