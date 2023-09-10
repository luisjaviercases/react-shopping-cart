import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('Page not found page', () => {
  it('render component correctly', () => {
    render(<PageNotFound />);

    const messageElement = screen.getByText('Page Not Found');

    expect(messageElement).toBeInTheDocument();
  });
});
