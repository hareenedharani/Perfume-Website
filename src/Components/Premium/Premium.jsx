import React, { useState } from 'react';
import './Premium.css';
import product2 from '../Assets/product_2.jpg';
import banner from '../Assets/femiga-logo.png';

const Premium = () => {
  const products = [
    { id: 1, name: 'Coconut Passion', price: '$20', size: '100ml', imgSrc: product2 },
    { id: 2, name: 'Bloom', price: '$25', size: '200ml', imgSrc: product2 },
    { id: 3, name: 'Mango Temptation', price: '$30', size: '150ml', imgSrc: product2 },
    { id: 4, name: 'Bombshell', price: '$30', size: '150ml', imgSrc: product2 },
    { id: 5, name: 'oriental', price: '$20', size: '100ml', imgSrc: product2 },
    { id: 6, name: ' Gucci', price: '$25', size: '200ml', imgSrc: product2 },
    { id: 7, name: 'pinky ', price: '$30', size: '150ml', imgSrc: product2 },
    { id: 8, name: 'bloom', price: '$30', size: '150ml', imgSrc: product2 },
    { id: 9, name: 'Angel Gold', price: '$20', size: '100ml', imgSrc: product2 },
    { id: 10, name: 'Heavenly', price: '$25', size: '200ml', imgSrc: product2 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (indexOfLastProduct < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="category-product">
      
      <div className="banner">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>
      <div className='backgrnd'>
      <div className="description">
        <h3 className='first-topic'>Premium Scents</h3>
    
      </div>

      
      <div className="filter-bestselling">
        <div>
          <button className="filter-button">Filter</button>
        </div>
        <div>
          <button className="best-selling-button">Best Selling</button>
        </div>
      </div>

     
      <div className="product-grid1">
        {currentProducts.map((product, index) => (
          <div
            className={`product-card1 ${index % 2 === 0 ? 'grey-pr' : 'black-pr'}`}
            key={product.id}
          >
            <img src={product.imgSrc} alt={product.name} />
            <div className='name-add1'>
              <div>
                <h2>{product.name}</h2>
                <p className="price-tag"><span className="label">Price: </span>{product.price}</p>
                <p className="size-tag"><span className="label">Size: </span>{product.size}</p>
              </div>
              <div>
                <button className="add-to-bag1">Add to bag</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="pagination">
      <div> <button onClick={prevPage} disabled={currentPage === 1} className='prev'>Previous</button></div> 
    <div>   <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>Next</button></div> 
      </div>

      </div>

      
      
    </div>
  );
};

export default Premium;