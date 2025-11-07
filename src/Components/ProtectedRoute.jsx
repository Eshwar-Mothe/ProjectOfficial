import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // if user tries to go to /admin but they are not admin → block
  if (location.pathname.startsWith('/admin') && user.role !== 'admin') {
    return <Navigate to="/user" replace />;
  }

  // if user is admin and tries to go to /user → redirect to /admin
  if (location.pathname.startsWith('/user') && user.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
