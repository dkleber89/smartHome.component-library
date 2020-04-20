import { colors } from '@material-ui/core';

import IThemeOptions from './IThemeOptions';
import createTheme from './createTheme';

const primaryGreen = colors.green[500];
const accentGreen = colors.green.A200;
const darkGreen = colors.green[900];
const primaryPurple = colors.purple[500];
const accentPurple = colors.purple.A200;
const darkPurple = colors.purple[900];

const overridings: IThemeOptions = {
  name: 'Light Theme',
  palette: {
    type: 'light',
    primary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: '#fff',
    },
    secondary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: '#fff',
    },
  },
};

export default createTheme(overridings);
