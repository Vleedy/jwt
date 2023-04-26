import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 70%)',
          borderRadius: '0.4rem',
          marginBottom: 16,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          flex: '1',
          padding: '0.3rem',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 50%)' },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '35px',
          color: 'white',
          marginLeft: 14,
          '@media (max-width: 1100px)': {
            marginLeft: 8,
            svg: {
              fontSize: '1.3rem',
            },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          whiteSpace: 'nowrap',
          fontWeight: 'normal',
          fontSize: '0.9rem',
          '@media (max-width: 1100px)': {
            fontSize: '0.8rem',
          },
        },
      },
    },
  },
});
