"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import products from "@/app/static/products";
import Card from "../Card/Card";
import Image from "next/image";

export default function SimpleSlider() {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper flex justify-center items-center w-fit h-fit">
            <SwiperSlide >
                <Image src={'/HomePage/imgHome1.png'} alt="img" width={3000} height={500} className="w-full" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={'/HomePage/imgHome2.png'} alt="img" width={3000} height={1200} className="w-full" />
            </SwiperSlide>
        </Swiper>
    );
}
