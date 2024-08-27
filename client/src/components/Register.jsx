import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!name) {
      valid = false;
      errors.name = 'Name is required';
    }

    if (!age) {
      valid = false;
      errors.age = 'Age is required';
    } else if (isNaN(age) || age <= 0) {
      valid = false;
      errors.age = 'Age must be a positive number';
    }

    if (!email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }

    if (!password) {
      valid = false;
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      valid = false;
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Registration submitted:', { name, age, email, password });
    }
  };

  return (
    <div className="registerbox">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        {errors.name && <p className="error">{errors.name}</p>}
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        {errors.age && <p className="error">{errors.age}</p>}
        <p>Age</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />

        {errors.email && <p className="error">{errors.email}</p>}
        <p>Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />

        {errors.password && <p className="error">{errors.password}</p>}
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <input type="submit" value="Register" />
        <div className="reg-log">
          <h4>If you already register</h4>
          <Link to="/login" className='now'>login here</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
