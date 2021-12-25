import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  return (
    <>
      <NavLink to="/register">Зарегистрироваться</NavLink>
      <NavLink to="/logIn">Войти</NavLink>
    </>
  );
}
