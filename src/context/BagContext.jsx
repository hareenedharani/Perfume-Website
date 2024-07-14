import React, { createContext, useState, useEffect } from 'react';

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState([]);
  const [notification, setNotification] = useState('');


  useEffect(() => {
    // Fetch bag items from the backend on initial load
    const fetchBagItems = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:3000/cart', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${token}`
            }
          });
          const data = await response.json();
          setBag(data.items); // Assuming 'items' contains the array of bag items
        } catch (error) {
          console.error('Failed to fetch bag items:', error);
        }
      }
    };

    fetchBagItems();
  }, []);
  const addToBag = async (product, parameterName, parameterValue) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to add to bag.');
      return;
    }
  
    const bagPayload = {
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      parameter: {
        name: parameterName,
        value: parameterValue,
        price: product.price  // Assuming you want to send the price as well
      }
    };
  
    try {
      const response = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ` ${token}`
        },
        body: JSON.stringify(bagPayload)
      });
  
      if (response.ok) {
        const data = await response.json();
        setBag((prevBag) => [...prevBag, product]);  // Assuming 'product' contains the added product
        setNotification('Product added to bag successfully');
        setTimeout(() => setNotification(''), 3000);
      } else {
        throw new Error('Failed to add to bag');
      }
    } catch (error) {
      console.error('Error adding to bag:', error);
      setNotification('Failed to add product to bag');
      setTimeout(() => setNotification(''), 3000);
    }
  };
  const removeFromBag = (id, size) => {
    const updatedBag = bag.map((product) => {
      if (product.id === id && product.size === size) {
        return {
          ...product,
          quantity: product.quantity -= 1 // Decrease quantity by 1
        };
      }
      return { ...product };
    }).filter((product) => product.quantity > 0); // Remove products with quantity <= 0
  
    setBag(updatedBag); // Update bag context with new bag state
    setNotification('Product has been removed from your bag.');
    setTimeout(() => setNotification(''), 3000);
  };
  // const addToBag = async (product) => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Please log in to add to bag.');
  //     return;
  //   }

  //   const bagPayload = {
  //     product_id: product.id,
  //     quantity: product.quantity,
  //   };

  //   try {
  //     const response = await fetch('http://localhost:3000/cart', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': ` ${token}`
  //       },
  //       body: JSON.stringify(bagPayload)
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setBag((prevBag) => [...prevBag, product]);
  //       setNotification('Product added to bag successfully');
  //       setTimeout(() => setNotification(''), 3000);
  //     } else {
  //       throw new Error('Failed to add to bag');
  //     }
  //   } catch (error) {
  //     console.error('Error adding to bag:', error);
  //     setNotification('Failed to add product to bag');
  //     setTimeout(() => setNotification(''), 3000);
  //   }
  // };
  // const removeFromBag = async (productId, parameterName, parameterValue) => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Please log in to remove from bag.');
  //     return;
  //   }
  
  //   const requestBody = {
  //     id: productId,
  //     parameter: {
  //       name: parameterName,
  //       value: parameterValue
  //     }
  //   };
  
  //   try {
  //     const response = await fetch('http://localhost:3000/cart', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': Bearer ${token}
  //       },
  //       body: JSON.stringify(requestBody)
  //     });
  
  //     if (response.ok) {
  //       // Remove the product from the bag state
  //       setBag((prevBag) => prevBag.filter(
  //         (product) => product.id !== productId
  //       ));
  //       setNotification('Product removed from bag successfully');
  //       setTimeout(() => setNotification(''), 3000);
  //     } else {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || 'Failed to remove from bag');
  //     }
  //   } catch (error) {
  //     console.error('Error removing from bag:', error);
  //     setNotification('Failed to remove product from bag');
  //     setTimeout(() => setNotification(''), 3000);
  //   }
  // };
  
  // const removeFromBag = async (productId, parameterName, parameterValue) => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Please log in to remove from bag.');
  //     return;
  //   }
  
  //   const requestBody = {
  //     id: productId,
  //     parameter: {
  //       name: parameterName,
  //       value: parameterValue
  //     }
  //   };
  
  //   try {
  //     const response = await fetch('http://localhost:3000/cart/delete', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': ` ${token}`
  //       },
  //       body: JSON.stringify(requestBody)
  //     });
  
  //     if (response.ok) {
  //       // Update the bag state by removing the deleted product
  //       setBag((prevBag) => prevBag.filter(
  //         (product) => product.id !== productId
  //       ));
  //       setNotification('Product removed from bag successfully');
  //       setTimeout(() => setNotification(''), 3000);
  //     } else {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || 'Failed to remove from bag');
  //     }
  //   } catch (error) {
  //     console.error('Error removing from bag:', error);
  //     setNotification('Failed to remove product from bag');
  //     setTimeout(() => setNotification(''), 3000);
  //   }
  // };
  
  

  const increaseQuantity = async (productId, productSize) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to update quantity.');
      return;
    }

  };
  return (
    <BagContext.Provider value={{ bag, addToBag, removeFromBag, increaseQuantity, notification }}>
      {children}
    </BagContext.Provider>
  );
};