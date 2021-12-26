import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import s from './HomeView.module.scss';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  return (
    <div>
      <Typography variant="h3" gutterBottom component="div">
        Страница логина
      </Typography>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Почта"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <TextField
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" type="button">
          Войти
        </Button>
      </Box>
    </div>
  );
}
