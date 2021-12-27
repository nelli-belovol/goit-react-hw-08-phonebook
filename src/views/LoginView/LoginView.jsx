import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth/authOperations';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error);

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
        </div>
        <Button
          sx={{ margin: 'auto', marginTop: '10px', width: '100%' }}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
        {error && <p>Check the data and try again</p>}
      </Box>
    </div>
  );
}
