import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useGetProductsQuery } from '@/services/query/productApi';
import Products from './Products';

vi.mock('@/services/query/productApi', () => ({
  useGetProductsQuery: vi.fn(),
}));

describe('Products page', () => {
  it('render component with a search bar and product list', () => {
    const placeholder = 'Search...';
    const productsList = [
      { id: 1, model: 'Product 1', brand: 'Brand 1' },
      { id: 2, model: 'Product 2', brand: 'Brand 1' },
    ];

    useGetProductsQuery.mockReturnValue({
      data: productsList,
    });

    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );

    const searchBar = screen.getByPlaceholderText(placeholder);
    expect(searchBar).toBeInTheDocument();

    // There are two products in productsList, so we have to find two product-item-list
    const productList = screen.getAllByTestId('product-item-list');
    expect(productList.length).toBe(2);
  });
});
