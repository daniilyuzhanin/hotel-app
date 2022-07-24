import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { Router } from 'common/components/Router';

declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme { }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
      light: '#FFFFFF',
      //!
      dark: '#2EA8E6',
      contrastText: '#000000',
    },
  },
  spacing: 2,
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '28px',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);
