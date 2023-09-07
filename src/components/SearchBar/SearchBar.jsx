import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, onChange, className }) => {
  return (
    <input
      className={`w-56 text-sm rounded-lg block p-2.5 border-2 ${className ?? ''}`}
      type='text'
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default SearchBar;
