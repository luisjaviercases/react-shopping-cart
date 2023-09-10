import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Button from '@/components/Button/Button';
import { clearCart } from '@/state/cart/cartSlice';

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <header className='bg-gray-500 p-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <Link to='/' className='text-white text-2xl font-bold'>
            Front-End Test
          </Link>
          <Breadcrumbs />
        </div>
        <div className='flex flex-col'>
          <span className='text-white'>Number of elements in cart = {cart}</span>
          {cart > 0 && (
            <Button className='w-fit self-end mt-4' onClick={handleClick}>
              Clear cart
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
