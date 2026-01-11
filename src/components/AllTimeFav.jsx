import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Heart icons
import '../styles/AllTimeFav.css';
import { useCart } from '../context/CartContext';

const AllTimeFav = () => {
  const navigate = useNavigate();
  const { addToWishlist } = useCart();
  
  // Local state to handle the immediate UI change of the heart color
  const [localWishlist, setLocalWishlist] = useState([]);

  const favoriteItems = [
    { id: 1, name: "Stylish Designer Women Sweaters", price: "355", rating: "4.2", reviews: "5880", img: "/sweater.png" },
    { id: 2, name: "Premium Men's Casual Shirt", price: "799", rating: "4.5", reviews: "2140", img: "/casualshirt.png" },
    { id: 3, name: "Traditional Wedding Lehanga", price: "4500", rating: "4.8", reviews: "1200", img: "/weddingleh.png" },
    { id: 4, name: "Urban Streetwear Hoodie", price: "1299", rating: "4.3", reviews: "3400", img: "/streethoodie.png" },
    { id: 5, name: "Classic Cotton T-Shirt", price: "550", rating: "4.1", reviews: "980", img: "/casualtshirt.png" },
    { id: 6, name: "Designer Formal Wear Dress", price: "2899", rating: "4.6", reviews: "1560", img: "/formal.png" },
    { id: 7, name: "Casual Top", price: "280", rating: "4.6", reviews: "1430", img: "/tanktop.png" },
    { id: 8, name: "Classic Cotton Kurti", price: "700", rating: "4.5", reviews: "940", img: "/kurti.png" }
  ];

  const handleWishlist = (e, item) => {
    e.stopPropagation(); // Prevents navigating to detail page when clicking heart
    
    if (localWishlist.includes(item.id)) {
      // Remove from local UI state
      setLocalWishlist(localWishlist.filter(id => id !== item.id));
      // Note: If you want to remove from global cart too, you'd add a removeFromWishlist function to Context
    } else {
      // Add to local UI state (turns heart red)
      setLocalWishlist([...localWishlist, item.id]);
      
      // ADD TO GLOBAL CONTEXT (Moves item to your 'Cart/Wishlist' data)
      addToWishlist(item);
    }
  };

  return (
    <section className="fav-section">
      <div className="fav-header">
        <h2>ALL-TIME FAVORITES</h2>
        <p>Your daily essentials. Our highest-rated designs.</p>
        <div className="title-underline"></div>
      </div>

      <div className="fav-grid">
        {favoriteItems.map((item) => (
          <div 
            className="fav-card" 
            key={item.id} 
            onClick={() => navigate(`/productdetail/${item.id}`)}
          >
            <div className="fav-img-box">
              <img src={item.img} alt={item.name} />
              
              {/* Heart Button */}
              <div className="wishlist-btn" onClick={(e) => handleWishlist(e, item)}>
                {localWishlist.includes(item.id) ? 
                  <AiFillHeart className="heart-icon active" style={{ color: '#ff4d4d' }} /> : 
                  <AiOutlineHeart className="heart-icon" />
                }
              </div>
            </div>

            <div className="fav-details">
              <h3 className="product-title">{item.name}</h3>
              <p className="product-price">₹{item.price}</p>
              <div className="free-delivery">Free Delivery</div>
              
              <div className="rating-row">
                <span className="rating-badge">{item.rating} ★</span>
                <span className="review-count">({item.reviews} Reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTimeFav;