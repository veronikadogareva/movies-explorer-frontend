import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

export const ProtectedRoute = ({ element: Component, ...props }) => {
  const location = useLocation();
  const appContext = useContext(AppContext);
  const loggedIn = (location.pathname === '/signin' || location.pathname === '/signup') ? !appContext.loggedIn : appContext.loggedIn;

  return loggedIn ? <Component {...props} /> : <Navigate to='/' replace />
}