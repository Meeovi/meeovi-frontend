import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async () => {
  const products = await prisma.mgtn_catalog_product_entity.findMany();
  return products;
});