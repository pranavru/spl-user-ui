import React from 'react';
import { Box, Typography } from '@mui/material';

type ComponentProps = {
  title: string;
  subtitle: string;
  isLoading: boolean;
  icon?: React.ReactNode;
}

export const FullPageError = (props: ComponentProps) => {
  return props.isLoading ? (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", height: '95vh' }}>
      {props.icon || <React.Fragment />}
      <Typography variant='h3'>{props.title}</Typography>
      {props.subtitle ? <Typography variant='caption'>{props.subtitle}</Typography> : <React.Fragment />}
    </Box>
  ): <React.Fragment />;
};
