import { ThemeProvider } from '@emotion/react'
import { theme } from './custom-theme'
import React from 'react';
import '../../../assets/css/afacad-flux.css';

type ComponentProps = {
  children: React.ReactNode
};

export const CustomTheme = ({ children }: ComponentProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
