export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;

  }
}