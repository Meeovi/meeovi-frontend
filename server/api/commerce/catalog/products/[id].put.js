import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.entity_id);
  const body = await readBody(event);

  const updatedProduct = await prisma.mgtn_catalog_product_entity.update({
    where: { id },
    data: {
      sku: body.sku,
      name: body.name,
      description: body.description,
      price: body.price,
    },
  });

  return updatedProduct;
});