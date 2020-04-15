import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, MuiThemeProvider, Theme } from '@material-ui/core';
import { render } from 'enzyme';
import { ITheme, lightTheme } from '../themes';

interface IThemeProviderWrapperProps {
  children: ReactElement;
}

function renderWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme & ITheme = lightTheme): Cheerio {
  React.useLayoutEffect = React.useEffect;

  const ThemeProviderWrapper = ({ children }: IThemeProviderWrapperProps): ReactElement => {
    return (
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    );
  };

  return render<compProps, never>(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default renderWithTheme;
