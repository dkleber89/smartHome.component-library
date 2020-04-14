import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, CssBaseline, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';
import { render } from 'enzyme';
import lightTheme from '../themes/lightTheme';

function renderWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme = lightTheme): Cheerio {
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

  return render<compProps, any>(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default renderWithTheme;
