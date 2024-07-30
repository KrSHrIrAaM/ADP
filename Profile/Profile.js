import React, { useEffect, useState } from 'react';
import './Profile.css'; 

const Profile = () => {
  const [recharges, setRecharges] = useState([]);

  useEffect(() => {
    const storedRecharges = JSON.parse(localStorage.getItem('recharges')) || [];
    setRecharges(storedRecharges);
  }, []);

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="recharge-history">
        <h2>Recharge History</h2>
        {recharges.length > 0 ? (
          <table className="recharge-table">
            <thead>
              <tr>
                <th>Mobile Number</th>
                <th>Price</th>
                <th>Validity</th>
                <th>Data</th>
                <th>Calls</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recharges.map((recharge, index) => (
                <tr key={index}>
                  <td>{recharge.mobileNumber}</td>
                  <td>₹{recharge.plan.price}</td>
                  <td>{recharge.plan.validity}</td>
                  <td>{recharge.plan.data}</td>
                  <td>{recharge.plan.calls}</td>
                  <td>{new Date(recharge.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-history">No recharge history found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
