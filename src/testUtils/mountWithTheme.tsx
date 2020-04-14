import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, CssBaseline, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';
import { ReactWrapper, mount } from 'enzyme';
import lightTheme from '../themes/lightTheme';

function mountWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme = lightTheme): ReactWrapper<compProps> {
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

  return mount<compProps>(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default mountWithTheme;
