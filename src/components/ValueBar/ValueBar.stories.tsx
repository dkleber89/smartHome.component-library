import React, { ReactElement } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ValueBar from './ValueBar';

export default {
  title: 'ValueBar',
  component: ValueBar,
  decorators: [withKnobs],
  parameters: {
    info: `
    ### Additional Markdown Information about this Component
    `,
  },
};

export const Default = (): ReactElement => <ValueBar />;
