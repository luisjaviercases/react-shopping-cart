import { useState } from 'react';
import { useGetProductsQuery } from '@/services/query/productApi';
import SearchBar from '@/components/SearchBar/SearchBar';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import ItemList from './components/itemList';

const Products = () => {
  const [inputValue, setInputValue] = useState('');
  const { data: products, isLoading: loadingProducts } = useGetProductsQuery();

  const filteredProducts = products?.filter(
    (product) =>
      product.model.toLowerCase().includes(inputValue.toLowerCase()) ||
      product.brand.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className='flex flex-col p-6 gap-4'>
      <SearchBar
        className='flex self-end'
        placeholder='Search...'
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {loadingProducts ? (
        <LoadingSpinner />
      ) : (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts?.map((product) => (
            <ItemList key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
