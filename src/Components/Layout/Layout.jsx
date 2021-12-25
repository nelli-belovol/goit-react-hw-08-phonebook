import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import s from './Layout.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div className={s.header__container}>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </div>
      <Outlet />
    </>
  );
}
