import { Prisma, PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// hot reload would gen a new prisma client every single time
// so this makes it check if prisma is already initialised in globalThis
// if it doesn't then it makes a new one
// globalThis is not affected by hot reload
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// this would work in production, but we need all the above bc of hot relad in dev
// export const db = new PrismaClient()