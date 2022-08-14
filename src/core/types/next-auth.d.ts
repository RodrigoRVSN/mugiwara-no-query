import type { DefaultUser } from 'next-auth'

export interface IUserInfo extends DefaultUser {
  id: string
}

declare module 'next-auth' {
  interface Session {
    user?: IUserInfo
  }
}
