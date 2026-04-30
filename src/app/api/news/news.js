import baseApi from '../baseApi/baseApi'

export const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (params) => ({
        url: '/news',
        params: params ?? undefined,
      }),
      providesTags: ['news'],
    }),
    getNewsById: builder.query({
      query: (id) => `/news/${id}`,
      providesTags: ['news'],
    }),
  }),
})

export const { useGetNewsQuery, useGetNewsByIdQuery } = newsApi
