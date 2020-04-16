import React, { ReactElement } from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';

import ITheme, { lightTheme } from '../themes';

function renderWithTheme(component: ReactElement, options?: RenderOptions, theme: Theme & ITheme = lightTheme): RenderResult {
  const Providers = (): ReactElement => {
    return (
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>{component}</MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    );
  };

  return render(component, { wrapper: Providers, ...options });
}

export default renderWithTheme;
