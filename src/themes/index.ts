import ThemeProvider from './ThemeProvider';

import IThemeOptions from './IThemeOptions';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import createTheme, { ITheme } from './createTheme';

export default ThemeProvider;

export { lightTheme, darkTheme, createTheme };
export type { IThemeOptions, ITheme };
