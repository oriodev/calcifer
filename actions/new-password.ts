'use server'

import { getPasswordResetTokenByToken } from '@/data/passwordResetToken'
import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import { NewPasswordSchema } from '@/schemas'
import * as z from 'zod'
import bcrypt from 'bcrypt'


export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: string | null) => {
  if (!token) {
    return { error: 'missing token!' }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'invalid fields!' }
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return { error: 'invalid token' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'token has expired!' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'email not in system' }
  }

  const hashedPassword = await bcrypt.hash(password, 11)


  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      password: hashedPassword
    }
  })

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id
    }
  })

  return { success: 'password updated :)' }
}