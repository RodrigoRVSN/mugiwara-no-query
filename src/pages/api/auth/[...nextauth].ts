import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const prisma = new PrismaClient({
  log: ['query']
})

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: 'supersecretkey',
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  theme: {
    colorScheme: 'dark',
    buttonText: 'Fazer login'
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user = { ...user }
      }
      return session
    }
  },
  debug: true
})
