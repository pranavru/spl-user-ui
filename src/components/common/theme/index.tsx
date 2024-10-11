import { ThemeProvider } from '@emotion/react'
import { theme } from './custom-theme'
import React from 'react';

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
