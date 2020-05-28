import { addDecorator, addParameters } from '@storybook/react';

// Theme Contexts
import { withContexts } from '@storybook/addon-contexts/react';
import contexts from './contexts';

// Storybook Theme
import storybookTheme from './storybookTheme';

// Basics
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

// Viewport
addParameters({
  viewport: {
    viewports: {
      small: {
        name: 'small',
        type: 'mobile',
        styles: {
          width: '320px',
          height: '100%',
        },
      },
      medium: {
        name: 'medium',
        type: 'tablet',
        styles: {
          width: '640px',
          height: '100%',
        },
      },
      large: {
        name: 'large',
        type: 'desktop',
        styles: {
          width: '1024px',
          height: '100%',
        },
      },
    },
    defaultViewport: 'responsive',
  },
});

// Custom Contexts
addDecorator(withContexts(contexts));
