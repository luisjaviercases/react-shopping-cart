import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders the component with children', () => {
    const buttonText = 'Add';

    render(<Button>{buttonText}</Button>);

    const buttonElement = screen.getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
  });
  it('check if onClick method is called when clicked', () => {
    const clickFunction = vi.fn();
    const buttonText = 'Add';
    render(<Button onClick={clickFunction}>{buttonText}</Button>);

    const buttonElement = screen.getByText(buttonText);

    buttonElement.click();

    expect(clickFunction).toBeCalledTimes(1);
  });
});
