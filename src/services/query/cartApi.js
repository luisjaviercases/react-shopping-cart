import baseApi from '@/services/query/baseApi';

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProductToCart: builder.mutation({
      query: (body) => {
        return {
          url: 'api/cart/',
          method: 'post',
          body,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useAddProductToCartMutation } = cartApi;
