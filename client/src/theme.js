// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0B1A28',
      paper: '#111d2f',
    },
    primary: {
      main: '#1F51FF',
    },
    secondary: {
      main: '#FFE81F',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c5c5c5',
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Roboto', sans-serif`,
  },
});

export default theme;
