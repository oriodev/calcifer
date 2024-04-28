import { db } from '@/lib/db'

export const getAllUsersNamesIdAddress = async () => {
  try {
    const allUsers = await db.user.findMany({
      select: {
        id: true,
        name: true,
        tavernNumber: true
      }
    })
    return allUsers
  } catch {
    return null
  }
}