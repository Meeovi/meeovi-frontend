import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async () => {
  const products = await prisma.mgtn_catalog_product_entity.findMany({
    include: {
      mgtn_catalog_product_index_tier_price: {
        where: {
          min_price: {
            lte: 20
          }
        }
      },
      mgtn_catalog_category_product: {
        where: {
          mgtn_catalog_category_entity: {
            where: {
              mgtn_catalog_category_entity_text: {
                value: 37
              }
            }
          }
        }
      },
    },
  });

  return products;
});
