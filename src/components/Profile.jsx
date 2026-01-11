import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoLogoWhatsapp, IoMailOutline, IoCallOutline, 
  IoHelpCircle, IoLocationOutline, IoBagHandleOutline, 
  IoExpandOutline, IoPersonOutline 
} from "react-icons/io5";
import '../styles/Profile.css';

const Profile = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('My Profile'); // Default to My Profile
  const navigate = useNavigate();
const [isEditing, setIsEditing] = useState(false);

  // 1. New State for Editable Profile Details
  const [userData, setUserData] = useState({
    name: 'Priya Deswal',
    email: 'priya123@gmail.com',
    phone: '+91 9876543210',
    gender: 'Female',
    address: 'New Delhi, India'
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const tabVariants = {
    initial: { opacity: 0, filter: "blur(10px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(10px)", y: -20 }
  };

  const helpData = [
    {
      icon: '📦',
      label: 'Orders',
      questions: [
        { q: "How can I track my order?", a: "You can track your order by going to 'My Orders', selecting the order you want to track, and clicking on 'Track Order'. You will see the live status and expected delivery date." },
        { q: "Can I cancel or return an order?", a: "Yes! You can cancel an order before it is shipped, and return or replace items within 10 days of delivery via the 'My Orders' section." }
      ]
    },
    {
      icon: '💳',
      label: 'Payments',
      questions: [
        { q: "Which payment methods do you accept?", a: "We accept multiple payment methods including UPI, Credit/Debit Cards, Net Banking, Wallets, and Cash on Delivery for your convenience." },
        { q: "How long does a refund take?", a: "Refunds are processed within 7-10 business days after the returned product is received and verified by our team." }
      ]
    },
    {
      icon: '🚚',
      label: 'Shipping & Delivery',
      questions: [
        { q: "Do you provide international delivery?", a: "Yes! We deliver to many countries worldwide. Shipping charges and estimated delivery times will vary based on the destination." },
        { q: "What is the typical delivery timeline?", a: "Domestic deliveries usually take 3-7 business days. International deliveries may take 7-21 business days depending on the country." }
      ]
    },
    {
      icon: '👤',
      label: 'Account',
      questions: [
        { q: "How can I update my profile?", a: "You can update your personal details such as name, email, phone number, and password under 'My Profile' in Account Settings." },
        { q: "How can I delete my account?", a: "If you wish to delete your account, please contact our support team via email or WhatsApp and they will assist you." }
      ]
    },
  ];

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: '100%' }} // Ensures expansion
        >
          {(() => {
    switch (activeTab) {
      
      case 'My Profile':
      return (
        <div className="tab-fade-in profile-section-container">
          <h1 className="tab-title profile-header">Edit Information</h1>
          
          {!isEditing ? (
            
            <div className="profile-view-mode">
              <div className="view-group">
                <label>Name</label>
                <p>{userData.name}</p>
              </div>
              <div className="view-group">
                <label>Email</label>
                <p>{userData.email}</p>
              </div>
              <div className="view-group">
                <label>Phone</label>
                <p>{userData.phone}</p>
              </div>
              <div className="view-group">
                <label>Gender</label>
                <p>{userData.gender}</p>
              </div>
              <div className="view-group">
                <label>Address</label>
                <p>{userData.address}</p>
              </div>
              <button className="edit-mode-btn" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            </div>
          ) : (
            <div className="profile-form">
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <select name="gender" value={userData.gender} onChange={handleInputChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="input-group">
                <label>Address</label>
                <textarea name="address" value={userData.address} onChange={handleInputChange} rows="3" />
              </div>
              <button className="save-btn" onClick={() => setIsEditing(false)}>
                Save Changes
              </button>
            </div>
          )}
        </div>
      );

      case 'Help Center':
        return (
          <div className="tab-fade-in">
            <header className="help-header">
              <div className="title-row">
                <IoHelpCircle className="main-help-icon" />
                <h1 className="help-title">Help Center</h1>
              </div>
              <p className="help-subtitle">Click on a topic to view detailed answers</p>
            </header>
            <section className="accordion-list">
              {helpData.map((item, index) => (
                <div key={index} className="accordion-group">
                  <div className="accordion-header" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <div className="label-group">
                      <span>{item.icon}</span>
                      <span className="label-text">{item.label}</span>
                    </div>
                    <span className="plus-sign">{openIndex === index ? '−' : '+'}</span>
                  </div>
                  {openIndex === index && (
                    <motion.div 
                              initial={{ height: 0, opacity: 0 }} 
                              animate={{ height: "auto", opacity: 1 }} 
                              className="accordion-content"
                            >
                      {item.questions.map((qa, i) => (
                        <div key={i} className="qa-block">
                          <h4 className="question-text">{qa.q}</h4>
                          <p className="answer-text">{qa.a}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </section>
          </div>
        );

      case 'Size Guide':
        return (
          <div className="tab-fade-in">
            <h1 className="tab-title">Size Guide</h1>
            <p className="help-subtitle">Professional fit guide for your measurements.</p>
            <div className="professional-table-container">
              <table className="size-guide-table">
                <thead>
                  <tr>
                    <th>Standard</th>
                    <th>Chest (in)</th>
                    <th>Waist (in)</th>
                    <th>Shoulder (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>38</td><td>30</td><td>17.5</td></tr>
                  <tr className="highlight-row"><td>M</td><td>40</td><td>32</td><td>18.0</td></tr>
                  <tr><td>L</td><td>42</td><td>34</td><td>18.5</td></tr>
                  <tr className="highlight-row"><td>XL</td><td>44</td><td>36</td><td>19.0</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'Track Order':
        return (
          <div className="tab-fade-in">
             <h1 className="tab-title">🚚 Track Order</h1>
             <div className="track-input-box">
               <input type="text" placeholder="Enter Order ID (e.g. #SC1234)" className="pro-input" />
               <button className="theme-btn">Track Now</button>
             </div>
          </div>
        );

      case 'My Orders':
        return (
          <div className="tab-fade-in">
            <h1 className="tab-title">My Orders</h1>
            <div className="order-item-card">
              <div className="order-details">
                <p style={{ textAlign: 'center', padding: '20px' }}>No active orders found.</p>
               </div>
              <div className="order-action-area">
                <button className="reorder-btn" onClick={() => navigate('/cart')}>
                  View in Cart
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="tab-fade-in"><h2>Coming Soon</h2></div>;
    }
    })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-container">
        <aside className="sidebar">
          <h2 className="sidebar-title">Account Settings</h2>
          <nav>
            <ul className="sidebar-menu">
              <li className={activeTab === 'My Profile' ? 'active' : ''} onClick={() => setActiveTab('My Profile')}><IoPersonOutline /> My Profile</li>
              <li className={activeTab === 'Track Order' ? 'active' : ''} onClick={() => setActiveTab('Track Order')}><IoLocationOutline /> Track Order</li>
              <li className={activeTab === 'My Orders' ? 'active' : ''} onClick={() => setActiveTab('My Orders')}><IoBagHandleOutline /> My Orders</li>
              <li className={activeTab === 'Size Guide' ? 'active' : ''} onClick={() => setActiveTab('Size Guide')}><IoExpandOutline /> Size Guide</li>
              <li className={activeTab === 'Help Center' ? 'active' : ''} onClick={() => setActiveTab('Help Center')}><IoHelpCircle /> Help Center</li>
            </ul>
          </nav>
        </aside>

        <main className="help-center-card">
          {renderContent()}

          <footer className="footer-support">
            <h3 className="footer-title">Need more help?</h3>
            <div className="contact-item"><IoMailOutline className="react-icon" /> Email: <strong>support@shopcart.com</strong></div>
            <div className="contact-item"><IoCallOutline className="react-icon" /> Call: <strong>+91 98765 43210</strong></div>
            <div className="contact-item"><IoLogoWhatsapp className="react-icon wp-icon" /> WhatsApp Support Available</div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Profile;