import React from 'react';
import { RenderResult, fireEvent } from '@testing-library/react';
import renderWithTheme from '../../testUtils';

import Button from './Button';
import { lightTheme } from '../../themes';

describe('Button test', () => {
  test('snapshot', () => {
    const { container } = renderWithTheme(<Button />);

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('props', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = renderWithTheme(<Button />);
    });

    test('background-color', () => {
      const { container, queryByTestId, rerender } = renderResult;

      expect(container.firstChild).toHaveStyleRule('background-color', lightTheme.palette.primary.light);
      expect(queryByTestId('test')).toBeFalsy();

      rerender(<Button isButtonDeactivated />);

      expect(container.firstChild).toHaveStyleRule('background-color', lightTheme.palette.primary.dark);
      expect(queryByTestId('test')).toBeTruthy();
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

      renderResult.rerender(<Button onClick={onClickMock} isButtonDeactivated />);

      fireEvent.click(renderResult.getByText(/Fisch/));

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
