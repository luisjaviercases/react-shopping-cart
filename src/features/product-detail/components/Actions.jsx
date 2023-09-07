import { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@/components/Dropdown/Dropdown';
import useArrayToObjectsArray from '@/hooks/useArrayToObjectsArray';
import Button from '@/components/Button/Button';

const Actions = ({ product }) => {
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
    <div>
      <Dropdown options={internalMemoryDropdownOptions} onSelect={handleSelectInternalMemory} />
      <Dropdown options={colorsDropdownOptions} onSelect={handleSelectColors} />
      <Button onClick={handleClick} disabled={selectedInternalMemoryOption === null || selectedColorOption === null}>
        Add
      </Button>
    </div>
  );
};

Actions.propTypes = {
  product: PropTypes.object,
};

export default Actions;
