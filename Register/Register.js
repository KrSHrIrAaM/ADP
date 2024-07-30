import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!name || !mobileNo || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/users', {
        name,
        mobileNo,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess('Registration successful! Redirecting to login...');
        setError('');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError('Registration failed. Please try again.');
        setSuccess('');
      }
    } catch (err) {
      console.error('Error registering:', err);
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="text"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
