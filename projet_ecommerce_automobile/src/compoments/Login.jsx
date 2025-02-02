import React from "react";
import "../styles/style.css";
import Button from "./Button";

function Login() {
  return (
    <div className="container">
      <h2>Login Page</h2>

      <form action="">
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <Button type="submit">Login</Button>
      </form>

      <div className="separator">
        <span></span>
        <span>or</span>
        <span></span>
      </div>

      <div className="social-buttons">
        <Button type="button">Continue with Facebook</Button>
        <Button type="button">Continue With Google</Button>
      </div>

      <p>New Customer? <span className="register-link">Register</span></p>
    </div>
  );
}

export default Login;