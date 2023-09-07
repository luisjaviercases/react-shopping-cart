import { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@/components/Dropdown/Dropdown';
import useArrayToObjectsArray from '@/hooks/useArrayToObjectsArray';
import Button from '@/components/Button/Button';

const Actions = ({ product, className }) => {
  const internalMemoryDropdownOptions = useArrayToObjectsArray(product?.internalMemory);
  const colorsDropdownOptions = useArrayToObjectsArray(product?.colors);
  const [selectedInternalMemoryOption, setSelectedInternalMemoryOption] = useState(null);
  const [selectedColorOption, setSelectedColorOption] = useState(null);

  const handleSelectInternalMemory = (selectedOption) => {
    setSelectedInternalMemoryOption(selectedOption.value);
  };

  const handleSelectColors = (selectedOption) => {
    setSelectedColorOption(selectedOption.value);
  };

  const handleClick = () => {
    console.log('Hacer petición enviando los datos');
  };

  return (
    <div className={`${className ?? ''}`}>
      <div className='flex gap-4 mb-4'>
        <Dropdown
          label='Internal memory'
          options={internalMemoryDropdownOptions}
          onSelect={handleSelectInternalMemory}
        />
        <Dropdown label='Color' options={colorsDropdownOptions} onSelect={handleSelectColors} />
      </div>
      <Button onClick={handleClick} disabled={selectedInternalMemoryOption === null || selectedColorOption === null}>
        Add to cart
      </Button>
    </div>
  );
};

Actions.propTypes = {
  product: PropTypes.object,
  className: PropTypes.string,
};

export default Actions;
