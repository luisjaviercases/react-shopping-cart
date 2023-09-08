import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  it('renders the component with default message when no option is selected', () => {
    const labelText = 'Select an option';
    render(<Dropdown options={[]} />);

    const labelElement = screen.getByText(labelText);

    expect(labelElement).toBeInTheDocument();
  });
  it('renders the component with label when provided', () => {
    const selectFunction = vi.fn();
    const labelText = 'Dropdown Label';
    const options = [{ value: 'option1', label: 'Option 1' }];
    render(<Dropdown label={labelText} options={options} onSelect={selectFunction} />);

    const labelElement = screen.getByText(labelText);

    expect(labelElement).toBeInTheDocument();
  });
});
