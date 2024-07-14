import React, { useContext } from 'react';
import './Wishlist.css';
import { FaTrash } from 'react-icons/fa';
import { WishlistContext } from '../../context/WishlistContext';
import { BagContext } from '../../context/BagContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToBag, notification } = useContext(BagContext);

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h1>Wishlist ({wishlist.length} Products)</h1>
      </div>

      {notification && <div className="notification">{notification}</div>}

      <div className="product-grid">
        {wishlist.map((product, index) => (
          <div
            className={`product-card ${index % 2 === 0 ? 'grey' : 'black'}`}
            key={product.id}
          >
            <img src={product.images} alt={product.name} />
            <div className='name-add'>
              <div>
                <h2>{product.name}</h2>
              </div>
              <div>
                <button className="add-to-bag" onClick={() => addToBag(product)}>
                  Add to bag
                </button>
              </div>
            </div>
            <button className={`delete ${index % 2 === 0 ? 'grey' : 'black'}`}
              onClick={() => removeFromWishlist(product.id)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
