import { db } from '@/lib/db'

export const getUsersLetters = async (id: string) => {
  try {

    const allUsersLetters = await db.letters.findMany({
      where: {
        recieverId: id
      }
    })

    return allUsersLetters

  } catch {
    return null
  }
}
