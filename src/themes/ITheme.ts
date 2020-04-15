import { ThemeOptions } from '@material-ui/core';

export default interface ITheme extends ThemeOptions {
  name: string;
  palette: {
    type: 'light' | 'dark';
    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  };
}
