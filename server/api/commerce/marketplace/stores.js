import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const stores = await prisma.mgtn_purpletree_marketplace_stores.findMany({
      select: {
        entity_idpts: true,
        store_name: true,
        store_logo: true,
        store_description: true,
      }
    })
    return stores
  } catch (error) {
    console.error('Error fetching stores:', error)
    return { error: 'An error occurred while fetching stores' }
  } finally {
    await prisma.$disconnect()
  }
})
