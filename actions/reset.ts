'use server'

import * as z from 'zod'

import { ResetSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { generatePasswordResetToken } from '@/lib/tokens'
import { sendPasswordResetEmail } from '@/lib/mail'

export const reset = async (values: z.infer<typeof ResetSchema>) => {

  // this validates the form and checks the email exists
  const validatedFields = ResetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'invalid email' }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'email not found' }
  }

  // then we have to actually generate the token

  const passwordResetToken = await generatePasswordResetToken(email)

  // and then send the email with the verification token in it :)

  await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

  return { success: 'reset email sent' }

}