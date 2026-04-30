import {
  clearAuthTokens,
  getAuthToken,
  getRefreshToken,
  setAuthTokens,
} from '@/lib/auth'
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { endpoint }) => {
    headers.set("Accept", "application/json")

    const token = getAuthToken()
    const publicEndpoints = ['getRecommendations', 'getRecommendationById']
    if (token && !publicEndpoints.includes(endpoint)) {
      headers.set("Authorization", `Bearer ${token}`)
    }

    return headers
  },
})

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    const refreshToken = getRefreshToken()

    if (!refreshToken) {
      clearAuthTokens()
      return result
    }

    const refreshResult = await rawBaseQuery(
      {
        url: '/auth/refresh-token',
        method: 'POST',
        body: { refresh_token: refreshToken },
      },
      api,
      extraOptions
    )

    const refreshData = refreshResult.data

    if (refreshData?.success && refreshData.access_token) {
      setAuthTokens({
        access_token: refreshData.access_token,
        refresh_token: refreshData.refresh_token,
      })
      result = await rawBaseQuery(args, api, extraOptions)
    } else {
      clearAuthTokens()
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['admin', 'user', 'category', 'news', 'team', 'video', 'recommendation'],
  keepUnusedDataFor: 60,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
})

export default baseApi
