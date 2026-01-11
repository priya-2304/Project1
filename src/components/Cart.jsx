import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineShopping } from 'react-icons/ai';
import '../styles/Cart.css';

const Cart = () => {
  const { wishlist, removeFromWishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-cart-container">
        <AiOutlineShopping size={80} color="#ccc" />
        <h2>Your collection is empty</h2>
        <p>Add items you love to your cart.</p>
        <Link to="/products" className="shop-now-btn">Explore Products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      <div className="cart-header">
         <h1>YOUR <span>CART</span></h1>
      </div>

      <div className="cart-content-grid">
        {/* LEFT SIDE: Items List */}
        <div className="cart-items-section">
          {wishlist.map((item, index) => (
            <div className="cart-card" key={item.id || index}>
              <div className="cart-card-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="cart-card-details">
                <div className="cart-details-top">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
                <p className="cart-item-meta">Size: L | Qty: 1</p>
                <div className="cart-card-actions">
                  {/* Ab ye button responsive hai aur functional bhi */}
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <AiOutlineDelete /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Price Summary */}
        <div className="cart-summary-section">
          <div className="summary-box">
            <h3>Price Details</h3>
            <div className="summary-row">
              <span>Total Price</span>
              <span>₹{wishlist.reduce((acc, curr) => acc + parseInt(curr.price), 0)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span className="free-text">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-amount">
              <span>Total Amount</span>
              <span>₹{wishlist.reduce((acc, curr) => acc + parseInt(curr.price), 0)}</span>
            </div>
            <Link to="/checkout">
            <button className="checkout-btn">Place Order</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


