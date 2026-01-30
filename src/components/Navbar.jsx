import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. useNavigate add kiya
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi';
import { FaShoppingCart , FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa'; 
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { wishlist } = useCart();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dropdownRef = useRef(null);
  
  const navigate = useNavigate(); // 2. Navigation ke liye

  // --- LOGOUT LOGIC ---
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); 
    setMenuOpen(false);
    setProfileOpen(false);
   navigate("/login");
   };

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Outside click se dropdown band karne ke liye
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar-container ${!visible ? 'navbar-hidden' : ''}`}>
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="nav-logo" onClick={() => navigate('/')} style={{cursor:'pointer'}}>
          <FaShoppingCart className="nav-logo-icon" />
          <span className="logo-text">Shopcart</span>
        </div>

        {/* LINKS + PROFILE (Mobile Menu) */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" className="nav-item" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</Link></li>
       
          {/* Mobile View Only Links */}
          <li className="mobile-only">
            <Link to="/profile" className="nav-item" onClick={() => setMenuOpen(false)}>My Profile</Link>
          </li>
          <li className="mobile-only">
            <div className="nav-item mobile-logout-btn" onClick={handleLogout} style={{cursor:'pointer', display:'flex', alignItems:'center', gap:'10px'}}>
              <FaSignOutAlt /> Logout
            </div>
          </li>
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          <div className="cart-wrapper" style={{ position: 'relative' }}>
            <Link to="/cart">
              <HiOutlineShoppingBag className="bag-icon" />
              {wishlist.length > 0 && (
                <span className="cart-count-badge">{wishlist.length}</span>
              )}
            </Link>
          </div>

          <Link to="/products" className="desktop-only">
            <button className="contact-btn-nav">Explore Now</button>
          </Link>

          {/* Desktop Profile Section with Dropdown */}
          <div className="profile-dropdown-container desktop-only" ref={dropdownRef}>
            <HiOutlineUserCircle 
              className="profile-icon" 
              onClick={() => setProfileOpen(!profileOpen)} 
            />
            {profileOpen && (
              <div className="nav-profile-dropdown">
                <Link to="/profile" onClick={() => setProfileOpen(false)}>My Profile</Link>
               <hr />
              <div 
                  className="dropdown-logout-link" 
                  onClick={handleLogout}
                  style={{cursor:'pointer', display:'flex', alignItems:'center', gap:'8px', padding: '10px'}}
                >
                  <FaSignOutAlt /> Logout
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Icon */}
          <div className="mobile-toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;