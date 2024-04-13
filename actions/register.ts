'use server'

import bcrypt from 'bcrypt'
import * as z from 'zod'

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // this validates the fields.
  const validatedFields = RegisterSchema.safeParse(values);

  // if the fields are invalid, we just leave and tell them no ty.
  if (!validatedFields.success) {
    return { error: 'invalid fields' }
  }

  // this is how we grab the field values from the form post validation.
  const { email, password, name } = validatedFields.data;

  // now to hash the password.
  const hashedPassword = await bcrypt.hash(password, 11)

  // now we check if we can find a user in the db with this email
  // so that we know that the email is unique
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'email already in use' }
  }

  // if the email is free then it's user creation time :)
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  // TODO: SENT VERIFICATION TOKEN EMAIL

  // this is what we return at the end after doing shit in the back.
  return { success: 'user created' }
}