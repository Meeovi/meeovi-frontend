import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client"
import bcryptjs from 'bcryptjs';
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Twitter from "next-auth/providers/twitter"
import LinkedIn from "next-auth/providers/linkedin"

const prisma = new PrismaClient()

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({

      async authorize(credentials: any) {

        const body = await readBody(event);
        const { email, password, website_id } = body;

        const user = await prisma.mgtn_customer_entity.findUnique({
          where: {
            MGTN_CUSTOMER_ENTITY_EMAIL_WEBSITE_ID: {
              email,
              website_id,
            },
          },
        });
    
        // Check if the user exists
        if (!user) {
          return sendError(event, createError({
            statusCode: 404,
            statusMessage: 'User not found',
          }));
        }
    
        // Check if the password hash is null
        if (!user.password_hash) {
          return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'User does not have a password set.',
          }));
        }
    
        // Compare the password with the stored hashed password
        const isPasswordValid = await bcryptjs.compare(password, user.password_hash);
    
        if (!isPasswordValid) {
          return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Invalid password',
          }));
        }

    return {
      statusCode: 200,
      body: {
        message: 'Login successful',
        user: {
          id: user.entity_id,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          is_seller: user.is_seller,
        },
      },
    };
      }
    }),
    Google,
    LinkedIn,
    Facebook,
    Twitter
  ],
  session: {
    strategy: 'jwt',
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
},
})