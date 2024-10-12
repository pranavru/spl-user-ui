import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

type ComponentProps = {
  title: string;
  subtitle: string;
  isLoading: boolean;
  icon?: React.ReactNode;
}

export const FullPageLoader = (props: ComponentProps) => {
  return props.isLoading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
      <CircularProgress size='large' />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
        {props.icon || <React.Fragment />}
        <Typography variant='h3'>
          {props.title}
        </Typography>
        {props.subtitle ? (
          <Typography variant='caption'>
            {props.subtitle}
          </Typography>
        ) : <React.Fragment />}
      </Box>
    </Box>
  ): <React.Fragment />;
};
