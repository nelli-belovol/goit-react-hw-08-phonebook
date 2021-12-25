import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations } from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSelectors';
import defaultAvatar from './defaultAvatar.png';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} alt={name} width="32" />
      <span>Добро пожаловать, {name}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Выйти
      </button>
    </div>
  );
}
