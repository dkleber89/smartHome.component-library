import React, { ReactElement } from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import ValueBar from './ValueBar';

export default {
  title: 'ValueBar',
  component: ValueBar,
  decorators: [withKnobs],
  parameters: {
    info: ``,
  },
};

export const DefaultValues = (): ReactElement => <ValueBar value={number('Value', 80, { min: 0, max: 100 })} />;
export const CustomValues = (): ReactElement => <ValueBar min={-500} max={500} value={250} unit="mm" />;
export const ProgressIndeterminate = (): ReactElement => <ValueBar />;
