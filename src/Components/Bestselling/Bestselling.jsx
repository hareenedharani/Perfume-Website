import React from 'react';
import './Bestselling.css'; 
import pink from '../Assets/pink.png'
import gucci from '../Assets/Gucci.png'

import './Bestselling.css'
import '../Category/Category.css'

const Bestselling = () => {
    return (
        <div className="bestselling-container">
            <h1 className="header">BEST SELLING</h1>
            <div className="categories-row">
                <img src={pink} alt="Item 1" className="bestselling-image" />
                <img src={gucci} alt="Item 2" className="bestselling-image" />
                <img src={pink} alt="Item 3" className="bestselling-image" />
                <img src={pink} alt="Item 3" className="bestselling-image" />
            </div>
      
         
        </div>
    );
};

export default Bestselling;