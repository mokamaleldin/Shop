"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function SimpleSlider() {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]} // Include Autoplay module
            className="mySwiper flex justify-center items-center w-fit h-fit"
            autoplay={{
                delay: 10000, // 5 seconds
                disableOnInteraction: false, // Continue autoplay even after user interaction
                reverseDirection: true, // Switch slides in reverse order
            }}
            loop={true} // Make sure the slider loops infinitely
        >
            <SwiperSlide >
                <Image src={'/HomePage/imgHome1.png'} alt="img" width={3000} height={500} className="w-full" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={'/HomePage/imgHome2.png'} alt="img" width={3000} height={1200} className="w-full" />
            </SwiperSlide>
        </Swiper>
    );
}
