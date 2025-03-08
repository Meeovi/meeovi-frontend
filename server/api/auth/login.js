import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const jwtSecret = config.public.jwtSecret;

  console.log('JWT Secret:', jwtSecret); // Add this to verify the secret is loaded

  if (!jwtSecret) {
    throw new Error('JWT Secret is not defined');
  }

  const body = await readBody(event);
  const { email, password, website_id } = body;

  // Validate input
  if (!email || !password || !website_id) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Email, password, and website_id are required',
    }));
  }

  try {
    // Find the user using the unique constraint
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

    // Generate a JWT token for the session
    const token = jwt.sign(
      {
        userId: user.entity_id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        is_seller: user.is_seller,
      },
      jwtSecret, // Use the secret key here
      { expiresIn: '12h' }
    );

    return {
      statusCode: 200,
      body: {
        message: 'Login successful',
        token,
        user: {
          id: user.entity_id,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          is_seller: user.is_seller,
        },
      },
    };
  } catch (error) {
    console.error('Error during login:', error);
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    }));
  }
});