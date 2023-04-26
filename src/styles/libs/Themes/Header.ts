import { createTheme } from '@mui/material';
export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 85%)',
          color: '#fff',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          '@media (min-width: 600px)': {
            minHeight: '55px',
          },
        },
      },
    },
  },
});
