import React, { useState } from "react";
import "./Signin.css";

function Signin() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSignIn = (event) => {
        if(email === ''){
            alert("Please enter both fields");
        }else{
      event.preventDefault();
      // Retrieve email from local storage
      const storedEmail = localStorage.getItem('email');
      if (email === storedEmail) {
        // Email matches, redirect to main.jsx
        window.location.href = '/main';
      } else {
        // Email does not match
        alert('Invalid email');
      }
    }
    };
  
  return (
    <div>
      <header className="showcase">
        <div className="logo">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix Logo" />
        </div>
        <div className="showcase-content">
          <div className="formm">
            <form onSubmit={handleSignIn}>
              <h1>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={handleEmailChange}
                />{" "}
                <br />
                <input
                  className="email"
                  type="password"
                  placeholder="Password"
                  
                />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit">
                  Sign In
                </button>
              </div>
              <div className="help">
                <div>
                  <input value="true" type="checkbox" />
                  <label>Remember me</label>
                </div>
                <a href="https://www.netflix.com/dz-en/LoginHelp">
                  Need Help ?
                </a>
              </div>
            </form>
          </div>
          <div className="fcbk">
            <a href="https://facebook.com">
              <img
                src="https://i.ibb.co/LrVMXNR/social-fb.png"
                alt="Facebook"
              />
            </a>
            <p>Login with Facebook</p>
          </div>
          <div className="signup">
            <p>New to Netflix ?</p>
            <a href="https://www.netflix.com/signup?locale=en-IN">Sign up now</a>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
        <footer>
          <div className="ftr-content">
            <div className="contact">
              <a href="#">Quesions? Contact us.</a>
            </div>
            <div className="ftr">
              <a href="#">Gift Card Terms</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Statement</a>
            </div>
            <div className="select">
              <select>
                <option>English</option>
                <option>العربية</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default Signin;
