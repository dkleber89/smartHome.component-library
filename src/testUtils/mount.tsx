import { createMount } from '@material-ui/core/test-utils';
import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, CssBaseline, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';
import lightTheme from '../themes/lightTheme';

function mountWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme = lightTheme): ReactWrapper<compProps> {
  const mount = createMount();

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

  return mount(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default mountWithTheme;
