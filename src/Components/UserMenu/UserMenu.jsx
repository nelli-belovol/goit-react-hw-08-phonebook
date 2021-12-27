import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations } from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSelectors';
import defaultAvatar from './defaultAvatar.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import s from './UserMenu.module.scss';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
            <img src={avatar} alt={name} width="32" />
            <span>Welcome, {name}</span>
            <Button
              color="secondary"
              onClick={() => {
                dispatch(authOperations.logOut());
              }}
            >
              <NavLink className={s.userMenu__link} to="/login">
                Logout
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
