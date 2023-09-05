import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className='w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer'
      onClick={() => {
        navigate('/products/product-detail', {
          state: {
            id: product.id,
          },
        });
      }}>
      <div className='flex items-center justify-center h-auto py-3'>
        <img src={product.imgUrl} />
      </div>
      <div className='flex flex-col px-5 py-3'>
        <h3 className='text-gray-700'>Brand: {product.brand}</h3>
        <span className='text-gray-500 mt-2'>Model: {product.model}</span>
        <span className='text-gray-500 mt-2'>Price: {product.price !== '' ? product.price : 'NOT AVAILABLE'}</span>
      </div>
    </div>
  );
};

ItemList.propTypes = {
  product: PropTypes.object,
};

export default ItemList;
