// import React, { createContext, useState } from 'react';

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [notification, setNotification] = useState('');

//   const addToWishlist = (product) => {
//     if (!wishlist.some(item => item.id === product.id)) {
//       setWishlist([...wishlist, product]);
//       setNotification(`${product.name} has been added to the wishlist.`);
//       setTimeout(() => setNotification(''), 3000);
//     }
//   };

//   const removeFromWishlist = (productId) => {
//     const updatedWishlist = wishlist.filter(item => item.id !== productId);
//     setWishlist(updatedWishlist);
//     setNotification('Item has been removed from the wishlist.');
//     setTimeout(() => setNotification(''), 3000);
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, notification }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState('');

  const addToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      setNotification(`${product.name} has been added to the wishlist.`);
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    setNotification('Item has been removed from the wishlist.');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, notification }}>
      {children}
    </WishlistContext.Provider>
  );
};

// WishlistContext.js
// import React, { createContext, useState } from 'react';

// export const WishlistContext = createContext();

// const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const [notification, setNotification] = useState('');

//   const fetchWishlist = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/Wishlist', {
//         headers: {
//           'Authorization': `Bearer YOUR_TOKEN_HERE`, // Add your authentication token here
//         },
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setWishlist(data.items);
//       } else {
//         console.error('Failed to fetch wishlist', data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const addToWishlist = async (product) => {
//     try {
//       const response = await fetch('http://localhost:3000/Wishlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer YOUR_TOKEN_HERE`, // Add your authentication token here
//         },
//         body: JSON.stringify({
//           product_id: product.id,
//           qty: 1,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setWishlist([...wishlist, { product_id: product.id, qty: 1, ...product }]);
//         setNotification(data.message);
//       } else {
//         console.error('Failed to add to wishlist', data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`http://localhost:3000/Wishlist/${productId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer YOUR_TOKEN_HERE`, // Add your authentication token here
//         },
//       });

//       if (response.ok) {
//         setWishlist(wishlist.filter((item) => item.product_id !== productId));
//       } else {
//         console.error('Failed to remove from wishlist');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         addToWishlist,
//         removeFromWishlist,
//         fetchWishlist,
//         notification,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export default WishlistProvider;
