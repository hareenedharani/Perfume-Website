import React from 'react';
import './Product.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Productdata from '../Productdata/Productdata'; // Import Productdata

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.5
  }
};

const Product = () => {
  const products = Productdata();

  const productCards = products.map((item) => (
    <div className='card' key={item.id}>
      <img 
        className="product-image-sl" 
        src={item.imgSrc} 
        alt={item.name} 
        style={{ width: "130px", height: "130px" }} 
      />
      <div className="product-details-sl">
        <h3 className="product-name">{item.name}</h3>
        <p className="product-price">Price:   ₹{item.price}</p>
      </div>
    </div>
  ));

  return (
    <div className='Exclusive'>
      <h1 className="exclusive-title">OUR EXCLUSIVES</h1>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000} // Adjust this value to control the speed (milliseconds)
        responsive={responsive}
        showDots={false}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'superLargeDesktop']}
      >
        {productCards}
      </Carousel>
    </div>
  );
};

export default Product;
