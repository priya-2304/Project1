import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../data/Products'; // Path check kar lena 'Products' ya 'products'
import '../styles/FlashSale.css';

const FlashSale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 58, seconds: 59 });

  const saleItems = allProducts.filter(p => p.id >= 201 && p.id <= 206);

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  // Responsive items count function
  const getVisibleItems = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3; 
  };

  // Auto Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        // Logic: Agar last visible set par ho toh 0 par jao
        prevIndex >= saleItems.length - getVisibleItems() ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [saleItems.length]);

  const handleItemClick = (id) => {
    // Navigate to product detail page
    navigate(`/productdetail/${id}`); 
    window.scrollTo(0, 0); 
  };

  return (
    <section className="flash-sale-container">
      <div className="flash-header">
        <div className="flash-title">
          <h2>FLASH <span>SALE</span></h2>
          <p>Limited time offers just for you.</p>
        </div>
        <div className="countdown-timer">
          <div className="time-box"><span>{formatTime(timeLeft.hours)}</span><p>HR</p></div>
          <div className="time-box"><span>{formatTime(timeLeft.minutes)}</span><p>MIN</p></div>
          <div className="time-box"><span>{formatTime(timeLeft.seconds)}</span><p>SEC</p></div>
        </div>
      </div>

      <div className="flash-slider-viewport">
        <div 
          className="flash-slider-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / getVisibleItems())}%)` }}
        >
          {saleItems.map((item) => (
            <div className="flash-card-wrapper" key={item.id}>
              <div className="flash-card" onClick={() => handleItemClick(item.id)}>
                <img src={item.img} alt={item.name} />
                <div className="flash-overlay">
                  <h4>{item.name}</h4>
                  <button onClick={(e) => {
                    e.stopPropagation(); 
                    handleItemClick(item.id);
                  }}>SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flash-dots">
        {/* Dots logic: total items minus visible items tak dots dikhao ya sabke liye */}
        {saleItems.slice(0, saleItems.length - (getVisibleItems() - 1)).map((_, idx) => (
          <span 
            key={idx} 
            className={`flash-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default FlashSale;