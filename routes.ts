// routes that anyone can access w/o auth
// type string[]
export const publicRoutes = [
  "/"
]

// routes that need auth to access
// logged in users will be redirected to /settings
// type string[]
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error'
]

// prefix for all the auth api routes
export const apiAuthPrefix = "/api/auth"

// default redirect after logging in
export const DEFAULT_LOGIN_REDIRECT = '/settings'