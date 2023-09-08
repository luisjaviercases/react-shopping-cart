import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { expect, describe, it } from 'vitest';
import configureStore from 'redux-mock-store';
import Header from './Header';

const mockStore = configureStore();
const store = mockStore({
  cart: {
    cart: 3,
  },
});

describe('Header component', () => {
  it('renders the component with cart count', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const textWithCartCountElement = screen.getByText('Number of elements in cart = 3');

    expect(textWithCartCountElement).toBeInTheDocument();
  });
});
