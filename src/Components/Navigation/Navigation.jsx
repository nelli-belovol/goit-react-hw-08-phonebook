import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import s from './Navigation.module.scss';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function UserMenu() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
            <Button color="inherit">
              <NavLink className={s.nav__link} to="/register">
                Register
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink className={s.nav__link} to="/login">
                Login
              </NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
