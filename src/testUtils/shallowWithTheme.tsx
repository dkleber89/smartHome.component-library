import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, CssBaseline, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import lightTheme from '../themes/lightTheme';

function shallowWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme = lightTheme): ShallowWrapper<compProps> {
  const ThemeProviderWrapper = (children: ReactElement) => {
    return (
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    );
  };

  return shallow<compProps>(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default shallowWithTheme;
