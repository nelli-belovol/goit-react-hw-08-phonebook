import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'passwordConfirm':
        return setPasswordConfirm(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom component="div">
        Страница регистрации
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
            label="Имя"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
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
          <TextField
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" type="submit">
          <NavLink to="/login"> Зарегистрироваться</NavLink>
        </Button>
      </Box>
    </div>
  );
}
