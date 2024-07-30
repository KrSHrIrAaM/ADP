import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavHead from './NavHead/NavHead';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import Plans from './Plans/Plans';
import Service from './Service/Service';
import ContactUs from './ContactUs/ContactUs';
import Account from './Account/Account';
import Profile from './Profile/Profile';
import NavDown from './NavDown/NavDown';
import Recharge from './Recharge/recharge';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './Admin/AdminDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for login status
    const user = localStorage.getItem('user');
    setIsLoggedIn(user ? true : false);
    
    const admin = localStorage.getItem('admin');
    setIsAdminLoggedIn(admin ? true : false);
  }, []);

  return (
    <Router>
      <NavHead isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/Login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/Home" />} />
        <Route path="/Register" element={!isLoggedIn ? <Register /> : <Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/recharge" element={isLoggedIn ? <Recharge /> : <Navigate to="/Login" />} />
        <Route path="/Plans" element={isLoggedIn ? <Plans /> : <Navigate to="/Login" />} />
        <Route path="/Service" element={isLoggedIn ? <Service /> : <Navigate to="/Login" />} />
        <Route path="/ContactUs" element={isLoggedIn ? <ContactUs /> : <Navigate to="/Login" />} />
        <Route path="/Account" element={isLoggedIn ? <Account /> : <Navigate to="/Login" />} />
        <Route path="/Profile" element={isLoggedIn ? <Profile /> : <Navigate to="/Login" />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/admin/login" element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
        <Route path="/admin/dashboard" element={isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/admin/login" />} />
      </Routes>
      <NavDown />
    </Router>
  );
}

export default App;
