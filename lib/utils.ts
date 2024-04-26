import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { signIn } from 'next-auth/react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const socialSignIn = (provider: 'github' | 'google') => {
  console.log(provider)
  signIn(provider, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  })
}