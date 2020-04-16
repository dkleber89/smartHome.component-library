import React from 'react';
import { ReactWrapper } from 'enzyme';
import { mountWithTheme } from '../../testUtils';

import { Button, IButtonProps } from './Button';

describe('Test Button', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountWithTheme<IButtonProps>(<Button />);
  });

  test('Test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
