import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { signIn } from 'next-auth/react'
import { currentUser } from './auth';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const socialSignIn = async (provider: 'github' | 'google') => {

  signIn(provider, {
    callbackUrl: '/auth/onboarding'
  })
}