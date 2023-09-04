import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '@/services/query/productApi';
import SearchBar from '@/components/SearchBar/SearchBar';

const Products = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const { data: products } = useGetProductsQuery();

  const filteredProducts = products?.filter(
    (product) =>
      product.model.toLowerCase().includes(inputValue.toLowerCase()) ||
      product.brand.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <SearchBar
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {filteredProducts?.map((product) => (
        <div
          key={product.id}
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}>
          {product.model}
        </div>
      ))}
    </>
  );
};

export default Products;
