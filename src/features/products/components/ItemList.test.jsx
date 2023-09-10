import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ItemList from './ItemList';

const product = {
  id: 1,
  brand: 'Brand',
  model: 'Model',
  price: 100,
};

describe('Products page', () => {
  it('render component correctly', () => {
    render(
      <MemoryRouter>
        <ItemList product={product} />
      </MemoryRouter>
    );

    const brandElement = screen.getByText(`Brand: ${product.brand}`);
    const modelElement = screen.getByText(`Model: ${product.model}`);
    const priceElement = screen.getByText(`Price: ${product.price}`);

    expect(brandElement).toBeInTheDocument();
    expect(modelElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
