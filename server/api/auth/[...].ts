import {
  NuxtAuthHandler
} from '#auth'
import {
  PrismaAdapter
} from '@auth/prisma-adapter'
import {
  PrismaClient
} from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Twitter from "next-auth/providers/twitter"
import LinkedIn from "next-auth/providers/linkedin"
import bcrypt from 'bcryptjs'
import type {
  Account,
  DefaultSession,
  Session,
  User
} from "next-auth"
import type {
  JWT
} from 'next-auth/jwt'
import {
  rateLimit
} from 'express-rate-limit'

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many login attempts, please try again later'
});

declare module "next-auth" {
  interface User {
    id: string
    email: string
    firstname ? : string
    lastname ? : string
    website_id ? : string
  }

  interface Session {
    user: {
      id: string
      firstname ? : string
      lastname ? : string
      website_id ? : string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    firstname ? : string | null
    lastname ? : string | null
    website_id ? : string | null
  }
}

const prisma = new PrismaClient()

// Proper cleanup for Prisma client
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

// Password validation function
const isStrongPassword = (password: string): boolean => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar;
}

export default NuxtAuthHandler({
  secret: (() => {
    const secret = process.env.NUXT_AUTH_SECRET
    if (!secret || secret.length < 32) {
      throw new Error('NUXT_AUTH_SECRET must be at least 32 characters long')
    }
    return secret
  })(),

  adapter: PrismaAdapter(prisma) as any,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60,
  },

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR
    CredentialsProvider.default({
      async authorize(credentials: {
        email: string;
        password: string;
        firstname ? : string;
        lastname ? : string;
        website_id: number;
        is_seller: boolean;
      }) {
        try {
          const {
            email,
            password,
            firstname,
            lastname,
            website_id,
            is_seller
          } = credentials

          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(email)) {
            throw createError({
              statusCode: 400,
              statusMessage: 'Invalid email format'
            })
          }

          // Password strength validation
          if (!isStrongPassword(password)) {
            throw createError({
              statusCode: 400,
              statusMessage: 'Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters'
            })
          }

          // Website ID validation
          if (typeof website_id !== 'number' || website_id <= 0) {
            throw createError({
              statusCode: 400,
              statusMessage: 'Invalid website ID'
            })
          }

          if (!email || !password || !website_id) {
            throw createError({
              statusCode: 400,
              statusMessage: 'Missing required fields'
            })
          }

          const user = await prisma.mgtn_customer_entity.findUnique({
            where: {
              MGTN_CUSTOMER_ENTITY_EMAIL_WEBSITE_ID: {
                email,
                website_id,
              },
            },
          });

          if (!user) {
            // Create new user with enhanced password hashing
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await prisma.mgtn_customer_entity.create({
              data: {
                email,
                password_hash: hashedPassword,
                firstname,
                lastname,
                website_id,
                is_seller,
                created_at: new Date(),
                updated_at: new Date()
              }
            })

            return {
              id: newUser.entity_id,
              email: newUser.email,
              firstname: newUser.firstname,
              lastname: newUser.lastname,
              website_id: newUser.website_id
            }
          }

          if (!user.password_hash) {
            throw createError({
              statusCode: 401,
              statusMessage: 'Invalid credentials'
            })
          }

          const isPasswordValid = await bcrypt.compare(password, user.password_hash)

          if (!isPasswordValid) {
            throw createError({
              statusCode: 401,
              statusMessage: 'Invalid credentials'
            })
          }

          return {
            id: user.entity_id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            website_id: user.website_id
          }
        } catch (error: any) {
          console.error('Auth error:', error)
          if ('statusCode' in error) {
            throw error
          }
          throw createError({
            statusCode: 500,
            statusMessage: 'Internal server error during authentication'
          })
        }
      }
    }),

    Google,
    LinkedIn,
    Facebook,
    Twitter
  ],

  pages: {
    signIn: '/auth/login',
    signOut: '/logout',
    error: '/auth/login'
  },

  callbacks: {
    async jwt({
      token,
      user,
      account
    }: {
      token: JWT;user: User | null;account: Account | null
    }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        if (user.firstname) token.firstname = user.firstname
        if (user.lastname) token.lastname = user.lastname
        if (user.website_id) token.website_id = user.website_id
      }
      return token
    },

    async session({
      session,
      token
    }: {
      session: Session;token: JWT
    }) {
      if (session.user) {
        session.user.id = token.id
        session.user.email = token.email
        if (token.firstname) session.user.firstname = token.firstname
        if (token.lastname) session.user.lastname = token.lastname
        if (token.website_id) session.user.website_id = token.website_id
      }
      return session
    },
  },
})