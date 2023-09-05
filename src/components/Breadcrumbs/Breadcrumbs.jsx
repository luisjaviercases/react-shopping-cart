import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';
  let breadCrumbRoutes = location.pathname.split('/').filter((crumb) => crumb !== '');

  const crumbs = breadCrumbRoutes.map((crumb) => {
    currentLink += `/${crumb}`;

    return (
      <li key={crumb}>
        {breadCrumbRoutes[breadCrumbRoutes.length - 1] === crumb ? (
          <span>{crumb}</span>
        ) : (
          <Link to={currentLink}>{crumb}</Link>
        )}
      </li>
    );
  });

  return (
    <nav>
      <ul>{crumbs}</ul>
    </nav>
  );
};

export default Breadcrumbs;
