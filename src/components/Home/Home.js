import React from 'react'
import CarouselImg from './carouselImg/CarouselImg'
import Popular from '../PopularMoviesPage/Popular'
import Footer from '../Footer/Footer'


export default function Home() {
  return (
    <section>
      <CarouselImg/>
      <Popular/>
      <Footer/>
    </section>
  )
}
