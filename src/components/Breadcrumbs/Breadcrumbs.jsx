import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  if (location.pathname === '/404') return;

  let currentLink = '';
  let breadCrumbRoutes = location.pathname.split('/').filter((crumb) => crumb !== '');

  const crumbs = breadCrumbRoutes.map((crumb, index) => {
    currentLink += `/${crumb}`;

    return (
      <li key={crumb} className='flex items-center'>
        {breadCrumbRoutes[breadCrumbRoutes.length - 1] === crumb ? (
          <span className='text-gray-500'>{crumb}</span>
        ) : (
          <Link to={currentLink} className='text-blue-500 hover:underline'>
            {crumb}
          </Link>
        )}
        {index < breadCrumbRoutes.length - 1 && (
          <span className='mx-1'>
            <svg
              className='fill-current stroke-0 h-3.5 w-3.5 transform -rotate-90'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </span>
        )}
      </li>
    );
  });

  return (
    <nav>
      <ul className='flex'>{crumbs}</ul>
    </nav>
  );
};

export default Breadcrumbs;
