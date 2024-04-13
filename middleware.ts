import authConfig from "./auth.config"
import NextAuth from "next-auth"

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from '@/routes'

const { auth } = NextAuth(authConfig)

// @ts-ignore
export default auth((req) => {
  const { nextUrl } = req;

  // returns true/false if logged in / if the route you're on is an api route
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  // block api routes
  if (isApiAuthRoute) {
    return null;
  }

  // so routes like register and login, things u don't need to access if u r logged in already.
  if (isAuthRoute) {

    // so if we are logged in then we're gonna redirect.
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }

    return null;
  }

  // if we r not logged in then we cannot be accessing public routes sorry
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  return null;


})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}