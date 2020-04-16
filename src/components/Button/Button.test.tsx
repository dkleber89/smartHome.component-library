import React from 'react';
import { renderWithTheme, RenderResult, fireEvent } from '../../testUtils';

import { Button } from './Button';
import { lightTheme } from '../../themes';

describe('Button test', () => {
  test('snapshot', () => {
    const { container } = renderWithTheme(<Button />);
    const { firstChild } = container;

    expect(firstChild).toMatchSnapshot();
  });

  describe('style rules', () => {
    test('background-color', () => {
      const { container } = renderWithTheme(<Button />);
      const { firstChild } = container;

      expect(firstChild).toHaveStyleRule('background-color', lightTheme.palette.primary.light);
    });
  });

  describe('events', () => {
    let renderResult: RenderResult;
    const onClickMock = jest.fn();

    beforeEach(() => {
      renderResult = renderWithTheme(<Button onClick={onClickMock} />);
    });

    test('click', () => {
      fireEvent.click(renderResult.getByText(/Fisch/));

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
