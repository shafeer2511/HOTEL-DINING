import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    let valid = true;

    if (!email) {
      valid = false;
      alert('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      alert('Email is invalid');
    }

    if (!password) {
      valid = false;
      alert('Password is required');
    } else if (password.length < 6) {
      valid = false;
      alert('Password must be at least 6 characters long');
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted');
    }
  };

  return (
    <div className="loginbox">
      <img src='logo.gif' className="avatar" alt="Avatar" />

      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />

        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <input type="submit" value="Login" />
        {/* Link to the registration page */}
        <div className="reg-log">
          <h4>If you don't have an account</h4>
          <Link to="/register" className='now'>Register Now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
