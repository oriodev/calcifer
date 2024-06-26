'use server'

import { currentUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { OnboardingSchema } from '@/schemas';

import * as z from 'zod'

export const onboarding = async (values: z.infer<typeof OnboardingSchema>) => {

  const validatedFields = OnboardingSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'invalid fields' }
  }

  const { character, name, background, strength, weakness } = validatedFields.data;

  const existingUser = await currentUser();

  if (!existingUser) {
    return { error: 'you are not logged in' }
  }

  console.log('name: ', name)

  await db.user.update({
    where: {
      id: existingUser.id
    },
    data: {
      character: parseInt(character),
      name: name,
      background: background || 'u r a mystery',
      strength,
      weakness,
      onboardingComplete: true
    }
  })

  return { success: 'onboarding complete' }

}