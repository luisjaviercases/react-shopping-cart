import { useLocation } from 'react-router-dom';
import { useGetProductDetailQuery } from '@/services/query/productApi';

const ProductDetail = () => {
  const { state } = useLocation();

  const { data: product } = useGetProductDetailQuery(state?.id);

  return (
    <>
      <span>Current product {product?.model}</span>
    </>
  );
};

export default ProductDetail;
