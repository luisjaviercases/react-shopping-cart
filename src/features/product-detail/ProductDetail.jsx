import { useLocation } from 'react-router-dom';
import { useGetProductDetailQuery } from '@/services/query/productApi';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import Description from './components/Description';
import Actions from './components/Actions';
import usePreviousRoute from '@/hooks/UsePreviousRoute';

const ProductDetail = () => {
  const { state } = useLocation();
  const { goBack } = usePreviousRoute();

  const { data: product, isLoading: loadingProductDetail } = useGetProductDetailQuery(state?.id);

  return (
    <div className='mx-auto flex flex-col py-8 px-4 gap-4'>
      <span
        className='flex items-center cursor-pointer w-fit'
        onClick={() => {
          goBack();
        }}>
        <svg
          className='fill-current stroke-0 h-5 w-5 transform rotate-90'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
        Go back
      </span>
      <div className='max-w-screen-lg mx-auto'>
        {loadingProductDetail ? (
          <LoadingSpinner />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            <div className='md:col-span-1'>
              <img src={product?.imgUrl} alt={product?.name} className='w-56 h-auto' />
            </div>
            <div className='md:col-span-1'>
              <Description product={product} />
              <Actions className='mt-4' product={product} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
