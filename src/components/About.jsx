import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
useLayoutEffect(() => {
    const forceScroll = () => {
      window.scrollTo(0, 0);
      const wrapper = document.querySelector('.content-wrapper');
      if (wrapper) {
        wrapper.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        wrapper.scrollTop = 0; // Double safety
      }
    };
    forceScroll();
    const timeoutId = setTimeout(forceScroll, 50); 
    return () => clearTimeout(timeoutId);
  }, []);

  // Animation Variants
  const focusBlur = {
    hidden: { filter: "blur(15px)", opacity: 0, scale: 1.1 },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Cards ek ke baad ek aayenge
      }
    }
  };

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
    >
      {/* 1. Hero Section - Focus Blur Effect */}
      <section className="about-hero-premium">
        <motion.div className="hero-overlay" variants={focusBlur}>
          <h1>Redefining the Future of <span>Shopping</span></h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
          >
            Innovation, Quality, and You.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Compact Cards Section - Staggered Slide Up */}
      <div className="about-content-wrapper">
        <motion.div 
          className="about-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Box 1: Our Story */}
          <motion.div className="about-card" variants={fadeInUp}>
            <div className="card-image">
              <img src="about1.png" alt="Story" onError={(e) => e.target.src='https://via.placeholder.com/300x200?text=Our+Story'} />
            </div>
            <div className="card-body">
              <h3>Our Story</h3>
              <p>Launched in 2026, ShopCart started in a humble garage with a mission to provide premium quality products at accessible prices for everyone.</p>
            </div>
          </motion.div>

          {/* Box 2: Careers */}
          <motion.div className="about-card" variants={fadeInUp}>
            <div className="card-image">
              <img src="about2.png" alt="Careers" onError={(e) => e.target.src='https://via.placeholder.com/300x200?text=Careers'} />
            </div>
            <div className="card-body">
              <h3>Careers</h3>
              <p>Looking for visionary talent! If you're creative and driven to impact the E-commerce world, we’d love to have you on our team.</p>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="card-btn"
              >
                Join Us
              </motion.button>
            </div>
          </motion.div>

          {/* Box 3: Press & Media */}
          <motion.div className="about-card" variants={fadeInUp}>
            <div className="card-image">
              <img src="about3.png" alt="Press" onError={(e) => e.target.src='https://via.placeholder.com/300x200?text=Press'} />
            </div>
            <div className="card-body">
              <h3>Press & Media</h3>
              <p>Stay updated with our latest milestones. Download our press kit or explore our recent media mentions and corporate news.</p>
              <div className="card-links">
                <a href="#"># Press 2026</a>
                <a href="#"># News</a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;