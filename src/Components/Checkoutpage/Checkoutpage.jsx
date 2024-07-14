import React, { useState, useEffect } from 'react';
import './Checkoutpage.css';

function Checkoutpage({ bag = [], total = {}, onBack }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('Default Address');
  const [state, setState] = useState('Default State');
  const [district, setDistrict] = useState('Default District');
  const [city, setCity] = useState('Default City');
  const [pincode, setPincode] = useState('123456');
  const [addressLane, setAddressLane] = useState('Default Address Lane');
  const [landmark, setLandmark] = useState('Default Landmark');
  const [shippingFee, setShippingFee] = useState(100);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('Blue Dart');
  const [showExtendedAddressFields, setShowExtendedAddressFields] = useState(false);

  useEffect(() => {
    // Update total calculations whenever bag or total props change
    const bagTotal = bag.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setShippingFee(total.deliveryFee || 0); // Update shipping fee based on total prop

    // Example: Additional logic to update address details if needed
  }, [bag, total]);

  const handleChangeAddress = () => {
    setShowExtendedAddressFields(!showExtendedAddressFields);
  };

  const handleProceedToPay = () => {
    // Example logic to validate and proceed with payment
    if (!name || !mobile || !address || !state || !district || !city || !pincode || !addressLane || !landmark) {
      // alert('Please enter all address details before proceeding to payment.');
      return;
    }

    alert(`Proceeding to pay with the following details:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}, ${addressLane}, ${landmark}, ${city}, ${district}, ${state}, ${pincode}\nShipping Method: ${selectedShippingMethod}\nTotal Amount: ₹${total.amountPayable || 0}`);
  };

  const handleShippingMethodChange = (e) => {
    const method = e.target.value;
    setSelectedShippingMethod(method);
    // Example logic to update shipping fee based on selected method
    if (method === 'Blue Dart') {
      setShippingFee(100);
    } else if (method === 'FedEx') {
      setShippingFee(150);
    } else {
      setShippingFee(0);
    }
  };

  const handleUpdateAddress = () => {
    // Example logic to update address details
    setShowExtendedAddressFields(false);
  };

  const getFullAddress = () => {
    return `${address}, ${addressLane}, ${landmark}, ${city}, ${district}, ${state}, ${pincode}`;
  };

  const handleAddProduct = (productId) => {
    // Placeholder logic to add more products to checkout (to be implemented)
  };

  const handleRemoveProduct = (productId) => {
    // Placeholder logic to remove product from checkout (to be implemented)
  };

  return (
    <div className="checkout-container">
      <header className="header-ck">
        <h1 className="title-ck">Checkout ({bag.length} Products)</h1>
      </header>

      <div className="ck-body">
        <button onClick={onBack} className="back-button">Back to Bag</button>
        <div className="main-content-ck">
          <div className="pro-ck">
            {bag.map((product) => (
              <div className="product-ck" key={product.id}>
                <img src={product.images} alt={product.name} className="image" />
                <div className="product-details-ck">
                  <h3>{product.name}</h3>
                  <p>Size: {product.size}</p>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="product-footer-ck">
                  <button className="add-button" onClick={() => handleAddProduct(product.id)}>Add more products</button>
                  <button className="remove-button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="address-and-shipping">
            <div className="sidebar-ck">
              <div className="order-details-ck">
                <p className="order-ck">Order details:</p>
                <div className="detail-item-ck">
                  <span className="detail-label-ck">Bag Total:</span>
                  <span className="detail-value-ck">${total.bagTotal || 0}</span>
                </div>
                <div className="detail-item-ck">
                  <span className="detail-label-ck">Coupon Discount:</span>
                  <span className="detail-value-ck">${total.couponDiscount || 0}</span>
                </div>
                <div className="detail-item-ck">
                  <span className="detail-label-ck">Delivery Fee:</span>
                  <span className="detail-value-ck">${shippingFee}</span>
                </div>
                <hr className="hr1" />
                <div className="detail-item-ck">
                  <span className="detail-label1-ck">Amount Payable:</span>
                  <span className="detail-value1-ck">${total.amountPayable || 0}</span>
                </div>
              </div>
              <div className="quality-ck">
                <label className="item-ck">Assured Quality | Fast Delivery </label>
              </div>
              <div className="delivery-address-ck">
                <p className="del-add">Delivery Address :</p>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Mobile No :</label>
                  <input type="text" name="mobile" required value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>

                <button className="change-button" onClick={handleChangeAddress}>Change</button>
                {showExtendedAddressFields && (
                  <form>
                    <div className="form-group">
                      <label>Address:</label>
                      <input type="text" name="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>State:</label>
                      <input type="text" name="state" required value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>District:</label>
                      <input type="text" name="district" required value={district} onChange={(e) => setDistrict(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>City:</label>
                      <input type="text" name="city" required value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Pincode:</label>
                      <input type="text" name="pincode" required value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Address Lane:</label>
                      <input type="text" name="addressLane" required value={addressLane} onChange={(e) => setAddressLane(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Landmark:</label>
                      <input type="text" name="landmark" required value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                    </div>
                    <button type="button" className="update-button" onClick={handleUpdateAddress}>Update</button>
                  </form>
                )}
                {!showExtendedAddressFields && (
                  <div className="text">
                    <label>{getFullAddress()}</label>
                  </div>
                )}
              </div>

              <div className="shipping-method-ck">
                <h2>Shipping Method :</h2>
                <div>
                  <input type="radio" id="blue-dart" name="shipping" value="Blue Dart" checked={selectedShippingMethod === 'Blue Dart'} onChange={handleShippingMethodChange} />
                  <label htmlFor="blue-dart">Blue Dart</label>
                </div>
                {/* Add other shipping options as needed */}
              </div>

              <button className="pay-button" onClick={handleProceedToPay}>Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutpage;
