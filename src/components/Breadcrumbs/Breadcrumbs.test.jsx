import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs component', () => {
  it('render breadcrumbs with links', () => {
    render(
      <MemoryRouter initialEntries={['/products/product-detail']}>
        <Routes>
          <Route path='*' element={<Breadcrumbs />} />
        </Routes>
      </MemoryRouter>
    );

    // Last element must not be a link, so only should exist one
    const breadcrumbLinks = screen.getAllByRole('link');
    expect(breadcrumbLinks).toHaveLength(1);
  });
  it('last breadcrumb have to be a span element', () => {
    render(
      <MemoryRouter initialEntries={['/products/product-detail']}>
        <Routes>
          <Route path='*' element={<Breadcrumbs />} />
        </Routes>
      </MemoryRouter>
    );

    const lastBreadcrumb = screen.getByText('product-detail');
    expect(lastBreadcrumb.tagName).toBe('SPAN');
  });
});
