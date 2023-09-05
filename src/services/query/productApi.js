import baseApi from '@/services/query/baseApi';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: 'api/product/', method: 'get' }),
    }),
    getProductDetail: builder.query({
      query: (id) => ({ url: `api/product/${id}`, method: 'get' }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productApi;
