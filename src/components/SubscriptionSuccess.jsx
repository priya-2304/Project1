import React from 'react';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircle } from "react-icons/io5";
import '../styles/SubscriptionSuccess.css';

const SubscriptionSuccess = () => {
  return (
    <div className="success-page">
      <div className="success-card">
        <IoCheckmarkCircle className="success-icon" />
        <h1>Subscription Confirmed!</h1>
        <p>Thank you for joining the <span>SHOPCART Elite Club</span>. You'll be the first to know about our premium drops and private sales.</p>
        <p className="check-email">Please check your inbox for a welcome gift. 🎁</p>
        <Link to="/" className="back-home-btn">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;