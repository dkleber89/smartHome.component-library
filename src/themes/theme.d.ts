import 'styled-components';
import { Theme } from '@material-ui/core';
import ITheme from './ITheme';

declare module 'styled-components' {
  export type DefaultTheme = Theme & ITheme;
}
