import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id, 10)
  if (isNaN(id)) {
    return { error: 'Invalid ID provided' }
  }

  try {
    const address = await prisma.mgtn_customer_address_entity.findUnique({
      where: { entity_id: id },
    })
    if (!address) {
      return { error: 'Address not found' }
    }
    return address
  } catch (error) {
    console.error('Error fetching address:', error)
    return { error: 'An error occurred while fetching the address' }
  } finally {
    await prisma.$disconnect()
  }
})
