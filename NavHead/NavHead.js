import React from 'react';
import './NavHead.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import jio from '../Assests/jio.png';

const NavHead = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <Link to="/home" className='logo'>
        <img src={jio} alt="logo" className='toggle-icon' />
      </Link>
      <ul>
        <li>
          <NavLink to="/plans" className={({ isActive }) => (isActive ? 'active' : '')}>Plans</NavLink>
        </li>
        <li>
          <NavLink to="/service" className={({ isActive }) => (isActive ? 'active' : '')}>Service</NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/account" className={({ isActive }) => (isActive ? 'active' : '')}>
            <AccountCircleIcon />
          </NavLink>
          <div className="dropdown-content">
            {isLoggedIn ? (
              <>
                <NavLink to="/Profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>Settings</NavLink>
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLogout}>Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Log In</NavLink>
                <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : '')}>Register</NavLink>
                <NavLink to="/admin/login" className={({ isActive }) => (isActive ? 'active' : '')}>Admin Login</NavLink>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavHead;
