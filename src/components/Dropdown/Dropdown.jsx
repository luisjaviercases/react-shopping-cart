import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // If options array only has one option, select first option by default
    if (options?.length === 1) {
      setSelectedOption(options[0]);
      onSelect(options[0]);
    }
  }, [onSelect, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className='relative inline-block text-left'>
      <button
        type='button'
        className='inline-flex justify-center items-center w-full rounded-md
            border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700'
        onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
        <svg className='fill-current stroke-0 h-3.5 w-3.5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </button>

      {isOpen && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg 
          bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {options?.map((option) => (
            <button
              key={`${option.value}-${option.label}`}
              onClick={() => handleSelect(option)}
              className={`${
                selectedOption && selectedOption.value === option.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900`}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
};

export default Dropdown;
