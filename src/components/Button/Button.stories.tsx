import React, { ReactElement } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '@material-ui/core';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    info: `
    ### Additional Markdown Information about this Component
    `,
  },
};

export const Default = (): ReactElement => (
  <Button color="primary" variant="contained">
    Primary
  </Button>
);

export const DefaultSecondary = (): ReactElement => (
  <Button color="secondary" variant="contained">
    Secondary
  </Button>
);

export const Default1 = (): ReactElement => (
  <Button color="primary" variant="outlined">
    Primary
  </Button>
);

export const DefaultSecondary1 = (): ReactElement => (
  <Button color="secondary" variant="outlined">
    Secondary
  </Button>
);
