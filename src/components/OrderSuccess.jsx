import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OrderSuccess.css';

const OrderSuccess = () => {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        <div className="check-icon">✓</div>
        <h1>Order Placed!</h1>
        <p>Thank you for shopping with us. Your order has been successfully placed and will be delivered soon.</p>
        <div className="order-details-mini">
          <span>Status: <b style={{color: '#4caf50'}}>Confirmed</b></span>
          <span>Delivery: <b style={{color: '#4caf50'}}>3-5 Business Days</b></span>
        </div>
        <Link to="/" className="home-btn">CONTINUE SHOPPING</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;