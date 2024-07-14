// import React, { useContext, useState } from 'react';
// import './ProductDetail.css';
// import { BagContext } from '../../context/BagContext';
// import { WishlistContext } from '../../context/WishlistContext';

// const ProductDetail = ({ product, onBack }) => {
//   const { addToBag, notification: bagNotification } = useContext(BagContext);
//   const { addToWishlist, notification: wishlistNotification } = useContext(WishlistContext);
//   const [selectedSize, setSelectedSize] = useState('');

//   const handleAddToBag = () => {
//     if (selectedSize) {
//       addToBag({ ...product, size: selectedSize });
//     } else {
//       alert('Please select a size before adding to the bag.');
//     }
//   };

//   return (
//     <div className="container1">
//       {bagNotification && <div className="notification">{bagNotification}</div>}
//       {wishlistNotification && <div className="notification">{wishlistNotification}</div>}
//       {/* <button onClick={onBack} className="back-button">Back to Products</button> */}
//       <div className="product-container">
//         <div className="image-carousel">
//           {/* <div className="right-side"> */}
//             <div className='main-image-container'>
//               <img src={product.imgSrc} alt={product.name} className="main-image" />
//               <div className="main-image-text">{product.name}</div>
//             </div>
//             <div className="icon-container">
//               <div className="extra-icon">
//                 <i className="fas fa-share icon"></i>
//                 <i className="fas fa-star icon" onClick={() => addToWishlist(product)}></i>
//               </div>
//             </div>
//           {/* </div> */}
//           <div className="thumbnail-container">
//             {[1, 2, 3].map((num) => (
//               <div key={num}>
//                 <img src={product.imgSrc} alt={product.name} className={`thumbnail-image${num}`} />
//                 <div className={`thumbnail-text${num}`}>{product.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="left-side">
//           <div className="product-details">
//             <p className="product-title">{product.name}</p>
//             <div className="price">
//               <label>Price:</label>
//               <p className="product-price">₹{product.price}</p>
//             </div>
//             <div className="product-gender">
//               <label>Size:</label>
//               <div className="gender">
//                 <button onClick={() => setSelectedSize('50ml')} className={`size-button ${selectedSize === '50ml' ? 'selected' : ''}`}>50ml</button>
//                 <button onClick={() => setSelectedSize('100ml')} className={`size-button ${selectedSize === '100ml' ? 'selected' : ''}`}>100ml</button>
//                 <button onClick={() => setSelectedSize('Pure oil')} className={`size-button ${selectedSize === 'Pure oil' ? 'selected' : ''}`}>Pure oil</button>
//               </div>
//             </div>
//             <div className="product-gender">
//               <label>Gender:</label>
//               <div className="gender">
//                 <button>Male</button>
//                 <button>Female</button>
//                 <button>Unisex</button>
//               </div>
//             </div>
//             <div className="product-gender1">
//               <div className="gender">
//                 <button>Buy Now</button>
//                 <button onClick={handleAddToBag}>Add To Bag</button>
//               </div>
//             </div>
//           </div>
//           <div className="product-description">
//             <h1 className="prod-title">Product descriptions</h1>
//             <p>{product.name} by Victoria’s Secret is a Floral Fruity Gourmand fragrance for women. {product.name} is a sensual blend of vanilla, coconut, and lily-of-the-valley.</p>
//           </div>
//           <div className="product-reviews">
//             <h1 className="customer">Customer Reviews :</h1>
//             <div className="review">
//               <div className="review-score">
//                 <span>4.1 ★</span>
//               </div>
//               <div className="review-bar">
//                 <div className="review-row">
//                   <span>5 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '78%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>4 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '56%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>3 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '30%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>2 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '10%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>1 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '5%' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="total-review">Total review 139</div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// import React, { useContext, useState } from 'react';
// import './ProductDetail.css';
// import { BagContext } from '../../context/BagContext';
// import { WishlistContext } from '../../context/WishlistContext';

// const ProductDetail = ({ product, onBack }) => {
//   const { addToBag, notification: bagNotification } = useContext(BagContext);
//   const { addToWishlist, notification: wishlistNotification } = useContext(WishlistContext);
//   const [selectedSize, setSelectedSize] = useState('');

//   const handleAddToBag = () => {
//     if (selectedSize) {
//       addToBag({ ...product, size: selectedSize });
//     } else {
//       alert('Please select a size before adding to the bag.');
//     }
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist(product);
//   };

//   // Function to get the default price
//   const getDefaultPrice = () => {
//     // Check if parameters exist and return the first parameter's price as default
//     if (product.parameters && product.parameters.length > 0) {
//       return product.parameters[0].price;
//     }
//     // Default to product price if no parameters
//     return product.price;
//   };

//   // Function to calculate the correct price based on selected size
//   const getPrice = (selectedSize) => {
//     // Default to product price if no parameters or selectedSize is null
//     if (!product.parameters || !selectedSize) {
//       return product.price;
//     }

//     // Find the matching parameter and return its price
//     const parameter = product.parameters.find(param => param.name === selectedSize);
//     return parameter ? parameter.price : product.price;
//   };

//   return (
//     <div className="container">
//       {bagNotification && <div className="notification">{bagNotification}</div>}
//       {wishlistNotification && <div className="notification">{wishlistNotification}</div>}
//       <button onClick={onBack} className="back-button">Back to Products</button>
//       <div className="product-container">
//         <div className="image-carousel">
//           <div className="right-side">
//             <div className='main-image-container'>
//               <img src={product.images[0]} alt={product.name} className="main-image" />
//               <div className="main-image-text">{product.name}</div>
//             </div>
//             <div className="icon-container">
//               <div className="extra-icon">
//                 <i className="fas fa-share icon"></i>
//                 <i className="fas fa-star icon" onClick={handleAddToWishlist}></i>
//               </div>
//             </div>
//           </div>
//           <div className="thumbnail-container">
//             {product.images.slice(1, 4).map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={product.name} className={`thumbnail-image${index + 1}`} />
//                 <div className={`thumbnail-text${index + 1}`}>{product.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="left-side">
//           <div className="product-details">
//             <p className="product-title">{product.name}</p>
//             <div className="price">
//               <label>Price:</label>
//               <p className="product-price">₹{getPrice(selectedSize)}</p>
//             </div>
//             <div className="product-gender">
//               <label>Size:</label>
//               <div className="gender">
//                 {product.parameters && product.parameters.map((param, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedSize(param.name)}
//                     className={`size-button ${selectedSize === param.name ? 'selected' : ''}`}
//                   >
//                     {param.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="product-gender">
//               <label>Gender:</label>
//               <div className="gender">
//                 <button>Male</button>
//                 <button>Female</button>
//                 <button>Unisex</button>
//               </div>
//             </div>
//             <div className="product-gender1">
//               <div className="gender">
//                 <button>Buy Now</button>
//                 <button onClick={handleAddToBag}>Add To Bag</button>
//               </div>
//             </div>
//           </div>
//           <div className="product-description">
//             <h1 className="prod-title">Product descriptions</h1>
//             <p>{product.description}</p>
//           </div>
//           <div className="product-reviews">
//             <h1 className="customer">Customer Reviews :</h1>
//             <div className="review">
//               <div className="review-score">
//                 <span>4.1 ★</span>
//               </div>
//               <div className="review-bar">
//                 <div className="review-row">
//                   <span>5 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '78%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>4 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '56%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>3 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '30%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>2 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '10%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>1 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '5%' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// import React, { useState, useContext } from 'react';
// import './ProductDetail.css';
// import { BagContext } from '../../context/BagContext';
// import { WishlistContext } from '../../context/WishlistContext';
// import { useHistory } from 'react-router-dom';

// const ProductDetail = ({ product, onBack }) => {
//   const { addToBag, notification: bagNotification } = useContext(BagContext);
//   const { addToWishlist, notification: wishlistNotification } = useContext(WishlistContext);
//   const [selectedSize, setSelectedSize] = useState('');
//   // const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity
//   const history = useHistory();

//   const handleAddToBag = () => {
//     if (selectedSize) {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         alert('Please log in to add to bag.');
//         history.push('/login');
//         return;
//       }

//       console.log('Token:', token); // Log token to verify

//       const bagPayload = {
//         product_id: product.id,
//         quantity: 1
//       };

//       fetch('http://localhost:3000/cart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(bagPayload)
//       })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Failed to add to bag');
//       })
//       .then(data => {
//         addToBag({ ...product, size: selectedSize, quantity: 1 }); // Assuming addToBag updates the context with the product
//         console.log('Product added to bag:', data);
//         alert('Product added to bag successfully');
//       })
//       .catch(error => {
//         console.error('Error adding to bag:', error);
//         alert('Failed to add product to bag');
//       });
//     } else {
//       alert('Please select a size before adding to the bag.');
//     }
//   };

//   const handleAddToWishlist = () => {
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       alert('Please log in to add to wishlist.');
//       history.push('/login');
//       return;
//     }
  
//     console.log('Token:', token); // Log token to verify
    
//     const wishlistPayload = {
//       product_id: product.id,
//       qty: 1
//     };
  
//     fetch('http://localhost:3000/Wishlist', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(wishlistPayload)
//     })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Failed to add to wishlist');
//     })
//     .then(data => {
//       addToWishlist(product); // Assuming addToWishlist updates the context with the product
//       console.log('Product added to wishlist:', data);
//       alert('Product added to wishlist successfully');
//     })
//     .catch(error => {
//       console.error('Error adding to wishlist:', error);
//       alert('Failed to add product to wishlist');
//     });
//   };
  
//   return (
//     <div className="container">
//       {bagNotification && <div className="notification">{bagNotification}</div>}
//       {wishlistNotification && <div className="notification">{wishlistNotification}</div>}
//       <button onClick={onBack} className="back-button">Back to Products</button>
//       <div className="product-container">
//         <div className="image-carousel">
//           <div className="right-side">
//             <div className='main-image-container'>
//               <img src={product.images[0]} alt={product.name} className="main-image" />
//               <div className="main-image-text">{product.name}</div>
//             </div>
//             <div className="icon-container">
//               <div className="extra-icon">
//                 <i className="fas fa-share icon"></i>
//                 <i className="fas fa-star icon" onClick={handleAddToWishlist}></i>
//               </div>
//             </div>
//           </div>
//           <div className="thumbnail-container">
//             {[1, 2, 3].map((num) => (
//               <div key={num}>
//                 <img src={product.images} alt={product.name} className={`thumbnail-image${num}`} />
//                 <div className={`thumbnail-text${num}`}>{product.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="left-side">
//           <div className="product-details">
//             <p className="product-title">{product.name}</p>
//             <div className="price">
//               <label>Price:</label>
//               <p className="product-price">₹{product.price}</p> {/* Display the passed price */}
//             </div>
//             <div className="product-gender">
//               <label>Volume:</label>
//               <div className="gender">
//                 {product.parameters && product.parameters.map((param, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedSize(param.value)}
//                     className={`size-button ${selectedSize === param.value ? 'selected' : ''}`}
//                   >
//                     {param.value}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="product-gender1">
//               <div className="gender">
//                 <button onClick={handleAddToBag}>Add To Bag</button>
//               </div>
//             </div>
//           </div>
//           <div className="product-description">
//             <h1 className="prod-title">Product descriptions</h1>
//             <p>{product.description}</p>
//           </div>
//           <div className="product-reviews">
//             <h1 className="customer">Customer Reviews :</h1>
//             <div className="review">
//               <div className="review-score">
//                 <span>4.1 ★</span>
//               </div>
//               <div className="review-bar">
//                 <div className="review-row">
//                   <span>5 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '78%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>4 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '56%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>3 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '30%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>2 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '10%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>1 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '5%' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;




// import React, { useContext, useState } from 'react';
// import './ProductDetail.css';
// import { BagContext } from '../../context/BagContext';
// import { WishlistContext } from '../../context/WishlistContext';

// const ProductDetail = ({ product, onBack }) => {
//   const { addToBag, notification: bagNotification } = useContext(BagContext);
//   const { addToWishlist, notification: wishlistNotification } = useContext(WishlistContext);
//   const [selectedSize, setSelectedSize] = useState('');

//   const handleAddToBag = () => {
//     if (selectedSize) {
//       addToBag({ ...product, size: selectedSize });
//     } else {
//       alert('Please select a size before adding to the bag.');
//     }
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist(product);
//   };

//   return (
//     <div className="container">
//       {bagNotification && <div className="notification">{bagNotification}</div>}
//       {wishlistNotification && <div className="notification">{wishlistNotification}</div>}
//       <button onClick={onBack} className="back-button">Back to Products</button>
//       <div className="product-container">
//         <div className="image-carousel">
//           <div className="right-side">
//             <div className='main-image-container'>
//               <img src={product.images[0]} alt={product.name} className="main-image" />
//               <div className="main-image-text">{product.name}</div>
//             </div>
//             <div className="icon-container">
//               <div className="extra-icon">
//                 <i className="fas fa-share icon"></i>
//                 <i className="fas fa-star icon" onClick={handleAddToWishlist}></i>
//               </div>
//             </div>  
//           </div>
//           <div className="thumbnail-container">
//             {[1, 2, 3].map((num) => (
//               <div key={num}>
//                 <img src={product.images[num - 1]} alt={product.name} className={`thumbnail-image ${num}`} />
//                 {/* <div className={`thumbnail-text${num}`}>{product.name}</div> */}
//               </div>
//             ))}
//           </div>   
//         </div>
//         <div className="left-side">
//           <div className="product-details">
//             <p className="product-title">{product.name}</p>
//             <div className="price">
//               <label>Price:</label>
//               <p className="product-price">₹{product.price}</p> {/* Display the passed price */}
//             </div>
//             <div className="product-gender">
//               <label>Size:</label>
//               <div className="gender">
//                 {product.parameters && product.parameters.map((param, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedSize(param.name)}
//                     className={`size-button ${selectedSize === param.name ? 'selected' : ''}`}
//                   >
//                     {param.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div className="product-gender">
//               <label>Gender:</label>
//               <div className="gender">
//                 <button>Male</button>
//                 <button>Female</button>
//                 <button>Unisex</button>
//               </div>
//             </div>
//             <div className="product-gender1">
//               <div className="gender">
//                 <button>Buy Now</button>
//                 <button onClick={handleAddToBag}>Add To Bag</button>
//               </div>
//             </div>
//           </div>
//           <div className="product-description">
//             <h1 className="prod-title">Product descriptions</h1>
//             <p>{product.description}</p>
//           </div>
//           <div className="product-reviews">
//             <h1 className="customer">Customer Reviews :</h1>
//             <div className="review">
//               <div className="review-score">
//                 <span>4.1 ★</span>
//               </div>
//               <div className="review-bar">
//                 <div className="review-row">
//                   <span>5 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '78%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>4 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '56%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>3 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '30%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>2 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '10%' }}></div>
//                   </div>
//                 </div>
//                 <div className="review-row">
//                   <span>1 ★</span>
//                   <div className="bar">
//                     <div className="filled-bar" style={{ width: '5%' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useState, useContext } from 'react';
import './ProductDetail.css';
import { BagContext } from '../../context/BagContext';
import { WishlistContext } from '../../context/WishlistContext';
import { useHistory } from 'react-router-dom';

const ProductDetail = ({ product, onBack }) => {
  const { addToBag, notification: bagNotification } = useContext(BagContext);
  const { addToWishlist, notification: wishlistNotification } = useContext(WishlistContext);
  const [selectedSize, setSelectedSize] = useState('');
  const history = useHistory();
  const handleBuyNow = () => {
    if (selectedSize) {
      const productToCheckout = { ...product, size: selectedSize };
      history.push({
        pathname: '/checkout',
        state: { product: productToCheckout },
      });
    } else {
      alert('Please select a size before proceeding to checkout.');
    }
  };
  const handleAddToBag = () => {
    if (selectedSize) {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('Please log in to add to bag.');
        history.push('/login');
        return;
      }

      console.log('Token:', token); // Log token to verify

      const bagPayload = {
        product_id: product.id,
        quantity: 1
      };

      fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ` ${token}`
        },
        body: JSON.stringify(bagPayload)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to add to bag');
      })
      .then(data => {
        addToBag({ ...product, size: selectedSize, quantity: 1 }); // Assuming addToBag updates the context with the product
        console.log('Product added to bag:', data);
        alert('Product added to bag successfully');
      })
      .catch(error => {
        console.error('Error adding to bag:', error);
        alert('Failed to add product to bag');
      });
    } else {
      alert('Please select a size before adding to the bag.');
    }
  };

  const handleAddToWishlist = () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert('Please log in to add to wishlist');
      history.push('/login');
      return;
    }
  
    console.log('Token:', token); // Log token to verify
    
    const wishlistPayload = {
      product_id: product.id,
      qty: 1
    };
  
    fetch('http://localhost:3000/Wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ` ${token}`
      },
      body: JSON.stringify(wishlistPayload)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to add to wishlist');
    })
    .then(data => {
      addToWishlist(product); // Assuming addToWishlist updates the context with the product
      console.log('Product added to wishlist:', data);
      alert('Product added to wishlist successfully');
    })
    .catch(error => {
      console.error('Error adding to wishlist:', error);
      alert('Failed to add product to wishlist');
    });
  };



  
  return (
    <div className="container">
      {bagNotification && <div className="notification">{bagNotification}</div>}
      {wishlistNotification && <div className="notification">{wishlistNotification}</div>}
      <button onClick={onBack} className="back-button">Back to Products</button>
      <div className="product-container">
        <div className="image-carousel">
          <div className="right-side">
            <div className='main-image-container'>
              <img src={product.images[0]} alt={product.name} className="main-image" />
              <div className="main-image-text">{product.name}</div>
            </div>
            <div className="icon-container">
              <div className="extra-icon">
                <i className="fas fa-share icon"></i>
                <i className="fas fa-star icon" onClick={handleAddToWishlist}></i>
              </div>
            </div>
          </div>
          <div className="thumbnail-container">
            {[1, 2, 3].map((num) => (
              <div key={num}>
                <img src={product.images[0]} alt={product.name} className={`thumbnail-image${num}`} />
                <div className={`thumbnail-text${num}`}>{product.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="left-side">
          <div className="product-details">
            <p className="product-title">{product.name}</p>
            <div className="price">
              <label>Price:</label>
              <p className="product-price">₹{product.price}</p> {/* Display the passed price */}
            </div>
            <div className="product-gender">
              <label>Volume:</label>
              <div className="gender">
                {product.parameters && product.parameters.map((param, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(param.value)}
                    className={`size-button  ${selectedSize === param.value ? 'selected' : ''}`}
                  >
                    {param.value}
                  </button>
                ))}
              </div>
            </div>
            <div className="product-gender1">
              <div className="gender">
              <button onClick={handleBuyNow}>Buy Now</button>
                <button onClick={handleAddToBag}>Add To Bag</button>
              </div>
            </div>
          </div>
          <div className="product-description">
            <h1 className="prod-title">Product descriptions</h1>
            <p>{product.description}</p>
          </div>
          <div className="product-reviews">
            <h1 className="customer">Customer Reviews :</h1>
            <div className="review">
              <div className="review-score">
                <span>4.1 ★</span>
              </div>
              <div className="review-bar">
                <div className="review-row">
                  <span>5 ★</span>
                  <div className="bar">
                    <div className="filled-bar" style={{ width: '0' }}></div>
                  </div>
                </div>
                <div className="review-row">
                  <span>4 ★</span>
                  <div className="bar">
                    <div className="filled-bar" style={{ width: '0' }}></div>
                  </div>
                </div>
                <div className="review-row">
                  <span>3 ★</span>
                  <div className="bar">
                    <div className="filled-bar" style={{ width: '0' }}></div>
                  </div>
                </div>
                <div className="review-row">
                  <span>2 ★</span>
                  <div className="bar">
                    <div className="filled-bar" style={{ width: '0' }}></div>
                  </div>
                </div>
                <div className="review-row">
                  <span>1 ★</span>
                  <div className="bar">
                    <div className="filled-bar" style={{ width: '0' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;