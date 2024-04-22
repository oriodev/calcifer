import NextAuth, { DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from './lib/db'
import { getUserById } from './data/user'
import { UserRole } from '@prisma/client'

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole
    } & DefaultSession["user"]
  }
}

export const {
  handlers,
  auth,
  signIn,
  signOut } = NextAuth({

    pages: {
      signIn: '/auth/login',
      error: '/auth/error'
    },

    events: {
      async linkAccount({ user }) {
        await db.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() }
        })
      }
    },

    callbacks: {

      async signIn({ user, account }) {

        // allow oauth without email verification
        if (account?.provider !== 'credentials') return true;

        // @ts-ignore
        const existingUser = await getUserById(user.id)

        // prevent sign in without email verification
        if (!existingUser?.emailVerified) return false

        // TODO: ADD 2FA CHECK

        return true
      },

      async session({ token, session }) {

        // the user id is in token.sub but we want it in session.user so we add it like this.
        // just take them both out and add one as an object field to the other.
        if (token.sub && session.user) {
          session.user.id = token.sub
        }

        if (token.role && session.user) {
          session.user.role = token.role as UserRole

        }

        return session
      },
      async jwt({ token }) {

        if (!token.sub) return token;

        const existingUser = await getUserById(token.sub)

        if (!existingUser) return token;

        token.role = existingUser.role

        return token
      }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
  })