import { createTheme } from '@mui/material/styles';
import { experimental_sx as sx } from '@mui/system';

export const MUI_THEME = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C3AFC',
    },
    background: {
      default:
        'linear-gradient(234.36deg, rgba(12, 12, 76, 0.5) 2.69%, rgba(6, 6, 6, 0) 43.67%), radial-gradient(168.67% 168.67% at 48.89% 54.41%, rgba(78, 32, 130, 0.5) 0%, rgba(12, 12, 76, 0.5) 71.88%), #080817;',
      paper: '#180C3C',
    },
    text: {
      primary: '#fff',
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Saira, sans-serif',
    h4: { fontSize: 40, lineHeight: '36px' },
    h6: { fontSize: 16, lineHeight: '21px' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          background: theme.palette.background.default,
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background:
            'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%)',
          borderRadius: '4px',
          px: 1.5,
          color: 'var(--color-white)',
          textTransform: 'inherit',
          border: '3px solid',
          borderImageSource:
            'linear-gradient(90deg, #995AFF -22.86%, rgba(186, 155, 255, 0.954063) 52.56%, #8E53FA 126.43%)',
          borderImageSlice: 1,
          ':after': {
            position: 'absolute',
            top: '-5px',
            bottom: '-5px',
            left: '-5px',
            right: '-5px',
            border: '2px solid rgba(0, 0, 0, 1)',
            content: "''",
            zIndex: -1,
            borderRadius: '4px',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            background:
              'linear-gradient(180deg, #995AFF -7.69%, rgba(108, 58, 252, 0.91) 127.88%);',
          },
        },
      ],
    },
    MuiList: {
      styleOverrides: {
        root: sx({
          p: 0,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.MuiTab-root': {
            color: 'rgba(255, 255, 255, 0.5)',
          },
          '&.Mui-selected': {
            color: 'white',
            textShadow:
              '0px 0px 10px rgba(255, 255, 255, 0.25), 0px 2px 0px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: sx({
          fontSize: '12px',
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: sx({
          borderBottom: '1px solid rgba(130, 75, 244, 0.08)',
          py: 1,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: sx({
          p: 2,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: sx({
          height: 40,
          background: 'rgba(24, 12, 60, 1)',
          borderRadius: '4px',
        }),
      },
    },
  },
});
