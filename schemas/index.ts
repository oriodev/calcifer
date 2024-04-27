import { UserRole } from '@prisma/client'
import * as z from 'zod'

import { characterStrengths, characterWeaknesses } from '@/gameinfo/charainfo';

const readonlyCharacterStrengths: readonly [string, ...string[]] = [characterStrengths[0], ...characterStrengths.slice(1)];
const readonlyCharacterWeaknesses: readonly [string, ...string[]] = [characterWeaknesses[0], ...characterWeaknesses.slice(1)];



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

export const OnboardingSchema = z.object({
  // this should be an enum
  character: z.enum(['1', '2', '3', '4', '5', '6', '7', '8']),
  // they don't have to add a background
  background: z.optional(z.string().max(10000)),
  // this should also be an enum
  strength: z.enum(readonlyCharacterStrengths),
  // another enum
  weakness: z.enum(readonlyCharacterWeaknesses)
})