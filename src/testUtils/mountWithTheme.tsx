import React, { ReactElement, ReactChild } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';
import { ReactWrapper, mount } from 'enzyme';
import { ITheme, lightTheme } from '../themes';

interface IThemeProviderWrapperProps {
  children: ReactChild;
}

function mountWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme & ITheme = lightTheme): ReactWrapper<compProps> {
  const ThemeProviderWrapper = ({ children }: IThemeProviderWrapperProps): ReactElement => {
    return (
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    );
  };

  return mount<compProps>(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default mountWithTheme;
