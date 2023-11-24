import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from '@/components/Dropdown/Dropdown';
import useConvertToDropdownEntry from '@/hooks/UseConvertToDropdownEntry/UseConvertToDropdownEntry';
import Button from '@/components/Button/Button';
import { addToCart } from '@/state/cart/cartSlice';
import { useAddProductToCartMutation } from '@/services/query/cartApi';

const Actions = ({ product, className }) => {
  const internalMemoryDropdownOptions = useConvertToDropdownEntry(product.options.storages);
  const colorsDropdownOptions = useConvertToDropdownEntry(product.options.colors);
  const [selectedInternalMemoryOption, setSelectedInternalMemoryOption] = useState(
    internalMemoryDropdownOptions.length === 1 ? internalMemoryDropdownOptions[0] : null
  );
  const [selectedColorOption, setSelectedColorOption] = useState(
    colorsDropdownOptions.length === 1 ? colorsDropdownOptions[0] : null
  );
  const [addProductToCart] = useAddProductToCartMutation();
  const dispatch = useDispatch();

  const handleSelectInternalMemory = (selectedOption) => {
    setSelectedInternalMemoryOption(selectedOption);
  };

  const handleSelectColors = (selectedOption) => {
    setSelectedColorOption(selectedOption);
  };

  const handleClick = async () => {
    const data = {
      id: product.id,
      colorCode: selectedColorOption.value,
      storageCode: selectedInternalMemoryOption.value,
    };
    try {
      const response = await addProductToCart(data).unwrap();
      dispatch(addToCart(response.count));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${className ?? ''}`}>
      <div className='flex gap-4 mb-4'>
        <Dropdown
          label='Internal memory'
          options={internalMemoryDropdownOptions}
          onSelect={handleSelectInternalMemory}
          selectedOption={selectedInternalMemoryOption}
        />
        <Dropdown
          label='Color'
          options={colorsDropdownOptions}
          onSelect={handleSelectColors}
          selectedOption={selectedColorOption}
        />
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
