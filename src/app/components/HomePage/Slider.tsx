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
            modules={[Pagination, Autoplay]} // تضمين وحدة التمرير التلقائي
            autoplay={{
                delay: 10000, // التأخير بين الشرائح هو 10 ثوانٍ
                disableOnInteraction: false, // الاستمرار في التمرير التلقائي حتى بعد تفاعل المستخدم
                reverseDirection: true, // تغيير الشرائح بترتيب عكسي (من 1 إلى 2، ثم من 2 إلى 1)
            }}
            loop={true} // التأكد من أن السلايدر يتكرر بشكل غير محدود
        >
            <SwiperSlide >
                <Image loading="eager" src={'/HomePage/imgHome1.png'} layout="responsive" alt="img" width={3000} height={500} />
            </SwiperSlide>
            <SwiperSlide >
                <Image loading="eager" src={'/HomePage/imgHome2.png'} layout="responsive" alt="img" width={3000} height={1200} />
            </SwiperSlide>
        </Swiper>
    );
}
