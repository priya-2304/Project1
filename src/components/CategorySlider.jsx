import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CategorySlider.css';

const CategorySlider = () => {
  const navigate = useNavigate();
  
  const categories = [
    "Men's Fashion", "Women's Wear", "Kids Zone", "Pet Care", 
    "Electronics", "Home Decor", "Beauty Products", "Sports Gear"
  ];
  
  const doubleCategories = [...categories, ...categories];

  const handleCategoryClick = (category) => {
    // Logic: Agar Men, Women ya Electronics hai toh specific route ya state ke sath bhejo
    if (category.includes("Men")) {
      navigate('/products', { state: { category: 'Men' } });
    } else if (category.includes("Women")) {
      navigate('/products', { state: { category: 'Women' } });
    } else if (category.includes("Electronics")) {
      navigate('/products', { state: { category: 'Electronics' } });
    } else {
      // Baaki sab ke liye simple products page
      navigate('/products');
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="slider-container">
      <h3 className="slider-title">Explore Our Top Categories</h3>
      <div className="slider-wrapper">
        <div className="slider-track">
          {doubleCategories.map((item, index) => (
            <div 
              className="slider-card" 
              key={index} 
              onClick={() => handleCategoryClick(item)}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;