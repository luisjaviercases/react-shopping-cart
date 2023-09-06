import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      className={`${
        rest.disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'
      } text-sm py-2 px-4 rounded ${className ?? ''}`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
