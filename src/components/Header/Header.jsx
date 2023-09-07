import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

const Header = () => {
  return (
    <header className='bg-gray-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <Link to='/' className='text-white text-2xl font-bold'>
            Front-End Test
          </Link>
          <Breadcrumbs />
        </div>
      </div>
    </header>
  );
};

export default Header;
