// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FiShoppingCart, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
// import { FcGoogle } from 'react-icons/fc';
// import '../styles/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSignIn = (e) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       alert("Please enter both email and password.");
//       return;
//     }
//     localStorage.setItem("isLoggedIn", "true");
//     navigate('/'); 
//     window.location.reload();
//     window.scroll(0,0);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Left Side - Hero Image Section */}
//         <div className="left-pane">
//           <div className="overlay">
//             <div className="brand">
//               <FiShoppingCart className="icon-cart" />
//               <span>SHOPCART</span>
//             </div>
//             <div className="left-text">
//               <h1>Premium Collections <br/> Now Accessible.</h1>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Login Form Section */}
//         <div className="right-pane">
//           <div className="form-header">
//             <h2 className="welcome-font">Welcome Back</h2>
//             <p>Please enter your details to sign in</p>
//           </div>

//           <form className="login-form" onSubmit={handleSignIn}>
//             <div className="input-group">
//               <label>EMAIL ADDRESS</label>
//               <div className="input-wrapper">
//                 <FiMail className="input-icon" />
//                 <input 
//                   type="email" 
//                   placeholder="name@gmail.com" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required 
//                 />
//               </div>
//             </div>

//             <div className="input-group">
//               <label>PASSWORD</label>
//               <div className="input-wrapper">
//                 <FiLock className="input-icon" />
//                 <input 
//                   type={showPassword ? "text" : "password"} 
//                   placeholder="Enter password" 
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <div 
//                   className="eye-icon" 
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </div>
//               </div>
//             </div>

//             <div className="form-actions">
//               <Link to="/forgot-password" strokeWidth="2" className="forgot-password">
//                 Forgot Password?
//               </Link>
//             </div>

//             <button type="submit" className="btn-signin">
//               SIGN IN <span className="arrow">→</span>
//             </button>
//           </form>

//           <div className="divider"><span>OR</span></div>

//           <button type="button" className="btn-google">
//             <FcGoogle className="google-icon" />
//             Continue with Google
//           </button>

//           <p className="footer-text">
//             Don't have an account? 
//             <Link to="/signup" style={{ color: '#e65540', fontWeight: 'bold', marginLeft: '5px' }}> 
//                Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiShoppingCart, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion'; // 1. Framer Motion Import kiya
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // 2. Animations Define kiye (Home page ki tarah)
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    navigate('/'); 
    window.location.reload();
    window.scroll(0,0);
  };

  return (
    // 3. Container ko motion.div banaya
    <motion.div 
      className="login-container"
      initial="hidden"
      animate="visible"
    >
      <div className="login-card">
        
        {/* Left Side - Home page style slide effect */}
        <motion.div className="left-pane" variants={slideLeft}>
          <div className="overlay">
            <motion.div className="brand" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <FiShoppingCart className="icon-cart" />
              <span>SHOPCART</span>
            </motion.div>
            <div className="left-text">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1, duration: 0.8 }}
              >
                Premium Collections <br/> Now Accessible.
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Slide in from Right */}
        <motion.div className="right-pane" variants={slideRight}>
          <div className="form-header">
            <h2 className="welcome-font">Welcome Back</h2>
            <p>Please enter your details to sign in</p>
          </div>

          <form className="login-form" onSubmit={handleSignIn}>
            {/* Input fields ko fadeInUp effect diya */}
            <motion.div className="input-group" variants={fadeInUp}>
              <label>EMAIL ADDRESS</label>
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input 
                  type="email" 
                  placeholder="name@gmail.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </motion.div>

            <motion.div className="input-group" variants={fadeInUp}>
              <label>PASSWORD</label>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </motion.div>

            <div className="form-actions">
              <Link to="/forgot-password" strokeWidth="2" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="btn-signin"
            >
              SIGN IN <span className="arrow">→</span>
            </motion.button>
          </form>

          <div className="divider"><span>OR</span></div>

          <button type="button" className="btn-google">
            <FcGoogle className="google-icon" />
            Continue with Google
          </button>

          <p className="footer-text">
            Don't have an account? 
            <Link to="/signup" style={{ color: '#e65540', fontWeight: 'bold', marginLeft: '5px' }}> 
                Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Login;