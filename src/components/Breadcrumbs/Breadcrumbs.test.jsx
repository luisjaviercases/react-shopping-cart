import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import breadcrumbConfig from '@/config/BreadcrumbsList';

describe('Breadcrumbs component', () => {
  it('render breadcrumbs with links', () => {
    render(
      <MemoryRouter initialEntries={['/products/product-detail']}>
        <Routes>
          <Route path='*' element={<Breadcrumbs breadcrumbData={breadcrumbConfig} />} />
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
          <Route path='*' element={<Breadcrumbs breadcrumbData={breadcrumbConfig} />} />
        </Routes>
      </MemoryRouter>
    );

    const lastBreadcrumb = screen.getByText('Product Detail');
    expect(lastBreadcrumb.tagName).toBe('SPAN');
  });
});
