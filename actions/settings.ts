'use server'

import { getUserById } from '@/data/user'
import { currentUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { SettingsSchema } from '@/schemas'
import * as z from 'zod'

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser()

  if (!user) return { error: 'unauthorised' }

  //@ts-ignore
  const dbUser = await getUserById(user.id)

  if (!dbUser) return { error: 'unauthorised' }

  if (user.isOAuth) {
    values.email = undefined
    values.password = undefined
    values.newPassword = undefined
    values.isTwoFactorEnabled = undefined
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values
    }
  })

  return { success: 'settings updated' }
} 