import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:'#7289da'
    },
    error: {
      main: '#F2B8B5',
      contrastText: '#601410'
    },
    background: {
      default: '#1e2124',
      paper: '#282b30'
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#f0f0f0',
      disabled: '#bdbfbe'
    },
    action: {
      active: '#7289da',
      hover: '#1e2124'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            textDecoration: "none",
            color: "#f0f0f0",
            fontSize: "15px"
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: '#7289da',
            //backgroundColor: '#7289da'
          }
        }
      }
    }
  },
});

export default theme;