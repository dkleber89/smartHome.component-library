import React from 'react';
import { renderWithTheme, RenderResult } from '../../testUtils';

import { Button } from './Button';

describe('Button Test', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = renderWithTheme(<Button />);
  });

  test('Snapshot', () => {
    expect(renderResult.container.firstChild).toMatchSnapshot();
  });
});
