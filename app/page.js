import React from 'react'
import Banner from '@/components/Home/Banner'
import Cta from '@/components/Home/Cta'
import HomeDetails from '@/components/Home/HomeDetails'
import HomeProducts from '@/components/Home/HomeProducts'


const Home = () => {
  return (
    <>
      <Banner />
      <Cta />
      <HomeProducts />
      <HomeDetails />
    </>
  )
}

export default Home