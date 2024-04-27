import NextAuth, { DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from './lib/db'
import { getUserById } from './data/user'
import { UserRole } from '@prisma/client'
import { getTwoFactorConfirmationByUserId } from './data/two-factor-confirmation'
import { getAccountByUserId } from './data/accounts'

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOAuth: boolean;
      tavernNumber: number;
      character: number;
      background: string;
      strength: string;
      weakness: string;
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

        // ADD 2FA CHECK
        if (existingUser.isTwoFactorEnabled) {
          const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

          if (!twoFactorConfirmation) {
            return false;
          }

          // delete 2fa for next sign in
          await db.twoFactorConfirmation.delete({
            where: { id: twoFactorConfirmation.id }
          })
        }

        return true;
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

        if (session.user) {
          session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
          session.user.tavernNumber = token.tavernNumber as number;
          session.user.character = token.character as number;
          session.user.background = token.background as string;
          session.user.strength = token.strength as string;
          session.user.weakness = token.weakness as string;
        }

        if (session.user && token.email) {
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.isOAuth = token.isOAuth as boolean;
        }

        return session
      },
      async jwt({ token }) {

        if (!token.sub) return token;

        const existingUser = await getUserById(token.sub)

        if (!existingUser) return token;


        const existingAccount = await getAccountByUserId(existingUser.id)


        token.isOAuth = !!existingAccount
        token.name = existingUser.name
        token.email = existingUser.email
        token.role = existingUser.role
        token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled
        token.tavernNumber = existingUser.tavernNumber
        token.character = existingUser.character
        token.background = existingUser.background
        token.strength = existingUser.strength
        token.weakness = existingUser.weakness

        return token
      }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
  })