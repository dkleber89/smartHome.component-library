/**
 * @jest-environment node
 */
import React from 'react';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../testUtils';

import { Button, IButtonProps } from './Button';

describe('Button Snapshottesting', () => {
  /* @jest-environment node */

  test('Test', () => {
    const wrapper = renderWithTheme<IButtonProps>(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
});
