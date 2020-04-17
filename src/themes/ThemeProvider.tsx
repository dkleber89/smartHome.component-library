import React, { ReactElement, ReactNode } from 'react';
import { MuiThemeProvider, StylesProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import { ITheme } from './createTheme';

export interface IThemeProviderProps {
  /** Children */
  children?: ReactNode;
  /** Use dark Theme? Otherwise use light Theme */
  setDarkThemeActive?: boolean;
  /** Optionally provide a custom dark Theme */
  customDarkTheme?: ITheme;
  /** Optionally provide a custom light Theme */
  customLightTheme?: ITheme;
}

const ThemeProvider = ({
  children,
  setDarkThemeActive = false,
  customDarkTheme = darkTheme,
  customLightTheme = lightTheme,
}: IThemeProviderProps): ReactElement => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={setDarkThemeActive ? customDarkTheme : customLightTheme}>
        <MuiThemeProvider theme={setDarkThemeActive ? customDarkTheme : customLightTheme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
