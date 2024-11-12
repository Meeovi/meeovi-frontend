import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const addresses = await prisma.mgtn_customer_address_entity.findMany({
      select: {
        entity_id: true,
        is_active: true,
        firstname: true,
        street: true,
      }
    })
    return addresses
  } catch (error) {
    console.error('Error fetching addresses:', error)
    return { error: 'An error occurred while fetching addresses' }
  } finally {
    await prisma.$disconnect()
  }
})
