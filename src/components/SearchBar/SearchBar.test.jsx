import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('renders the component with a placeholder', () => {
    const placeholder = 'Search...';
    const { getByPlaceholderText } = render(<SearchBar placeholder={placeholder} />);

    const inputElement = getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
  });
  it('check if onChange method is called when the input value changes', () => {
    const changeFunction = vi.fn();
    const placeholder = 'Search...';
    const { getByPlaceholderText } = render(<SearchBar placeholder={placeholder} onChange={changeFunction} />);

    const inputElement = getByPlaceholderText(placeholder);

    fireEvent.change(inputElement, { target: { value: 'Test' } });

    expect(changeFunction).toBeCalledTimes(1);
  });
});
