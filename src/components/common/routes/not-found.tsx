import { Container, Typography } from '@mui/material';
import React from 'react';

export const NotFound: React.FC = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95vh',
    flexDirection: 'column',
  };

  return (
    <Container maxWidth='xl' sx={divStyle}>
      <Typography variant={'h3'}>
        {'404 - Page Not Found'}
        </Typography>
      <Typography variant='caption'>
        {'The page you are looking for does not exist.'}
      </Typography>
    </Container>
  );
};
