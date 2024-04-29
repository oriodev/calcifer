'use server'

import { currentUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const spendCoins = async (coinsToSpend: number) => {

  // get current num of coins
  const user = await currentUser()

  if (!user) {
    return { error: 'no user' }
  }

  const coins = user?.coins

  if (!coins) {
    return { error: 'you have no coins' }
  }

  // check u have enough coins
  const newAmount = coins - coinsToSpend

  if (newAmount < 0) {
    return { error: 'you do not have enough coins' }
  }


  await db.user.update({
    where: {
      id: user.id
    },
    data: {
      coins: newAmount
    }
  })

  return { success: `you now have ${newAmount} coins` }

}