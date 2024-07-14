
import React, { useContext, useEffect, useState } from 'react';
import './BagPage.css';
import Checkoutpage from '../Checkoutpage/Checkoutpage';
import { BagContext } from '../../context/BagContext';

const BagPage = () => {
  const { bag, removeFromBag, notification, increaseQuantity } = useContext(BagContext);
  const [total, setTotal] = useState({
    bagTotal: 0,
    couponDiscount: 0,
    deliveryFee: 50,
    amountPayable: 0,
  });

  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    const bagTotal = bag.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const amountPayable = bagTotal - total.couponDiscount + total.deliveryFee;
    setTotal((prevTotal) => ({ ...prevTotal, bagTotal, amountPayable }));
  }, [bag, total.couponDiscount, total.deliveryFee]);

  const handleApplyCoupon = (coupon) => {
    // Placeholder logic to apply coupon (to be implemented)
    // Example: setTotal({ ...total, couponDiscount: 20 });
    console.log(`Applying coupon: ${coupon}`);
    // Implement coupon logic here
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleBackToBag = () => {
    setIsCheckout(false);
  };

  const handleAddMoreProducts = (productId, productSize) => {
    console.log(`Navigating to category product page for product ${productId} - ${productSize}`);
    increaseQuantity(productId, productSize);
  };

  const handleRemoveProduct = (productId, productSize) => {
    removeFromBag(productId, productSize);
  };

  if (isCheckout) {
    return <Checkoutpage bag={bag} total={total} onBack={handleBackToBag} />;
  }

  return (
    <div className="bag-page">
      {notification && <div className="notification">{notification}</div>}
      <div className="bag-header">
        <h1>Bag ({bag.length} Products)</h1>
      </div>
      <div className='bag-body'>
        <div className="main-content">
          <div className="products">
            {bag.map((product) => (
              <div key={`${product.id}-${product.size}`} className="product1">
                <img src={product.images} alt={product.name}  className='product1-img'/>
                <div className="product-detail1">
                  <h2>{product.name}</h2>
                  <p>Size: {product.size}</p>
                  <p>Price: ₹{product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="product-footer">
                  <button className="remove-button" onClick={() => handleRemoveProduct(product.id, product.size)}>Remove</button>
                  <button className="add-more-button" onClick={() => handleAddMoreProducts(product.id, product.size)}>Add More</button>
                </div>
              </div>
            ))}
          </div>
          <div className="sidebar">
            <div className='sidebar1'>
              <div className="sidebar-section order-details">
                <p className='order-p'>Order details:</p>
                <div className="detail-item">
                  <span className="detail-label">Bag Total:</span>
                  <span className="detail-value">₹{total.bagTotal}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Coupon Discount:</span>
                  <span className="detail-value">₹{total.couponDiscount}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Delivery Fee:</span>
                  <span className="detail-value">₹{total.deliveryFee}</span>
                </div>
                <hr className='hr1'/>
                <div className="detail-item">
                  <span className="detail-label1">Amount Payable:</span>
                  <span className="detail-value1">₹{total.amountPayable}</span>
                </div>
              </div>
              <div className="sidebar-section apply-coupon">
                <input
                  type="text"
                  placeholder="% Apply coupon"
                  onChange={(e) => handleApplyCoupon(e.target.value)}
                />
                <button onClick={() => handleApplyCoupon()}>Apply</button>
              </div>
              <div className="sidebar-section total-checkout">
                <h2>Total: ₹{total.amountPayable}</h2>
                <button onClick={handleCheckout}>Checkout</button>
              </div>
              <div className="sidebar-section assured-quality">
                <div className='qual'>Assured Quality</div>
                <div className='qual'>Fast delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagPage;
