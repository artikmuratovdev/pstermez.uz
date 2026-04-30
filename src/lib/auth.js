const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage

export const getAuthToken = () => {
  if (!canUseStorage()) return null
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const getRefreshToken = () => {
  if (!canUseStorage()) return null
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const setAuthTokens = ({ access_token, refresh_token }) => {
  if (!canUseStorage()) return

  if (access_token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token)
  }

  if (refresh_token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
  }
}

export const clearAuthTokens = () => {
  if (!canUseStorage()) return
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}
