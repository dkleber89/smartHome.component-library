import 'styled-components';
import { ITheme } from './createTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix, @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
