import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a4ea3', // Morado Dharma Spa
    },
    secondary: {
      main: '#d4af37', // Dorado elegante
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #fff 0%, #d4af37 100%)',
          color: '#6a4ea3',
          boxShadow: '0 2px 8px rgba(212,175,55,0.08)',
        },
      },
    },
  },
});

export default theme;
