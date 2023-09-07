import { useState, useEffect } from 'react';

const useArrayToObjectsArray = (arrayToConvert) => {
  const [objectsArray, setObjectsArray] = useState([]);

  useEffect(() => {
    const convertedArray = arrayToConvert?.map((item, index) => ({
      label: item,
      value: index,
    }));

    setObjectsArray(convertedArray);
  }, [arrayToConvert]);

  return objectsArray;
};

export default useArrayToObjectsArray;
