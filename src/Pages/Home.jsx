import React from 'react'
import { Carousel } from '../Components/Carousel/Carousel'
import { Carousel2 } from '../Components/Carousel2/Carousel2'
import Product from '../Components/Product/Product'
import Bestselling from '../Components/Bestselling/Bestselling'
import Category from '../Components/Category/Category'


const Home = () => {
  return (
    <div>
      <Carousel/>
      <Product/>
      <Carousel2/>
      <Bestselling/>
      <Category/>
    </div>
  )
}

export default Home
