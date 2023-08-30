import { useGetProductsQuery } from '@/services/query/productApi';

const Products = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <>
      {products?.map((product) => (
        <div key={product.id}>{product.id}</div>
      ))}
    </>
  );
};

export default Products;
