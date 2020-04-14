import React, { ReactElement } from 'react';

import { action } from '@storybook/addon-actions';

import StyledButton from './styled-button';

export default {
  title: 'Styled Button',
};

export const Default = (): ReactElement => <StyledButton onClick={action('Styled button clicked')}>Styled Button</StyledButton>;
