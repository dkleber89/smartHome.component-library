import React, { ReactElement } from 'react';

import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';
import { Button as OwnButton } from './Button';

export default {
  component: OwnButton,
  title: 'Material Button',
};

export const Default = (): ReactElement => (
  <Button onClick={action('Default button clicked')} variant="outlined">
    Default
  </Button>
);

export const Primary = (): ReactElement => (
  <Button color="primary" onClick={action('Primary button clicked')} variant="contained">
    Primary
  </Button>
);

export const Secondary = (): ReactElement => (
  <Button color="secondary" onClick={action('Secondary button clicked')} variant="text">
    Secondary
  </Button>
);

export const Test = (): ReactElement => <OwnButton />;
