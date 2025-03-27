import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event);
  
      const newSubscriber = await prisma.mgtn_newsletter_subscriber.create({
        data: {
          subscriber_email: body.subscriber_email,
          name: body.name,
        },
      });
  
      return {
        success: true,
        data: newSubscriber,
      };
    } catch (error) {
      console.error('Error in subscribe API:', error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
      });
    }
  });