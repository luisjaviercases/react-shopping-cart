import PropTypes from 'prop-types';

const SearchBar = ({ onChange }) => {
  return <input type='text' onChange={onChange} placeholder='Search...' />;
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;
