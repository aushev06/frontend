import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: 'var(--background-color)',
    },
    text: {
      // primary: 'var(--text-color)',
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
    fontFamily: 'var(--font--family--base)',
  },
});

export default theme;
