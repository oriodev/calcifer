import { useSession } from 'next-auth/react'

export const useCurrentUser = () => {
  const session = useSession()
  console.log('session status: ', session.status)
  console.log('session: ', session.data?.user)
  return session.data?.user;
}