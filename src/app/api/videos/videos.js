import baseApi from '../baseApi/baseApi'

export const videosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (params) => ({
        url: '/videos',
        params: params ?? undefined,
      }),
      providesTags: ['video'],
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
      providesTags: ['video'],
    }),
  }),
})

export const { useGetVideosQuery, useGetVideoQuery } = videosApi
