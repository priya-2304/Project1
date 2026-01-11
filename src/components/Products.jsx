import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Animation support
import { allProducts } from '../data/Products';
import { HiOutlineChevronDown, HiStar } from 'react-icons/hi';
import { VscSettings } from "react-icons/vsc";
import '../styles/Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [showSort, setShowSort] = useState(false);
  const [sortType, setSortType] = useState('Relevant');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const location = useLocation();

  // --- YOUR CUSTOM ANIMATION VARIANTS ---
  const focusBlur = {
    hidden: { filter: "blur(12px)", opacity: 0, y: 20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const productItem = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Filter + Sort Logic
  const sortedProducts = allProducts
    .filter(p => {
      if (activeCategory === 'All Products') return true;
      if (Array.isArray(p.category)) {
        return p.category.includes(activeCategory);
      }
      return p.category === activeCategory;
    })
    .sort((a, b) => {
      if (sortType === 'Price: Low to High') return a.price - b.price;
      if (sortType === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  const categories = ['All Products', 'Men', 'Women', 'Electronics'];

  return (
    <motion.div 
      className="products-container"
      initial="hidden"
      animate="visible"
    >
      {/* 1. Header with Focus Blur */}
      <div className="collection-header">
        <motion.h1 variants={focusBlur}>DISCOVER <span>COLLECTIONS</span></motion.h1>
        <motion.p variants={focusBlur}>Find your perfect style from our premium selection.</motion.p>
      </div>

      <div className="main-layout">
        {/* 2. Sidebar with Staggered Items */}
        <motion.aside 
          className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}
          variants={staggerContainer}
        >
          <div className="sidebar-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <div className="header-title"><VscSettings /> FILTERS</div>
            <HiOutlineChevronDown className="mobile-arrow" />
          </div>
          
          <motion.div className="category-list" variants={staggerContainer}>
            <motion.div className="section-title" variants={focusBlur}>Category</motion.div>
            {categories.map((cat) => (
              <motion.label key={cat} className="cat-item" variants={focusBlur}>
                <input 
                  type="radio" 
                  name="cat" 
                  checked={activeCategory === cat} 
                  onChange={() => {
                    setActiveCategory(cat);
                    if(window.innerWidth < 768) setIsFilterOpen(false);
                  }} 
                />
                <span className="checkbox-box"></span> {cat}
              </motion.label>
            ))}
          </motion.div>
        </motion.aside>

        {/* 3. Products Section with Slide-in Right */}
        <motion.section className="products-content" variants={slideInRight}>
          <div className="content-top-bar">
            <div className="product-count">Showing <b>{sortedProducts.length}</b> Products</div>
            <div className="sort-wrapper">
              <button className="sort-btn" onClick={() => setShowSort(!showSort)}>
                SORT BY: <b>{sortType.toUpperCase()}</b> <HiOutlineChevronDown />
              </button>
              
              <AnimatePresence>
                {showSort && (
                  <>
                    <motion.div 
                      className="sort-overlay" 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowSort(false)}
                    />
                    <motion.div 
                      className="sort-dropdown-menu"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    >
                      <div className="sort-menu-header">SORT BY</div>
                      {['Relevant', 'Price: Low to High', 'Price: High to Low'].map((opt) => (
                        <div key={opt} className={`sort-option ${sortType === opt ? 'active' : ''}`} 
                             onClick={() => { setSortType(opt); setShowSort(false); }}>
                          {opt} <span className="radio-circle"></span>
                        </div>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 4. Product Grid with Staggered Pop (key={activeCategory} forces restart on filter) */}
          <motion.div 
            key={activeCategory}
            className="products-main-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <motion.div 
                  key={product.id} 
                  className="item-card"
                  variants={productItem}
                  whileHover={{ y: -10 }}
                >
                  <div className="image-container">
                    <Link to={`/productdetail/${product.id}`}>
                      <img src={product.img} alt={product.name} loading="lazy" />
                    </Link>
                  </div>
                  <div className="item-details">
                    <h3 className="item-title">{product.name}</h3>
                    <p className="item-price">₹{product.price}</p>
                    <div className="delivery-tag">Free Delivery</div>
                    <div className="rating-row">
                      <span className="rating-badge">{product.rating} <HiStar className="star-icon" /></span>
                      <span className="reviews-count">({product.reviews} Reviews)</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div className="no-products-found" variants={focusBlur}>
                <h3>No products found in this category.</h3>
                <button onClick={() => setActiveCategory('All Products')}>Show All Products</button>
              </motion.div>
            )}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Products;