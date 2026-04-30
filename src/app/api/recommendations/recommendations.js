import baseApi from '../baseApi/baseApi'

export const recommendationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecommendations: builder.query({
      query: (params = { page: 1, limit: 20 }) => ({
        url: '/recommendations',
        params,
      }),
      providesTags: ['recommendation'],
    }),
    getRecommendationById: builder.query({
      query: (id) => `/recommendations/${id}`,
      providesTags: ['recommendation'],
    }),
  }),
})

export const {
  useGetRecommendationsQuery,
  useGetRecommendationByIdQuery,
} = recommendationsApi
