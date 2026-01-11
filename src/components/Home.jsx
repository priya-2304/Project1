import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../styles/Home.css';
import CategorySlider from '../components/CategorySlider';
import FlashSale from '../components/FlashSale';
import AllTimeFav from '../components/AllTimeFav';
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <motion.div className="home-wrapper" initial="hidden" animate="visible"> 
      <section className="hero-section" style={{ overflow: 'hidden' }}>
        <div className="hero-content">
          <motion.h1 variants={slideLeft}>
            Find your <br /> <span>Dream</span> Outfit
          </motion.h1>
          
          <motion.p variants={slideRight}>
            Curated fashion collections to elevate your wardrobe.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/products">
              <button className="explore-btn">Explore Collections</button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Slider - Slides up */}
      <motion.div className="slider-box" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <CategorySlider />
      </motion.div>

      {/* Product Sections - Slide in from sides on scroll */}
      <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <FlashSale />
      </motion.div>

      <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <AllTimeFav />
      </motion.div>

      <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <NewArrivals />
      </motion.div>

      <div className="compact-view-all" style={{ paddingBottom: '60px' }}>
        <Link to="/products" className="view-all-btn">Explore All Collections</Link>
      </div>
    </motion.div> 
  );
};

export default Home;