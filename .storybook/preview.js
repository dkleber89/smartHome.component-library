import { addDecorator, addParameters } from '@storybook/react';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import ThemeProvider from './ThemeProvider';

// Component Library Themes
import lightTheme from '../src/themes/lightTheme';
import darkTheme from '../src/themes/darkTheme';

// Storybook Theme
import storybookTheme from './storybookTheme';

const themes = [lightTheme, darkTheme];

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[1].kind === 'Introduction') {
        return -1;
      } else if (b[1].kind === 'Introduction') {
        return 1;
      }

      return 0;
    },
    theme: storybookTheme,
  },
});

addDecorator(withThemesProvider(themes, ThemeProvider));
