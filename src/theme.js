import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#646cff',
      light: '#8b8dff',
      dark: '#4a4fcc',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#00d4aa',
      light: '#4dd9c7',
      dark: '#009e7f',
      contrastText: '#000000'
    },
    background: {
      default: '#0a0a1a',
      paper: '#1a1a2e',
      card: '#16213e'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b8b8b8',
      disabled: '#6c6c6c'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    success: {
      main: '#10b981'
    },
    warning: {
      main: '#f59e0b'
    },
    error: {
      main: '#ef4444'
    },
    info: {
      main: '#3b82f6'
    }
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em'
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.6
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px'
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '6px 12px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  },
  shape: {
    borderRadius: 12
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default darkTheme;
