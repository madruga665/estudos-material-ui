import { orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      orangePrimary: string;
      redPrimary: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      orangePrimary?: string;
      redPrimary?: string;
    };
  }
}

export const Theme = createTheme({
  colors: {
    orangePrimary: orange[500],
    redPrimary: red[500],
  },
  typography: {
    fontFamily: [
      'poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});