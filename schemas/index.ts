import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'gotta add an email'
  }),
  password: z.string().min(1, {
    message: 'why no password?'
  })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'gotta add an email'
  }),
  password: z.string().min(6, {
    message: 'min is 6 charas go go go'
  }),
  name: z.string().min(1, {
    message: 'u need a name dumbass'
  })
})