import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Animation support
import '../styles/Contact.css';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // --- Animation Variants ---
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
    >
      <div className="contact-wrapper">
        
        {/* LEFT SECTION - Info with Focus Blur & Stagger */}
        <motion.div className="contact-info-section" variants={staggerContainer}>
          <motion.h1 variants={focusBlur}>
            Let's Start a <span>Conversation</span> with ShopCart.
          </motion.h1>
          <motion.p className="sub-text" variants={focusBlur}>
            Have questions about our collections or need help with your order? Our team is here to provide you with the best shopping experience.
          </motion.p>

          <motion.div className="info-cards-container" variants={staggerContainer}>
            {[
              { icon: <Phone size={20} />, title: "Call Support", detail: "+91 98785 43210" },
              { icon: <Mail size={20} />, title: "Email Query", detail: "support@shopcart.com" },
              { icon: <MapPin size={20} />, title: "Visit Warehouse", detail: "Sector 45, Gurgaon, Haryana, India" }
            ].map((item, index) => (
              <motion.div key={index} className="info-card-item" variants={focusBlur}>
                <div className="icon-circle">{item.icon}</div>
                <div className="text-details">
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION - Form with Slide In */}
        <motion.div className="contact-form-section" variants={slideInRight}>
          <div className="form-card">
            <h3 style={{ color : "#0a0a0a" , textAlign:"center" ,fontWeight: "600" , marginBottom :"30px" }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <label>NAME</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-box">
                <label>EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-box">
                <label>MESSAGE</label>
                <textarea 
                  name="message"
                  placeholder="How can we help you?" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="send-btn"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>

            {/* Animated Success Banner */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  className="success-banner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  Message sent successfully! ✓
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;