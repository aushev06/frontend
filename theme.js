import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: 'var(#191921)',
    },
    text: {
      primary: 'var(#d0d0dd)',
    },
  },
  spacing: [
    'var(--spacing--10)',
    'var(--spacing--20)',
    'var(--spacing--30)',
    'var(--spacing--40)',
    'var(--spacing--50)',
  ],
  typography: {
    fontFamily: [
      'var(IBM Plex Sans)',
      'var(-apple-system)',
      'var(BlinkMacSystemFont)',
      'var(Roboto)',
      'var(Segoe UI)',
      'var(Oxygen)',
      'var(Ubuntu)',
      'var(Cantarell)',
      'var(Fira Sans)',
      'var(Droid Sans)',
      'var(Helvetica Neue)',
    ].join(','),
  },
});

export default theme;
