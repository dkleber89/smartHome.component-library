import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import { ITheme, lightTheme } from '../themes';

interface IThemeProviderWrapperProps {
  children: ReactElement;
}

function shallowWithTheme<compProps>(tree: ReactElement<compProps>, theme: Theme & ITheme = lightTheme): ShallowWrapper<compProps> {
  const ThemeProviderWrapper = ({ children }: IThemeProviderWrapperProps): ReactElement => {
    return (
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    );
  };

  return shallow<compProps>(tree, { wrappingComponent: ThemeProviderWrapper });
}

export default shallowWithTheme;
