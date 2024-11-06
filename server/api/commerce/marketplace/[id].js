import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id, 10)
  if (isNaN(id)) {
    return { error: 'Invalid ID provided' }
  }

  try {
    const store = await prisma.mgtn_purpletree_marketplace_stores.findUnique({
      where: { entity_idpts: id },
    })
    if (!store) {
      return { error: 'Store not found' }
    }
    return store
  } catch (error) {
    console.error('Error fetching store:', error)
    return { error: 'An error occurred while fetching the store' }
  } finally {
    await prisma.$disconnect()
  }
})
