import { expect, describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import useConvertToDropdownEntry from '@/hooks/UseConvertToDropdownEntry/UseConvertToDropdownEntry';

describe('useConvertToDropdownEntry hook', () => {
  it('try to convert empty array should return empty array', () => {
    const arrayToConvert = [];

    const { result } = renderHook(() => useConvertToDropdownEntry(arrayToConvert));

    expect(result.current).toEqual([]);
  });
  it('should convert an array to objects array', () => {
    const arrayToConvert = [
      { code: 1000, name: 'black' },
      { code: 1001, name: 'white' },
    ];

    const { result } = renderHook(() => useConvertToDropdownEntry(arrayToConvert));

    expect(result.current).toEqual([
      { label: 'black', value: 1000 },
      { label: 'white', value: 1001 },
    ]);
  });
});
