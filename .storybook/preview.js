import { addDecorator, configure, addParameters } from '@storybook/react';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import ThemeProvider from './ThemeProvider';

import LightTheme from '../src/themes/lightTheme';
import DarkTheme from '../src/themes/darkTheme';

const themes = [LightTheme, DarkTheme];

addParameters({
    options: {
        storySort: (a, b) => {
            if(a[1].kind === 'Introduction') {
                return -1;
            } else if (b[1].kind === 'Introduction') {
                return 1;
            }

            return 0;
        }
    }
});

addDecorator(withThemesProvider(themes, ThemeProvider));
