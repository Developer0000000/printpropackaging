"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export default function ProductSwiper({ images }) {
    return (
        <>
            <Swiper
                effect={"fade"}
                navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                grabCursor={true}
                slidesPerView={1}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className='mySwiper'
            >
                {
                    images.map((image,i) => (
                        <SwiperSlide key={i}>
                            <Image width={500} height={500} className="aspect-square h-full w-full rounded" alt="hero" src={urlFor(image).url()} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
