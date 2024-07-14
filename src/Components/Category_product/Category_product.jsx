
// import React, { useContext, useState, useEffect } from 'react';
// import './Category_product.css';
// import banner from '../Assets/banner_1.png';
// import ProductDetail from '../ProductDetail/ProductDetail';
// import { BagContext } from '../../context/BagContext';

// const Category_product = ({ categoryId }) => {
//   const { addToBag, notification } = useContext(BagContext);
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/categories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data.product_ids || []); // Ensure products is always an array
//       } catch (error) {
//         console.log('Error fetching products:', error);
//         setError('Failed to load products. Please try again later.');
//       }
//     };

//     fetchProducts();
//   }, [categoryId]);

//   const productsPerPage = 8;
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const nextPage = () => {
//     if (products && indexOfLastProduct < products.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedSize(null); // Reset selected size when clicking on a new product
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleBackToProducts = () => {
//     setSelectedProduct(null);
//     setSelectedSize(null);
//   };

//   const handleAddToBag = (e, product) => {
//     e.stopPropagation();
//     if (product && selectedSize) {
//       addToBag({ ...product, size: selectedSize });
//       // Optional: Add notification or feedback that the product was added to bag
//       alert(`${product.name} (Size: ${selectedSize}) added to bag.`);
//     } else {
//       alert('Please select a size before adding to bag.');
//     }
//   };

//   return (
//     <div className="category-product">
//       {notification && <div className="notification">{notification}</div>}
//       {selectedProduct ? (
//         <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
//       ) : (
//         <>
//           <div className="banner">
//             <img src={banner} alt="Banner" className="banner-image" />
//           </div>

//           <div className="description">
//             <h3 className='first-topic'>Fresh scents you love, for less!</h3>
//             <h3>Everyday fragrances inspired by familiar favorites.</h3>
//           </div>

//           <div className="filter-bestselling">
//             <div>
//               <button className="filter-button">Filter</button>
//             </div>
//             <div>
//               <button className="best-selling-button">Best Selling</button>
//             </div>
//           </div>

//           {error ? (
//             <div className="error-message">{error}</div>
//           ) : (
//             <div className="product-grid2">
//            {currentProducts.map((product, index) => (
//   <div
//     key={product.id}
//     // className={`product-card1 ${index % 2 === 0 ? 'grey' : 'black'}`}
//     onClick={() => handleProductClick(product)}
//   >
//     <img src={product.images} alt={product.name} /> {/* Displaying the first image as an example */}
//     <div className='name-add1'>
//       <div>
//         <h2>{product.name}</h2>
//         <p className="price-tag"><span className="label">Price: </span>{product.price}</p>
//       </div>
//       <div>
//         <button
//           className="add-to-bag1"
//           onClick={(e) => handleAddToBag(e, product)}
//         >
//           Add to bag
//         </button>
//       </div>
//     </div>
//   </div>
// ))}

//             </div>
//           )}

//           <div className="pagination">
//             <button onClick={prevPage} disabled={currentPage === 1} className='prev'>Previous</button>
//             <button onClick={nextPage} disabled={products && indexOfLastProduct >= products.length}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Category_product;

// import React, { useContext, useState } from 'react';
// import './Category_product.css';
// import banner from '../Assets/banner_1.png';
// import products from '../Productdata/Productdata';
// import ProductDetail from '../ProductDetail/ProductDetail';
// import { BagContext } from '../../context/BagContext';

// const Category_product = () => {
//   const { addToBag, notification } = useContext(BagContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);

//   const productsPerPage = 8;
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const nextPage = () => {
//     if (indexOfLastProduct < products.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedSize(null); // Reset selected size when clicking on a new product
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleBackToProducts = () => {
//     setSelectedProduct(null);
//     setSelectedSize(null);
//   };

//   const handleAddToBag = () => {
//     if (selectedProduct && selectedSize) {
//       addToBag({ ...selectedProduct, size: selectedSize });
//       // Optional: Add notification or feedback that the product was added to bag
//       alert(`${selectedProduct.name} (Size: ${selectedSize}) added to bag.`);
//     } else {
//       alert('Please select a size before adding to bag.');
//     }
//   };

//   return (
//     <div className="category-product">
//       {notification && <div className="notification">{notification}</div>}
//       {selectedProduct ? (
//         <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
//       ) : (
//         <>
//           <div className="banner">
//             <img src={banner} alt="Banner" className="banner-image" />
//           </div>

//           <div className="description">
//             <h3 className='first-topic'>Fresh scents you love, for less!</h3>
//             <h3>Everyday fragrances inspired by familiar favorites.</h3>
//           </div>

//           <div className="filter-bestselling">
//             <div>
//               <button className="filter-button">Filter</button>
//             </div>
//             <div>
//               <button className="best-selling-button">BestSelling</button>
//             </div>
//           </div>

//           <div className="product-grid2">
//             {currentProducts.map((product, index) => (
//               <div
//                 key={product.id}
//                 className={`product-card1 ${index % 2 === 0 ? 'grey' : 'black'}`}
//                 onClick={() => handleProductClick(product)}
//               >
//                 <img src={product.imgSrc} alt={product.name} />
//                 <div className='name-add1'>
//                   <div>
//                     <h2>{product.name}</h2>
//                     <p className="price-tag"><span className="label">Price: </span>{product.price}</p>
//                   </div>
//                   <div>
                    
//                     <button className="add-to-bag1" onClick={handleAddToBag}>Add to bag</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="pagination">
//             <button onClick={prevPage} disabled={currentPage === 1} className='prev'>Previous</button>
//             <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Category_product;
// import React, { useContext, useState, useEffect } from 'react';
// import './Category_product.css';
// import banner from '../Assets/banner_1.png';
// import ProductDetail from '../ProductDetail/ProductDetail';
// import { BagContext } from '../../context/BagContext';

// const Category_product = ({ categoryId }) => {
//   const { addToBag, notification } = useContext(BagContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   const productsPerPage = 8;
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/categories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.log('Error fetching category products:', error);
//         setError('Failed to load products. Please try again later.');
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryId]);

//   const nextPage = () => {
//     if (indexOfLastProduct < products.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedSize(null); // Reset selected size when clicking on a new product
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleBackToProducts = () => {
//     setSelectedProduct(null);
//     setSelectedSize(null);
//   };

//   const handleAddToBag = () => {
//     if (selectedProduct && selectedSize) {
//       addToBag({ ...selectedProduct, size: selectedSize });
//       alert(`${selectedProduct.name} (Size: ${selectedSize}) added to bag.`);
//     } else {
//       alert('Please select a size before adding to bag.');
//     }
//   };

//   return (
//     <div className="category-product">
//       {notification && <div className="notification">{notification}</div>}
//       {selectedProduct ? (
//         <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
//       ) : (
//         <>
//           <div className="banner">
//             <img src={banner} alt="Banner" className="banner-image" />
//           </div>

//           <div className="description">
//             <h3 className='first-topic'>Fresh scents you love, for less!</h3>
//             <h3>Everyday fragrances inspired by familiar favorites.</h3>
//           </div>

//           <div className="filter-bestselling">
//             <div>
//               <button className="filter-button">Filter</button>
//             </div>
//             <div>
//               <button className="best-selling-button">BestSelling</button>
//             </div>
//           </div>

//           <div className="product-grid2">
//             {currentProducts.map((product, index) => (
//               <div
//                 key={product.id}
//                 className={`product-card1 ${index % 2 === 0 ? 'grey' : 'black'}`}
//                 onClick={() => handleProductClick(product)}
//               >
//                 <img src={product.images} alt={product.name} />
//                 <div className='name-add1'>
//                   <div>
//                     <h2>{product.name}</h2>
//                     <p className="price-tag"><span className="label">Price: </span>{product.price}</p>
//                   </div>
//                   <div>
//                     <button className="add-to-bag1" onClick={handleAddToBag}>Add to bag</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="pagination">
//             <button onClick={prevPage} disabled={currentPage === 1} className='prev'>Previous</button>
//             <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Category_product;
// import React, { useContext, useState, useEffect } from 'react';
// import './Category_product.css';
// import banner from '../Assets/banner_1.png';
// import ProductDetail from '../ProductDetail/ProductDetail';
// import { BagContext } from '../../context/BagContext';

// const Category_product = ({ categoryId }) => {
//   const { addToBag, notification } = useContext(BagContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   const productsPerPage = 8;
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/categories/${categoryId}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         console.log('Error fetching category products:', error);
//         setError('Failed to load products. Please try again later.');
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryId]);

//   const nextPage = () => {
//     if (indexOfLastProduct < products.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedSize(null); // Reset selected size when clicking on a new product
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   const handleBackToProducts = () => {
//     setSelectedProduct(null);
//     setSelectedSize(null);
//   };

//   const handleAddToBag = () => {
//     if (selectedProduct && selectedSize) {
//       addToBag({ ...selectedProduct, size: selectedSize });
//       alert(`${selectedProduct.name} (Size: ${selectedSize}) added to bag.`);
//     } else {
//       alert('Please select a size before adding to bag.');
//     }
//   };

//   return (
//     <div className="category-product">
//       {notification && <div className="notification">{notification}</div>}
//       {selectedProduct ? (
//         <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
//       ) : (
//         <>
//           <div className="banner">
//             <img src={banner} alt="Banner" className="banner-image" />
//           </div>

//           <div className="description">
//             <h3 className='first-topic'>Fresh scents you love, for less!</h3>
//             <h3>Everyday fragrances inspired by familiar favorites.</h3>
//           </div>

//           <div className="filter-bestselling">
//             <div>
//               <button className="filter-button">Filter</button>
//             </div>
//             <div>
//               <button className="best-selling-button">BestSelling</button>
//             </div>
//           </div>

//           <div className="product-grid2">
//             {error ? (
//               <p className="error-message">{error}</p>
//             ) : (
//               currentProducts.map((product, index) => {
//                 // Extract the price from the first parameter or default to product price
//                 const price = product.parameters.length > 0 
//                   ? product.parameters[0].price 
//                   : product.price;
                  
//                 return (
//                   <div
//                     key={product.id}
//                     className={`product-card1 ${index % 2 === 0 ? 'grey' : 'black'}`}
//                     onClick={() => handleProductClick(product)}
//                   >
//                     <img src={product.images ? product.images[0] : 'default-image-path.jpg'} alt={product.name} />
//                     <div className='name-add1'>
//                       <div>
//                         <h2>{product.name}</h2>
//                         <p className="price-tag"><span className="label">Price: </span>{price}</p>
//                       </div>
//                       <div>
//                         <button className="add-to-bag1" onClick={handleAddToBag}>Add to bag</button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>

//           <div className="pagination">
//             <button onClick={prevPage} disabled={currentPage === 1} className='prev'>Previous</button>
//             <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Category_product;
import React, { useContext, useState, useEffect } from 'react';
import './Category_product.css';
import banner from '../Assets/banner_1.png';
import ProductDetail from '../ProductDetail/ProductDetail';
import { BagContext } from '../../context/BagContext';

const Category_product = ({ categoryId }) => {
  const { addToBag, notification } = useContext(BagContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${categoryId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log('Error fetching category products:', error);
        setError('Failed to load products. Please try again later.');
      }
    };

    fetchCategoryProducts();
  }, [categoryId]);

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

  const handleProductClick = (product) => {
    setSelectedProduct({ ...product, price: getProductPrice(product) }); // Pass product price
    setSelectedSize(null); // Reset selected size when clicking on a new product
  };

  const getProductPrice = (product) => {
    // Extract the price from the first parameter or default to product price
    return product.parameters.length > 0 ? product.parameters[0].price : product.price;
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  const handleAddToBag = () => {
    if (selectedProduct && selectedSize) {
      addToBag({ ...selectedProduct, size: selectedSize });
      alert(`${selectedProduct.name} (Size: ${selectedSize}) added to bag.`);
    } else {
      alert('Please select a size before adding to bag.');
    }
  };

  return (
    <div className="category-product">
      {notification && <div className="notification">{notification}</div>}
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
      ) : (
        <>
          <div className="banner">
            <img src={banner} alt="Banner" className="banner-image" />
          </div>

          <div className="description">
            <h3 className='first-topic'>Fresh scents you love, for less!</h3>
            <h3>Everyday fragrances inspired by familiar favorites.</h3>
          </div>

          <div className="filter-bestselling">
            <div>
              <button className="filter-button">Filter</button>
            </div>
            <div>
              <button className="best-selling-button">BestSelling</button>
            </div>
          </div>

          <div className="product-grid2">
            {error ? (
              <p className="error-message">{error}</p>
            ) : (
              currentProducts.map((product, index) => {
                const price = getProductPrice(product); // Get the product price

                return (
                  <div
                    key={product.id}
                    className={`product-card1 ${index % 2 === 0 ? 'grey' : 'black'}`}
                    onClick={() => handleProductClick(product)}
                  >
                    <img src={product.images ? product.images[0] : 'default-image-path.jpg'} alt={product.name} />
                    <div className='name-add1'>
                      <div>
                        <h2>{product.name}</h2>
                        <p className="price-tag"><span className="label">Price: </span>{price}</p>
                      </div>
                      <div>
                        <button className="add-to-bag1" onClick={handleAddToBag}>Add to bag</button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1} className='prev'>Previous</button>
            <button onClick={nextPage} disabled={indexOfLastProduct >= products.length}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Category_product;
