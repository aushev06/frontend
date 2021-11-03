import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'var(--background-color)',
    },
    text: {
      primary: '#d0d0dd',
    },
  },
  shadows: ['none'],
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
