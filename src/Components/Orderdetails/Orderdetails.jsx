import React from 'react';
import './Orderdetails.css';
import bloom1 from '../Assets/product_1.jpg';

const Orderdetails = ({ order, onBack }) => {
  // Assuming the product details are within the order object for simplicity
  const products = [
    { id: 1, name: 'Bloom', size: '50 ml', price: 995, qty: 1, img: bloom1 },
    { id: 2, name: 'Bloom', size: '50 ml', price: 995, qty: 1, img: bloom1 }
  ];

  const bagTotal = products.reduce((total, product) => total + product.price * product.qty, 0);
  const couponDiscount = 0;
  const deliveryFee = 0;
  const amountPayable = bagTotal - couponDiscount + deliveryFee;

  const handleDownloadInvoice = () => {
    alert("Invoice downloaded successfully!");
  };

  const handleAddProduct = (id) => {
    // Logic to add product (integration to be added later)
  };

  const handleRemoveProduct = (id) => {
    // Logic to remove product (integration to be added later)
  };

  return (
    <div className="order-details-container">
      <div className="order-details-header">
        <h1 className='details'>Order details ({products.length} Products)</h1>
      </div>
      <div>
        <button className="back" onClick={onBack}>Back to Orders</button>
      </div>
      <div className="order-details-content">
        <div className="order-details-1">
          <div className="product-list">
            {products.map(product => (
              <div className="product-item" key={product.id}>
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p>Size: {product.size}</p>
                  <p>Price: ₹{product.price}</p>
                  <p>Qty: {product.qty}</p>
                </div>
                <div className="product-footer-o">
                  <button className="add-button" onClick={() => handleAddProduct(product.id)}>Add more products</button>
                  <button className="remove-button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <div className="delivered-address">
              <h2>Delivered Address:</h2>
              <p>{order.name}</p>
              <p>{order.phoneNumber}</p>
              <p>{order.addressLine1}, {order.addressLine2}</p>
              <p>{order.city}</p>
              <p>{order.country}, {order.pinCode}</p>
            </div>
            <div className="payment-details">
              <h2 className="payment-header">Payment Details:</h2>
              <button className="download-invoice" onClick={handleDownloadInvoice}>Download Invoice</button>
              <p><span className="label">Bag Total:</span> <span className="amount">₹{bagTotal}</span></p>
              <p><span className="label">Coupon Discount:</span> <span className="amount">₹{couponDiscount}</span></p>
              <p><span className="label">Delivery Fee:</span> <span className="amount">₹{deliveryFee}</span></p>
              <hr />
              <p><span className="label">Amount Payable:</span> <span className="amount">₹{amountPayable}</span></p>
            </div>
            <div className="order-info">
              <p>Order ID: {order.id}</p>
              <p>Payment Mode: {order.paymentMode}</p>
              <p>Placed on: {order.placedOn}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;