import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCheckCircle } from 'react-icons/fi';
import '../styles/Login.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // Success message state
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // 1. Success message dikhao
    setIsSuccess(true);

    // 2. 2 seconds baad login page pe bhej do
    setTimeout(() => {
      navigate('/'); 
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card wide-card" style={{ height: 'auto', padding: '40px' }}>
        <div className="right-pane" style={{ flex: 1 }}>
          <div className="form-header">
            <h2 className="welcome-font">Join Shopcart</h2>
            <p>Create your account in seconds</p>
          </div>

          <form className="login-form" onSubmit={handleSignUp}>
            <div className="input-group">
              <label>FULL NAME</label>
              <div className="input-wrapper">
                <FiUser className="input-icon" />
                <input type="text" placeholder="John Doe" required />
              </div>
            </div>

            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="input-group">
              <label>CREATE PASSWORD</label>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="........" 
                  required 
                />
                <div className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </div>

            <button type="submit" className="btn-signin" style={{ marginTop: '20px' }}>
              CREATE ACCOUNT →
            </button>
          </form>

          {/* Success Message UI */}
          {isSuccess && (
            <div className="success-banner">
              <FiCheckCircle /> Account Created Successfully! Redirecting...
            </div>
          )}

          <p className="footer-text">
            Already have an account? <Link to="/">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;