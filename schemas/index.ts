import * as z from 'zod'

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'gotta add an email'
  })
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'u need 6 characters'
  })
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'gotta add an email'
  }),
  password: z.string().min(1, {
    message: 'why no password?'
  }),
  code: z.optional(z.string())
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