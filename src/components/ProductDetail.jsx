import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { AiOutlineShoppingCart, AiFillStar } from 'react-icons/ai';
import { IoMdArrowBack, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useCart } from '../context/CartContext';

import { allProducts } from '../data/Products'; 
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWishlist } = useCart();
 
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('L');
  const [activeImg, setActiveImg] = useState("");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // --- Animation Variants ---
  const focusBlur = {
    hidden: { filter: "blur(12px)", opacity: 0, y: 20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

 useEffect(() => {
    // 1. Jaise hi 'id' change ho, turant scroll top karein
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Aap 'instant' bhi use kar sakte hain
    });

    const productId = parseInt(id);
    setProduct(null); // Loading state dikhane ke liye
    
    const found = allProducts.find(p => p.id === productId);

    if (found) {
      setProduct(found);
      setActiveImg(found.img);
      setIsDetailsOpen(false); 
    } else {
      // Agar product nahi mila toh default 1st product dikhayein
      setProduct(allProducts[0]);
      setActiveImg(allProducts[0].img);
    }
  }, [id]); // Jab bhi ID change hogi, ye function chalega

  const handleBuyNow = () => {
    if(product) {
      addToWishlist(product);
      navigate('/checkout');
    }
  };

  const handleAddToCart = () => {
    if(product) addToWishlist(product);
  };

  if (!product) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Product...</div>;
  }

  const currentCategory = String(product.category || "").toLowerCase();

  let recommended = allProducts.filter(p => {
    const pCategory = String(p.category || "").toLowerCase();
    return pCategory === currentCategory && p.id !== product.id;
  });
  if (recommended.length === 0) {
    recommended = allProducts.filter(p => p.id !== product.id).slice(0, 6);
  } else {
    recommended = recommended.slice(0, 6);
  }

  const subImgs = product.subImages && product.subImages.length > 0 ? product.subImages : [
    product.img,     
    "/sub1.png",
    "/sub2.png",
    "/sub3.png"
  ];

  return (
    <motion.div 
      className="pd-container"
      initial="hidden"
      animate="visible"
    >
      <motion.button variants={focusBlur} className="pd-back-btn" onClick={() => navigate(-1)}>
        <IoMdArrowBack /> Back
      </motion.button>

      <div className="pd-main-grid">
        <motion.div className="pd-left" variants={slideInLeft}>
          <div className="pd-gallery-container">
            <div className="pd-thumbnails">
              {subImgs.map((img, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.05 }}
                  className={`pd-thumb-box ${activeImg === img ? 'active-thumb' : ''}`}
                  onMouseEnter={() => setActiveImg(img)}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt="thumbnail" />
                </motion.div>
              ))}
            </div>
            <div className="pd-img-card">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImg}
                  src={activeImg} 
                  alt={product.name} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>
          
          <div className="pd-action-btns desktop-only">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pd-cart-btn" onClick={handleAddToCart}>
              <AiOutlineShoppingCart /> Add to Cart
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pd-buy-btn" onClick={handleBuyNow}>Buy Now</motion.button>
          </div>
        </motion.div>

        <motion.div className="pd-right" variants={staggerContainer}>
          <motion.div className="pd-info-card" variants={focusBlur}>
            <h1 className="pd-title">{product.name}</h1>
            <div className="pd-price-row">
              <span className="pd-price">₹{product.price}</span>
              <span className="pd-mrp">₹{Number(product.price) + 400}</span>
              <span className="pd-discount">60% OFF</span>
            </div>
            <div className="pd-rating-row">
              <span className="pd-green-badge">{product.rating || "4.0"} ★</span>
              <span className="pd-reviews">{product.reviews || "100"} Ratings</span>
            </div>
            <div className="pd-delivery-tag">Free Delivery</div>
          </motion.div>

          <motion.div className="pd-info-card" variants={focusBlur}>
            <h3 className="pd-subheading">Select Size</h3>
            <div className="pd-size-grid">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button 
                  key={size} 
                  className={`pd-size-chip ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div className="pd-info-card customer-reviews-card" variants={focusBlur}>
            <h3 className="pd-subheading">Customer's Overall Reviews</h3>
            <div className="pd-review-item">
               <div className="pd-rev-stars">
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                  <span>Verified Purchase</span>
               </div>
               <p>"Amazing quality and perfect fit! Highly recommended for everyone."</p>
               <span className="rev-user">- Sita</span>
            </div>
          </motion.div>

          <motion.div className="pd-info-card" variants={focusBlur}>
            <div className="pd-card-header-row">
              <h3 className="pd-subheading">Product Highlights</h3>
              <span className="copy-link">COPY</span>
            </div>
            <div className="highlights-grid">
              <div className="high-item"><p className="label">Fit</p><p className="val">{product.details?.fit || "Standard"}</p></div>
              <div className="high-item"><p className="label">Fabric</p><p className="val">{product.details?.fabric || "Cotton"}</p></div>
            </div>
            <hr className="divider" />
            
            <div className="pd-details-toggle" onClick={() => setIsDetailsOpen(!isDetailsOpen)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '10px 0' }}>
              <h3 className="pd-subheading"style={{ margin: 0 }}>Additional Details</h3>

             <div style={{ color: '#ff4d24', display: 'flex', alignItems: 'center' }}>
    {isDetailsOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
  </div>
            </div>

            <div className={`details-dropdown ${isDetailsOpen ? 'open' : ''}`}>
              <div className="details-table">
                <div className="row"><span>Neck/ Collar</span><p>{product.details?.neck || "N/A"}</p></div>
                <div className="row"><span>Sleeve Length</span><p>{product.details?.sleeves || "N/A"}</p></div>
                <div className="row"><span>Fit</span><p>{product.details?.fit || "N/A"}</p></div>
                <div className="row"><span>Description</span><p>{product.desc || "No description available."}</p></div>
                <div className="row"><span>Country of Origin</span><p>India</p></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="pd-full-width-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="pd-rec-header">
           <h2 className="pd-section-title">Similar Products</h2>
        </div>
        <div className="pd-recommend-grid">
          {recommended.map((item) => (
            <Link to={`/productdetail/${item.id}`} key={item.id} className="pd-recommend-card">
              <motion.div whileHover={{ y: -10 }}>
                <div className="rec-img-wrapper">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="rec-details">
                  <p className="rec-name">{item.name}</p>
                  <p className="rec-price">₹{item.price}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="pd-mobile-footer mobile-only">
        <button className="pd-cart-btn-mob" onClick={handleAddToCart}>
          <AiOutlineShoppingCart /> Cart
        </button>
        <button className="pd-buy-btn-mob" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductDetail;