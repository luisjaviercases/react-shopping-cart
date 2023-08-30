import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiClient = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
});

export default apiClient;
