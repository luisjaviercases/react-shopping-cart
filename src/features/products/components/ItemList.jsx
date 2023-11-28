import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/productUtils';

const ItemList = ({ product }) => {
  return (
    <Link
      to='/products/product-detail'
      state={{
        id: product.id,
      }}
      data-testid='product-item-list'
      className='w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden cursor-pointer'>
      <div className='flex items-center justify-center h-auto py-3'>
        <img src={product.imgUrl} />
      </div>
      <div className='flex flex-col px-5 py-3'>
        <h3 className='text-gray-700'>Brand: {product.brand}</h3>
        <span className='text-gray-500 mt-2'>Model: {product.model}</span>
        <span className='text-gray-500 mt-2'>Price: {formatPrice(product.price)}</span>
      </div>
    </Link>
  );
};

ItemList.propTypes = {
  product: PropTypes.object,
};

export default ItemList;
