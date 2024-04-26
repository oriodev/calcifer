import { UserRole } from '@prisma/client'
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

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string()),
  newPassword: z.optional(z.string())
})
// .refine((data) => {
//   if (data.password && !data.newPassword) {

//     return false;
//   }

//   return true
// }, {
//   message: 'new password is required',
//   path: ['newPassword']
// })
// .refine((data) => {
//   if (data.newPassword && !data.password) {
//     return false;
//   }

//   return true;
// }, {
//   message: 'old password is required',
//   path: ['password']
// })