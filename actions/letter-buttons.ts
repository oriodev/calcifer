'use server'

import { db } from '@/lib/db';


export const deleteLetter = async (letter: any) => {

  try {

    await db.letters.delete({
      where: {
        id: letter.id
      }
    })

    return { success: 'letter deleted' }

  } catch {
    console.log('nope')
  }

}

export const markLetterAsRead = async (letter: any) => {
  try {

    await db.letters.update({
      where: {
        id: letter.id
      },
      data: {
        read: !letter.read
      }
    })

    return { success: 'read status changed' }

  } catch {
    console.log('nope')
  }
} 