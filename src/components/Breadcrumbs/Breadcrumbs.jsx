import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ breadcrumbData }) => {
  const location = useLocation();

  const findBreadcrumbItem = (path) => breadcrumbData.find((item) => item.path === path);

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter((crumb) => crumb !== '');

    return pathSegments.map((segment, index) => {
      const currentPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const breadcrumbItem = findBreadcrumbItem(currentPath);

      const isLastSegment = index === pathSegments.length - 1;

      return (
        <li key={currentPath} className='flex items-center'>
          {breadcrumbItem ? (
            <>
              {!isLastSegment ? (
                <Link to={currentPath} className='text-white hover:underline'>
                  {breadcrumbItem.label}
                </Link>
              ) : (
                <span className='text-white'>{breadcrumbItem.label}</span>
              )}
            </>
          ) : (
            <span className='text-white'>{segment}</span>
          )}
          {!isLastSegment && (
            <span className='mx-1 text-white'>
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
  };

  return (
    <nav>
      <ul className='flex'>{generateBreadcrumbs()}</ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbData: PropTypes.array,
};

export default Breadcrumbs;
