import React, { useEffect, useState } from 'react';
import './Auth.css';

function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  useEffect(() => {
    console.log('isLoginMode :', isLoginMode);
  }, [isLoginMode]);

  const handleRegisterClick = () => {
    const container = document.getElementById('container');
    container.classList.add('active');
    setIsLoginMode((prevMode) => !prevMode);
  };

  const handleLoginClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('active');
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1 className="login-signup">Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g">G</i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f">F</i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github">Git</i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in">LIn</i>
            </a>
          </div>
          <span className="login-signup">
            or use your email for registration
          </span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up1S</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 className="login-signup">Login</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g">G</i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f">F</i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github">Git</i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in">LIn</i>
            </a>
          </div>
          <span className="login-signup">or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Login</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={handleLoginClick}>
              Login
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
