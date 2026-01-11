import React from "react";
import {
  FaShoppingCart,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import '../styles/Footer.css';

export default function Footer() {
  const navigate = useNavigate()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSubscribe = (e) => {
     e.preventDefault();
    const email = e.target.elements.emailInput.value; 
    if (email) {
      handleScrollToTop();
      navigate('/subscribe-success');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* BRAND / LOGO */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">
          <FaShoppingCart />ShopCart
          </h2>
          <p className="footer-description">
            ShopCart is your trusted online shopping destination. We provide 
            premium quality products at the best market prices with lightning-fast 
            delivery.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTelegramPlane /></a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h3>EXPLORE</h3>
          <ul>
            <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
            <li><Link to="/products" onClick={handleScrollToTop}>Products</Link></li>
            <li><Link to="/cart" onClick={handleScrollToTop}>My Cart</Link></li>
            <li><Link to="/profile" onClick={handleScrollToTop}>My Profile</Link></li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-col">
          <h3> SERVICE</h3>
          <ul>
            <li><Link to="/contact" onClick={handleScrollToTop}>FAQs</Link></li>
            <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
            <li><Link to="/profile" onClick={handleScrollToTop}>Size Guide</Link></li>
            <li><Link to="/profile" onClick={handleScrollToTop}>Help Center</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <p><FaPhoneAlt className="contact-icon" /> +91 98765 43210</p>
            <p><FaEnvelope className="contact-icon" /> support@shopcart.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> Gurgaon, India</p>
          </div>
        </div>
      </div>

      {/* --- NEW NEWSLETTER SECTION --- */}
      <div className="subscribe-section">
        <div className="subscribe-card">
          <div className="subscribe-text">
            <label>JOIN OUR <strong>NEWSLETTER</strong></label>
            <p>Get exclusive updates and special offers directly in your inbox.</p>
          </div>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input 
              name="emailInput" 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 ShopCart — All Rights Reserved</p>
      </div>
    </footer>
  );
}