import { expect, describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import useArrayToObjectsArray from '@/hooks/useArrayToObjectsArray';

describe('useArrayToObjectsArray hook', () => {
  it('try to convert empty array should return empty array', () => {
    const arrayToConvert = [];

    const { result } = renderHook(() => useArrayToObjectsArray(arrayToConvert));

    expect(result.current).toEqual([]);
  });
  it('should convert an array to objects array', () => {
    const arrayToConvert = ['Item 1', 'Item 2', 'Item 3'];

    const { result } = renderHook(() => useArrayToObjectsArray(arrayToConvert));

    expect(result.current).toEqual([
      { label: 'Item 1', value: 0 },
      { label: 'Item 2', value: 1 },
      { label: 'Item 3', value: 2 },
    ]);
  });
});
