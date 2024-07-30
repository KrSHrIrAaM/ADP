import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recharge.css'; 
import jio from '../Assests/jio.png';

const Recharge = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const mobileNumberRegex = /^[6-9]\d{9}$/; 
    if (!mobileNumberRegex.test(mobileNumber)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    setError('');

    
    const newRecharge = {
      mobileNumber,
      plan,
      date: new Date().toISOString(),
    };

    
    const storedRecharges = JSON.parse(localStorage.getItem('recharges')) || [];
    storedRecharges.push(newRecharge);
    localStorage.setItem('recharges', JSON.stringify(storedRecharges));

    setSuccess('Recharge successful!');
    navigate('/profile'); 
  };

  return (
    <div className="recharge-container">
      <div className="recharge-card">
        <img src={jio} alt="Logo" className="recharge-logo" />
        <h1>Recharge Plan Details</h1>
        {plan ? (
          <>
            <p><strong>Price:</strong> ₹{plan.price}</p>
            <p><strong>Validity:</strong> {plan.validity}</p>
            <p><strong>Data:</strong> {plan.data}</p>
            <p><strong>Calls:</strong> {plan.calls}</p>
            <form onSubmit={handleSubmit} className="recharge-form">
              <div className="form-group">
                <label htmlFor="mobile-number">Mobile Number:</label>
                <input
                  type="text"
                  id="mobile-number"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  placeholder="Enter mobile number"
                  maxLength="10"
                />
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
              </div>
              <button type="submit" className="recharge-button">Proceed</button>
            </form>
          </>
        ) : (
          <p>No plan selected.</p>
        )}
      </div>
    </div>
  );
};

export default Recharge;
