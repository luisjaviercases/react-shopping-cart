import { createApi } from '@reduxjs/toolkit/query/react';
import apiClient from '@/services/api-client/index';

const BASE_API_REDUCER_KEY = 'apiClient';

const baseApi = createApi({
  reducerPath: BASE_API_REDUCER_KEY,
  baseQuery: apiClient,
  endpoints: () => ({}),
  keepUnusedDataFor: 60 * 60, // keep data in cache for one hour
});

export default baseApi;
