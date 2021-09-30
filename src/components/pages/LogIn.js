import React, { useState } from "react";
import "./LogIn.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <label for="login-email" className="input-label">
          Email
        </label>
        <input type="email" placeholder="Email" className="input" />
        <label for="login-password" className="input-label">
          Password
        </label>
        <input type="password" placeholder="Password" className="input" />
        <Link to="/forgot-password">
          <p>Forgot your password?</p>
        </Link>
        <Link to="/school-dashboard" className="btn-link">
          <Button>Log In</Button>
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
