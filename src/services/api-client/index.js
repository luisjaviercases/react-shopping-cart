import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiClient = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export default apiClient;
