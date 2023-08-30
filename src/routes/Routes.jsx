import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import App from '@/App';
import Products from '@/features/products/Products';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path='' element={<Navigate to='products' />} />
      <Route path='products' element={<Products />} />
    </Route>
  )
);

export default router;
