"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CtaBannerSliders } from '@/config/BannerSlider';

export default function Banner() {
    return (
        <>
            <Swiper
                effect={"fade"}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                loop={true}
                grabCursor={true}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className='mySwiper h-[60vh]'
            >
                {
                    CtaBannerSliders.map((item, index) => (
                        <SwiperSlide key={index} className='h-full bg-cover bg-[69%] md:bg-center w-screen' style={{ backgroundImage: `url(${item.bannerUrl})` }}>
                            <div className='h-full flex flex-col justify-center items-start w-[54%] md:w-[45%] gap-5 pl-4 md:pl-20'>
                                <h1 className='text-lg md:text-5xl font-bold'>{item.title}</h1>
                                <h2 className='text-sm md:text-lg'>{item.description}</h2>
                                {/* <button className='bg-black text-white px-4 py-2 transition-colors duration-500 border border-black hover:bg-transparent hover:text-black'>Get <span className='hidden sm:inline'>Your Perfect</span> Price</button> */}
                                {/* <Button text="Get Perfect Price" icon={<i className="ri-file-text-line mr-1"></i>} /> */}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
