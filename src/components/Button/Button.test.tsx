import React from 'react';
import { render, RenderResult } from '../../testUtils';

import { Button } from './Button';

describe('Button Test', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Button />);
  });

  test('Snapshot', () => {
    expect(renderResult.container.firstChild).toMatchSnapshot();
  });
});
