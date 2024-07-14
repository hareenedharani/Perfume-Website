import React, { useState, useEffect } from 'react';
import productImage from '../Assets/gaya.jpeg';

const Productdata = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Map the response data to match your expected Productdata structure
        const formattedProducts = data.map(product => ({
          id: product.id,
          name: product.name,
          imgSrc: product.images && product.images.length > 0 ? product.images[0] : productImage, // Use default image or first image from API
          price: product.parameters && product.parameters.length > 0 ? product.parameters[0].price : 0,
          sizes: ['S', 'M', 'L'] // Assuming sizes are fixed or retrieved from API
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

export default Productdata;