import 'styled-components';
import { Theme } from '@material-ui/core';
import ITheme from './ITheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme extends Theme, ITheme {}
}
