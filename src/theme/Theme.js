import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          height: '40px',
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          background: '#FBF9FF',
          height: '100vh',
        }
      }
    },
  }
});

export default theme;