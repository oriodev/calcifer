'use server'

import * as z from 'zod'
import { signIn } from '@/auth'
import { LoginSchema } from '@/schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getVerificationTokenByEmail } from '@/data/verification-token'
import { getUserByEmail } from '@/data/user'
import { generateTwoFactorConfirmationToken, generateVerificationToken } from '@/lib/tokens'
import { sendTwoFactorTokenEmail, sendVerificationEmail } from '@/lib/mail'
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token'
import { db } from '@/lib/db'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'

export const login = async (values: z.infer<typeof LoginSchema>) => {


  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'invalid fields' }
  }

  const { email, password, code } = validatedFields.data

  // check if user exists
  const existingUser = await getUserByEmail(email)


  if (!existingUser || !existingUser.email || !existingUser.password) {

    if (!existingUser) {
      return { error: 'this user does not exist.' }
    }

    if (!existingUser.email) {
      return { error: 'this email is not in the db.' }
    }

    if (!existingUser.password) {
      return { error: 'ur password is incorrect.' }
    }
  }

  // check if verification token exists

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: 'email verification sent bc u have not done that yet :(' }
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {

    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)
      console.log('twoFactorToken: ', twoFactorToken)

      if (!twoFactorToken) {
        return { error: 'invalid code' }
      }

      if (twoFactorToken.token !== code) {
        return { error: 'invalid code' }
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date()

      if (hasExpired) {
        return { error: 'code expired' }
      }

      await db.twoFactorToken.delete({
        where: {
          id: twoFactorToken.id
        }
      })

      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

      if (existingConfirmation) {
        await db.twoFactorToken.delete({
          where: {
            id: existingConfirmation.id
          }
        })
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id
        }
      })


    } else {


      const twoFactorToken = await generateTwoFactorConfirmationToken(existingUser.email)
      await sendTwoFactorTokenEmail(
        twoFactorToken.email,
        twoFactorToken.token
      )

      return { twoFactor: true }
    }

  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })


    return { success: 'logged in' }

  } catch (error) {
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