"use client"
import React from 'react';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BannerSlider } from '@/config/BannerSlider';


export default function Banner() {
    return (
        <>
            <Swiper
                effect={"fade"}
                navigation={true}
                grabCursor={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className='mySwiper h-[50vh] sm:h-[75vh]'
            >
                {
                    BannerSlider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full">
                                <Image
                                    src={item.bannerUrl}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition={item.objectPosition}
                                    priority={true}
                                />
                                <div className='absolute top-0 left-0 h-full flex flex-col justify-center items-start w-[54%] md:w-[45%] gap-5 pl-4 md:pl-20 z-10'>
                                    <h1 className='text-lg md:text-5xl font-bold'>{item.title}</h1>
                                    <h2 className='text-sm md:text-lg'>{item.description}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

