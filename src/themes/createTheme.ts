import { createMuiTheme, Theme } from '@material-ui/core';
import IThemeOptions from './IThemeOptions';

type ITheme = Theme & IThemeOptions;

const createTheme = (overridings: IThemeOptions): ITheme => {
  return createMuiTheme(overridings) as ITheme;
};

export default createTheme;

export type { ITheme };
