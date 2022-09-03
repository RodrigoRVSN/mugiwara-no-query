import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { prisma } from 'db'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: 'supersecretkey',
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: 'dark',
    buttonText: 'Fazer login',
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user = { ...user }
      }
      return session
    },
  },
  debug: true,
})
