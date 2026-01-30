import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import SubscriptionSuccess from './components/SubscriptionSuccess';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

import { CartProvider } from './context/CartContext.jsx'; 
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
     
    {isAuthenticated && !isLoginPage && <Navbar />}

      <div className="content-wrapper">
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          
          {/* Protected Routes logic */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/subscribe-success" element={<SubscriptionSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </div>

      {isAuthenticated && !isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;