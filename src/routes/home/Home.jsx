import React from 'react'
import Banner from '../../components/banner/Banner'
import Categories from '../../components/categories/Categories'
import MainProducts from '../../components/main-products/MainProducts'

const Home = () => {
  return (
    <>
      <main>
        <Banner/>
        <MainProducts/>
      </main>
    </>
  )
}

export default Home