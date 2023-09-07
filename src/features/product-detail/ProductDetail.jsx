import { useLocation } from 'react-router-dom';
import { useGetProductDetailQuery } from '@/services/query/productApi';
import Description from './components/Description';
import Actions from './components/Actions';

const ProductDetail = () => {
  const { state } = useLocation();

  const { data: product } = useGetProductDetailQuery(state?.id);

  return (
    <div className='mx-auto py-8 px-4'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          <div className='md:col-span-1'>
            <img src={product?.imgUrl} alt={product?.name} className='w-56 h-auto' />
          </div>
          <div className='md:col-span-1'>
            <Description product={product} />
            <Actions className='mt-4' product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
