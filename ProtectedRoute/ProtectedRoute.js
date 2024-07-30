import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAdminLoggedIn, children }) => {
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;
