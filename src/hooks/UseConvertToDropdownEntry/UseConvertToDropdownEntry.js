import { useState, useEffect } from 'react';

const useConvertToDropdownEntry = (arrayToConvert) => {
  const [convertedArray, seConvertedArray] = useState([]);

  useEffect(() => {
    const converted = arrayToConvert?.map((item) => ({
      label: item.name,
      value: item.code,
    }));

    seConvertedArray(converted);
  }, [arrayToConvert]);

  return convertedArray;
};

export default useConvertToDropdownEntry;
