import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const brands = await prisma.mgtn_sparsh_brand.findMany({
      select: {
        brand_id: true,
        title: true,
        image: true
      },
      orderBy: {
        title: 'asc'
      }
    })
    return brands
  } catch (error) {
    console.error('Error fetching brands:', error)
    return { error: 'Failed to fetch brands' }
  } finally {
    await prisma.$disconnect()
  }
})
