import IThemeOptions from './IThemeOptions';
import createTheme from './createTheme';

const overridings: IThemeOptions = {
  name: 'Dark Theme',
  palette: {
    type: 'dark',
    primary: {
      light: '#9be7ff',
      main: '#64b5f6',
      dark: '#2286c3',
      contrastText: '#000',
    },
    secondary: {
      light: '#82e9de',
      main: '#4db6ac',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
};

export default createTheme(overridings);
