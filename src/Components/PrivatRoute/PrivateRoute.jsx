import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  console.log(children);
  return isLoggedIn ? children : <Navigate to="/register" />;
}
