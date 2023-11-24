import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '@/hooks/UseOnClickOutside';

const Dropdown = ({ label, options, onSelect, selectedOption }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  useOnClickOutside(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className='flex flex-col max-w-fit' ref={dropdownRef}>
      {label && <label className='text-sm font-medium mb-1'>{label}</label>}
      <div className='relative inline-block text-left'>
        <button
          type='button'
          className='inline-flex justify-center items-center w-full rounded-md
            border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700'
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-haspopup='listbox'
          aria-expanded={isOpen}
          aria-labelledby='dropdown-label'>
          {selectedOption ? selectedOption.label : 'Select an option'}
          <svg className='fill-current stroke-0 h-3.5 w-3.5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>

        {isOpen && (
          <div
            className='origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg 
          bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='listbox'
            id='dropdown-label'>
            {options?.map((option) => (
              <button
                key={`${option.value}-${option.label}`}
                onClick={() => handleSelect(option)}
                className={`${
                  selectedOption && selectedOption.value === option.value
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900`}
                role='option'
                aria-selected={selectedOption && selectedOption.value === option.value}
                tabIndex={isOpen ? 0 : -1}>
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  selectedOption: PropTypes.object,
};

export default Dropdown;
