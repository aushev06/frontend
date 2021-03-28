import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#04C800',
    },
    background: {
      default: '#191921',
    },
    text: {
      primary: '#d0d0dd',
    },
  },
  spacing: 10,
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
    ].join(','),
  },
});

export default theme;
