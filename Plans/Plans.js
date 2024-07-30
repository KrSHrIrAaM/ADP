import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CIcon from '@coreui/icons-react';
import { cibNetflix, cibAmazon, cibEpicGames } from '@coreui/icons';
import './Plans.css'; 

const Plans = () => {
  const [isPrepaid, setIsPrepaid] = useState(true);
  const navigate = useNavigate(); 

  const handleToggle = () => {
    setIsPrepaid(!isPrepaid);
  };

  const prepaidPlans = [
    { price: 375, validity: '28 days', data: '1GB/day', calls: 'Unlimited', icon: cibNetflix },
    { price: 456, validity: '56 days', data: '2GB/day', calls: 'Unlimited', icon: cibNetflix },
    { price: 674, validity: '84 days', data: '3GB/day', calls: 'Unlimited', icon: cibAmazon },
    { price: 3599, validity: '365 days', data: '2.5GB/day', calls: 'Unlimited', icon: cibNetflix },
    { price: 1029, validity: '84 days', data: '2GB/day', calls: 'Unlimited', icon: cibNetflix },
    { price: 674, validity: '84 days', data: '3GB/day', calls: 'Unlimited', icon: cibEpicGames },
  ];

  const postpaidPlans = [
    { price: 449, validity: 'Bill Cycle', data: '40GB/month', calls: 'Unlimited', icon: cibEpicGames },
    { price: 649, validity: 'Bill Cycle', data: '30GB/month', calls: 'Unlimited', icon: cibNetflix },
    { price: 749, validity: 'Bill Cycle', data: '50GB/month', calls: 'Unlimited', icon: cibEpicGames },
    { price: 1549, validity: 'Bill Cycle', data: '300GB/month', calls: 'Unlimited', icon: cibEpicGames },
    { price: 349, validity: 'Bill Cycle', data: '30GB/month', calls: 'Unlimited', icon: cibNetflix },
    { price: 849, validity: 'Bill Cycle', data: '75GB/month', calls: 'Unlimited', icon: cibEpicGames },
  ];

  const handleRecharge = (plan) => {
    navigate('/recharge', { state: { plan } });
  };

  const plans = isPrepaid ? prepaidPlans : postpaidPlans;

  return (
    <div className="plans-container">
      <h1 className="script-plan">Popular Mobile Plans</h1>
      <div className='toggle'>
        <label className="switch">
          <input type="checkbox" checked={isPrepaid} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span className="toggle-label">{isPrepaid ? "Prepaid" : "Postpaid"}</span>
      </div>

      <div className="card-container">
        {plans.map((plan, index) => (
          <Card className="plan-card" key={index}>
            <Card.Body>
              <Card.Text className='plan-card-text'>
                <strong className="highlighted-price">₹{plan.price}</strong><br />
                <strong>Validity:</strong> {plan.validity}<br />
                <CIcon icon={plan.icon} className="plan-icon" />
                <hr />
                <div className="plan-details">
                  <span><strong>Data:</strong> {plan.data}</span>
                  <span><strong>Calls:</strong> {plan.calls}</span>
                </div>
              </Card.Text>
              <Button variant="primary" className="plan-card-button" onClick={() => handleRecharge(plan)}>Recharge</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plans;
