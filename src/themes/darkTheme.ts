import { createMuiTheme, Theme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';

import ITheme from './ITheme';

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

const overridings: ITheme = {
  name: 'Dark Theme',
  palette: {
    type: 'dark',
    primary: {
      light: accentPurple,
      main: primaryPurple,
      dark: darkPurple,
      contrastText: '#fff',
    },
    secondary: {
      light: accentGreen,
      main: primaryGreen,
      dark: darkGreen,
      contrastText: '#fff',
    },
  },
};

export default createMuiTheme(overridings) as Theme & ITheme;
