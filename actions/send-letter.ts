'use server'

import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { SendLetterSchema } from '@/schemas/town';
import * as z from 'zod'

export const sendLetter = async (values: z.infer<typeof SendLetterSchema>) => {


  const validatedFields = SendLetterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid fields' }
  }

  const { user, message } = validatedFields.data;

  // this gets the user it is being sent to
  const existingUser = await getUserById(user)

  if (!existingUser) {
    return { error: 'that user does not exist' }
  }

  const recieverName = existingUser.name

  if (!recieverName) {
    return { error: 'that user does not exist' }
  }


  const sender = await currentUser()

  if (!sender) {
    return { error: 'you are not logged in' }
  }

  const senderId = sender.id

  if (!senderId) {
    return { error: 'no sender id' }
  }

  const senderName = sender.name

  if (!senderName) {
    return { error: 'no sender name' }
  }


  const userName = existingUser.name


  await db.letters.create({
    data: {
      senderId,
      senderName,
      recieverId: user,
      recieverName,
      message,
    }
  })


  return { success: `letter successfully sent to ${userName}` }

}
