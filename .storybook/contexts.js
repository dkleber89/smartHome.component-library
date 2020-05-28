import ThemeProvider from './ThemeProvider';

// Component Library Themes
import lightTheme from '../src/themes/lightTheme';
import darkTheme from '../src/themes/darkTheme';

export default [
  {
    icon: 'paintbrush',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Light Theme',
        props: { theme: lightTheme },
        default: true,
      },
      {
        name: 'Dark Theme',
        props: { theme: darkTheme },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
