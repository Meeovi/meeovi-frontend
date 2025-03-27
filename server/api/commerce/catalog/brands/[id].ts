// server/api/commerce/catalog/brands/[id].ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    return { error: 'Brand ID is required' }
  }

  try {
    const brand = await prisma.mgtn_sparsh_brand.findUnique({
      where: {
        brand_id: parseInt(id)
      },
      include: {
        mgtn_sparsh_brand_products: {
          include: {
            mgtn_catalog_product_entity: true
          }
        }
      }
    })

    if (!brand) {
      return { error: 'Brand not found' }
    }

    return brand
  } catch (error) {
    console.error('Error fetching brand:', error)
    return { error: 'Failed to fetch brand' }
  } finally {
    await prisma.$disconnect()
  }
})
