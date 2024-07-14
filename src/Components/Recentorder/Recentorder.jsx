import React, { useState } from 'react';
import './Recentorder.css';
import bloom2 from '../Assets/product_5.jpg';
import Orderdetails from '../Orderdetails/Orderdetails';


function RecentOrder() {
  const [activeTab, setActiveTab] = useState('completed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 'ID245ME973',
      name: 'Mango Temptation',
      designer: 'VS Mango Temptation',
      size: '50ml x2',
      date: '1/1/2024',
      price: 499,
      status: 'completed',
      statusText: 'delivered two weeks ago'
    },
    {
      id: 'ID245ME975',
      name: 'Coconut Passion',
      designer: 'VS Coconut Passion',
      size: '100ml x1',
      date: '3/1/2024',
      price: 699,
      status: 'completed',
      statusText: 'delivered one week ago'
    },
    {
      id: 'ID245ME974',
      name: 'Peach Blossom',
      designer: 'VS Peach Blossom',
      size: '30ml x1',
      date: '2/1/2024',
      price: 299,
      status: 'in-progress',
      statusText: 'estimated delivery in 3 days'
    },
    {
      id: 'ID245ME976',
      name: 'Cherry Delight',
      designer: 'VS Cherry Delight',
      size: '75ml x1',
      date: '4/1/2024',
      price: 399,
      status: 'in-progress',
      statusText: 'estimated delivery in 5 days'
    }
  ];

  const filteredOrders = orders.filter(order => 
    order.status === activeTab && 
    (order.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     order.designer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleViewOrder = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    setSelectedOrder(order);
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="recent-order-app">
      {selectedOrder ? (
        <Orderdetails order={selectedOrder} onBack={handleBackToOrders} />
      ) : (
        <>
          <div className="header-rec">
            {/* <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                placeholder="Search Orders" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
          </div>
          <div className="tab">
            <button
              className={`tab-button ${activeTab === 'in-progress' ? 'active' : ''}`}
              onClick={() => setActiveTab('in-progress')}
            >
              IN PROGRESS
            </button>
            <button
              className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              COMPLETED
            </button>
          </div>
          <div className="orders">
            {filteredOrders.length === 0 && <p>No orders available.</p>}
            {filteredOrders.map(order => (
              <div key={order.id} className="order-card">
                <img src={bloom2} alt={order.name} />
                <div className="order-details">
                  <h2>{order.name}</h2>
                  <p>{order.designer}</p>
                  <p>{order.size}</p>
                  <p>Date of purchase: {order.date}</p>
                  <p>Shipping: Free</p>
                  <p>Order no: {order.id}</p>
                </div>
                <div className="order-actions">
                  <div className="price">
                    <h1>${order.price}</h1>
                    <p>Paid <i className="fas fa-check-circle paid-icon"></i></p>
                    <p>{order.statusText}</p>
                  </div>
                  <button className="view-button" onClick={() => handleViewOrder(order.id)}>View order</button>
                  <button className="track-button" onClick={() => alert(`Tracking order: ${order.id}`)}>Track order</button>
                  <button className="invoice-button" onClick={() => alert(`Downloading invoice for order: ${order.id}`)}>Download invoice</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RecentOrder;
