import { useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '@/services/query/productApi';

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product } = useGetProductDetailQuery(id);

  return (
    <>
      <span>Current product {product?.model}</span>
    </>
  );
};

export default ProductDetail;
