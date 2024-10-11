import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e29578',
      contrastText: '#ffddd2',
    },
    secondary: {
      main: '#006d77',
      contrastText: '#83c5be'
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    background: {
      default: '#edf6f9',
      paper: '#ffddd2'
    }
  }
});

