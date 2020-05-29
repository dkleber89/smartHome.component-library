import React from 'react';
import { RenderResult } from '@testing-library/react';
import renderWithTheme from '../../testUtils';

import ValueBar from './ValueBar';

describe('ValueBar test', () => {
  test('snapshot', () => {
    const { container } = renderWithTheme(<ValueBar />);

    expect(container.firstChild).toMatchSnapshot();
  });

  // Test Props -> Snippet: testProps
  describe('props', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      renderResult = renderWithTheme(<ValueBar value={80} />);
    });

    test('determinated', () => {
      const { rerender, queryByRole, queryByText } = renderResult;

      expect(queryByText('80%')).toBeInTheDocument();
      expect(queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '80');

      rerender(<ValueBar value={300} min={200} max={400} unit="°C" />);

      expect(queryByText('300°C')).toBeInTheDocument();
      expect(queryByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
    });

    test('indeterminated', () => {
      const { rerender, queryByTestId } = renderResult;

      expect(queryByTestId('value-text')).toBeInTheDocument();

      rerender(<ValueBar />);

      expect(queryByTestId('value-text')).not.toBeInTheDocument();
    });
  });

  // Test Events -> Snippet: testEvents
});
