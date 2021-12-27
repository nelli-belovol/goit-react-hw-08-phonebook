import React from 'react';

import Typography from '@mui/material/Typography';

export default function HomeView() {
  return (
    <>
      <Typography
        sx={{
          display: 'block',
          maxWidth: '500px',
          margin: 'auto',
          textAlign: 'center',
          color: 'rgb(26,118,210)',
        }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Welcome
      </Typography>
    </>
  );
}
