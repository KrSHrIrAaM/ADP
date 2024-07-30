import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (mobileNo === '' || password === '') {
      setError('Please enter both mobile number and password.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users'); // Fetch all users
      const users = response.data;
      const user = users.find(u => u.mobileNo === mobileNo && u.password === password);

      if (user) {
        setIsLoggedIn(true);
        navigate('/Home');
      } else {
        setError('Invalid mobile number or password.');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
