import Banner from '@/components/Home/Banner'
import Cta from '@/components/Home/Cta'
import HomeDetails from '@/components/Home/HomeDetails'
import HomeProducts from '@/components/Home/HomeProducts'
import Testimonials from '@/components/Home/Testimonials'
import React from 'react'
// import LocomotiveScroll from 'locomotive-scroll';


const Home = () => {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Banner />
      <Cta />
      <HomeProducts />
      <Testimonials />
      <HomeDetails />
    </>
  )
}

export default Home