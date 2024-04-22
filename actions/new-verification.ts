'use server'

import { getUserByEmail } from '@/data/user'
import { getVerificationTokenByToken } from '@/data/verification-token'
import { db } from '@/lib/db'


export const newVerification = async (token: string) => {

  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    return { error: 'token does not exist' }
  }


  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'token has expired' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'email does not exist in our db' }
  }

  // update database so the user has their email verified.
  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      emailVerified: new Date(),
      // so we can use tokens to change a user's email securely if they wish.
      email: existingToken.email
    }
  })

  // now delete the token from the db.
  await db.verificationToken.delete({
    where: {
      id: existingToken.id
    }
  })

  return { success: 'email verified' }

}
