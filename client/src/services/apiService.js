// src/services/apiService.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000/'}), // Adjust the base URL as needed
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products/get',
    }),
    // Define the mutation for submitting the form
    addProduct: builder.mutation({
      query: (formData) => ({
        url: 'products/add', // Adjust the endpoint as needed
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = apiService;
export default apiService;
