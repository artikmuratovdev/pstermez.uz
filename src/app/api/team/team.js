import baseApi from '../baseApi/baseApi'

export const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: (params) => ({
        url: '/team',
        params: params ?? undefined,
      }),
      providesTags: ['team'],
    }),
    getTeamMember: builder.query({
      query: (id) => `/team/${id}`,
      providesTags: ['team'],
    }),
  }),
})

export const { useGetTeamQuery, useGetTeamMemberQuery } = teamApi
