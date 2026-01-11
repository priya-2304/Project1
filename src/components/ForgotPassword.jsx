import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiSend, FiArrowLeft, FiCheckCircle } from 'react-icons/fi'; // CheckCircle added
import '../styles/Login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="login-container">
        <div className="login-card" style={{ width: '100%', maxWidth: '500px', textAlign: 'center', padding: '40px', height: 'auto' }}>
          <div className="right-pane" style={{ flex: 1, alignItems: 'center', padding: '0' }}>
            {/* Success Icon */}
            <div style={{ marginBottom: '20px' }}>
              <FiCheckCircle style={{ fontSize: '70px', color: '#e65540' }} />
            </div>
            
            <h2 className="welcome-font" style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Check Your Email</h2>
            <p style={{ color: '#555', marginBottom: '25px', lineHeight: '1.6' }}>
              We've sent a recovery link to <br />
              <strong style={{ color: '#000' }}>{email}</strong>. <br />
              Please check your inbox.
            </p>

            <button 
              className="btn-google" 
              style={{ width: '100%', marginBottom: '20px' }}
              onClick={() => setIsSent(false)}
            >
              DIDN'T GET IT? RESEND
            </button>

            <Link to="/" className="forgot-password" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <FiArrowLeft /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card wide-card" style={{ width: '100%', maxWidth: '500px', height: 'auto', padding: '40px' }}>
        <div className="right-pane" style={{ flex: 1, padding: '0' }}>
          <div className="form-header" style={{ marginBottom: '30px' }}>
            <h2 className="welcome-font">Reset Password</h2>
            <p>Enter your email to receive a reset link</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn-signin" style={{ marginTop: '10px' }}>
              SEND RESET LINK <FiSend style={{ marginLeft: '10px' }} />
            </button>
          </form>

          <div className="back-to-login-container" style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/" className="forgot-password" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <FiArrowLeft /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;