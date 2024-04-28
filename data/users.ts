import { db } from '@/lib/db'

export const getAllUsersNamesAndIds = async () => {
  try {
    const allUsers = await db.user.findMany({
      select: {
        id: true,
        name: true
      }
    })
    return allUsers
  } catch {
    return null
  }
}