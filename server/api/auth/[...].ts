import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
//import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { compare } from "bcrypt"
import Google from "@auth/express/providers/google"
import Facebook from "@auth/express/providers/facebook"
import Twitter from "@auth/express/providers/twitter"
import LinkedIn from "@auth/express/providers/linkedin"

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
    error: '/auth/login',
  },
  //adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({

      async authorize(credentials: any) {

        const user = await prisma.mgtn_customer_entity.findUnique({
          where: {
            email: credentials?.username
          },
        })

        if (!user) {
          throw createError({
            statusCode: 403,
            statusMessage: "Credentials not working",
          })
        }

        const isPasswordValid = compare(credentials?.password, user.password || '')

        if (!isPasswordValid) {
          throw createError({
            statusCode: 403,
            statusMessage: "Credentials not working",
          })

        }

        return user
      }
    }),
    Google,
    LinkedIn,
    Facebook,
    Twitter
  ],
  callbacks: {
    // Specify here the payload of your token and session
    async jwt({
      token,
      user
    }: {
      token: any,
      user: any
    }) {
      if (user) {
        token.id = user.id
        token.nombre = user.name
        token.email = user.email
      }
      return token
    },
    async session({
      session,
      token
    }: {
      session: any,
      token: any
    }) {
      session.user.id = token.id
      session.user.nombre = token.name
      session.user.email = token.email
      return session
    },
  },
})