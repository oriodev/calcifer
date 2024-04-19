'use server'

import * as z from 'zod'
import { signIn } from '@/auth'
import { LoginSchema } from '@/schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'

export const login = async (values: z.infer<typeof LoginSchema>) => {

  console.log('helllloooo')

  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'invalid fields' }
  }

  const { email, password } = validatedFields.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })

    console.log('well i got passed await signIn??')

    return { success: 'logged in' }

  } catch (error) {
    console.log('mkay so there is a problem but not for u')
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'invalid creds' }
        default:
          return { error: 'something went wrong' }
      }
    }

    throw error;
  }

} 