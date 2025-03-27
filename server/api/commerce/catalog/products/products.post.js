import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event);
  
      const newProduct = await prisma.mgtn_catalog_product_entity.create({
        data: {
          sku: body.sku,
          name: body.name,
          description: body.description,
          price: body.price,
        },
      });
  
      return {
        success: true,
        data: newProduct,
      };
    } catch (error) {
      console.error('Error in subscribe API:', error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
      });
    }
  });