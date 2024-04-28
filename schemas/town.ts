import * as z from 'zod'

export const SendLetterSchema = z.object({
  user: z.string().min(1, {
    message: 'please reselect a user or refresh the page'
  }),
  message: z.string().min(1, {
    message: 'you cannnot send an empty letter'
  })
})