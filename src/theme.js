import { createTheme } from '@mui/material/styles';

/**
 * Anurag's Portfolio Dynamic Theme Configuration
 * All credits to Anurag
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'var(--background)',
      paper: 'var(--surface)',
    },
    primary: {
      main: '#d4a574',
    },
    text: {
      primary: 'var(--foreground)',
      secondary: 'var(--muted)',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--background) !important',
          color: 'var(--foreground) !important',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'var(--surface)',
          borderRadius: '20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
