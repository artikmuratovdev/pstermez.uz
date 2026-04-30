import baseApi from '../baseApi/baseApi'

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (params) => ({
        url: '/categories',
        params: params ?? undefined,
      }),
      providesTags: ['category'],
    }),
    getCategory: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ['category'],
    }),
  }),
})

export const { useGetCategoriesQuery, useGetCategoryQuery } = categoriesApi
