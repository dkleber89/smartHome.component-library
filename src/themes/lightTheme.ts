import IThemeOptions from './IThemeOptions';
import createTheme from './createTheme';

const overridings: IThemeOptions = {
  name: 'Light Theme',
  palette: {
    type: 'light',
    primary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9c4dcc',
      main: '#6a1b9a',
      dark: '#38006b',
      contrastText: '#fff',
    },
  },
};

export default createTheme(overridings);
