import { useMemo } from 'react';

const useConvertToDropdownEntry = (arrayToConvert) => {
  const convertedArray = useMemo(() => {
    return (
      arrayToConvert?.map((item) => ({
        label: item.name,
        value: item.code,
      })) || []
    );
  }, [arrayToConvert]);

  return convertedArray;
};

export default useConvertToDropdownEntry;
