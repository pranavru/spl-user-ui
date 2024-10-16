import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e29578',
      light: '#ffddd2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#006d77',
      light: '#83c5be',
    },
    text: {
      primary: '#555555',
      secondary: '#444444'
    },
    background: {
      default: '#edf6f9',
      paper: '#ffddd2'
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  
});

