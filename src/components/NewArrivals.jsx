import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NewArrivals.css";
import { allProducts } from '../data/Products'; 
import { useCart } from '../context/CartContext';

const NewArrivals = () => {
  const navigate = useNavigate();
 const { addToWishlist } = useCart();
  const arrivalsData = allProducts.filter(p => p.id >= 101 && p.id <= 104);

  const handleProductClick = (id) => {
    navigate(`/productdetail/${id}`);
    window.scrollTo(0, 0);
  };

 const handleAddToCartClick = (e, item) => {
    e.stopPropagation(); 
    addToWishlist(item); 
  };

  return (
    <section className="new-arrivals">
      <div className="new-arrivals-header">
        <h2><span>NEW</span> ARRIVALS</h2>
        <Link to="/products" className="view-all">
          VIEW ALL PRODUCTS
        </Link>
      </div>

      <div className="new-arrivals-grid">
        {arrivalsData.map((item) => (
          <div className="product-card" key={item.id}>
            <span className="sale-badge">SALE</span>
            
            <div className="img-container">
              <img 
                src={item.img} 
                alt={item.name} 
                onClick={() => handleProductClick(item.id)} 
                style={{ cursor: 'pointer' }}
              />
              <div className="hover-overlay" onClick={() => handleProductClick(item.id)}>
                View Details
              </div>
            </div>

            <div className="product-info">
              <h4 onClick={() => handleProductClick(item.id)} style={{ cursor: 'pointer' }}>
                {item.name}
              </h4>
              <p className="price">₹{Number(item.price).toFixed(0)}</p>
              
              <button 
                className="view-detail-btn" 
                onClick={(e) => handleAddToCartClick(e, item)}
              >
               Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;