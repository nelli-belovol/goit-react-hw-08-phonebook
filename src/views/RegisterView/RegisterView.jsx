import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
    if (password !== passwordConfirm) {
      alert('passwords must match');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <Box
      component="form"
      sx={[
        {
          display: 'block',
          maxWidth: '500px',
          margin: 'auto',
        },
        {
          '& .MuiTextField-root': {
            margin: 'auto',
            marginTop: '10px',
            width: '100%',
          },
        },
      ]}
      validate
      onSubmit={handleSubmit}
      autoComplete="on"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          required
          id="outlined-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={password}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-password-input"
          label="confirm password"
          type="password"
          autoComplete="current-password"
          name="passwordConfirm"
          value={passwordConfirm}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          onChange={handleChange}
        />
      </div>
      <Button
        sx={{ margin: 'auto', marginTop: '10px', width: '100%' }}
        variant="contained"
        type="submit"
      >
        <NavLink to="/login"> Register</NavLink>
      </Button>
    </Box>
  );
}
