import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import App from '@/App';
import Products from '@/features/products/Products';
import ProductDetail from '@/features/product-detail/ProductDetail';
import PageNotFound from '@/features/page-not-found/PageNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path='' element={<Navigate to='products' />} />
      <Route path='products' element={<Products />} />
      <Route path='products/product-detail' element={<ProductDetail />} />
      <Route path='*' element={<Navigate replace to='/404' />} />
      <Route path='/404' element={<PageNotFound />} />
    </Route>
  )
);

export default router;
