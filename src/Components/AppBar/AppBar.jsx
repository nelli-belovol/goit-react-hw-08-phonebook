import React from 'react';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <UserMenu /> : <Navigation />}</>;
}
